import { values } from "@/data/values"
import SectionTitle from "@/components/shared/SectionTitle"
import BlurFadeIn from "@/components/shared/BlurFadeIn"

export default function ValueCards() {
  return (
    <section className="bg-[#F7F0E3] py-16 md:py-24" aria-labelledby="values-title">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <BlurFadeIn className="mb-12">
          <SectionTitle
            eyebrow="Ce qui nous guide"
            title="Nos valeurs"
            titleItalic="fondamentales"
            description="Quatre piliers qui orientent chacune de nos actions et font de La Marlio'Zen un espace de vie sociale unique au cœur du quartier."
            align="center"
          />
        </BlurFadeIn>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Valeurs de l'association"
        >
          {values.map((value, i) => (
            <BlurFadeIn key={value.id} delay={i * 0.1}>
              <article
                className="relative bg-[#EDE5D0] rounded-2xl p-6 overflow-hidden group hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                style={{ borderTop: `4px solid ${value.color}` }}
                role="listitem"
              >
                {/* Decorative blob */}
                <div
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-10 pointer-events-none transition-transform duration-500 group-hover:scale-125"
                  style={{ background: value.color }}
                  aria-hidden="true"
                />

                <div className="text-4xl mb-4" role="img" aria-label={value.title}>
                  {value.icon}
                </div>

                <h3
                  className="font-display font-bold text-xl text-[#2D2416] mb-3 leading-tight"
                  id={`value-${value.id}`}
                >
                  {value.title}
                </h3>

                <p className="text-sm text-[#5C4033] leading-relaxed">
                  {value.description}
                </p>
              </article>
            </BlurFadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
