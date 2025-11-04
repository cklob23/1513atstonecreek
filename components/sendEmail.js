import nodemailer from "nodemailer";

/**
 * Sends an email with the given HTML body
 *
 * @param {string} htmlBody - The HTML content of the email.
 */

export async function sendEmail(htmlBody) {
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

    const info = {
        from: '"1513 at Stone Creek Inquiries" <1513atstonecreek.inquiries@gmail.com>',
        to: "info@1513atstonecreek.com",
        bcc: "klobe.caleb23@gmail.com",
        subject: "Inquiry About The Venue",
        html: htmlBody,
        headers: { "x-cloudmta-class": "standard" },
    };
    try {
        const mailInfo = await transporter.sendMail(info, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(`Email sent successfully.`);
                return mailInfo;
            }
        });
    } catch (err) {
        console.log("Error sending email:", err);
        throw err;
    }
}