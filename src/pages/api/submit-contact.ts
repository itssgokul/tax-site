console.log("--- submit-contact.ts execution START ---"); // Add log at the very top

import type { APIRoute } from 'astro';
// import { OAuth2Client } from 'google-auth-library'; // Removed Google Auth
import { createClient } from '@supabase/supabase-js'; // Remove SupabaseClient type import
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

// Initialize Supabase client ONCE outside the handler with error handling
let supabaseAdmin; // Type will be inferred
try {
    console.log("Initializing Supabase client...");
    supabaseAdmin = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);
    console.log("Supabase client initialized.");
} catch (e: any) {
    console.error("FATAL: Error initializing Supabase client:", e.message, e.stack);
    // Throw error to prevent function execution if Supabase fails to init
    throw new Error("Supabase client initialization failed.");
}


// Initialize Brevo client ONCE outside the handler using named imports with error handling
let brevoApiInstance; // Remove explicit type annotation
try {
    console.log("Initializing Brevo client...");
    let defaultClient = ApiClient.instance; // Use ApiClient directly
    let apiKeyAuth = defaultClient.authentications['api-key']; // Rename variable to avoid conflict
    apiKeyAuth.apiKey = BREVO_API_KEY!;
    brevoApiInstance = new TransactionalEmailsApi(); // Use TransactionalEmailsApi directly
    console.log("Brevo client initialized.");
} catch (e: any) {
    console.error("FATAL: Error initializing Brevo client:", e.message, e.stack);
    // Throw error to prevent function execution if Brevo fails to init
    throw new Error("Brevo client initialization failed.");
}

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
    // Log headers before parsing
    console.log("Received request headers:", JSON.stringify(Object.fromEntries(request.headers.entries()))); 
    // Expect only JSON now
    try {
        requestData = await request.json();
        console.log("Successfully parsed JSON body:", requestData);
    } catch (error) {
        console.error(`Error parsing request body as JSON:`, error);
        // Log the raw body for debugging if parsing fails
        try {
            const requestClone = request.clone();
            const rawBody = await requestClone.text();
            console.error("Raw body on parse error:", rawBody);
        } catch (cloneError) {
            console.error("Could not clone request to log raw body.");
        }
        // Ensure a response is always returned
        return new Response(JSON.stringify({ message: "Invalid request body. Could not parse as JSON." }), { status: 400 });
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
            .select('email, phone_number', { count: 'exact', head: false }) // Select fields, get count
            .or(orConditions.join(',')); // Check if email OR phone number matches
            // Remove .maybeSingle()

        // Check for general select error first
        if (selectError) {
            // Handle specific PGRST116 error differently if needed, but for now, log and throw
            console.error("Supabase select error:", selectError);
            throw selectError;
        }

        // Check if any rows were returned (data will be an array)
        if (existingUser && existingUser.length > 0) {
            // User exists (one or more matches found) - Just notify
            console.log(`User already exists with matching email or phone. Found ${existingUser.length} potential matches.`);
            // Always return JSON now
            return new Response(JSON.stringify({ status: 'exists', message: `We’ve already got your details! Our expert will be in touch soon.` }), { status: 200 });

        } else {
            // User does not exist (data is null or empty array) - Insert new record
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

            // Always return JSON now
            return new Response(JSON.stringify({ status: 'success', message: 'Thanks for reaching out! Our expert will be in touch shortly — we’re excited to help!' }), { status: 200 });

        }

    } catch (error) {
        console.error("Error during Supabase operation:", error);
        // Always return JSON error response
        return new Response(JSON.stringify({ message: "An error occurred while processing your request." }), { status: 500 });
    }
};

// Add this GET handler
export const GET: APIRoute = async () => {
    return new Response(JSON.stringify({ 
      message: "This endpoint only accepts POST requests for form submissions. Please use the contact form." 
    }), { 
      status: 405,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };
