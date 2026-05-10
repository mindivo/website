import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, company, email, service, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Mindivo Contact Form <noreply@mindivotech.com>",
      to: "admin@mindivotech.com",
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` at ${company}` : ""}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0f0f1a;color:#e2e8f0;border-radius:12px;">
          <div style="margin-bottom:24px;">
            <img src="https://mindivo.com/icon.svg" width="40" alt="Mindivo" style="border-radius:8px;" />
            <h1 style="font-size:20px;margin:12px 0 4px;color:#fff;">New Contact Form Submission</h1>
            <p style="margin:0;color:#94a3b8;font-size:14px;">via mindivo.com</p>
          </div>

          <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:24px;">
            <tr>
              <td style="padding:10px 12px;background:#1e1e3a;border-radius:8px 8px 0 0;color:#94a3b8;width:120px;font-weight:600;">Name</td>
              <td style="padding:10px 12px;background:#1e1e3a;border-radius:8px 8px 0 0;color:#fff;">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 12px;background:#16162e;color:#94a3b8;font-weight:600;">Company</td>
              <td style="padding:10px 12px;background:#16162e;color:#fff;">${company || "—"}</td>
            </tr>
            <tr>
              <td style="padding:10px 12px;background:#1e1e3a;color:#94a3b8;font-weight:600;">Email</td>
              <td style="padding:10px 12px;background:#1e1e3a;color:#6366f1;"><a href="mailto:${email}" style="color:#6366f1;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:10px 12px;background:#16162e;color:#94a3b8;font-weight:600;">Service</td>
              <td style="padding:10px 12px;background:#16162e;color:#fff;">${service || "—"}</td>
            </tr>
          </table>

          <div style="background:#1e1e3a;border-radius:8px;padding:16px;margin-bottom:24px;">
            <p style="margin:0 0 8px;font-size:12px;font-weight:600;color:#94a3b8;text-transform:uppercase;letter-spacing:0.05em;">Message</p>
            <p style="margin:0;font-size:14px;line-height:1.6;color:#e2e8f0;white-space:pre-wrap;">${message || "No message provided."}</p>
          </div>

          <a href="mailto:${email}?subject=Re: Your enquiry to Mindivo"
             style="display:inline-block;padding:12px 24px;background:#6366f1;color:#fff;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;">
            Reply to ${name}
          </a>

          <p style="margin-top:24px;font-size:12px;color:#475569;">This message was sent via the contact form at mindivo.com</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
