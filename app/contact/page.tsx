import type { Metadata } from "next"
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"
import ContactForm from "@/components/forms/ContactForm"
import BlurFadeIn from "@/components/shared/BlurFadeIn"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez La Marlio'Zen par formulaire, téléphone ou email. 74 Boulevard de la Roche du Roi, 73100 Aix-les-Bains.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F7F0E3] pt-28 pb-14 relative overflow-hidden" aria-label="Nous contacter">
        <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-[#C8E0CC] blur-[70px] opacity-35 pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <BlurFadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#C4622D] mb-3">Parlons-nous</p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] font-bold text-[#2D2416] leading-tight mb-4">
              Nous <em className="italic font-light text-[#C4622D]">contacter</em>
            </h1>
            <p className="text-base text-[#5C4033] max-w-lg leading-relaxed">
              Une question, une demande, un projet ? On est là. N&apos;hésitez pas à passer au local
              ou à nous envoyer un message via le formulaire ci-dessous.
            </p>
          </BlurFadeIn>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-[#EDE5D0] py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <BlurFadeIn>
              <div>
                <h2 className="font-display font-bold text-2xl text-[#2D2416] mb-6">
                  Envoyer un message
                </h2>
                <div className="bg-[#F7F0E3] rounded-2xl p-6 md:p-8">
                  <ContactForm />
                </div>
              </div>
            </BlurFadeIn>

            {/* Info column */}
            <BlurFadeIn delay={0.15}>
              <div className="space-y-6">
                {/* Coordinates */}
                <div className="bg-[#F7F0E3] rounded-2xl p-6">
                  <h2 className="font-display font-bold text-xl text-[#2D2416] mb-5">Coordonnées</h2>
                  <address className="not-italic space-y-4">
                    <div className="flex items-start gap-3 text-sm text-[#5C4033]">
                      <MapPin size={16} className="text-[#C4622D] mt-0.5 shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-bold text-[#2D2416] text-xs uppercase tracking-wide mb-0.5">Adresse</p>
                        <p>74 Boulevard de la Roche du Roi</p>
                        <p>73100 Aix-les-Bains</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                      <Phone size={16} className="text-[#C4622D] shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-bold text-[#2D2416] text-xs uppercase tracking-wide mb-0.5">Téléphone</p>
                        <a
                          href="tel:0646316009"
                          className="text-[#5C4033] hover:text-[#C4622D] transition-colors"
                        >
                          06.46.31.60.09
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                      <Mail size={16} className="text-[#C4622D] shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-bold text-[#2D2416] text-xs uppercase tracking-wide mb-0.5">Email</p>
                        <a
                          href="mailto:contact@marliozen.fr"
                          className="text-[#5C4033] hover:text-[#C4622D] transition-colors"
                        >
                          contact@marliozen.fr
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-sm">
                      <Clock size={16} className="text-[#C4622D] mt-0.5 shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-bold text-[#2D2416] text-xs uppercase tracking-wide mb-1">Horaires</p>
                        <div className="text-[#5C4033] space-y-0.5">
                          <p>Lun, Mer, Ven : 9h – 12h</p>
                          <p>Mar, Jeu : 14h – 17h</p>
                          <p className="text-xs text-[#8B6F5E] mt-1">Fermé les jours fériés</p>
                        </div>
                      </div>
                    </div>
                  </address>
                </div>

                {/* Map placeholder */}
                <div className="bg-[#F7F0E3] rounded-2xl overflow-hidden">
                  <div className="h-52 bg-gradient-to-br from-[#C8E0CC] to-[#B4D8BC] flex flex-col items-center justify-center gap-2">
                    <MapPin size={32} className="text-[#4A7A56]" aria-hidden="true" />
                    <p className="font-bold text-sm text-[#2D2416]">Quartier de Marlioz</p>
                    <p className="text-xs text-[#5C4033]">Aix-les-Bains, Savoie</p>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <p className="text-xs text-[#8B6F5E]">74 Bd de la Roche du Roi</p>
                    <a
                      href="https://www.openstreetmap.org/?mlat=45.6890&mlon=5.9180#map=16/45.6890/5.9180"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#C4622D] hover:underline"
                      aria-label="Ouvrir sur OpenStreetMap (lien externe)"
                    >
                      Ouvrir la carte
                      <ExternalLink size={11} aria-hidden="true" />
                    </a>
                  </div>
                </div>

                {/* Social networks */}
                <div className="bg-[#F7F0E3] rounded-2xl p-5">
                  <p className="font-bold text-[#2D2416] text-sm mb-3">Suivez-nous</p>
                  <div className="flex gap-3">
                    {["Facebook", "Instagram"].map((network) => (
                      <a
                        key={network}
                        href="#"
                        className="bg-[#EDE5D0] hover:bg-[#C4622D] hover:text-white text-[#5C4033] px-4 py-2 rounded-full text-xs font-bold transition-all duration-200"
                        aria-label={`Nous suivre sur ${network}`}
                      >
                        {network}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </BlurFadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
