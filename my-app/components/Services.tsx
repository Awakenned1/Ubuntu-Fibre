"use client";

import { motion, Variants } from "framer-motion";
import { Network, TrendingUp, Headphones } from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Fibre Optic Network Installation",
    subtitle: "For Businesses",
    description:
      "We deliver end-to-end fibre optic network installation for businesses seeking reliable, high-speed connectivity. With deep expertise working alongside Openserve, we handle everything from site assessment through to full deployment — with minimal disruption to your operations.",
    color: "#0A2E63",
    accent: "#F5B400",
    features: ["Site Assessment", "Seamless Deployment", "Openserve Expertise", "Minimal Downtime"],
  },
  {
    icon: TrendingUp,
    title: "Sales & Marketing Solutions",
    subtitle: "For ISPs",
    description:
      "Elevate your ISP's market presence and drive subscriber growth with our tailored Sales and Marketing Solutions. Our comprehensive approach covers strategic planning, targeted campaigns, and impactful branding to help Internet Service Providers expand their reach.",
    color: "#009B4D",
    accent: "#009B4D",
    features: ["Strategic Planning", "Targeted Campaigns", "Brand Development", "Market Expansion"],
  },
  {
    icon: Headphones,
    title: "Contact Centre Campaign Management",
    subtitle: "Operations & Customer Engagement",
    description:
      "Streamline your contact centre operations and enhance customer engagement with our result-driven campaign management service. We specialise in designing and executing outbound telemarketing and inbound customer support initiatives that improve productivity and satisfaction.",
    color: "#E31E24",
    accent: "#E31E24",
    features: ["Outbound Telemarketing", "Inbound Support", "Campaign Design", "Productivity Optimisation"],
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-ubuntu-blue/8 text-ubuntu-blue text-xs font-bold uppercase tracking-widest rounded-full mb-4 font-poppins">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ubuntu-blue mb-4 font-poppins">
            Our Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base lg:text-lg font-inter leading-relaxed">
            Specialised telecommunications services built for businesses and
            Internet Service Providers — delivering connectivity, growth, and
            operational excellence.
          </p>
        </motion.div>

        {/* Cards grid — 3 large cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-ubuntu-blue/10 transition-all duration-300 hover:-translate-y-2 cursor-default"
            >
              {/* Top colour bar */}
              <div className="h-1.5 w-full" style={{ backgroundColor: service.accent }} />

              <div className="p-7 sm:p-8">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${service.accent}15`,
                    border: `1.5px solid ${service.accent}30`,
                  }}
                >
                  <service.icon size={26} style={{ color: service.accent }} />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-black text-dark-text mb-1 font-poppins group-hover:text-ubuntu-blue transition-colors duration-300">
                  {service.title}
                </h3>
                <p
                  className="text-xs font-bold uppercase tracking-wider mb-4 font-inter"
                  style={{ color: service.accent }}
                >
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed font-inter mb-6">
                  {service.description}
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg font-inter"
                      style={{
                        backgroundColor: `${service.accent}12`,
                        color: service.accent,
                        border: `1px solid ${service.accent}25`,
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover background accent */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${service.accent}04 0%, transparent 60%)` }}
              />
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
            className="px-8 py-3.5 bg-ubuntu-blue text-white font-bold rounded-xl hover:bg-ubuntu-sec transition-colors duration-200 shadow-lg shadow-ubuntu-blue/25 font-poppins text-sm"
          >
            Enquire About Our Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
