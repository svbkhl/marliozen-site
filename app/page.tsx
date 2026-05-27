import type { Metadata } from "next"
import Hero from "@/components/sections/Hero"
import StatsCounter from "@/components/sections/StatsCounter"
import ValueCards from "@/components/sections/ValueCards"
import EventsList from "@/components/sections/EventsList"
import Testimonials from "@/components/sections/Testimonials"
import PartnersBanner from "@/components/sections/PartnersBanner"
import CTASection from "@/components/sections/CTASection"
import BlurFadeIn from "@/components/shared/BlurFadeIn"

export const metadata: Metadata = {
  title: "La Marlio'Zen — Espace de Vie Sociale à Marlioz, Aix-les-Bains",
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <ValueCards />
      <EventsList />

      {/* Actions phares */}
      <section className="bg-[#F7F0E3] py-16 md:py-24" aria-labelledby="actions-title">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <BlurFadeIn className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#C4622D] mb-2">
              Ce qu&apos;on fait
            </p>
            <h2
              id="actions-title"
              className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-[#2D2416] leading-tight"
            >
              Nos actions <em className="italic font-light text-[#4A7A56]">phares</em>
            </h2>
          </BlurFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                emoji: "⚽",
                title: "Champion's d'Aix",
                desc: "Tournoi de football inter-quartier intergénérationnel au Stade Garibaldi. Sport, convivialité et lien social.",
                color: "#C4622D",
                link: "/evenements/champions-d-aix-2025",
              },
              {
                emoji: "🎬",
                title: "Ciné plein air",
                desc: "Projection en plein air à l'école de Marlioz avec repas partagé. Un rituel d'été pour tout le quartier.",
                color: "#6B9E78",
                link: "/evenements/cinema-plein-air-2025",
              },
              {
                emoji: "🍽️",
                title: "Cuisines du monde",
                desc: "Grande fête gastronomique où les familles partagent leurs spécialités culturelles. Diversité et saveurs.",
                color: "#D4A853",
                link: "/evenements/fete-cuisines-du-monde-2025",
              },
              {
                emoji: "📋",
                title: "Accès aux droits",
                desc: "Permanences mensuelles d'accompagnement aux démarches administratives. Bénévoles à votre écoute.",
                color: "#8B6F5E",
                link: "/evenements",
              },
            ].map((action, i) => (
              <BlurFadeIn key={action.title} delay={i * 0.1}>
                <a
                  href={action.link}
                  className="group relative bg-[#EDE5D0] rounded-2xl p-6 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                    style={{ background: action.color }}
                    aria-hidden="true"
                  />
                  <div className="text-4xl mb-4" role="img" aria-label={action.title}>
                    {action.emoji}
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#2D2416] mb-2 leading-tight group-hover:text-[#C4622D] transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-sm text-[#5C4033] leading-relaxed flex-1">{action.desc}</p>
                  <p className="text-sm font-bold text-[#C4622D] mt-4 flex items-center gap-1 group-hover:gap-2 transition-all">
                    En savoir plus <span aria-hidden="true">→</span>
                  </p>
                </a>
              </BlurFadeIn>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <PartnersBanner />
      <CTASection />
    </>
  )
}
