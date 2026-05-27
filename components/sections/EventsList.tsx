import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getFeaturedEvents } from "@/data/events"
import EventCard from "./EventCard"
import SectionTitle from "@/components/shared/SectionTitle"
import BlurFadeIn from "@/components/shared/BlurFadeIn"

export default function EventsList() {
  const events = getFeaturedEvents()

  return (
    <section className="bg-[#EDE5D0] py-16 md:py-24 relative overflow-hidden" aria-labelledby="events-title">
      {/* Decorative background element */}
      <div className="absolute -top-20 -right-16 w-72 h-72 rounded-full bg-[#F5E4B3] blur-[60px] opacity-50 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <BlurFadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionTitle
            eyebrow="Agenda du quartier"
            title="Prochains"
            titleItalic="événements"
          />
          <Link
            href="/evenements"
            className="inline-flex items-center gap-1.5 text-[#C4622D] font-bold text-sm hover:gap-2.5 transition-all duration-200 whitespace-nowrap"
          >
            Tout voir <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </BlurFadeIn>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Prochains événements"
        >
          {events.map((event, i) => (
            <BlurFadeIn
              key={event.slug}
              delay={i * 0.12}
              className={i === 1 ? "lg:mt-6" : ""}
            >
              <div role="listitem">
                <EventCard event={event} />
              </div>
            </BlurFadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
