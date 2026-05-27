"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X, Menu, Heart } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/association", label: "L'association" },
  { href: "/evenements", label: "Événements" },
  { href: "/adherer", label: "Adhérer" },
  { href: "/partenaires", label: "Partenaires" },
  { href: "/contact", label: "Contact" },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        className="md:hidden p-2 rounded-lg text-[#2D2416] hover:bg-[#EDE5D0] transition-colors"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-[#2D2416]/40 z-40 md:hidden"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            <motion.nav
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-[#F7F0E3] z-50 flex flex-col shadow-2xl md:hidden"
              aria-label="Menu principal mobile"
            >
              <div className="flex items-center justify-between p-5 border-b border-[#EDE5D0]">
                <div>
                  <p className="font-display font-bold text-lg text-[#C4622D] leading-none">
                    La Marlio'Zen
                  </p>
                  <p className="text-xs text-[#8B6F5E] mt-0.5">
                    Espace de Vie Sociale
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Fermer le menu"
                  className="p-2 rounded-lg hover:bg-[#EDE5D0] transition-colors"
                >
                  <X size={20} className="text-[#5C4033]" />
                </button>
              </div>

              <ul className="flex-1 py-4 overflow-y-auto" role="list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                    role="listitem"
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center px-6 py-4 text-base font-semibold transition-colors",
                        "border-l-4 border-transparent",
                        pathname === link.href
                          ? "text-[#3B28CC] bg-[#EDE8FF] border-l-[#3B28CC]"
                          : "text-[#5C4033] hover:text-[#3B28CC] hover:bg-[#EDE8FF]/60"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="p-5 border-t border-[#EDE5D0]">
                <Link
                  href="/adherer"
                  className="flex items-center justify-center gap-2 w-full bg-[#3B28CC] text-white py-3 px-6 rounded-full font-bold text-sm transition-colors hover:bg-[#5540E0]"
                >
                  <Heart size={16} />
                  Nous rejoindre
                </Link>
                <p className="text-center text-xs text-[#8B6F5E] mt-3">
                  74 Bd de la Roche du Roi · 73100 Aix-les-Bains
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
