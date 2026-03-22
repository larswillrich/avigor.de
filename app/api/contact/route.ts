import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, message } = await req.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Avigor Website" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: "hello@avigor.de",
      subject: `New inquiry from ${name}${company ? ` (${company})` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "—"}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1E1B4B; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h2 style="color: #84CC16; margin: 0; font-size: 20px;">New Contact Inquiry</h2>
          </div>
          <div style="background: #f8fafc; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; width: 100px; vertical-align: top;">Name</td>
                <td style="padding: 8px 0; color: #1e293b; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; vertical-align: top;">Email</td>
                <td style="padding: 8px 0; color: #1e293b;"><a href="mailto:${email}" style="color: #4F46E5;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; vertical-align: top;">Company</td>
                <td style="padding: 8px 0; color: #1e293b;">${company || "—"}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
            <p style="color: #64748b; font-size: 13px; margin: 0 0 8px;">Message</p>
            <p style="color: #1e293b; line-height: 1.6; white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
