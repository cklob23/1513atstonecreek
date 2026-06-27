import { NextResponse } from "next/server"
import path from "path"
import nodemailer from "nodemailer"

type IncomingAttachment = {
    filename: string
    // Either a local path relative to /public (e.g. "/brochures/pricing-pamphlet.pdf")
    // or an absolute URL (e.g. "https://.../file.pdf")
    path: string
}

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_SECRET, // Gmail App Password
    },
})

function resolveAttachments(attachments?: IncomingAttachment[]) {
    if (!Array.isArray(attachments)) return []

    return attachments.map(({ filename, path: attachmentPath }) => {
        const isUrl = /^https?:\/\//i.test(attachmentPath)

        if (isUrl) {
            return { filename, path: attachmentPath }
        }

        // Resolve a public-relative path to an absolute file path on disk
        const normalized = attachmentPath.replace(/^\/+/, "")
        return {
            filename,
            path: path.join(process.cwd(), "public", normalized),
        }
    })
}

export async function POST(request: Request) {
    try {
        const { html, subject, email, attachments } = await request.json()

        if (!html || !subject || !email) {
            return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
        }

        if (!process.env.EMAIL_USER || !process.env.EMAIL_SECRET) {
            console.error("[v0] Missing EMAIL_USER or EMAIL_SECRET environment variables.")
            return NextResponse.json({ error: "Email service is not configured." }, { status: 500 })
        }

        await transporter.sendMail({
            from: `"1513 at Stone Creek Inquiry" <${process.env.EMAIL_USER}>`,
            to: email,
            subject,
            html,
            attachments: resolveAttachments(attachments),
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("[v0] Failed to send email:", error)
        return NextResponse.json({ error: "Failed to send email." }, { status: 500 })
    }
}
