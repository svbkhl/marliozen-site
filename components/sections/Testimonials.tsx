import { testimonials } from "@/data/testimonials"
import SectionTitle from "@/components/shared/SectionTitle"
import BlurFadeIn from "@/components/shared/BlurFadeIn"
import { Quote } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="bg-[#F7F0E3] py-16 md:py-24" aria-labelledby="testimonials-title">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <BlurFadeIn className="mb-12">
          <SectionTitle
            eyebrow="Ils nous font confiance"
            title="La parole"
            titleItalic="des habitants"
            align="center"
          />
        </BlurFadeIn>

        <div
          className="grid md:grid-cols-2 gap-6"
          role="list"
          aria-label="Témoignages"
        >
          {testimonials.slice(0, 4).map((testimonial, i) => (
            <BlurFadeIn key={testimonial.id} delay={i * 0.1}>
              <blockquote
                className="relative bg-[#EDE5D0] rounded-2xl p-7 overflow-hidden group hover:shadow-md transition-shadow"
                role="listitem"
                cite={`${testimonial.name}, ${testimonial.role}`}
              >
                {/* Quote icon */}
                <Quote
                  size={36}
                  className="absolute top-5 right-5 text-[#C4622D] opacity-10 group-hover:opacity-20 transition-opacity"
                  aria-hidden="true"
                />

                <p className="text-base text-[#5C4033] leading-relaxed italic mb-6 relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <footer className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full bg-[#C4622D] flex items-center justify-center text-white font-bold text-sm shrink-0"
                    aria-hidden="true"
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <cite className="font-bold text-[#2D2416] text-sm not-italic block">
                      {testimonial.name}
                    </cite>
                    <p className="text-xs text-[#8B6F5E]">{testimonial.role}</p>
                    {testimonial.years && (
                      <p className="text-xs text-[#C4622D] font-semibold mt-0.5">
                        {testimonial.years}
                      </p>
                    )}
                  </div>
                </footer>
              </blockquote>
            </BlurFadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
