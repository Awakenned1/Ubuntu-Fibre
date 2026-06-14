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
          <div className="absolute inset-0 bg-gradient-to-r from-[#07153D]/75 via-[#07153D]/30 to-transparent" />
        </div>

        {/* Hero content — takes remaining space above partners */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center text-center"
          >

            {/* Logo icon + brand name — frosted pill for visibility */}
            <motion.div variants={item} className="mb-4">
              <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-md rounded-2xl px-6 py-4 shadow-sm">
                <Image
                  src="/ubuntulogo.png"
                  alt="Ubuntu Fibre icon"
                  width={70}
                  height={70}
                  priority
                  className="w-14 h-14 sm:w-16 sm:h-16"
                />
                <div className="text-left">
                  <div className="text-5xl sm:text-6xl font-black leading-none tracking-tight">
                    <span style={{ color: "#2D3D9D" }}>U</span>
                    <span style={{ color: "#F0B11D" }}>B</span>
                    <span style={{ color: "#111111" }}>U</span>
                    <span style={{ color: "#22A652" }}>N</span>
                    <span style={{ color: "#F1333A" }}>T</span>
                    <span style={{ color: "#2D3D9D" }}>U</span>
                  </div>
                  <p className="uppercase tracking-[0.28em] text-[10px] text-slate-600 font-bold mt-1">
                    Fibre Telecommunications
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={item}
              className="w-14 h-[3px] rounded-full bg-gradient-to-r from-[#2D3D9D] via-[#22A652] to-[#F1333A] mb-6"
            />

            {/* Slogan — strong shadow for legibility over vivid bg */}
            <motion.h1
              variants={item}
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#07153D] leading-snug mb-8 whitespace-nowrap [text-shadow:0_1px_12px_rgba(255,255,255,0.9),0_2px_4px_rgba(255,255,255,0.8)]"
            >
              Working Together{" "}
              <span className="text-[#1565FF]">To Get Connected</span>
            </motion.h1>

            {/* CTA */}
            <motion.div variants={item}>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center gap-3 px-9 py-4 rounded-full bg-[#E1262C] hover:bg-[#C91E24] text-white text-base font-bold shadow-lg shadow-red-400/25 transition-all hover:scale-105"
              >
                Get Connected Today
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

          </motion.div>
        </div>

        {/* ── PARTNERS — solid white strip ── */}
        <div className="relative z-10 w-full bg-white py-8 px-6">
          <p className="text-center uppercase tracking-[6px] text-slate-400 text-xs font-bold mb-6">
            Trusted Technology Partners
          </p>
          <div className="max-w-4xl mx-auto flex justify-center items-center gap-14 flex-wrap">
            {partners.map((p) => (
              <div key={p.name} className="opacity-70 hover:opacity-100 transition-opacity">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={200}
                  height={72}
                  className="object-contain h-16 w-auto"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
