"use client";

import { motion } from "framer-motion";
import { Zap, Handshake, BadgeCheck, Users } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "1 Gbps", label: "Max Speed" },
  { value: "3+", label: "Tier-1 Partners" },
  { value: "24/7", label: "Live Support" },
  { value: "100%", label: "Fibre" },
];

const features = [
  {
    icon: Zap,
    title: "Rooted in Ubuntu",
    desc: "Grounded in the African philosophy of humanity and togetherness.",
    color: "#F5B400",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    desc: "Backed by Openserve, Huawei & Vodafone — the best in the industry.",
    color: "#60a5fa",
  },
  {
    icon: BadgeCheck,
    title: "Business-First Approach",
    desc: "Every solution is tailored to your specific operational needs.",
    color: "#4ade80",
  },
  {
    icon: Users,
    title: "Bridging the Digital Divide",
    desc: "Making reliable connectivity inclusive across South Africa.",
    color: "#f87171",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-choose" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

          {/* ── LEFT: Photo panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden min-h-[340px] lg:min-h-[440px] order-2 lg:order-1"
          >
            <Image
              src="/about .png"
              alt="About Ubuntu Fibre"
              fill
              className="object-cover"
            />
            {/* Bottom scrim for stats readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07153D]/80 via-[#07153D]/10 to-transparent" />

            {/* Certified badge */}
            <div className="absolute top-5 left-5 bg-[#F5B400] text-[#07153D] text-[11px] font-black px-3.5 py-1.5 rounded-full shadow-lg tracking-wide">
              CERTIFIED TECH
            </div>

            {/* Stats grid */}
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-4 gap-2">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-3 py-2.5"
                >
                  <div className="text-base font-black text-white leading-none">{s.value}</div>
                  <div className="text-[10px] text-white/55 font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Content panel ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-[#07153D] px-7 py-8 flex flex-col justify-center order-1 lg:order-2"
          >
            <span className="inline-block px-3 py-1 bg-white/10 border border-white/15 text-white/70 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 w-fit">
              About Us
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 leading-tight">
              Why Choose <span className="text-[#F5B400]">Ubuntu Fibre?</span>
            </h2>

            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Connection beyond the internet — bringing people and businesses closer across South Africa.
            </p>

            <div className="space-y-2">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/8 hover:bg-white/10 transition-colors"
                >
                  <div
                    className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${f.color}20`, border: `1.5px solid ${f.color}40` }}
                  >
                    <f.icon size={15} style={{ color: f.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xs">{f.title}</h3>
                    <p className="text-white/40 text-xs">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-6 w-fit px-6 py-3 bg-[#F5B400] text-[#07153D] font-black rounded-xl hover:bg-[#e0a500] transition-colors shadow-lg shadow-yellow-500/20 text-sm"
            >
              Get In Touch
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
