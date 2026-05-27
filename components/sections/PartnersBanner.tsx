import Link from "next/link"
import { partners } from "@/data/partners"
import BlurFadeIn from "@/components/shared/BlurFadeIn"

export default function PartnersBanner() {
  return (
    <section className="bg-[#EDE5D0] py-14 border-t border-[#DDD0BC]" aria-labelledby="partners-title">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <BlurFadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8B6F5E] text-center mb-2" id="partners-title">
            Soutenus par
          </p>
          <h2 className="font-display text-2xl font-bold text-center text-[#2D2416] mb-10 sr-only">
            Nos partenaires institutionnels
          </h2>
        </BlurFadeIn>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          role="list"
          aria-label="Partenaires institutionnels"
        >
          {partners.map((partner, i) => (
            <BlurFadeIn key={partner.id} delay={i * 0.08}>
              <div
                className="bg-[#F7F0E3] rounded-xl p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow group"
                role="listitem"
              >
                {/* Logo placeholder */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 shadow-sm"
                  style={{ background: partner.color }}
                  aria-hidden="true"
                >
                  {partner.shortName.slice(0, 2).toUpperCase()}
                </div>

                <p className="font-bold text-sm text-[#2D2416] leading-tight mb-1">
                  {partner.name}
                </p>
                <p className="text-xs text-[#8B6F5E] leading-snug">
                  {partner.role}
                </p>
              </div>
            </BlurFadeIn>
          ))}
        </div>

        <BlurFadeIn className="text-center mt-8">
          <Link
            href="/partenaires"
            className="text-sm font-bold text-[#C4622D] hover:underline underline-offset-2"
          >
            En savoir plus sur nos partenaires →
          </Link>
        </BlurFadeIn>
      </div>
    </section>
  )
}
