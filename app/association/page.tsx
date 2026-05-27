import type { Metadata } from "next"
import Link from "next/link"
import { FileDown, Heart, Users, Target, MapPin, Phone, Mail, Clock } from "lucide-react"
import { team } from "@/data/team"
import BlurFadeIn from "@/components/shared/BlurFadeIn"
import SectionTitle from "@/components/shared/SectionTitle"
import CTASection from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "L'association",
  description:
    "Découvrez l'histoire, la mission et le projet social 2024-2027 de La Marlio'Zen, Espace de Vie Sociale du quartier de Marlioz à Aix-les-Bains.",
}

const projetSocial = [
  {
    icon: Users,
    title: "Favoriser le vivre-ensemble et la mixité sociale",
    desc: "Créer des espaces et des occasions de rencontres entre tous les habitants, quelle que soit leur origine, leur génération ou leur situation sociale. Organiser des événements fédérateurs qui rassemblent et créent du lien.",
    color: "#C4622D",
  },
  {
    icon: Target,
    title: "Permettre l'accès aux droits pour tous",
    desc: "Organiser des permanences d'accompagnement aux démarches administratives. Orienter vers les bons interlocuteurs. Lutter contre le non-recours aux droits par la proximité et la confiance.",
    color: "#6B9E78",
  },
  {
    icon: Heart,
    title: "Soutenir la parentalité et la jeunesse",
    desc: "Proposer des espaces d'échange entre parents et accompagnement des enfants et des jeunes. Soutenir les familles dans leur rôle éducatif avec bienveillance et sans jugement.",
    color: "#D4A853",
  },
  {
    icon: Users,
    title: "Développer la citoyenneté et le pouvoir d'agir",
    desc: "Encourager les habitants à s'impliquer dans la vie du quartier, à prendre des responsabilités, à co-construire les projets de l'association et à devenir acteurs de leur territoire.",
    color: "#8B6F5E",
  },
]

