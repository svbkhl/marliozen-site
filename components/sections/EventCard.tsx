import Link from "next/link"
import { MapPin, Clock, ArrowRight } from "lucide-react"
import { type Event, categoryLabels, categoryColors } from "@/data/events"
import { cn } from "@/lib/utils"

interface EventCardProps {
  event: Event
  size?: "normal" | "compact"
}

export default function EventCard({ event, size = "normal" }: EventCardProps) {
  const colors = categoryColors[event.category]

  return (
    <article
      className={cn(
        "bg-[#EDE5D0] rounded-2xl overflow-hidden group hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(45,36,22,0.14)] transition-all duration-300 flex flex-col",
        size === "compact" && "flex-row items-center p-4 gap-4 rounded-xl"
      )}
      aria-labelledby={`event-${event.slug}`}
    >
      {size === "normal" && (
        /* Image placeholder with category color */
        <div
          className={cn(
            "h-44 flex items-center justify-center text-5xl relative overflow-hidden",
            "bg-gradient-to-br"
          )}
          style={{
            background: `linear-gradient(135deg, ${
              event.category === "sport"
                ? "#FFE0C8, #F5C4A0"
                : event.category === "culture"
                ? "#D4ECD8, #B4D8BC"
                : event.category === "festif"
                ? "#ECD4F4, #D8B4EC"
                : event.category === "solidarite"
                ? "#FFF4CC, #F5E4B3"
                : "#E8F0FF, #D0E0FF"
            })`,
          }}
          aria-hidden="true"
        >
          <span className="text-6xl filter drop-shadow-sm">{event.emoji}</span>
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span
              className={cn(
                "text-xs font-bold uppercase tracking-[0.06em] px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-sm",
                colors.text
              )}
            >
              {categoryLabels[event.category]}
            </span>
          </div>
        </div>
      )}

      <div className={cn("flex flex-col flex-1 p-5", size === "compact" && "p-0")}>
        {size === "compact" && (
          <div className="text-3xl mb-1" aria-hidden="true">{event.emoji}</div>
        )}

        {size === "normal" && (
          <p className="font-display italic font-light text-sm text-[#C4622D] mb-1">
            {event.dateDisplay}
          </p>
        )}

        <h3
          id={`event-${event.slug}`}
          className={cn(
            "font-display font-bold text-[#2D2416] leading-snug mb-2",
            size === "normal" ? "text-xl" : "text-base"
          )}
        >
          {event.title}
        </h3>

        {size === "normal" && (
          <p className="text-sm text-[#8B6F5E] leading-relaxed flex-1 mb-4 line-clamp-3">
            {event.description}
          </p>
        )}

        {size === "compact" && (
          <p className="text-xs text-[#8B6F5E] font-semibold">{event.dateDisplay}</p>
        )}

        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col gap-1">
            {size === "normal" && (
              <>
                <span className="flex items-center gap-1.5 text-xs text-[#8B6F5E] font-semibold">
                  <MapPin size={12} aria-hidden="true" className="text-[#C4622D]" />
                  {event.location}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#8B6F5E] font-semibold">
                  <Clock size={12} aria-hidden="true" className="text-[#C4622D]" />
                  {event.time}
                </span>
              </>
            )}
          </div>

          <Link
            href={`/evenements/${event.slug}`}
            className={cn(
              "inline-flex items-center gap-1 font-bold text-[#4A7A56] hover:gap-2 transition-all duration-200 text-sm",
              "group-hover:text-[#C4622D]"
            )}
            aria-label={`Voir les détails de ${event.title}`}
          >
            {size === "normal" ? "En savoir plus" : ""}
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
