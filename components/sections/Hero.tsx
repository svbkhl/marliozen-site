import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Calendar, Building2 } from "lucide-react"
import OrganicShape from "@/components/shared/OrganicShape"
import BlurFadeIn from "@/components/shared/BlurFadeIn"
import CountUp from "@/components/shared/CountUp"

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#F7F0E3] pt-16"
      aria-label="Présentation de l'association"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 -right-24 w-[500px] h-[500px] rounded-full bg-[#DDD5FF] blur-[90px] opacity-40" />
        <div className="absolute bottom-0 -left-20 w-[380px] h-[380px] rounded-full bg-[#C8E0CC] blur-[60px] opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full bg-[#F5E4B3] blur-[40px] opacity-30" />

        <OrganicShape
          variant={1}
          color="#3B28CC"
          opacity={0.05}
          size={320}
          className="absolute top-16 right-[5%]"
        />
        <OrganicShape
          variant={3}
          color="#6B9E78"
          opacity={0.05}
          size={260}
          className="absolute bottom-20 left-[3%]"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <BlurFadeIn delay={0} duration={0.6}>
              <div className="inline-flex items-center gap-2 bg-[#EDE8FF] text-[#3B28CC] text-xs font-bold uppercase tracking-[0.1em] px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B28CC]" aria-hidden="true" />
                EVS agréé CAF · Marlioz, Aix-les-Bains
              </div>
            </BlurFadeIn>

            <BlurFadeIn delay={0.1} duration={0.7}>
              <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[1.0] text-[#2D2416] tracking-tight mb-4">
                L&apos;Espace<br />
                de{" "}
                <em className="italic font-light text-[#3B28CC]">Vie&nbsp;Sociale</em>
                <br />
                du quartier
              </h1>
            </BlurFadeIn>

            <BlurFadeIn delay={0.2} duration={0.6}>
              <p className="text-lg text-[#5C4033] leading-relaxed max-w-lg mb-8">
                Une association portée par ses habitants pour créer du lien, organiser des moments
                partagés et accompagner tous les Marliolins dans leur quotidien.
              </p>
            </BlurFadeIn>

            <BlurFadeIn delay={0.3} duration={0.6}>
              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href="/association"
                  className="inline-flex items-center gap-2 bg-[#3B28CC] text-white px-6 py-3 rounded-full font-bold text-sm shadow-[0_4px_20px_rgba(59,40,204,0.30)] hover:bg-[#5540E0] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(59,40,204,0.35)] transition-all duration-200"
                >
                  Découvrir l&apos;association
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link
                  href="/adherer"
                  className="inline-flex items-center gap-1.5 text-[#4A7A56] font-bold text-sm hover:gap-2.5 transition-all duration-200"
                >
                  Nous rejoindre <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </BlurFadeIn>

            {/* Stats */}
            <BlurFadeIn delay={0.45} duration={0.6}>
              <div
                className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-[rgba(59,40,204,0.12)]"
                role="list"
                aria-label="Chiffres clés"
              >
                {[
                  { icon: Users, target: 190, suffix: "", label: "Adhérents & bénévoles", duration: 1600 },
                  { icon: Calendar, target: 15, suffix: "+", label: "Événements / an", duration: 1200 },
                  { icon: Building2, target: 4, suffix: "", label: "Partenaires institutionnels", duration: 800 },
                ].map(({ icon: Icon, target, suffix, label, duration }) => (
                  <div key={label} role="listitem">
                    <p className="font-display text-4xl font-bold text-[#3B28CC] leading-none" aria-label={`${target}${suffix} ${label}`}>
                      <CountUp target={target} suffix={suffix} duration={duration} />
                    </p>
                    <p className="text-xs font-semibold text-[#8B6F5E] uppercase tracking-[0.06em] mt-1">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </BlurFadeIn>
          </div>

          {/* Right: logo + visual cards */}
          <BlurFadeIn delay={0.35} duration={0.8} direction="left" className="relative hidden lg:flex justify-center items-center">
            <div className="relative w-96 h-[440px]" aria-hidden="true">

              {/* Big logo in background */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 opacity-90 drop-shadow-xl">
                <Image
                  src="/logo.jpg"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="256px"
                />
              </div>

              {/* Event card — below logo */}
              <div className="absolute bottom-24 left-0 w-64 rounded-2xl bg-white shadow-lg p-4 border border-[#EDE5D0]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">⚽</span>
                  <span className="text-xs font-bold uppercase tracking-wide text-[#3B28CC]">Sport</span>
                </div>
                <p className="font-display font-bold text-sm text-[#2D2416] leading-tight mb-1">
                  Champion&apos;s d&apos;Aix
                </p>
                <p className="text-xs text-[#8B6F5E] font-semibold">
                  Stade Garibaldi · 14 juin 2025
                </p>
              </div>

              {/* Stat card */}
              <div className="absolute bottom-0 right-0 w-44 rounded-2xl bg-gradient-to-br from-[#3B28CC] to-[#6B4EFF] shadow-lg p-4 text-center">
                <p className="font-display text-4xl font-bold text-white leading-none">190</p>
                <p className="text-xs font-bold text-white/80 uppercase tracking-[0.08em] mt-1">membres actifs</p>
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-28 right-2 bg-[#F7F0E3] rounded-xl px-3 py-2 shadow-md flex items-center gap-2 text-xs font-bold text-[#2D2416] animate-[float_3s_ease-in-out_infinite]">
                <span className="w-2 h-2 rounded-full bg-[#6B9E78]" />
                Ciné plein air · Juillet
              </div>

            </div>
          </BlurFadeIn>
        </div>
      </div>

      {/* Torn paper bottom edge */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-12 block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 L0,60 C40,50 80,60 120,52 C160,44 200,58 240,50 C280,42 320,56 360,48 C400,40 440,54 480,46 C520,38 560,52 600,44 C640,36 680,50 720,42 C760,34 800,48 840,40 C880,32 920,46 960,38 C1000,30 1040,44 1080,36 C1120,28 1160,42 1200,34 C1240,26 1280,40 1320,32 C1360,24 1400,38 1440,30 L1440,0 Z"
            fill="#EDE5D0"
          />
        </svg>
      </div>
    </section>
  )
}