export default function AssociationPage() {
  const bureauMembers = team.filter((m) => m.isBureau)
  const staffMembers = team.filter((m) => !m.isBureau)

  return (
    <>
      {/* Hero */}
      <section className="bg-[#F7F0E3] pt-28 pb-16 overflow-hidden relative" aria-label="Présentation de l'association">
        <div className="absolute -top-16 -right-20 w-96 h-96 rounded-full bg-[#F5D5C0] blur-[80px] opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <BlurFadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#C4622D] mb-3">
              Qui sommes-nous
            </p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-[#2D2416] leading-tight mb-5">
              L&apos;association
              <br />
              <em className="italic font-light text-[#C4622D]">La Marlio'Zen</em>
            </h1>
            <p className="text-lg text-[#5C4033] leading-relaxed max-w-2xl">
              Espace de Vie Sociale agréé CAF, portée par ~190 habitants et bénévoles du quartier de Marlioz
              à Aix-les-Bains, Savoie. Association loi 1901 fondée pour renforcer le lien social de proximité.
            </p>
          </BlurFadeIn>
        </div>
      </section>

      {/* Histoire */}
      <section className="bg-[#EDE5D0] py-16 md:py-20" aria-labelledby="histoire-title">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <BlurFadeIn>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#C4622D] mb-3">Notre histoire</p>
                <h2 id="histoire-title" className="font-display text-3xl md:text-4xl font-bold text-[#2D2416] mb-6 leading-tight">
                  Née du quartier,<br />
                  <em className="italic font-light text-[#4A7A56]">pour le quartier</em>
                </h2>
                <div className="prose-marliozen space-y-4">
                  <p>
                    La Marlio'Zen est née d&apos;un constat simple : le quartier de Marlioz, au cœur d&apos;Aix-les-Bains, avait besoin
                    d&apos;un espace commun où ses habitants pourraient se retrouver, s&apos;entraider et construire ensemble leur cadre de vie.
                  </p>
                  <p>
                    Fondée en 2018 par un collectif d&apos;habitants engagés, l&apos;association a rapidement obtenu l&apos;agrément Espace de Vie
                    Sociale (EVS) de la CAF de la Savoie, reconnaissant officiellement sa mission d&apos;animation et de cohésion sociale.
                  </p>
                  <p>
                    Aujourd&apos;hui portée par près de 190 adhérents et bénévoles actifs, La Marlio'Zen est devenue le lieu de référence
                    du quartier : celui où l&apos;on se retrouve, où l&apos;on s&apos;entraide, et où l&apos;on célèbre la diversité qui fait la richesse de Marlioz.
                  </p>
                </div>
              </div>
            </BlurFadeIn>

            <BlurFadeIn delay={0.15}>
              <div className="bg-[#F7F0E3] rounded-2xl p-7">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#C4622D] mb-4">L&apos;agrément EVS</p>
                <h3 className="font-display font-bold text-xl text-[#2D2416] mb-3">Espace de Vie Sociale</h3>
                <p className="text-sm text-[#5C4033] leading-relaxed mb-4">
                  L&apos;agrément EVS, délivré par la CAF, reconnaît notre rôle d&apos;animation de la vie sociale locale.
                  Il engage l&apos;association à développer des actions favorisant les liens sociaux et la participation des habitants.
                </p>
                <div className="space-y-3 mt-5">
                  {[
                    "Soutenu par la CAF de la Savoie",
                    "Association loi 1901",
                    "~190 adhérents et bénévoles",
                    "4 partenaires institutionnels",
                    "Fondée en 2018",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[#5C4033]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C4622D] shrink-0" aria-hidden="true" />
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href="/docs/rapport-moral-2025.pdf"
                  className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-[#4A7A56] hover:text-[#C4622D] transition-colors"
                  download
                  aria-label="Télécharger le rapport moral 2025 (PDF)"
                >
                  <FileDown size={16} aria-hidden="true" />
                  Rapport moral 2025 (PDF)
                </a>
              </div>
            </BlurFadeIn>
          </div>
        </div>
      </section>

      {/* Projet social 2024-2027 */}
      <section id="projet-social" className="bg-[#F7F0E3] py-16 md:py-24" aria-labelledby="projet-title">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <BlurFadeIn className="mb-12">
            <SectionTitle
              eyebrow="2024 – 2027"
              title="Notre projet"
              titleItalic="social"
              description="Un projet ambitieux au service des habitant·es du quartier de Marlioz, structuré autour de quatre axes prioritaires définis avec nos partenaires."
              align="center"
            />
          </BlurFadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {projetSocial.map((item, i) => (
              <BlurFadeIn key={item.title} delay={i * 0.1}>
                <article
                  className="bg-[#EDE5D0] rounded-2xl p-7 relative overflow-hidden hover:shadow-md transition-shadow"
                  style={{ borderLeft: `4px solid ${item.color}` }}
                >
                  <div
                    className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-10 pointer-events-none"
                    style={{ background: item.color }}
                    aria-hidden="true"
                  />
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: item.color + "22" }}>
                    <item.icon size={20} style={{ color: item.color }} aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#2D2416] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5C4033] leading-relaxed">{item.desc}</p>
                </article>
              </BlurFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section id="equipe" className="bg-[#EDE5D0] py-16 md:py-24" aria-labelledby="equipe-title">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <BlurFadeIn className="mb-12">
            <SectionTitle eyebrow="Les personnes" title="Bureau et" titleItalic="équipe" />
          </BlurFadeIn>

          <div className="mb-10">
            <h3 className="font-display font-bold text-xl text-[#2D2416] mb-6">Le bureau</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {bureauMembers.map((member, i) => (
                <BlurFadeIn key={member.id} delay={i * 0.08}>
                  <div className="bg-[#F7F0E3] rounded-2xl p-5 text-center hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 rounded-full bg-[#C4622D] text-white font-bold text-lg flex items-center justify-center mx-auto mb-3" aria-hidden="true">
                      {member.avatar}
                    </div>
                    <p className="font-bold text-[#2D2416] text-sm">{member.name}</p>
                    <p className="text-xs text-[#C4622D] font-semibold mt-0.5">{member.role}</p>
                    {member.description && (
                      <p className="text-xs text-[#8B6F5E] mt-2 leading-relaxed">{member.description}</p>
                    )}
                  </div>
                </BlurFadeIn>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-xl text-[#2D2416] mb-6">L&apos;équipe d&apos;animation</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {staffMembers.map((member, i) => (
                <BlurFadeIn key={member.id} delay={i * 0.1}>
                  <div className="bg-[#F7F0E3] rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-[#6B9E78] text-white font-bold flex items-center justify-center shrink-0" aria-hidden="true">
                      {member.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-[#2D2416] text-sm">{member.name}</p>
                      <p className="text-xs text-[#6B9E78] font-semibold mt-0.5 mb-1">{member.role}</p>
                      {member.description && (
                        <p className="text-xs text-[#8B6F5E] leading-relaxed">{member.description}</p>
                      )}
                    </div>
                  </div>
                </BlurFadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Adresse */}
      <section className="bg-[#F7F0E3] py-16" aria-labelledby="contact-info-title">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <BlurFadeIn>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 id="contact-info-title" className="font-display font-bold text-2xl text-[#2D2416] mb-5">
                  Nous trouver
                </h2>
                <ul className="space-y-3" aria-label="Coordonnées">
                  <li className="flex items-start gap-3 text-sm text-[#5C4033]">
                    <MapPin size={16} className="text-[#C4622D] mt-0.5 shrink-0" aria-hidden="true" />
                    <span>74 Boulevard de la Roche du Roi<br />73100 Aix-les-Bains</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <Phone size={16} className="text-[#C4622D] shrink-0" aria-hidden="true" />
                    <a href="tel:0646316009" className="text-[#5C4033] hover:text-[#C4622D] transition-colors">
                      06.46.31.60.09
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <Mail size={16} className="text-[#C4622D] shrink-0" aria-hidden="true" />
                    <a href="mailto:contact@marliozen.fr" className="text-[#5C4033] hover:text-[#C4622D] transition-colors">
                      contact@marliozen.fr
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <Clock size={16} className="text-[#C4622D] mt-0.5 shrink-0" aria-hidden="true" />
                    <div className="text-[#5C4033]">
                      <p className="font-semibold mb-1">Horaires d&apos;ouverture</p>
                      <p>Lundi, Mercredi, Vendredi : 9h – 12h</p>
                      <p>Mardi, Jeudi : 14h – 17h</p>
                    </div>
                  </li>
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-6 bg-[#C4622D] text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#a8521f] transition-colors"
                >
                  Envoyer un message →
                </Link>
              </div>

              <div className="bg-[#EDE5D0] rounded-2xl p-5 h-56 flex items-center justify-center text-[#8B6F5E] text-sm">
                <div className="text-center">
                  <MapPin size={32} className="text-[#C4622D] mx-auto mb-2" aria-hidden="true" />
                  <p className="font-semibold">Carte OpenStreetMap</p>
                  <p className="text-xs mt-1">74 Bd de la Roche du Roi, Aix-les-Bains</p>
                  <a
                    href="https://www.openstreetmap.org/?mlat=45.6890&mlon=5.9180#map=16/45.6890/5.9180"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#C4622D] hover:underline mt-2 inline-block"
                  >
                    Voir sur OpenStreetMap →
                  </a>
                </div>
              </div>
            </div>
          </BlurFadeIn>
        </div>
      </section>

      <CTASection />
    </>
  )
}
