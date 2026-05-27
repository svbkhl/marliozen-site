"use client"

import { useState } from "react"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface FormState {
  status: "idle" | "loading" | "success" | "error"
  message?: string
}

export default function ContactForm({ subject }: { subject?: string }) {
  const [state, setState] = useState<FormState>({ status: "idle" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: subject ?? "",
    message: "",
  })
  const [errors, setErrors] = useState<Partial<typeof formData>>({})

  function validate() {
    const newErrors: Partial<typeof formData> = {}
    if (!formData.name.trim()) newErrors.name = "Votre nom est requis"
    if (!formData.email.trim()) newErrors.email = "Votre email est requis"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Email invalide"
    if (!formData.message.trim()) newErrors.message = "Votre message est requis"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setState({ status: "loading" })

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = (await res.json()) as { message?: string }
      if (!res.ok) throw new Error(data.message ?? "Erreur serveur")
      setState({ status: "success", message: data.message })
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    } catch (err) {
      setState({
        status: "error",
        message: err instanceof Error ? err.message : "Une erreur est survenue.",
      })
    }
  }

  const fieldClass = (error?: string) =>
    cn(
      "w-full bg-[#F7F0E3] border rounded-xl px-4 py-3 text-sm text-[#2D2416] placeholder:text-[#8B6F5E]",
      "focus:outline-none focus:ring-2 transition-colors",
      error
        ? "border-red-400 focus:ring-red-300"
        : "border-[#DDD0BC] focus:border-[#C4622D] focus:ring-[#C4622D]/20"
    )

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center text-center py-10 gap-4">
        <CheckCircle2 size={48} className="text-[#4A7A56]" aria-hidden="true" />
        <h3 className="font-display font-bold text-xl text-[#2D2416]">Message envoyé !</h3>
        <p className="text-[#5C4033]">
          {state.message ?? "Merci ! Nous vous répondrons dans les meilleurs délais."}
        </p>
        <button
          onClick={() => setState({ status: "idle" })}
          className="text-sm font-bold text-[#C4622D] hover:underline mt-2"
        >
          Envoyer un autre message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Formulaire de contact">
      {state.status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700"
        >
          <AlertCircle size={18} className="shrink-0 mt-0.5" aria-hidden="true" />
          <p>{state.message}</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-bold text-[#2D2416] mb-1.5 uppercase tracking-wide">
            Nom complet <span aria-hidden="true" className="text-[#C4622D]">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            placeholder="Marie Dupont"
            value={formData.name}
            onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))}
            className={fieldClass(errors.name)}
          />
          {errors.name && (
            <p id="contact-name-error" role="alert" className="mt-1 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-bold text-[#2D2416] mb-1.5 uppercase tracking-wide">
            Email <span aria-hidden="true" className="text-[#C4622D]">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            placeholder="marie@exemple.fr"
            value={formData.email}
            onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))}
            className={fieldClass(errors.email)}
          />
          {errors.email && (
            <p id="contact-email-error" role="alert" className="mt-1 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-phone" className="block text-xs font-bold text-[#2D2416] mb-1.5 uppercase tracking-wide">
            Téléphone
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            placeholder="06 12 34 56 78"
            value={formData.phone}
            onChange={(e) => setFormData((f) => ({ ...f, phone: e.target.value }))}
            className={fieldClass()}
          />
        </div>

        <div>
          <label htmlFor="contact-subject" className="block text-xs font-bold text-[#2D2416] mb-1.5 uppercase tracking-wide">
            Sujet
          </label>
          <input
            id="contact-subject"
            type="text"
            placeholder="Votre sujet"
            value={formData.subject}
            onChange={(e) => setFormData((f) => ({ ...f, subject: e.target.value }))}
            className={fieldClass()}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-bold text-[#2D2416] mb-1.5 uppercase tracking-wide">
          Message <span aria-hidden="true" className="text-[#C4622D]">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          required
          aria-required="true"
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          placeholder="Votre message..."
          value={formData.message}
          onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))}
          className={cn(fieldClass(errors.message), "resize-none")}
        />
        {errors.message && (
          <p id="contact-message-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={state.status === "loading"}
        className="inline-flex items-center gap-2 bg-[#C4622D] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-[0_4px_16px_rgba(196,98,45,0.25)] hover:bg-[#a8521f] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        aria-label={state.status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
      >
        <Send size={15} aria-hidden="true" />
        {state.status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
      </button>
    </form>
  )
}
