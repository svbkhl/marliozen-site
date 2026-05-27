import Link from "next/link"
import { Heart, ArrowRight } from "lucide-react"
import OrganicShape from "@/components/shared/OrganicShape"
import BlurFadeIn from "@/components/shared/BlurFadeIn"

export default function CTASection() {
  return (
    <section className="relative bg-[#2D2416] py-20 overflow-hidden" aria-label="Rejoindre l'association">
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-16 -left-12 w-64 h-64 rounded-full bg-[#C4622D] blur-[80px] opacity-15" />
        <div className="absolute -bottom-16 -right-12 w-64 h-64 rounded-full bg-[#6B9E78] blur-[80px] opacity-12" />
        <OrganicShape
          variant={2}
          color="#C4622D"
          opacity={0.06}
          size={300}
          className="absolute top-1/2 left-[10%] -translate-y-1/2"
        />
        <OrganicShape
          variant={4}
          color="#D4A853"
          opacity={0.05}
          size={240}
          className="absolute top-1/2 right-[8%] -translate-y-1/2"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center">
        <BlurFadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#E8885E] mb-4">
            Rejoignez-nous
          </p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4rem)] font-bold text-[#F7F0E3] leading-tight mb-5">
            Faites partie de<br />
            <em className="italic font-light text-[#E8885E]">l&apos;aventure</em>
          </h2>
          <p className="text-base text-[rgba(247,240,227,0.65)] leading-relaxed max-w-lg mx-auto mb-10">
            Que vous souhaitiez adhérer, vous engager comme bénévole ou simplement
            participer aux événements, La Marlio'Zen vous ouvre ses portes.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/adherer"
              className="inline-flex items-center gap-2 bg-[#C4622D] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-[0_4px_20px_rgba(196,98,45,0.35)] hover:bg-[#E8885E] hover:-translate-y-0.5 transition-all duration-200"
            >
              <Heart size={16} aria-hidden="true" />
              Adhérer à l&apos;association
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-[rgba(247,240,227,0.25)] text-[#F7F0E3] px-7 py-3.5 rounded-full font-bold text-sm hover:border-[rgba(247,240,227,0.5)] hover:bg-[rgba(247,240,227,0.05)] transition-all duration-200"
            >
              Nous contacter <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </BlurFadeIn>
      </div>
    </section>
  )
}
