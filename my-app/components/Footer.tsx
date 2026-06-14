"use client";

import { motion } from "framer-motion";
import { ArrowUp, Mail, Phone } from "lucide-react";
import Image from "next/image";

const serviceLinks = [
  "Fibre Optic Network Installation",
  "Sales & Marketing Solutions",
  "Contact Centre Campaign Management",
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#why-choose" },
  { label: "Services", href: "#services" },
  { label: "Partnerships", href: "#partners" },
  { label: "Support", href: "#coverage" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 network-dots opacity-20" />

      {/* Top section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5 inline-block bg-white rounded-2xl p-2.5">
              <Image
                src="/logo.png"
                alt="Ubuntu Fibre Telecommunications"
                width={400}
                height={400}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed font-inter mb-6">
              Connecting homes and businesses across South Africa with
              enterprise-grade fibre infrastructure, reliable support, and
              competitive pricing.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+27844975834"
                className="flex items-center gap-2.5 text-slate-700 hover:text-ubuntu-blue transition-colors text-sm font-inter"
              >
                <Phone size={14} className="text-ubuntu-yellow" />
                +27 84 497 5834
              </a>
              <a
                href="mailto:info@ubuntufibre.co.za"
                className="flex items-center gap-2.5 text-slate-700 hover:text-ubuntu-blue transition-colors text-sm font-inter"
              >
                <Mail size={14} className="text-ubuntu-yellow" />
                info@ubuntufibre.co.za
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-wider mb-5 font-poppins">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleNav("#services")}
                    className="text-slate-700 hover:text-ubuntu-blue transition-colors text-sm font-inter hover:translate-x-1 inline-block transition-transform"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-wider mb-5 font-poppins">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-blue-200 hover:text-ubuntu-yellow transition-colors text-sm font-inter"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social + Legal */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-wider mb-5 font-poppins">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-2.5 mb-7">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-blue-200 hover:text-white hover:bg-ubuntu-yellow hover:border-ubuntu-yellow transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.svg}
                </motion.a>
              ))}
            </div>

            <div className="space-y-2">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider font-poppins">
                Legal
              </h4>
              {["Privacy Policy", "Terms of Service", "POPIA Compliance", "ICASA Accredited"].map((item) => (
                <button
                  key={item}
                  className="block text-blue-300 hover:text-ubuntu-yellow transition-colors text-xs font-inter"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brand color strip */}
      <div className="flex h-1">
        <div className="flex-1 bg-ubuntu-blue" />
        <div className="flex-1 bg-ubuntu-yellow" />
        <div className="flex-1 bg-ubuntu-green" />
        <div className="flex-1 bg-ubuntu-red" />
      </div>

      {/* Bottom bar */}
      <div className="relative bg-ubuntu-blue/80 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-300 text-xs font-inter text-center sm:text-left">
            &copy; {new Date().getFullYear()} Ubuntu Fibre Telecommunications (Pty) Ltd.
            All rights reserved. Registered in South Africa.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-blue-200 hover:text-ubuntu-yellow transition-colors text-xs font-inter"
            whileHover={{ y: -2 }}
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
