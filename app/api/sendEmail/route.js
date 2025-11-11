import { Resend } from "resend";

export async function POST(req) {
  try {
    const { htmlBody, name, email } = await req.json();

    // Initialize the Resend client using your API key from Render environment variables
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send the email
    const data = await resend.emails.send({
      from: "1513 at Stone Creek <noreply@1513atstonecreek.com>",
      to: "info@1513atstonecreek.com",
      reply_to: email, // optional, lets you reply directly to sender
      subject: `New Inquiry from ${name}`,
      html: htmlBody,
    });

    console.log("Resend API response:", data);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
