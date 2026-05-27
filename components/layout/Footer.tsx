import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Heart } from "lucide-react"

const links = {
  association: [
    { href: "/association", label: "Notre histoire" },
    { href: "/association#projet-social", label: "Projet social 2024–2027" },
    { href: "/association#equipe", label: "L'équipe et le bureau" },
    { href: "/association#rapport", label: "Rapport moral 2025" },
  ],
  actions: [
    { href: "/evenements/champions-d-aix-2026", label: "Champion's d'Aix III" },
    { href: "/evenements/cinema-plein-air-2026", label: "Cinéma plein air" },
    { href: "/evenements/fete-cuisines-du-monde-2026", label: "Cuisines du monde" },
    { href: "/evenements", label: "Tous les événements" },
  ],
  participer: [
    { href: "/adherer", label: "Devenir adhérent" },
    { href: "/adherer#benevole", label: "Devenir bénévole" },
    { href: "/partenaires", label: "Nos partenaires" },
    { href: "/partenaires#sponsor", label: "Devenir partenaire" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#2D2416] text-[rgba(247,240,227,0.75)]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* CTA band */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 py-10 border-b border-[rgba(247,240,227,0.1)]">
          <div>
            <p className="font-display font-bold text-2xl text-[#F7F0E3] leading-tight">
              Rejoignez la communauté !
            </p>
            <p className="text-sm text-[rgba(247,240,227,0.55)] mt-1">
              190 habitants déjà engagés pour leur quartier.
            </p>
          </div>
          <Link
            href="/adherer"
            className="flex items-center gap-2 bg-[#C4622D] text-white px-6 py-3 rounded-full font-bold text-sm shadow-[0_4px_20px_rgba(196,98,45,0.30)] hover:bg-[#E8885E] transition-colors whitespace-nowrap"
          >
            <Heart size={16} aria-hidden="true" />
            Adhérer / Bénévolat
          </Link>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white shadow-md shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Logo La Marlio'Zen"
                  fill
                  className="object-contain p-0.5"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="font-display font-bold text-xl text-[#F7F0E3] leading-none">
                  La Marlio'Zen
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#C4A8FF] mt-0.5">
                  Espace de Vie Sociale · Loi 1901
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[rgba(247,240,227,0.55)] max-w-64">
              Portée par ses habitants, pour ses habitants. La Marlio'Zen tisse le lien social
              du quartier de Marlioz à Aix-les-Bains depuis 2018.
            </p>

            {/* Contact */}
            <ul className="mt-5 space-y-2" aria-label="Coordonnées">
              <li className="flex items-start gap-2 text-sm text-[rgba(247,240,227,0.6)]">
                <MapPin size={14} className="text-[#E8885E] mt-0.5 shrink-0" aria-hidden="true" />
                <span>74 Bd de la Roche du Roi<br />73100 Aix-les-Bains</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={14} className="text-[#E8885E] shrink-0" aria-hidden="true" />
                <a
                  href="tel:0646316009"
                  className="text-[rgba(247,240,227,0.6)] hover:text-[#F7F0E3] transition-colors"
                >
                  06.46.31.60.09
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail size={14} className="text-[#E8885E] shrink-0" aria-hidden="true" />
                <a
                  href="mailto:contact@marliozen.fr"
                  className="text-[rgba(247,240,227,0.6)] hover:text-[#F7F0E3] transition-colors"
                >
                  contact@marliozen.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          {(
            [
              { title: "L'association", items: links.association },
              { title: "Nos actions", items: links.actions },
              { title: "Participer", items: links.participer },
            ] as const
          ).map(({ title, items }) => (
            <div key={title}>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#E8885E] mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5" role="list">
                {items.map((item) => (
                  <li key={item.href} role="listitem">
                    <Link
                      href={item.href}
                      className="text-sm text-[rgba(247,240,227,0.55)] hover:text-[#F7F0E3] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5 border-t border-[rgba(247,240,227,0.08)] text-xs text-[rgba(247,240,227,0.3)]">
          <p>© {new Date().getFullYear()} La Marlio'Zen · Association loi 1901 · Agrément EVS CAF Savoie</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-[rgba(247,240,227,0.6)] transition-colors">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-[rgba(247,240,227,0.6)] transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
