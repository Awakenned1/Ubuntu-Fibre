"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, ChevronRight, Wifi, Shield, Headphones } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Shield, value: "99.9%", label: "Network Uptime", delay: 0, color: "#F5B400" },
  { icon: Wifi, value: "5,000+", label: "Connected Users", delay: 1.2, color: "#009B4D" },
  { icon: Headphones, value: "24/7", label: "Support", delay: 2.4, color: "#E31E24" },
];

const partners = [
  { name: "Openserve", logo: "/openserve.png", darkBg: false },
  { name: "Huawei", logo: "/huawei.png", darkBg: false },
  { name: "Vodafone", logo: "/vodafone.png", darkBg: true },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center hero-gradient overflow-hidden pt-16 sm:pt-20"
    >
      {/* Network dot pattern overlay */}
      <div className="absolute inset-0 network-dots opacity-60" />

      {/* Decorative light streaks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-px h-64 rotate-45 opacity-20"
          style={{ background: "linear-gradient(to bottom, transparent, #F5B400, transparent)" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-px h-48 -rotate-45 opacity-15"
          style={{ background: "linear-gradient(to bottom, transparent, #009B4D, transparent)" }}
        />
        <div
          className="absolute bottom-0 -left-24 w-80 h-80 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #F5B400 0%, transparent 70%)" }}
        />
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #123F85 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left Column ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-white"
          >
            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] mb-5 sm:mb-7 font-poppins tracking-tight"
            >
              Working{" "}
              <span className="text-ubuntu-yellow">Together</span>
              <br />
              to Get{" "}
              <span
                className="relative inline-block"
                style={{
                  background: "linear-gradient(90deg, #F5B400 0%, #fff 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Connected
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-lg text-blue-100 leading-relaxed mb-7 sm:mb-9 max-w-lg font-inter"
            >
              Bridging the digital divide through fibre connectivity, ISP growth solutions,
              and enterprise networking across South Africa.
            </motion.p>

            {/* Buttons — stack on mobile, side-by-side on sm+ */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
              <motion.button
                onClick={() => {
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-ubuntu-yellow text-ubuntu-blue font-bold rounded-xl hover:bg-yellow-400 transition-all duration-200 shadow-lg shadow-ubuntu-yellow/30 font-poppins text-sm"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Connected
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                onClick={() => {
                  document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/25 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 font-poppins text-sm"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Our Services
                <ChevronRight size={16} className="text-ubuntu-yellow group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Mobile-only stats strip — hidden on sm and above */}
            <motion.div variants={itemVariants} className="sm:hidden grid grid-cols-3 gap-2 mb-7">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-3 text-center"
                >
                  <div className="text-white font-black text-base leading-tight font-poppins">
                    {stat.value}
                  </div>
                  <div className="text-blue-200 text-xs font-inter mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Partner logos */}
            <motion.div variants={itemVariants}>
              <p className="text-blue-300 text-xs font-medium uppercase tracking-wider mb-3 font-inter">
                Trusted Technology Partners
              </p>
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                {partners.map((p) => (
                  <div
                    key={p.name}
                    className={`flex items-center justify-center rounded-xl px-2 sm:px-3 py-1.5 sm:py-2 border transition-all duration-200 hover:scale-105 ${
                      p.darkBg
                        ? "bg-ubuntu-red border-ubuntu-red/60"
                        : "bg-white border-white/80"
                    }`}
                    title={p.name}
                  >
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={88}
                      height={36}
                      className="object-contain h-6 sm:h-8 w-auto"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Column — Logo ── */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-[260px] sm:max-w-md lg:max-w-lg flex items-center justify-center"
            >
              {/* Glow backdrop */}
              <div
                className="absolute inset-0 rounded-full opacity-20 blur-3xl"
                style={{ background: "radial-gradient(circle, #F5B400 0%, transparent 70%)" }}
              />

              {/* Logo card */}
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10 sm:p-14 shadow-2xl">
                <Image
                  src="/logo.png"
                  alt="Ubuntu Fibre Telecommunications"
                  width={400}
                  height={400}
                  className="h-28 sm:h-40 lg:h-52 w-auto"
                  priority
                />
              </div>

              {/* Floating stat cards — sm and above only */}
              <div className="hidden sm:block">
                {stats.map((stat, i) => (
                  <FloatingStatCard key={stat.label} stat={stat} index={i} />
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}


function FloatingStatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const positions = [
    "absolute -left-4 top-1/4 sm:-left-10",
    "absolute -right-4 top-1/3 sm:-right-10",
    "absolute left-1/2 -translate-x-1/2 -bottom-4",
  ];

  return (
    <motion.div
      className={`${positions[index]} glass-card rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 min-w-[110px] sm:min-w-[130px] text-center shadow-xl`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { delay: 0.6 + index * 0.2, duration: 0.5 },
        scale: { delay: 0.6 + index * 0.2, duration: 0.5 },
        y: {
          delay: stat.delay,
          duration: 3 + index * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <div
        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2"
        style={{ backgroundColor: `${stat.color}22`, border: `1px solid ${stat.color}44` }}
      >
        <stat.icon size={14} style={{ color: stat.color }} />
      </div>
      <div className="text-white font-black text-base sm:text-lg leading-tight font-poppins">
        {stat.value}
      </div>
      <div className="text-blue-200 text-xs font-medium font-inter">{stat.label}</div>
    </motion.div>
  );
}
