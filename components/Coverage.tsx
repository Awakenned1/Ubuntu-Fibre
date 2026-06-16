"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, CheckCircle, Loader, Building2 } from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

type FormStatus = "idle" | "loading" | "success";

const GEO_URL = "/sa-provinces.json";

const provinceColors: Record<string, string> = {
  "Western Cape":    "#F5B400",
  "Northern Cape":   "#E07B30",
  "Eastern Cape":    "#3BBFAD",
  "Free State":      "#A855F7",
  "KwaZulu-Natal":   "#22A652",
  "Limpopo":         "#E87FA8",
  "Gauteng":         "#E31E24",
  "North West":      "#84CC16",
  "Mpumalanga":      "#2D3D9D",
};

const cities = [
  { name: "Johannesburg", coordinates: [28.0436, -26.2041] as [number, number], color: "#F5B400" },
  { name: "Cape Town",    coordinates: [18.4241, -33.9249] as [number, number], color: "#F5B400" },
  { name: "Durban",       coordinates: [31.0218, -29.8587] as [number, number], color: "#22A652" },
  { name: "Pretoria",     coordinates: [28.1871, -25.7461] as [number, number], color: "#F5B400" },
  { name: "Port Elizabeth", coordinates: [25.5707, -33.9608] as [number, number], color: "#3BBFAD" },
  { name: "Bloemfontein", coordinates: [26.2041, -29.1212] as [number, number], color: "#A855F7" },
];

const legend = [
  { name: "Gauteng",       color: "#E31E24" },
  { name: "Western Cape",  color: "#F5B400" },
  { name: "KwaZulu-Natal", color: "#22A652" },
  { name: "Eastern Cape",  color: "#3BBFAD" },
  { name: "Limpopo",       color: "#E87FA8" },
  { name: "Mpumalanga",    color: "#2D3D9D" },
  { name: "Free State",    color: "#A855F7" },
  { name: "North West",    color: "#84CC16" },
  { name: "Northern Cape", color: "#E07B30" },
];

export default function Coverage() {
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [hovered, setHovered] = useState<string | null>(null);

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
    <section id="coverage" className="py-10 sm:py-14 lg:py-20 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 network-dots opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* LEFT: Accurate SA province map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            {/* Map title */}
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest text-center mb-3">
              Coverage — All 9 Provinces
            </p>

            {/* Province map */}
            <div className="rounded-2xl overflow-hidden bg-[#0a1f4a]/60 border border-white/10 backdrop-blur-sm">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{ center: [25.5, -29], scale: 1050 }}
                width={500}
                height={400}
                style={{ width: "100%", height: "auto" }}
              >
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const name = geo.properties.name as string;
                      const color = provinceColors[name] ?? "#334155";
                      const isHovered = hovered === name;
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          onMouseEnter={() => setHovered(name)}
                          onMouseLeave={() => setHovered(null)}
                          style={{
                            default: {
                              fill: color,
                              fillOpacity: isHovered ? 1 : 0.75,
                              stroke: "#07153D",
                              strokeWidth: 1,
                              outline: "none",
                              transition: "fill-opacity 0.2s",
                            },
                            hover: {
                              fill: color,
                              fillOpacity: 1,
                              stroke: "#ffffff",
                              strokeWidth: 1.5,
                              outline: "none",
                              cursor: "pointer",
                            },
                            pressed: { outline: "none" },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>

                {/* City markers */}
                {cities.map((city) => (
                  <Marker key={city.name} coordinates={city.coordinates}>
                    <circle r={4} fill={city.color} stroke="#07153D" strokeWidth={1.5} />
                    <circle r={9} fill={city.color} opacity={0.25}>
                      <animate attributeName="r" values="4;12;4" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.4;0;0.4" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <text
                      textAnchor="middle"
                      y={-10}
                      style={{ fontFamily: "system-ui", fontWeight: 700, fontSize: 8, fill: "#ffffff" }}
                    >
                      {city.name}
                    </text>
                  </Marker>
                ))}
              </ComposableMap>
            </div>

            {/* Hover tooltip */}
            <div className="h-6 mt-2 text-center">
              {hovered && (
                <motion.span
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm font-bold text-white/90"
                >
                  {hovered}
                  <span className="ml-2 w-2.5 h-2.5 rounded-full inline-block align-middle" style={{ background: provinceColors[hovered] }} />
                </motion.span>
              )}
            </div>

            {/* Legend */}
            <div className="grid grid-cols-3 gap-x-4 gap-y-1.5 mt-3 px-2">
              {legend.map((p) => (
                <div key={p.name} className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: p.color }} />
                  <span className="text-white/60 text-[11px] font-medium truncate">{p.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Assessment form */}
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
              solution — at no obligation.
            </p>

            <div className="space-y-4">
              <div className="relative">
                <Building2 size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300" />
                <input
                  type="text"
                  value={company}
                  onChange={(e) => { setCompany(e.target.value); if (status !== "idle") setStatus("idle"); }}
                  placeholder="Company name"
                  className="w-full pl-11 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:border-ubuntu-yellow/60 focus:bg-white/15 transition-all text-sm font-inter"
                />
              </div>

              <div className="relative">
                <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => { setLocation(e.target.value); if (status !== "idle") setStatus("idle"); }}
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
                  <><Loader size={16} className="animate-spin" /> Submitting...</>
                ) : "Request Site Assessment"}
              </motion.button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-4 p-5 rounded-xl border bg-ubuntu-green/15 border-ubuntu-green/30"
                >
                  <CheckCircle size={22} className="text-ubuntu-green flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-bold text-white mb-1 font-poppins">Assessment request received!</p>
                    <p className="text-blue-200 text-sm font-inter">
                      Our technical team will be in touch within one business day.
                    </p>
                  </div>
                  <button onClick={handleReset} className="text-blue-300 hover:text-white transition-colors text-xs">
                    Clear
                  </button>
                </motion.div>
              )}
            </div>

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
