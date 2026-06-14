"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, CheckCircle, Loader, Building2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success";

export default function Coverage() {
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = () => {
    if (!company.trim() || !location.trim()) return;
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1800);
  };

  const handleReset = () => {
    setCompany("");
    setLocation("");
    setStatus("idle");
  };

  return (
    <section id="coverage" className="py-20 lg:py-28 hero-gradient relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 network-dots opacity-50" />

      {/* Animated nodes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-ubuntu-yellow/40"
          style={{ left: `${10 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ scale: [1, 2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: SA Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center order-2 lg:order-1"
          >
            <SouthAfricaMap />
          </motion.div>

          {/* Right: Assessment request */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white order-1 lg:order-2"
          >
            <span className="inline-block px-4 py-1.5 bg-ubuntu-yellow/15 border border-ubuntu-yellow/30 text-ubuntu-yellow text-xs font-bold uppercase tracking-widest rounded-full mb-5 font-poppins">
              Support & Assessment
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 font-poppins leading-tight">
              Request a{" "}
              <span className="text-gradient-yellow">Site Assessment</span>
            </h2>
            <p className="text-blue-200 mb-8 text-base leading-relaxed font-inter">
              Ready to upgrade your business connectivity? Submit your details and
              our technical team will assess your site and recommend the best fibre
              solution for your needs — at no obligation.
            </p>

            <div className="space-y-4">
              {/* Company name */}
              <div className="relative">
                <Building2
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300"
                />
                <input
                  type="text"
                  value={company}
                  onChange={(e) => {
                    setCompany(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  placeholder="Company name"
                  className="w-full pl-11 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-ubuntu-yellow/60 focus:bg-white/15 transition-all text-sm font-inter"
                />
              </div>

              {/* Business address / location */}
              <div className="relative">
                <MapPin
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300"
                />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  placeholder="Business address or area"
                  className="w-full pl-11 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-ubuntu-yellow/60 focus:bg-white/15 transition-all text-sm font-inter"
                />
              </div>

              <motion.button
                onClick={handleSubmit}
                disabled={!company.trim() || !location.trim() || status === "loading"}
                className="w-full flex items-center justify-center gap-2.5 py-4 bg-ubuntu-yellow text-ubuntu-blue font-bold rounded-xl hover:bg-yellow-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-ubuntu-yellow/25 font-poppins text-sm"
                whileHover={company.trim() && location.trim() && status !== "loading" ? { scale: 1.02 } : {}}
                whileTap={company.trim() && location.trim() && status !== "loading" ? { scale: 0.98 } : {}}
              >
                {status === "loading" ? (
                  <>
                    <Loader size={16} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Request Site Assessment"
                )}
              </motion.button>

              {/* Success state */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-4 p-5 rounded-xl border bg-ubuntu-green/15 border-ubuntu-green/30"
                >
                  <CheckCircle size={22} className="text-ubuntu-green flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-bold text-white mb-1 font-poppins">
                      Assessment request received!
                    </p>
                    <p className="text-blue-200 text-sm font-inter">
                      Our technical team will review your details and be in touch
                      within one business day to schedule your site assessment.
                    </p>
                  </div>
                  <button onClick={handleReset} className="text-blue-300 hover:text-white transition-colors text-xs">
                    Clear
                  </button>
                </motion.div>
              )}
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8">
              {[
                { value: "48hrs", label: "Response Time" },
                { value: "100%", label: "Free Assessment" },
                { value: "SA-Wide", label: "Coverage" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-2 sm:p-3 bg-white/8 rounded-xl border border-white/10">
                  <div className="text-ubuntu-yellow font-black text-base sm:text-xl font-poppins">{stat.value}</div>
                  <div className="text-blue-300 text-xs font-inter mt-0.5 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SouthAfricaMap() {
  return (
    <div className="relative w-full max-w-sm lg:max-w-md">
      <svg
        viewBox="0 0 450 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl"
      >
        <defs>
          <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F5B400" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0A2E63" stopOpacity="0" />
          </radialGradient>
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse cx="225" cy="210" rx="200" ry="180" fill="url(#mapGlow)" />

        <path
          d="M 145 30 L 175 20 L 215 18 L 265 22 L 310 35 L 355 58 L 385 88 L 400 125 L 402 158 L 392 190 L 372 218 L 350 242 L 328 265 L 308 282 L 288 298 L 268 315 L 250 330 L 235 345 L 222 358 L 210 365 L 198 362 L 185 350 L 170 332 L 152 310 L 130 285 L 108 260 L 88 238 L 68 215 L 50 190 L 38 162 L 34 132 L 40 102 L 52 78 L 72 58 L 98 42 L 125 32 Z"
          fill="rgba(18,63,133,0.4)"
          stroke="rgba(245,180,0,0.5)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M 248 252 L 260 245 L 272 252 L 268 264 L 252 266 Z"
          fill="rgba(10,46,99,0.8)"
          stroke="rgba(245,180,0,0.4)"
          strokeWidth="1"
        />

        <g filter="url(#nodeGlow)">
          <circle cx="240" cy="180" r="10" fill="#F5B400" opacity="0.9" />
          <circle cx="240" cy="180" r="20" fill="rgba(245,180,0,0.2)" />
          <text x="255" y="175" fill="white" fontSize="9" fontFamily="system-ui" fontWeight="600">Johannesburg</text>

          <circle cx="128" cy="340" r="8" fill="#009B4D" opacity="0.9" />
          <circle cx="128" cy="340" r="16" fill="rgba(0,155,77,0.2)" />
          <text x="140" y="345" fill="white" fontSize="9" fontFamily="system-ui" fontWeight="600">Cape Town</text>

          <circle cx="308" cy="248" r="7" fill="#E31E24" opacity="0.9" />
          <circle cx="308" cy="248" r="14" fill="rgba(227,30,36,0.2)" />
          <text x="318" y="245" fill="white" fontSize="9" fontFamily="system-ui" fontWeight="600">Durban</text>

          <circle cx="235" cy="158" r="6" fill="#F5B400" opacity="0.8" />
          <circle cx="225" cy="318" r="6" fill="#009B4D" opacity="0.8" />
          <circle cx="210" cy="242" r="6" fill="#123F85" opacity="0.8" />
        </g>

        <line x1="240" y1="180" x2="235" y2="158" stroke="rgba(245,180,0,0.3)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="240" y1="180" x2="308" y2="248" stroke="rgba(245,180,0,0.25)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="240" y1="180" x2="210" y2="242" stroke="rgba(245,180,0,0.25)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="210" y1="242" x2="128" y2="340" stroke="rgba(0,155,77,0.25)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="210" y1="242" x2="225" y2="318" stroke="rgba(0,155,77,0.25)" strokeWidth="1" strokeDasharray="3 3" />

        <circle cx="240" cy="180" r="30" fill="none" stroke="rgba(245,180,0,0.3)" strokeWidth="1">
          <animate attributeName="r" values="10;35;10" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
