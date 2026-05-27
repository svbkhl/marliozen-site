"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import MobileMenu from "./MobileMenu"

const navLinks = [
  { href: "/association", label: "L'association" },
  { href: "/evenements", label: "Événements" },
  { href: "/adherer", label: "Adhérer" },
  { href: "/partenaires", label: "Partenaires" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#F7F0E3]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(45,36,22,0.08)] border-b border-[#EDE5D0]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="La Marlio'Zen — Accueil"
          >
            <div className="relative w-11 h-11 md:w-13 md:h-13 shrink-0 rounded-lg overflow-hidden bg-white shadow-sm group-hover:shadow-md transition-shadow">
              <Image
                src="/logo.jpg"
                alt="Logo La Marlio'Zen"
                fill
                className="object-contain p-0.5"
                priority
                sizes="52px"
              />
            </div>
            <div className="leading-none">
              <span className="font-display font-bold text-lg md:text-xl text-[#3B28CC] group-hover:text-[#5540E0] transition-colors block">
                La Marlio'Zen
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#8B6F5E] hidden sm:block mt-0.5">
                Espace de Vie Sociale · Marlioz
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Navigation principale" className="hidden md:block">
            <ul className="flex items-center gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.href} role="listitem">
                  <Link
                    href={link.href}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
                      pathname === link.href
                        ? "text-[#3B28CC] bg-[#EDE8FF]"
                        : "text-[#5C4033] hover:text-[#3B28CC] hover:bg-[#EDE8FF]/60"
                    )}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <Link
              href="/adherer"
              className="hidden md:inline-flex items-center bg-[#3B28CC] text-white px-5 py-2 rounded-full text-sm font-bold shadow-[0_4px_16px_rgba(59,40,204,0.25)] hover:bg-[#5540E0] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(59,40,204,0.30)] transition-all duration-200"
            >
              Nous rejoindre
            </Link>
            <MobileMenu />
          </div>

        </div>
      </div>
    </header>
  )
}
