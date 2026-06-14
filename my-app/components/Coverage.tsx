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
  const provinces = [
    { name: "Limpopo", x: 270, y: 105 },
    { name: "Mpumalanga", x: 340, y: 155 },
    { name: "North West", x: 190, y: 210 },
    { name: "Gauteng", x: 270, y: 175 },
    { name: "Free State", x: 245, y: 310 },
    { name: "KwaZulu-Natal", x: 375, y: 275 },
    { name: "Eastern Cape", x: 315, y: 365 },
    { name: "Northern Cape", x: 145, y: 320 },
    { name: "Western Cape", x: 170, y: 390 },
  ];

  const cities = [
    { name: "Johannesburg", x: 265, y: 170, color: "#F5B400" },
    { name: "Pretoria", x: 275, y: 160, color: "#F5B400" },
    { name: "Durban", x: 378, y: 275, color: "#E31E24" },
    { name: "Cape Town", x: 170, y: 400, color: "#009B4D" },
    { name: "Bloemfontein", x: 245, y: 305, color: "#006EE6" },
    { name: "Port Elizabeth", x: 315, y: 355, color: "#E31E24" },
  ];

  return (
    <div className="relative w-full max-w-sm lg:max-w-md">
      <svg
        viewBox="0 0 500 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl"
      >
        <defs>
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* PROVINCE COLORED REGIONS */}

        {/* Western Cape - Yellow */}
        <path
          d="M 140 380 L 160 375 L 190 390 L 180 420 L 150 425 Z"
          fill="#F5D547"
          stroke="rgba(245,180,0,0.8)"
          strokeWidth="1.5"
          opacity="0.8"
        />

        {/* Northern Cape - Orange */}
        <path
          d="M 115 300 L 160 280 L 190 290 L 230 320 L 220 360 L 150 380 L 130 350 Z"
          fill="#FF9500"
          stroke="rgba(245,180,0,0.8)"
          strokeWidth="1.5"
          opacity="0.75"
        />

        {/* Free State - Purple */}
        <path
          d="M 220 280 L 270 260 L 300 280 L 300 340 L 260 350 L 230 320 Z"
          fill="#D084D6"
          stroke="rgba(245,180,0,0.8)"
          strokeWidth="1.5"
          opacity="0.8"
        />

        {/* Eastern Cape - Light Blue */}
        <path
          d="M 300 340 L 340 320 L 360 360 L 330 395 L 290 390 Z"
          fill="#A8D8FF"
          stroke="rgba(245,180,0,0.8)"
          strokeWidth="1.5"
          opacity="0.75"
        />

        {/* KwaZulu-Natal - Green */}
        <path
          d="M 340 200 L 385 195 L 395 280 L 380 320 L 340 300 Z"
          fill="#7FD856"
          stroke="rgba(245,180,0,0.8)"
          strokeWidth="1.5"
          opacity="0.8"
        />

        {/* Mpumalanga - Dark Blue */}
        <path
          d="M 320 130 L 370 120 L 385 165 L 360 200 L 330 180 Z"
          fill="#1E3A8A"
          stroke="rgba(245,180,0,0.8)"
          strokeWidth="1.5"
          opacity="0.8"
        />

        {/* Limpopo - Pink */}
        <path
          d="M 240 95 L 300 85 L 330 120 L 320 150 L 270 145 Z"
          fill="#E87FA8"
          stroke="rgba(245,180,0,0.8)"
          strokeWidth="1.5"
          opacity="0.8"
        />

        {/* Gauteng - Red */}
        <path
          d="M 250 155 L 290 145 L 320 170 L 310 200 L 270 205 L 260 180 Z"
          fill="#E31E24"
          stroke="rgba(245,180,0,0.8)"
          strokeWidth="1.5"
          opacity="0.85"
        />

        {/* North West - Lime Green */}
        <path
          d="M 160 185 L 220 165 L 250 185 L 240 240 L 180 250 L 150 220 Z"
          fill="#ABFF1A"
          stroke="rgba(245,180,0,0.8)"
          strokeWidth="1.5"
          opacity="0.8"
        />

        {/* South Africa Border */}
        <path
          d="M 140 180 L 180 95 L 240 85 L 300 80 L 340 95 L 380 135 L 400 180 L 405 240 L 400 300 L 380 350 L 360 380 L 330 400 L 280 410 L 230 415 L 180 420 L 150 410 L 130 385 L 115 350 L 110 300 L 115 250 Z"
          fill="none"
          stroke="rgba(245,180,0,1)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* PROVINCE LABELS */}
        {provinces.map((prov) => (
          <g key={prov.name}>
            <rect
              x={prov.x - 45}
              y={prov.y - 10}
              width="90"
              height="18"
              fill="rgba(0,0,0,0.4)"
              rx="4"
            />
            <text
              x={prov.x}
              y={prov.y}
              fill="white"
              fontSize="10"
              fontFamily="system-ui"
              fontWeight="700"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {prov.name}
            </text>
          </g>
        ))}

        {/* MAJOR CITIES */}
        <g filter="url(#nodeGlow)">
          {cities.map((city) => (
            <g key={city.name}>
              <circle cx={city.x} cy={city.y} r="5" fill={city.color} opacity="0.95" />
              <circle cx={city.x} cy={city.y} r="11" fill={city.color} opacity="0.15" />
              <text
                x={city.x + 10}
                y={city.y - 6}
                fill="white"
                fontSize="6"
                fontFamily="system-ui"
                fontWeight="700"
              >
                {city.name}
              </text>
            </g>
          ))}
        </g>

        {/* NETWORK CONNECTIONS */}
        <line x1="265" y1="170" x2="378" y2="275" stroke="rgba(245,180,0,0.2)" strokeWidth="1.5" strokeDasharray="5 5" />
        <line x1="265" y1="170" x2="170" y2="400" stroke="rgba(0,155,77,0.18)" strokeWidth="1.5" strokeDasharray="5 5" />
        <line x1="265" y1="170" x2="245" y2="305" stroke="rgba(6,110,230,0.18)" strokeWidth="1.5" strokeDasharray="5 5" />

        {/* PULSE FROM JOHANNESBURG */}
        <circle cx="265" cy="170" r="20" fill="none" stroke="rgba(245,180,0,0.4)" strokeWidth="1">
          <animate attributeName="r" values="8;45;8" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* LEGEND */}
      <div className="mt-6 space-y-3 text-center font-inter">
        <p className="text-white font-bold text-sm">South Africa - 9 Provinces</p>
        <div className="grid grid-cols-3 gap-2 text-xs text-blue-200">
          <div>🟡 Western Cape</div>
          <div>🟠 Northern Cape</div>
          <div>🟣 Free State</div>
          <div>🔵 Eastern Cape</div>
          <div>🟢 KwaZulu-Natal</div>
          <div>🔵 Mpumalanga</div>
          <div>🔴 Limpopo</div>
          <div>🔴 Gauteng</div>
          <div>🟢 North West</div>
        </div>
        <p className="text-blue-300 text-xs pt-2">All 9 provinces with major cities</p>
      </div>
    </div>
  );
}
