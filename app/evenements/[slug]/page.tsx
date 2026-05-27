import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { MapPin, Clock, Calendar, ArrowLeft, Tag } from "lucide-react"
import { events, getEventBySlug, categoryLabels, categoryColors } from "@/data/events"
import CTASection from "@/components/sections/CTASection"
import BlurFadeIn from "@/components/shared/BlurFadeIn"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const event = getEventBySlug(slug)
  if (!event) return {}
  return {
    title: event.title,
    description: event.description,
  }
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params
  const event = getEventBySlug(slug)
  if (!event) notFound()

  const colors = categoryColors[event.category]

  return (
    <>
      <section
        className="bg-[#F7F0E3] pt-28 pb-14 relative overflow-hidden"
        aria-label={`Événement : ${event.title}`}
      >
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-[#F5D5C0] blur-[70px] opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-5 md:px-8 relative z-10">
          <BlurFadeIn>
            <Link
              href="/evenements"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#5C4033] hover:text-[#C4622D] transition-colors mb-6"
              aria-label="Retour aux événements"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              Tous les événements
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.06em] px-3 py-1.5 rounded-full ${colors.bg} ${colors.text}`}
              >
                {event.emoji} {categoryLabels[event.category]}
              </span>
              {event.upcoming && (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-[#E8F4EA] text-[#4A7A56]">
                  À venir
                </span>
              )}
            </div>

            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold text-[#2D2416] leading-tight mb-5">
              {event.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap gap-5 text-sm text-[#5C4033]" role="list" aria-label="Informations pratiques">
              <div className="flex items-center gap-2" role="listitem">
                <Calendar size={15} className="text-[#C4622D]" aria-hidden="true" />
                <span>{event.dateDisplay}</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <Clock size={15} className="text-[#C4622D]" aria-hidden="true" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2" role="listitem">
                <MapPin size={15} className="text-[#C4622D]" aria-hidden="true" />
                <span>{event.address}</span>
              </div>
            </div>
          </BlurFadeIn>
        </div>
      </section>

      <section className="bg-[#EDE5D0] py-14">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Description */}
            <div className="md:col-span-2">
              <BlurFadeIn>
                {/* Visual placeholder */}
                <div
                  className="w-full h-60 rounded-2xl flex items-center justify-center text-7xl mb-8 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${
                      event.category === "sport" ? "#FFE0C8, #F5C4A0"
                      : event.category === "culture" ? "#D4ECD8, #B4D8BC"
                      : event.category === "festif" ? "#ECD4F4, #D8B4EC"
                      : event.category === "solidarite" ? "#FFF4CC, #F5E4B3"
                      : "#E8F0FF, #D0E0FF"
                    })`,
                  }}
                  role="img"
                  aria-label={`Illustration ${event.title}`}
                >
                  {event.emoji}
                </div>

                <h2 className="font-display font-bold text-2xl text-[#2D2416] mb-4">
                  À propos de cet événement
                </h2>
                <div className="space-y-3">
                  {event.longDescription.split("\n\n").map((para, i) => (
                    <p key={i} className="text-sm text-[#5C4033] leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {event.tags.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2" aria-label="Tags">
                    <Tag size={14} className="text-[#8B6F5E] mt-0.5" aria-hidden="true" />
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#F7F0E3] text-[#8B6F5E] px-2.5 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </BlurFadeIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <BlurFadeIn delay={0.15}>
                <div className="bg-[#F7F0E3] rounded-2xl p-5">
                  <h3 className="font-display font-bold text-base text-[#2D2416] mb-4">
                    Informations pratiques
                  </h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-wide text-[#C4622D] mb-0.5">Date</dt>
                      <dd className="text-sm text-[#5C4033]">{event.dateDisplay}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-wide text-[#C4622D] mb-0.5">Heure</dt>
                      <dd className="text-sm text-[#5C4033]">{event.time}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-wide text-[#C4622D] mb-0.5">Lieu</dt>
                      <dd className="text-sm text-[#5C4033]">{event.address}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-wide text-[#C4622D] mb-0.5">Catégorie</dt>
                      <dd className="text-sm">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${colors.bg} ${colors.text}`}>
                          {categoryLabels[event.category]}
                        </span>
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="bg-[#2D2416] rounded-2xl p-5 text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#E8885E] mb-2">
                    Une question ?
                  </p>
                  <p className="text-sm text-[rgba(247,240,227,0.65)] mb-4 leading-relaxed">
                    Contactez-nous pour plus d&apos;informations sur cet événement.
                  </p>
                  <Link
                    href={`/contact?sujet=${encodeURIComponent(event.title)}`}
                    className="inline-block bg-[#C4622D] text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#E8885E] transition-colors w-full text-center"
                  >
                    Nous contacter
                  </Link>
                </div>
              </BlurFadeIn>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
