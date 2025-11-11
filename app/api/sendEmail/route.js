import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { htmlBody, name, email } = await req.json();

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_SECRET,
            },
            logger: true,
            debug: true,
        });

        await transporter.sendMail({
            from: `"1513 at Stone Creek Inquiry" <1513atstonecreek.inquiries@gmail.com>`,
            to: "info@1513atstonecreek.com",
            subject: `New Inquiry from ${name}`,
            html: htmlBody,
        });

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
