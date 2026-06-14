"use client";

import { motion } from "framer-motion";
import { Zap, HeadphonesIcon, Handshake, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Rooted in Ubuntu",
    description:
      "Our name reflects our values. Grounded in the African philosophy of Ubuntu — humanity and togetherness — we believe connection is about more than just internet.",
    color: "#F5B400",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description:
      "We work alongside Openserve, Huawei, and Vodafone — technology leaders who share our commitment to quality infrastructure and innovation across South Africa.",
    color: "#0A2E63",
  },
  {
    icon: BadgeCheck,
    title: "Business-First Approach",
    description:
      "Every solution we build is tailored to business needs — from seamless fibre installation through to ISP marketing and contact centre operations.",
    color: "#009B4D",
  },
  {
    icon: HeadphonesIcon,
    title: "Bridging the Digital Divide",
    description:
      "We are driven by a mission to make reliable, high-speed connectivity accessible and inclusive — empowering communities and businesses across South Africa.",
    color: "#E31E24",
  },
];

export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-20 lg:py-28 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Visual — shows below text on mobile, left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <TechnicianVisual />
          </motion.div>

          {/* Content — shows first on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-1.5 bg-ubuntu-blue/8 text-ubuntu-blue text-xs font-bold uppercase tracking-widest rounded-full mb-4 font-poppins">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ubuntu-blue mb-4 font-poppins leading-tight">
              Why Choose
              <br />
              <span className="text-ubuntu-yellow">Ubuntu Fibre?</span>
            </h2>
            <p className="text-gray-500 mb-8 text-base leading-relaxed font-inter">
              At Ubuntu Fibre, we believe in the power of connection — not just to the
              internet, but to each other. We strive to bring people and businesses
              closer through reliable, high-speed fibre solutions and a commitment to
              community empowerment.
            </p>

            <div className="space-y-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${feature.color}15`,
                      border: `1.5px solid ${feature.color}30`,
                    }}
                  >
                    <feature.icon size={20} style={{ color: feature.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-text mb-1 font-poppins text-base">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-inter">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 px-7 py-3.5 bg-ubuntu-blue text-white font-bold rounded-xl hover:bg-ubuntu-sec transition-colors duration-200 shadow-lg shadow-ubuntu-blue/25 font-poppins text-sm"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TechnicianVisual() {
  return (
    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[4/4] lg:aspect-[4/5] max-w-sm mx-auto lg:max-w-full">
      {/* Main background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ubuntu-blue via-ubuntu-sec to-ubuntu-blue" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 network-dots opacity-40" />

      {/* Decorative elements */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-white">
        {/* Abstract tech illustration */}
        <svg viewBox="0 0 300 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs">
          {/* Person silhouette */}
          <circle cx="150" cy="70" r="35" fill="rgba(245,180,0,0.3)" stroke="rgba(245,180,0,0.6)" strokeWidth="2" />
          <circle cx="150" cy="70" r="22" fill="rgba(245,180,0,0.5)" />
          <path d="M100 140 Q110 120 150 115 Q190 120 200 140 L210 220 Q210 240 150 240 Q90 240 90 220 Z" fill="rgba(18,63,133,0.6)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

          {/* Laptop/device */}
          <rect x="100" y="190" width="100" height="65" rx="6" fill="rgba(10,46,99,0.8)" stroke="rgba(245,180,0,0.5)" strokeWidth="1.5" />
          <rect x="106" y="196" width="88" height="50" rx="3" fill="rgba(18,63,133,0.6)" />
          {/* Screen content lines */}
          <rect x="112" y="204" width="40" height="3" rx="1.5" fill="rgba(245,180,0,0.6)" />
          <rect x="112" y="211" width="60" height="2" rx="1" fill="rgba(255,255,255,0.3)" />
          <rect x="112" y="216" width="50" height="2" rx="1" fill="rgba(255,255,255,0.25)" />
          <rect x="112" y="221" width="55" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
          {/* Signal bars on screen */}
          <rect x="160" y="218" width="5" height="10" rx="2" fill="rgba(0,155,77,0.8)" />
          <rect x="168" y="214" width="5" height="14" rx="2" fill="rgba(0,155,77,0.6)" />
          <rect x="176" y="208" width="5" height="20" rx="2" fill="rgba(0,155,77,0.9)" />

          {/* Fibre cables around person */}
          <path d="M50 80 Q80 100 100 140" stroke="rgba(245,180,0,0.5)" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M250 80 Q220 100 200 140" stroke="rgba(0,155,77,0.5)" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M50 250 Q80 230 90 220" stroke="rgba(227,30,36,0.5)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M250 250 Q220 230 210 220" stroke="rgba(245,180,0,0.4)" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Network nodes */}
          <circle cx="50" cy="80" r="8" fill="rgba(245,180,0,0.7)" />
          <circle cx="250" cy="80" r="8" fill="rgba(0,155,77,0.7)" />
          <circle cx="50" cy="250" r="8" fill="rgba(227,30,36,0.7)" />
          <circle cx="250" cy="250" r="8" fill="rgba(245,180,0,0.7)" />

          {/* Speed indicators */}
          <g transform="translate(0, 270)">
            <rect x="60" y="0" width="180" height="35" rx="10" fill="rgba(245,180,0,0.15)" stroke="rgba(245,180,0,0.3)" strokeWidth="1" />
            <text x="150" y="13" textAnchor="middle" fill="rgba(245,180,0,0.9)" fontSize="8" fontFamily="system-ui" fontWeight="600">CONNECTED AT</text>
            <text x="150" y="26" textAnchor="middle" fill="white" fontSize="12" fontFamily="system-ui" fontWeight="800">1 Gbps</text>
          </g>
        </svg>
      </div>

      {/* Overlay badges */}
      <div className="absolute top-5 right-5 bg-ubuntu-yellow text-ubuntu-blue text-xs font-black px-3 py-1.5 rounded-full font-poppins shadow-lg">
        CERTIFIED TECH
      </div>
      <div className="absolute bottom-5 left-5 bg-ubuntu-green/90 text-white text-xs font-bold px-3 py-1.5 rounded-full font-poppins shadow-lg flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        LIVE SUPPORT
      </div>
    </div>
  );
}
