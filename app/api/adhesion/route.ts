import { NextResponse } from "next/server"
import { resend, CONTACT_EMAIL } from "@/lib/resend"

interface AdhesionPayload {
  firstName: string
  lastName: string
  email: string
  phone: string
  address?: string
  engagement: "adherent" | "benevole" | "les-deux"
  message?: string
}

const engagementLabels = {
  adherent: "Adhérent·e",
  benevole: "Bénévole",
  "les-deux": "Adhérent·e et Bénévole",
}

export async function POST(request: Request) {
  let body: AdhesionPayload

  try {
    body = (await request.json()) as AdhesionPayload
  } catch {
    return NextResponse.json({ message: "Corps de requête invalide" }, { status: 400 })
  }

  const { firstName, lastName, email, phone, engagement } = body
  if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !phone?.trim() || !engagement) {
    return NextResponse.json({ message: "Champs requis manquants" }, { status: 400 })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "Email invalide" }, { status: 400 })
  }

  const fullName = `${firstName.trim()} ${lastName.trim()}`

  // Demo mode when no Resend key
  if (!resend) {
    return NextResponse.json({
      message: `✅ Demande reçue en mode démo ! Bienvenue, ${firstName} ! Nous vous contacterons prochainement pour finaliser votre adhésion.`,
    })
  }

  try {
    // Email to association
    await resend.emails.send({
      from: "La Marlio'Zen <noreply@marliozen.fr>",
      to: CONTACT_EMAIL,
      subject: `[Adhésion] Nouvelle demande — ${fullName} (${engagementLabels[engagement]})`,
      html: `
        <h2>Nouvelle demande d'adhésion</h2>
        <table>
          <tr><td><strong>Nom :</strong></td><td>${fullName}</td></tr>
          <tr><td><strong>Email :</strong></td><td>${email}</td></tr>
          <tr><td><strong>Téléphone :</strong></td><td>${phone}</td></tr>
          ${body.address ? `<tr><td><strong>Adresse :</strong></td><td>${body.address}</td></tr>` : ""}
          <tr><td><strong>Engagement :</strong></td><td>${engagementLabels[engagement]}</td></tr>
        </table>
        ${body.message ? `<h3>Message :</h3><p style="white-space:pre-wrap">${body.message.replace(/</g, "&lt;")}</p>` : ""}
      `,
    })

    // Confirmation email to applicant
    await resend.emails.send({
      from: "La Marlio'Zen <noreply@marliozen.fr>",
      to: email,
      subject: "Bienvenue à La Marlio'Zen — Votre demande d'adhésion",
      html: `
        <p>Bonjour ${firstName},</p>
        <p>Nous avons bien reçu votre demande d'adhésion à La Marlio'Zen en tant que <strong>${engagementLabels[engagement]}</strong>.</p>
        <p>Nous vous contacterons dans les prochains jours pour finaliser votre inscription.</p>
        <p>En attendant, n'hésitez pas à venir nous rendre visite :<br>
        <strong>74 Boulevard de la Roche du Roi, 73100 Aix-les-Bains</strong><br>
        Tél. 06.46.31.60.09</p>
        <p>À très bientôt au quartier !<br>
        L'équipe de La Marlio'Zen</p>
      `,
    })

    return NextResponse.json({
      message: `Bienvenue, ${firstName} ! Votre demande a bien été envoyée. Nous vous contacterons rapidement.`,
    })
  } catch (err) {
    console.error("[adhesion] Resend error:", err)
    return NextResponse.json({ message: "Erreur d'envoi, réessayez plus tard." }, { status: 500 })
  }
}
