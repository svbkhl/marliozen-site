import type { Metadata } from "next"
import Link from "next/link"
import { FileDown, Users, Heart, Paintbrush, BookOpen, Music, Utensils } from "lucide-react"
import AdhesionForm from "@/components/forms/AdhesionForm"
import BlurFadeIn from "@/components/shared/BlurFadeIn"
import SectionTitle from "@/components/shared/SectionTitle"

export const metadata: Metadata = {
  title: "Adhérer",
  description:
    "Rejoignez La Marlio'Zen comme adhérent ou bénévole. Découvrez les tarifs et remplissez le formulaire d'adhésion en ligne.",
}

const volunteerAreas = [
  { icon: Music, label: "Animation événementielle", desc: "Aider à organiser et animer nos événements du quartier" },
  { icon: BookOpen, label: "Accompagnement scolaire", desc: "Soutenir les enfants et les jeunes dans leurs apprentissages" },
  { icon: Users, label: "Animation jeunesse", desc: "Animer des ateliers et activités pour les jeunes du quartier" },
  { icon: Utensils, label: "Cuisine collective", desc: "Participer à l'organisation des repas partagés et événements gastronomiques" },
  { icon: Paintbrush, label: "Communication", desc: "Contribuer à la communication visuelle et numérique de l'association" },
  { icon: Heart, label: "Solidarité & droits", desc: "Accompagner les habitants dans leurs démarches administratives" },
]

export default function AdhererPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F7F0E3] pt-28 pb-16 relative overflow-hidden" aria-label="Adhésion à l'association">
        <div className="absolute -top-16 -right-20 w-80 h-80 rounded-full bg-[#F5D5C0] blur-[70px] opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <BlurFadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#C4622D] mb-3">Rejoignez-nous</p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] font-bold text-[#2D2416] leading-tight mb-4">
              Adhérer &amp;{" "}
              <em className="italic font-light text-[#C4622D]">s&apos;engager</em>
            </h1>
            <p className="text-base text-[#5C4033] max-w-xl leading-relaxed">
              En rejoignant La Marlio'Zen, vous participez activement à la vie du quartier de Marlioz.
              Votre adhésion finance nos actions et votre engagement les fait vivre.
            </p>
          </BlurFadeIn>
        </div>
      </section>

      {/* Pourquoi adhérer */}
      <section className="bg-[#EDE5D0] py-14" aria-labelledby="pourquoi-title">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🤝",
                title: "Soutenir l'association",
                desc: "Votre cotisation finance les événements, les actions de solidarité et la permanence de l'association.",
              },
              {
                icon: "🎟️",
                title: "Profiter des activités",
                desc: "Les adhérents bénéficient de tarifs préférentiels ou d'accès prioritaire à certains événements.",
              },
              {
                icon: "💬",
                title: "Avoir voix au chapitre",
                desc: "En tant qu'adhérent, vous pouvez participer à l'Assemblée Générale et contribuer aux décisions.",
              },
            ].map((item, i) => (
              <BlurFadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-[#F7F0E3] rounded-2xl p-6">
                  <div className="text-3xl mb-3" role="img" aria-label={item.title}>{item.icon}</div>
                  <h3 className="font-display font-bold text-lg text-[#2D2416] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#5C4033] leading-relaxed">{item.desc}</p>
                </div>
              </BlurFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="bg-[#F7F0E3] py-14" aria-labelledby="tarifs-title">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <BlurFadeIn className="mb-8">
            <h2 id="tarifs-title" className="font-display font-bold text-2xl text-[#2D2416] mb-2">
              Tarifs de cotisation
            </h2>
            <p className="text-sm text-[#8B6F5E]">Valables pour l&apos;année associative 2025-2026 (septembre à août)</p>
          </BlurFadeIn>

          <div className="grid sm:grid-cols-3 gap-5 max-w-2xl">
            {[
              { label: "Individuel", price: "10 €", desc: "Par personne / an" },
              { label: "Famille", price: "15 €", desc: "Foyer entier / an" },
              { label: "Bénévole", price: "Libre", desc: "Participation libre" },
            ].map((tier, i) => (
              <BlurFadeIn key={tier.label} delay={i * 0.08}>
                <div className="bg-[#EDE5D0] rounded-2xl p-5 text-center border-t-4 border-[#C4622D]">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#8B6F5E] mb-1">{tier.label}</p>
                  <p className="font-display font-bold text-3xl text-[#C4622D] mb-1">{tier.price}</p>
                  <p className="text-xs text-[#5C4033]">{tier.desc}</p>
                </div>
              </BlurFadeIn>
            ))}
          </div>

          <BlurFadeIn className="mt-5">
            <a
              href="/docs/bulletin-adhesion-2025.pdf"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#4A7A56] hover:text-[#C4622D] transition-colors"
              download
              aria-label="Télécharger le bulletin d'adhésion PDF"
            >
              <FileDown size={16} aria-hidden="true" />
              Télécharger le bulletin d&apos;adhésion (PDF)
            </a>
          </BlurFadeIn>
        </div>
      </section>

      {/* Formulaire */}
      <section className="bg-[#EDE5D0] py-16" aria-labelledby="formulaire-title">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <BlurFadeIn className="mb-8">
            <h2 id="formulaire-title" className="font-display font-bold text-2xl text-[#2D2416] mb-2">
              Formulaire d&apos;adhésion
            </h2>
            <p className="text-sm text-[#5C4033]">
              Remplissez ce formulaire et nous vous contacterons pour finaliser votre inscription.
            </p>
          </BlurFadeIn>
          <BlurFadeIn delay={0.1}>
            <AdhesionForm />
          </BlurFadeIn>
        </div>
      </section>

      {/* Devenir bénévole */}
      <section id="benevole" className="bg-[#F7F0E3] py-16 md:py-20" aria-labelledby="benevole-title">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <BlurFadeIn className="mb-10">
            <SectionTitle
              eyebrow="Engagement bénévole"
              title="Devenir"
              titleItalic="bénévole"
              description="Le bénévolat à La Marlio'Zen, c'est s'engager selon ses envies et ses disponibilités. Il y a une place pour chacun !"
            />
          </BlurFadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {volunteerAreas.map((area, i) => (
              <BlurFadeIn key={area.label} delay={i * 0.08}>
                <div className="bg-[#EDE5D0] rounded-xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C4622D]/10 flex items-center justify-center shrink-0">
                    <area.icon size={18} className="text-[#C4622D]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D2416] text-sm mb-1">{area.label}</h3>
                    <p className="text-xs text-[#8B6F5E] leading-relaxed">{area.desc}</p>
                  </div>
                </div>
              </BlurFadeIn>
            ))}
          </div>

          <BlurFadeIn className="mt-8">
            <p className="text-sm text-[#5C4033]">
              Intéressé(e) ? Utilisez le formulaire ci-dessus en sélectionnant &ldquo;Bénévole&rdquo; ou{" "}
              <Link href="/contact" className="text-[#C4622D] font-bold hover:underline">
                contactez-nous directement
              </Link>
              .
            </p>
          </BlurFadeIn>
        </div>
      </section>
    </>
  )
}
