import { NextResponse } from "next/server"
import { resend, CONTACT_EMAIL } from "@/lib/resend"

interface ContactPayload {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}

export async function POST(request: Request) {
  let body: ContactPayload

  try {
    body = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json({ message: "Corps de requête invalide" }, { status: 400 })
  }

  const { name, email, message } = body
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ message: "Champs requis manquants" }, { status: 400 })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "Email invalide" }, { status: 400 })
  }

  // Demo mode when no Resend key
  if (!resend) {
    return NextResponse.json({
      message:
        "✅ Message envoyé en mode démo (aucune clé Resend configurée). Votre message a bien été reçu !",
    })
  }

  try {
    await resend.emails.send({
      from: "La Marlio'Zen <noreply@marliozen.fr>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: body.subject
        ? `[Contact] ${body.subject}`
        : `[Contact] Message de ${name}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <table>
          <tr><td><strong>Nom :</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email :</strong></td><td>${email}</td></tr>
          ${body.phone ? `<tr><td><strong>Téléphone :</strong></td><td>${body.phone}</td></tr>` : ""}
          ${body.subject ? `<tr><td><strong>Sujet :</strong></td><td>${body.subject}</td></tr>` : ""}
        </table>
        <h3>Message :</h3>
        <p style="white-space:pre-wrap">${message.replace(/</g, "&lt;")}</p>
      `,
    })

    return NextResponse.json({
      message: "Merci ! Nous vous répondrons dans les meilleurs délais.",
    })
  } catch (err) {
    console.error("[contact] Resend error:", err)
    return NextResponse.json({ message: "Erreur d'envoi, réessayez plus tard." }, { status: 500 })
  }
}
