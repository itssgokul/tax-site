import type { APIRoute } from 'astro';
// import { OAuth2Client } from 'google-auth-library'; // Removed Google Auth
import { createClient } from '@supabase/supabase-js';
// Import default and destructure for CommonJS compatibility
import pkg from 'sib-api-v3-sdk';
const { ApiClient, TransactionalEmailsApi, SendSmtpEmail } = pkg;

// Environment variables
// const GOOGLE_CLIENT_ID = import.meta.env.PUBLIC_GOOGLE_CLIENT_ID; // Removed Google Auth
const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;
const BREVO_API_KEY = import.meta.env.BREVO_API_KEY; // Add Brevo API Key

// Basic validation
if (/*!GOOGLE_CLIENT_ID ||*/ !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !BREVO_API_KEY) { // Removed Google ID check
    console.error("Missing required environment variables for Supabase or Brevo integration."); // Updated error message
    // Optionally throw an error during build or handle differently
}

// const oAuth2Client = new OAuth2Client(GOOGLE_CLIENT_ID); // Removed Google Auth

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
    if (/*!GOOGLE_CLIENT_ID ||*/ !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !BREVO_API_KEY) { // Removed Google ID check
        console.error("Runtime Check: Missing environment variables for Supabase/Brevo."); // Updated error message
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
        // Try parsing as form data if JSON fails
        try {
            const requestClone = request.clone(); // Clone again for form data
            const formData = await requestClone.formData();
            requestData = Object.fromEntries(formData.entries());
            console.log("Successfully parsed form data:", requestData);
        } catch (formError) {
            console.error("Error parsing request body as form data:", formError);
            return new Response(JSON.stringify({ message: "Invalid request body. Expecting JSON or form data." }), { status: 400 });
        }
    }

    // Extract fields directly from requestData
    const { name, email, phone_number, service_interest } = requestData;

    // Basic validation for required fields
    if (!name || !email) {
        return new Response(JSON.stringify({ message: "Missing required fields: name and email." }), { status: 400 });
    }

    // 1. Prepare data for Supabase (Google verification removed)
    const submittedEmail = email; // Use the email submitted in the form

    // Explicitly define the object for Supabase
    const supabaseData = {
        email: submittedEmail,
        name: name, // Use submitted name
        phone_number: phone_number || null, // Use submitted phone or null
        service_interest: service_interest || null, // Use submitted interest or null
        updated_at: new Date().toISOString()
    };

    // 2. Check if user exists by email OR phone, then Insert or Notify
    try {
        console.log(`Checking if email (${submittedEmail}) or phone (${supabaseData.phone_number}) exists.`);
        // Build the 'or' condition for the query
        let orConditions = [`email.eq.${submittedEmail}`];
        if (supabaseData.phone_number) {
            orConditions.push(`phone_number.eq.${supabaseData.phone_number}`);
        }
        const { data: existingUser, error: selectError } = await supabaseAdmin
            .from('contacts') // Use correct table name 'contacts'
            .select('email, phone_number') // Select fields to check
            .or(orConditions.join(',')) // Check if email OR phone number matches
            .maybeSingle(); // Returns one row or null if no match

        if (selectError) {
            console.error("Supabase select error:", selectError);
            throw selectError; // Let the main catch block handle it
        }

        if (existingUser) {
            // User exists (matched either email or phone) - Just notify
            let existingField = existingUser.email === submittedEmail ? 'email' : 'phone number';
            console.log(`User already exists with this ${existingField}:`, existingUser);
            return new Response(JSON.stringify({ status: 'exists', message: `This ${existingField} is already registered.` }), { status: 200 }); // More specific message

        } else {
            // User does not exist - Insert new record
            console.log("New user, inserting data for:", submittedEmail);
            const { error: insertError } = await supabaseAdmin
                .from('contacts') // Use correct table name 'contacts'
                .insert(supabaseData);

            if (insertError) {
                console.error("Supabase insert error:", insertError);
                throw insertError;
            }
            console.log("Successfully inserted data for email:", submittedEmail);

            // ---- START: Send Brevo Email Notification ----
            try {
                const currentDate = new Date().toLocaleDateString('en-IN'); // Format date as DD/MM/YYYY for India
                const subject = `New Contact Form Submission - One Point Tax - ${currentDate}`; // Updated subject
                const emailContent = `New contact form submission:\nName: ${supabaseData.name || 'N/A'}\nEmail: ${supabaseData.email}\nPhone: ${supabaseData.phone_number || 'N/A'}\nService Interest: ${supabaseData.service_interest || 'N/A'}`; // Updated content description

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

            // Return updated success message
            return new Response(JSON.stringify({ status: 'success', message: 'Thanks for reaching out! Our expert will be in touch shortly — we’re excited to help!' }), { status: 200 });
        }

    } catch (error) {
        console.error("Error saving data to Supabase:", error);
        return new Response(JSON.stringify({ message: "We’ve already got your details! Our expert will be in touch soon." }), { status: 500 });
    }
};
