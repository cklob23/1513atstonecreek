import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).send("Method not allowed");
    }

    const { htmlBody, name, email } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: "imap.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "1513atstonecreek.inquiries@gmail.com",
                pass: "plzz hsph kxrg qgyt",
            },
            logger: true,
            debug: true,
        });

        await transporter.sendMail({
            from: '"1513 at Stone Creek Inquiries" <1513atstonecreek.inquiries@gmail.com>',
            to: "info@1513atstonecreek.com",
            bcc: "klobe.caleb23@gmail.com",
            subject: "Inquiry About The Venue",
            replyTo: email,
            html: htmlBody,
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error("Email error:", error);
        return res.status(500).json({ success: false, error: "Email failed to send" });
    }
}
