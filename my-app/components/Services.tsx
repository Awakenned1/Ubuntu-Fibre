"use client";

import { motion, Variants } from "framer-motion";
import { Network, TrendingUp, Headphones, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Network,
    tag: "For Businesses",
    title: "Fibre Network\nInstallation",
    tagline: "End-to-end fibre deployment — from site assessment to full go-live.",
    features: ["Site Assessment", "Seamless Deployment", "Openserve Expertise", "Minimal Downtime"],
    gradient: "from-[#0A2E63] to-[#1a4a8a]",
    accent: "#F5B400",
    iconBg: "bg-yellow-400/10 border-yellow-400/20",
    iconColor: "#F5B400",
  },
  {
    icon: TrendingUp,
    tag: "For ISPs",
    title: "Sales & Marketing\nSolutions",
    tagline: "Grow your subscriber base with targeted campaigns and strategic branding.",
    features: ["Strategic Planning", "Targeted Campaigns", "Brand Development", "Market Expansion"],
    gradient: "from-[#006B35] to-[#009B4D]",
    accent: "#4ade80",
    iconBg: "bg-green-400/10 border-green-400/20",
    iconColor: "#4ade80",
  },
  {
    icon: Headphones,
    tag: "Operations & CX",
    title: "Contact Centre\nManagement",
    tagline: "Result-driven inbound & outbound campaigns that boost productivity.",
    features: ["Outbound Telemarketing", "Inbound Support", "Campaign Design", "Productivity Optimisation"],
    gradient: "from-[#8B0000] to-[#E31E24]",
    accent: "#fca5a5",
    iconBg: "bg-red-400/10 border-red-400/20",
    iconColor: "#fca5a5",
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
    <section id="services" className="py-20 lg:py-28 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-[#07153D]/8 text-[#07153D] text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#07153D] mb-3">
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
              {/* Coloured top panel */}
              <div className={`bg-gradient-to-br ${s.gradient} px-8 pt-10 pb-12 relative overflow-hidden`}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full border-[40px] border-white" />
                  <div className="absolute -right-4 bottom-4 w-24 h-24 rounded-full border-[20px] border-white" />
                </div>

                {/* Tag */}
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border"
                  style={{ color: s.accent, borderColor: `${s.accent}40`, backgroundColor: `${s.accent}15` }}
                >
                  {s.tag}
                </span>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border ${s.iconBg}`}
                >
                  <s.icon size={30} style={{ color: s.iconColor }} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-white leading-tight whitespace-pre-line">
                  {s.title}
                </h3>
              </div>

              {/* White bottom panel */}
              <div className="bg-white px-8 py-6 flex flex-col gap-5 flex-1">
                <p className="text-slate-500 text-sm leading-relaxed">{s.tagline}</p>

                <ul className="flex flex-col gap-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                      <CheckCircle2 size={15} className="shrink-0" style={{ color: s.iconColor === "#fca5a5" ? "#E31E24" : s.iconColor === "#4ade80" ? "#009B4D" : "#F5B400" }} />
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
