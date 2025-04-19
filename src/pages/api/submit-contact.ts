import type { APIRoute } from 'astro';
import { OAuth2Client } from 'google-auth-library';
import { createClient } from '@supabase/supabase-js';
// Import default and destructure for CommonJS compatibility
import pkg from 'sib-api-v3-sdk';
const { ApiClient, TransactionalEmailsApi, SendSmtpEmail } = pkg;

// Environment variables
const GOOGLE_CLIENT_ID = import.meta.env.PUBLIC_GOOGLE_CLIENT_ID;
const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;
const BREVO_API_KEY = import.meta.env.BREVO_API_KEY; // Add Brevo API Key

// Basic validation
if (!GOOGLE_CLIENT_ID || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !BREVO_API_KEY) {
    console.error("Missing required environment variables for Google Sign-In, Supabase, or Brevo integration.");
    // Optionally throw an error during build or handle differently
}

const oAuth2Client = new OAuth2Client(GOOGLE_CLIENT_ID);

// Initialize Supabase client ONCE outside the handler
const supabaseAdmin = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);

// Initialize Brevo client ONCE outside the handler using named imports
let defaultClient = ApiClient.instance; // Use ApiClient directly
let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = BREVO_API_KEY!;
const brevoApiInstance = new TransactionalEmailsApi(); // Use TransactionalEmailsApi directly

// Define sender and recipients (ensure sender email is verified in Brevo)
const senderEmail = "noreply@onepointtax.in"; // CHANGE THIS if needed to your verified sender
const senderName = "One Point Tax Notifications";
const recipientEmails = [
    // { email: "contactonepointtax@gmail.com" }, // Removed as requested
    { email: "vijee.p@onepointtax.in" }
];


export const POST: APIRoute = async ({ request }) => {
    // Check required variables again inside handler
    if (!GOOGLE_CLIENT_ID || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !BREVO_API_KEY) {
        console.error("Runtime Check: Missing environment variables for Supabase/Google/Brevo.");
        return new Response(JSON.stringify({ message: "Server configuration error." }), { status: 500 });
    }

    let requestData;
    try {
        // Clone the request to read the body multiple times (once for logging, once for JSON parsing)
        const requestClone = request.clone();
        const rawBody = await requestClone.text();
        console.log("Received raw request body:", rawBody); // Log the raw body

        // Now try parsing the original request body as JSON
        requestData = await request.json();
        console.log("Successfully parsed JSON body:", requestData);
    } catch (error) {
        console.error("Error parsing request body as JSON:", error); // Log the parsing error
        return new Response(JSON.stringify({ message: "Invalid request body. Expecting JSON." }), { status: 400 });
    }

    const { googleToken, formData } = requestData;

    if (!googleToken || !formData) {
        return new Response(JSON.stringify({ message: "Missing googleToken or formData in request body." }), { status: 400 });
    }

    // 1. Verify Google ID Token
    let payload;
    try {
        const ticket = await oAuth2Client.verifyIdToken({
            idToken: googleToken,
            audience: GOOGLE_CLIENT_ID,
        });
        payload = ticket.getPayload();
        if (!payload) {
            throw new Error("Invalid token payload");
        }
        console.log("Google Token Verified. Payload:", payload);
    } catch (error) {
        console.error("Error verifying Google ID token:", error);
        return new Response(JSON.stringify({ message: "Invalid Google Sign-In token." }), { status: 401 });
    }

    // 2. Prepare data for Supabase
    // Removed leftover Google Sheets authentication logic here
    const verifiedEmail = payload.email;
    if (!verifiedEmail) {
        console.error("Verified email not found in token payload.");
        return new Response(JSON.stringify({ message: "Verified email missing from token." }), { status: 400 });
    }

    // Extract fullName from formData, default to null if missing
    const fullName = formData.fullName || null;
    const phoneNumber = formData.phoneNumber || null;
    const serviceInterest = formData.serviceInterest || null;

    // Explicitly define the object for Supabase
    const supabaseData = {
        email: verifiedEmail,
        name: fullName,
        phone_number: phoneNumber,
        service_interest: serviceInterest,
        updated_at: new Date().toISOString()
    };

    // 3. Check if user exists, then Insert or Notify
    try {
        console.log("Checking if email exists:", verifiedEmail);
        const { data: existingUser, error: selectError } = await supabaseAdmin
            .from('contacts') // Use correct table name 'contacts'
            .select('email') // Select only necessary field
            .eq('email', verifiedEmail)
            .maybeSingle(); // Returns one row or null, doesn't error if not found

        if (selectError) {
            console.error("Supabase select error:", selectError);
            throw selectError; // Let the main catch block handle it
        }

        if (existingUser) {
            // User exists - Just notify (as requested)
            console.log("User already exists:", verifiedEmail);
            // Return a specific status for the frontend to handle
            return new Response(JSON.stringify({ status: 'exists', message: 'You are already registered.' }), { status: 200 });

        } else {
            // User does not exist - Insert new record
            console.log("New user, inserting data for:", verifiedEmail);
            const { error: insertError } = await supabaseAdmin
                .from('contacts') // Use correct table name 'contacts'
                .insert(supabaseData);

            if (insertError) {
                console.error("Supabase insert error:", insertError);
                throw insertError;
            }
            console.log("Successfully inserted data for email:", verifiedEmail);

            // ---- START: Send Brevo Email Notification ----
            try {
                const currentDate = new Date().toLocaleDateString('en-IN'); // Format date as DD/MM/YYYY for India
                const subject = `New User Registration - One Point Tax - ${currentDate}`;
                const emailContent = `A new user has registered:\nName: ${supabaseData.name || 'N/A'}\nEmail: ${supabaseData.email}\nPhone: ${supabaseData.phone_number || 'N/A'}\nService Interest: ${supabaseData.service_interest || 'N/A'}`;

                let sendSmtpEmail = new SendSmtpEmail(); // Use SendSmtpEmail directly
                sendSmtpEmail.sender = { email: senderEmail, name: senderName };
                sendSmtpEmail.to = recipientEmails;
                sendSmtpEmail.subject = subject;
                sendSmtpEmail.textContent = emailContent; // Use textContent for plain text

                await brevoApiInstance.sendTransacEmail(sendSmtpEmail);
                console.log('Brevo notification email sent successfully to:', recipientEmails.map(r => r.email).join(', '));

            } catch (emailError) {
                console.error("Error sending Brevo notification email:", emailError);
                // Log the error but don't fail the request, as user data was saved.
            }
            // ---- END: Send Brevo Email Notification ----

            return new Response(JSON.stringify({ status: 'success', message: 'Data submitted successfully.' }), { status: 200 });
        }

    } catch (error) {
        console.error("Error saving data to Supabase:", error);
        return new Response(JSON.stringify({ message: "Failed to save data." }), { status: 500 });
    }
};
