"use client"

import { useState } from "react"
import { events, categoryLabels, type EventCategory } from "@/data/events"
import EventCard from "@/components/sections/EventCard"
import BlurFadeIn from "@/components/shared/BlurFadeIn"

const categories: (EventCategory | "tous")[] = [
  "tous",
  "sport",
  "culture",
  "solidarite",
  "festif",
  "famille",
]

const categoryBtnLabels: Record<EventCategory | "tous", string> = {
  tous: "Tous",
  ...categoryLabels,
}

export default function EvenementsPage() {
  const [filter, setFilter] = useState<EventCategory | "tous">("tous")

  const upcoming = events.filter((e) => e.upcoming)
  const past = events.filter((e) => !e.upcoming)

  const filtered = (list: typeof events) =>
    filter === "tous" ? list : list.filter((e) => e.category === filter)

  return (
    <>
      {/* Hero */}
      <section className="bg-[#F7F0E3] pt-28 pb-14 relative overflow-hidden" aria-label="Événements de l'association">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#F5D5C0] blur-[70px] opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <BlurFadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#C4622D] mb-3">
              Agenda du quartier
            </p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] font-bold text-[#2D2416] leading-tight mb-4">
              Nos <em className="italic font-light text-[#C4622D]">événements</em>
            </h1>
            <p className="text-base text-[#5C4033] max-w-lg">
              Découvrez tout ce qui se passe au quartier de Marlioz. Sport, culture, solidarité, fêtes et rencontres&nbsp;: il y a toujours quelque chose à vivre ensemble.
            </p>
          </BlurFadeIn>
        </div>
      </section>

      {/* Filter bar */}
      <div className="sticky top-16 z-30 bg-[#F7F0E3]/95 backdrop-blur-md border-b border-[#EDE5D0]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-3">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none" role="group" aria-label="Filtrer par catégorie">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  filter === cat
                    ? "bg-[#C4622D] text-white shadow-[0_2px_10px_rgba(196,98,45,0.30)]"
                    : "bg-[#EDE5D0] text-[#5C4033] hover:bg-[#DDD0BC]"
                }`}
                aria-pressed={filter === cat}
              >
                {categoryBtnLabels[cat]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming events */}
      <section className="bg-[#F7F0E3] py-14" aria-labelledby="upcoming-title">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 id="upcoming-title" className="font-display font-bold text-2xl text-[#2D2416] mb-8">
            À venir
          </h2>

          {filtered(upcoming).length === 0 ? (
            <p className="text-[#8B6F5E] text-center py-12">
              Aucun événement dans cette catégorie pour le moment.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Événements à venir">
              {filtered(upcoming).map((event, i) => (
                <BlurFadeIn key={event.slug} delay={i * 0.08}>
                  <div role="listitem">
                    <EventCard event={event} />
                  </div>
                </BlurFadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Past events */}
      {filtered(past).length > 0 && (
        <section className="bg-[#EDE5D0] py-14" aria-labelledby="past-title">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <h2 id="past-title" className="font-display font-bold text-2xl text-[#2D2416] mb-8">
              Événements passés
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" role="list" aria-label="Événements passés">
              {filtered(past).map((event, i) => (
                <BlurFadeIn key={event.slug} delay={i * 0.08}>
                  <div role="listitem">
                    <EventCard event={event} size="compact" />
                  </div>
                </BlurFadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
