"use client"

import { useState } from "react"
import { Heart, CheckCircle2, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

type EngagementType = "adherent" | "benevole" | "les-deux"

interface FormState {
  status: "idle" | "loading" | "success" | "error"
  message?: string
}

export default function AdhesionForm() {
  const [state, setState] = useState<FormState>({ status: "idle" })
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    engagement: "adherent" as EngagementType,
    message: "",
  })
  const [errors, setErrors] = useState<Partial<typeof formData>>({})

  function validate() {
    const newErrors: Partial<typeof formData> = {}
    if (!formData.firstName.trim()) newErrors.firstName = "Prénom requis"
    if (!formData.lastName.trim()) newErrors.lastName = "Nom requis"
    if (!formData.email.trim()) newErrors.email = "Email requis"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Email invalide"
    if (!formData.phone.trim()) newErrors.phone = "Téléphone requis"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setState({ status: "loading" })

    try {
      const res = await fetch("/api/adhesion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = (await res.json()) as { message?: string }
      if (!res.ok) throw new Error(data.message ?? "Erreur serveur")
      setState({ status: "success", message: data.message })
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
      <div className="flex flex-col items-center text-center py-12 gap-4 bg-[#EDE5D0] rounded-2xl p-8">
        <CheckCircle2 size={52} className="text-[#4A7A56]" aria-hidden="true" />
        <h3 className="font-display font-bold text-2xl text-[#2D2416]">
          Bienvenue dans la famille !
        </h3>
        <p className="text-[#5C4033] max-w-md">
          {state.message ??
            "Votre demande d'adhésion a bien été reçue. Nous vous contacterons rapidement pour finaliser votre inscription."}
        </p>
      </div>
    )
  }

  const engagementOptions: { value: EngagementType; label: string; desc: string }[] = [
    { value: "adherent", label: "Adhérent·e", desc: "Je souhaite adhérer à l'association" },
    { value: "benevole", label: "Bénévole", desc: "Je souhaite m'engager bénévolement" },
    { value: "les-deux", label: "Les deux", desc: "Adhérent·e et bénévole" },
  ]

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-label="Formulaire d'adhésion">
      {state.status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700"
        >
          <AlertCircle size={18} className="shrink-0 mt-0.5" aria-hidden="true" />
          <p>{state.message}</p>
        </div>
      )}

      {/* Engagement type */}
      <fieldset>
        <legend className="block text-xs font-bold text-[#2D2416] mb-3 uppercase tracking-wide">
          Je souhaite <span aria-hidden="true" className="text-[#C4622D]">*</span>
        </legend>
        <div className="grid grid-cols-3 gap-3" role="radiogroup">
          {engagementOptions.map((opt) => (
            <label
              key={opt.value}
              className={cn(
                "flex flex-col items-center text-center p-3 rounded-xl border-2 cursor-pointer transition-all",
                formData.engagement === opt.value
                  ? "border-[#C4622D] bg-[#F5D5C0]/40"
                  : "border-[#DDD0BC] bg-[#F7F0E3] hover:border-[#C4622D]/40"
              )}
            >
              <input
                type="radio"
                name="engagement"
                value={opt.value}
                checked={formData.engagement === opt.value}
                onChange={(e) =>
                  setFormData((f) => ({ ...f, engagement: e.target.value as EngagementType }))
                }
                className="sr-only"
              />
              <span className="font-bold text-sm text-[#2D2416]">{opt.label}</span>
              <span className="text-xs text-[#8B6F5E] mt-1 leading-tight">{opt.desc}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Name fields */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="adh-firstname" className="block text-xs font-bold text-[#2D2416] mb-1.5 uppercase tracking-wide">
            Prénom <span aria-hidden="true" className="text-[#C4622D]">*</span>
          </label>
          <input
            id="adh-firstname"
            type="text"
            autoComplete="given-name"
            required
            aria-required="true"
            placeholder="Marie"
            value={formData.firstName}
            onChange={(e) => setFormData((f) => ({ ...f, firstName: e.target.value }))}
            className={fieldClass(errors.firstName)}
          />
          {errors.firstName && <p role="alert" className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
        </div>

        <div>
          <label htmlFor="adh-lastname" className="block text-xs font-bold text-[#2D2416] mb-1.5 uppercase tracking-wide">
            Nom <span aria-hidden="true" className="text-[#C4622D]">*</span>
          </label>
          <input
            id="adh-lastname"
            type="text"
            autoComplete="family-name"
            required
            aria-required="true"
            placeholder="Dupont"
            value={formData.lastName}
            onChange={(e) => setFormData((f) => ({ ...f, lastName: e.target.value }))}
            className={fieldClass(errors.lastName)}
          />
          {errors.lastName && <p role="alert" className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
        </div>
      </div>

      {/* Contact */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="adh-email" className="block text-xs font-bold text-[#2D2416] mb-1.5 uppercase tracking-wide">
            Email <span aria-hidden="true" className="text-[#C4622D]">*</span>
          </label>
          <input
            id="adh-email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            placeholder="marie@exemple.fr"
            value={formData.email}
            onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))}
            className={fieldClass(errors.email)}
          />
          {errors.email && <p role="alert" className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="adh-phone" className="block text-xs font-bold text-[#2D2416] mb-1.5 uppercase tracking-wide">
            Téléphone <span aria-hidden="true" className="text-[#C4622D]">*</span>
          </label>
          <input
            id="adh-phone"
            type="tel"
            autoComplete="tel"
            required
            aria-required="true"
            placeholder="06 12 34 56 78"
            value={formData.phone}
            onChange={(e) => setFormData((f) => ({ ...f, phone: e.target.value }))}
            className={fieldClass(errors.phone)}
          />
          {errors.phone && <p role="alert" className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
      </div>

      {/* Address */}
      <div>
        <label htmlFor="adh-address" className="block text-xs font-bold text-[#2D2416] mb-1.5 uppercase tracking-wide">
          Adresse
        </label>
        <input
          id="adh-address"
          type="text"
          autoComplete="street-address"
          placeholder="Votre adresse à Marlioz ou Aix-les-Bains"
          value={formData.address}
          onChange={(e) => setFormData((f) => ({ ...f, address: e.target.value }))}
          className={fieldClass()}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="adh-message" className="block text-xs font-bold text-[#2D2416] mb-1.5 uppercase tracking-wide">
          Message (optionnel)
        </label>
        <textarea
          id="adh-message"
          rows={3}
          placeholder="Domaines d'intérêt, questions, disponibilités..."
          value={formData.message}
          onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))}
          className={cn(fieldClass(), "resize-none")}
        />
      </div>

      <button
        type="submit"
        disabled={state.status === "loading"}
        className="inline-flex items-center gap-2 bg-[#C4622D] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-[0_4px_16px_rgba(196,98,45,0.25)] hover:bg-[#a8521f] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        aria-label={state.status === "loading" ? "Envoi en cours..." : "Envoyer ma demande d'adhésion"}
      >
        <Heart size={15} aria-hidden="true" />
        {state.status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>
    </form>
  )
}
