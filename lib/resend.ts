import { Resend } from "resend"

export const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL ?? "contact@marliozen.fr"
