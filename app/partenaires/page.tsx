import type { Metadata } from "next"
import Link from "next/link"
import { ExternalLink, ArrowRight } from "lucide-react"
import { partners } from "@/data/partners"
import BlurFadeIn from "@/components/shared/BlurFadeIn"
import SectionTitle from "@/components/shared/SectionTitle"

export const metadata: Metadata = {
  title: "Partenaires",
  description:
    "Découvrez les partenaires institutionnels de La Marlio'Zen : CAF de la Savoie, OPAC de la Savoie, Ville d'Aix-les-Bains et Grand Lac.",
}

export default function PartenairesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F7F0E3] pt-28 pb-14 relative overflow-hidden" aria-label="Nos partenaires">
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#C8E0CC] blur-[70px] opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <BlurFadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#C4622D] mb-3">Nos soutiens</p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] font-bold text-[#2D2416] leading-tight mb-4">
              Nos <em className="italic font-light text-[#4A7A56]">partenaires</em>
            </h1>
            <p className="text-base text-[#5C4033] max-w-xl leading-relaxed">
              La Marlio'Zen agit grâce au soutien de partenaires institutionnels engagés pour la cohésion
              sociale et le développement du quartier de Marlioz.
            </p>
          </BlurFadeIn>
        </div>
      </section>

      {/* Partners list */}
      <section className="bg-[#EDE5D0] py-16 md:py-20" aria-labelledby="partenaires-list-title">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 id="partenaires-list-title" className="sr-only">
            Liste des partenaires
          </h2>

          <div className="space-y-6">
            {partners.map((partner, i) => (
              <BlurFadeIn key={partner.id} delay={i * 0.1}>
                <article
                  className="bg-[#F7F0E3] rounded-2xl p-7 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow"
                  aria-labelledby={`partner-${partner.id}`}
                >
                  {/* Logo placeholder */}
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-xl shrink-0 shadow-sm"
                    style={{ background: partner.color }}
                    role="img"
                    aria-label={`Logo ${partner.name}`}
                  >
                    {partner.shortName.slice(0, 3)}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div>
                        <h3
                          id={`partner-${partner.id}`}
                          className="font-display font-bold text-xl text-[#2D2416]"
                        >
                          {partner.name}
                        </h3>
                        <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#C4622D] mt-0.5">
                          {partner.role}
                        </p>
                      </div>
                      {partner.url && (
                        <a
                          href={partner.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5C4033] hover:text-[#C4622D] transition-colors"
                          aria-label={`Visiter le site de ${partner.name} (lien externe)`}
                        >
                          Site officiel
                          <ExternalLink size={12} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-[#5C4033] leading-relaxed max-w-2xl">
                      {partner.description}
                    </p>
                  </div>
                </article>
              </BlurFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Devenir partenaire */}
      <section id="sponsor" className="bg-[#F7F0E3] py-16 md:py-20" aria-labelledby="sponsor-title">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl">
            <BlurFadeIn>
              <SectionTitle
                eyebrow="Nous rejoindre"
                title="Devenir"
                titleItalic="partenaire"
                description="Vous êtes une entreprise, une collectivité ou une organisation qui souhaite soutenir les actions de La Marlio'Zen ? Nous serions ravis de discuter des modalités d'un partenariat."
              />

              <div className="mt-8 space-y-4">
                {[
                  "Soutien financier ou en nature pour nos événements",
                  "Mise à disposition d'espaces ou de matériel",
                  "Partenariat de compétences (formation, accompagnement)",
                  "Mécénat ou sponsoring d'événements spécifiques",
                  "Mise en réseau et valorisation commune",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-[#5C4033]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C4622D] mt-1.5 shrink-0" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact?sujet=Devenir%20partenaire"
                  className="inline-flex items-center gap-2 bg-[#C4622D] text-white px-6 py-3 rounded-full font-bold text-sm shadow-[0_4px_16px_rgba(196,98,45,0.25)] hover:bg-[#a8521f] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Nous contacter
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-[#DDD0BC] text-[#5C4033] px-6 py-3 rounded-full font-bold text-sm hover:border-[#C4622D] hover:text-[#C4622D] transition-all duration-200"
                >
                  Poser une question
                </Link>
              </div>
            </BlurFadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
