import { NextResponse } from "next/server";
import { Resend } from "resend";

// Mémoire en RAM pour anti-spam simple (soft rate limit)
const lastSent: Record<string, number> = {};

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY!);
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();

  // Limite : 1 message toutes les 30 secondes par IP
  if (lastSent[ip] && now - lastSent[ip] < 30000) {
    return NextResponse.json(
      { success: false, error: "rate-limit" },
      { status: 429 }
    );
  }

  const data = await request.json();
  const { name, email, type, subject, message } = data;

  // Validation
  if (!name || !email || !type || !subject || !message) {
    return NextResponse.json(
      { success: false, error: "missing-fields" },
      { status: 400 }
    );
  }

  if (message.length > 500) {
    return NextResponse.json(
      { success: false, error: "message-too-long" },
      { status: 400 }
    );
  }

  try {
    const response = await resend.emails.send({
      from: "contact@tondomaine.com",
      to: "alexisavril@sfr.fr",
      subject: `[${type}] ${subject}`,
      replyTo: email,
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Type de demande :</strong> ${type}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <p><strong>Message :</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `
    });

    lastSent[ip] = now;
    return NextResponse.json({ success: true, data: response });
  } catch (err: unknown) {
    console.error("Error sending mail:", err);
    return NextResponse.json(
      { success: false, error: "send-failed" },
      { status: 500 }
    );
  }
}