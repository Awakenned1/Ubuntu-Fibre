"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Plans", href: "#plans" },
  { label: "About Us", href: "#about-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md h-14" : "bg-white h-16 lg:h-20"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-[1600px] mx-auto h-full px-6 md:px-12 lg:px-16 flex items-center justify-between gap-8">
          <div className="relative w-44 sm:w-52 lg:w-60 h-full flex items-center flex-shrink-0">
            <button
              onClick={() => handleNavClick("#home")}
              className="absolute left-0 w-full h-[155%] max-h-24 focus:outline-none transition-transform hover:scale-[1.02]"
              aria-label="Ubuntu Fibre Home"
              suppressHydrationWarning
            >
              <Image
                src="/logo.png"
                alt="Ubuntu Fibre Telecommunications"
                fill
                sizes="(max-width: 768px) 176px, (max-width: 1024px) 208px, 240px"
                className="object-contain object-left"
                priority
              />
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-8 xl:gap-12" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="group relative px-1 py-2 text-base font-medium text-slate-600 hover:text-blue-600 transition-colors duration-200"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#006ee6] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center flex-shrink-0">
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-7 py-2 bg-[#006ee6] text-white rounded-full text-base font-semibold tracking-wide hover:bg-blue-700 shadow-sm transition-all hover:shadow-md"
            >
              Get Fibre
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              className="absolute top-0 right-0 bottom-0 w-80 bg-white shadow-2xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="relative w-36 h-10">
                  <Image
                    src="/logo.png"
                    alt="Ubuntu Fibre Telecommunications"
                    fill
                    className="object-contain"
                  />
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-5 py-6 space-y-2">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 font-medium transition-colors text-base"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              <div className="p-6 border-t border-gray-100">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full py-3 bg-[#006ee6] text-white rounded-full font-semibold text-base hover:bg-blue-700 transition-colors"
                >
                  Get Fibre
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}