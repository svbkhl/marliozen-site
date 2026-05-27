"use client"

import { stats } from "@/data/stats"
import BlurFadeIn from "@/components/shared/BlurFadeIn"
import CountUp from "@/components/shared/CountUp"

export default function StatsCounter() {
  return (
    <section className="bg-[#EDE5D0] py-16 md:py-20" aria-label="Chiffres clés">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <BlurFadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#C4622D] text-center mb-2">
            La Marlio'Zen en chiffres
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-[#2D2416] mb-12">
            Une association <em className="italic font-light text-[#4A7A56]">vivante</em>
          </h2>
        </BlurFadeIn>

        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
          aria-label="Statistiques de l'association"
        >
          {stats.map((stat, i) => (
            <BlurFadeIn key={stat.id} delay={i * 0.1}>
              <div
                className="text-center bg-[#F7F0E3] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                role="listitem"
              >
                <p
                  className="font-display text-5xl font-bold text-[#C4622D] leading-none mb-2"
                  aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
                >
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={1200 + i * 200}
                  />
                </p>
                <p className="font-bold text-sm text-[#2D2416] mb-1">{stat.label}</p>
                <p className="text-xs text-[#8B6F5E] leading-relaxed">{stat.description}</p>
              </div>
            </BlurFadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
