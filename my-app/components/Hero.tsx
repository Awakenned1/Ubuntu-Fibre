"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const partners = [
  { name: "Openserve", logo: "/openserve.png" },
  { name: "Huawei", logo: "/huawei.png" },
  { name: "Vodafone", logo: "/vodafone.png" },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col overflow-hidden">

      {/* ── FULL VIEWPORT: hero + partners together ── */}
      <div className="relative min-h-screen flex flex-col">

        {/* Background with dark transparency overlay */}
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
          {/* Subtle dark vignette — image is already dark */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>

        {/* Hero content — takes remaining space above partners */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center text-center"
          >

            {/* Logo — dark frosted glass pill */}
            <motion.div variants={item} className="mb-6">
              <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 shadow-lg">
                <Image
                  src="/ubuntulogo.png"
                  alt="Ubuntu Fibre"
                  width={56}
                  height={56}
                  priority
                  className="w-12 h-12"
                />
                <div className="text-left">
                  <div className="text-4xl sm:text-5xl font-black leading-none tracking-tight">
                    <span style={{ color: "#5B8FFF" }}>U</span>
                    <span style={{ color: "#F5B400" }}>B</span>
                    <span style={{ color: "#ffffff" }}>U</span>
                    <span style={{ color: "#22A652" }}>N</span>
                    <span style={{ color: "#FF6B6B" }}>T</span>
                    <span style={{ color: "#5B8FFF" }}>U</span>
                  </div>
                  <p className="uppercase tracking-[0.28em] text-[10px] text-white/60 font-bold mt-1">
                    Fibre Telecommunications
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={item}
              className="w-14 h-[3px] rounded-full bg-gradient-to-r from-[#5B8FFF] via-[#22A652] to-[#F5B400] mb-6"
            />

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-3"
            >
              Working Together{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5B400] to-[#FFD04D]">
                To Get Connected
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={item} className="text-white/60 text-base sm:text-lg mb-8 max-w-lg">
              Fast, reliable fibre across South Africa — for homes and businesses.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[#F5B400] hover:bg-[#e0a500] text-[#07153D] text-base font-black shadow-xl shadow-yellow-500/30 transition-all hover:scale-105"
              >
                Get Connected Today
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.querySelector("#plans")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white text-base font-semibold hover:bg-white/10 transition-all"
              >
                View Plans
              </button>
            </motion.div>

          </motion.div>
        </div>

        {/* ── PARTNERS — scrolling marquee ── */}
        <div className="relative z-10 w-full bg-white py-7 border-t border-slate-100 overflow-hidden">
          <p className="text-center uppercase tracking-[6px] text-slate-400 text-[10px] font-bold mb-5">
            Trusted Technology Partners
          </p>

          {/* Marquee track */}
          <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex gap-16 items-center animate-marquee whitespace-nowrap">
              {[...partners, ...partners, ...partners].map((p, i) => (
                <div key={`${p.name}-${i}`} className="opacity-80 hover:opacity-100 transition-opacity shrink-0">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={200}
                    height={72}
                    className="object-contain h-14 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
