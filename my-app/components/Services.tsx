"use client";

import { motion, Variants } from "framer-motion";
import { Network, TrendingUp, Headphones, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Network,
    tag: "For Businesses",
    title: "Fibre Network\nInstallation",
    tagline: "End-to-end fibre deployment — from site assessment to full go-live.",
    features: ["Site Assessment", "Seamless Deployment", "Openserve Expertise", "Minimal Downtime"],
    image: "/svc-network.jpg",
    overlayColor: "from-[#0A2E63]/70 to-[#0A2E63]/40",
    accent: "#F5B400",
    checkColor: "#F5B400",
  },
  {
    icon: TrendingUp,
    tag: "For ISPs",
    title: "Sales & Marketing\nSolutions",
    tagline: "Grow your subscriber base with targeted campaigns and strategic branding.",
    features: ["Strategic Planning", "Targeted Campaigns", "Brand Development", "Market Expansion"],
    image: "/svc-marketing.jpg",
    overlayColor: "from-[#006B35]/70 to-[#006B35]/40",
    accent: "#4ade80",
    checkColor: "#009B4D",
  },
  {
    icon: Headphones,
    tag: "Operations & CX",
    title: "Contact Centre\nManagement",
    tagline: "Result-driven inbound & outbound campaigns that boost productivity.",
    features: ["Outbound Telemarketing", "Inbound Support", "Campaign Design", "Productivity Optimisation"],
    image: "/svc-contact.jpg",
    overlayColor: "from-[#8B0000]/70 to-[#8B0000]/40",
    accent: "#fca5a5",
    checkColor: "#E31E24",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-[#07153D]/8 text-[#07153D] text-xs font-bold uppercase tracking-widest rounded-full mb-3">
            What We Offer
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-[#07153D] mb-3">
            Our Services
          </h2>
          <p className="text-slate-400 text-base max-w-lg mx-auto">
            Telecoms solutions built for businesses and ISPs across South Africa.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-default flex flex-col"
            >
              {/* Photo top panel */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title.replace("\n", " ")}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Colour-tinted overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b ${s.overlayColor}`} />

                {/* Tag */}
                <span
                  className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border backdrop-blur-sm"
                  style={{ color: s.accent, borderColor: `${s.accent}50`, backgroundColor: `${s.accent}18` }}
                >
                  {s.tag}
                </span>

                {/* Icon + Title pinned to bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 border"
                    style={{ backgroundColor: `${s.accent}20`, borderColor: `${s.accent}40` }}
                  >
                    <s.icon size={22} style={{ color: s.accent }} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight whitespace-pre-line drop-shadow-md">
                    {s.title}
                  </h3>
                </div>
              </div>

              {/* White bottom panel */}
              <div className="bg-white px-6 py-5 flex flex-col gap-4 flex-1">
                <p className="text-slate-500 text-sm leading-relaxed">{s.tagline}</p>
                <ul className="flex flex-col gap-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                      <CheckCircle2 size={15} className="shrink-0" style={{ color: s.checkColor }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 bg-[#07153D] text-white font-bold rounded-xl hover:bg-[#0e2460] transition-colors duration-200 shadow-lg shadow-[#07153D]/25 text-sm"
          >
            Enquire About Our Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
