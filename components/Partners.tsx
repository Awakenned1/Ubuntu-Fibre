"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const partners = [
  {
    name: "Openserve",
    tagline: "Fibre Infrastructure Partner",
    description:
      "Expanding reliable open-access fibre infrastructure nationwide, enabling Ubuntu Fibre to deliver last-mile connectivity to homes and businesses across South Africa.",
    logo: "/openserve.png",
    accent: "#009B4D",
    logoBg: "bg-white",
  },
  {
    name: "Huawei",
    tagline: "Technology Solutions Partner",
    description:
      "Providing advanced telecommunications technology and enterprise networking solutions that power our high-performance fibre network infrastructure.",
    logo: "/huawei.png",
    accent: "#E31E24",
    logoBg: "bg-white",
  },
  {
    name: "Vodafone",
    tagline: "Mobile & Enterprise Partner",
    description:
      "Collaborating to deliver seamless mobile and enterprise communication services, ensuring comprehensive connectivity for our business clients.",
    logo: "/vodafone.png",
    accent: "#E31E24",
    logoBg: "bg-ubuntu-red",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="py-10 sm:py-14 lg:py-20 bg-light-gray">
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
            Partnerships
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-ubuntu-blue mb-3 font-poppins">
            Our Strategic Partners
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base font-inter leading-relaxed">
            Working with industry leaders to bring you world-class connectivity
            solutions backed by trusted infrastructure and technology.
          </p>
        </motion.div>

        {/* Partner cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-ubuntu-blue/10 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Top accent bar */}
              <div
                className="h-1.5 w-full"
                style={{ backgroundColor: partner.accent }}
              />

              <div className="p-5 sm:p-8">
                {/* Logo */}
                <div className="mb-6 flex items-center justify-center h-20 bg-gray-50 rounded-xl border border-gray-100 overflow-hidden px-6">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={160}
                      height={64}
                      className="object-contain max-h-14 w-auto"
                      priority={i === 0}
                    />
                  </div>
                </div>

                {/* Name & tagline */}
                <div className="mb-4">
                  <h3 className="text-xl font-black text-dark-text font-poppins mb-1">
                    {partner.name}
                  </h3>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider font-inter"
                    style={{ color: partner.accent }}
                  >
                    {partner.tagline}
                  </span>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed font-inter">
                  {partner.description}
                </p>

                {/* Partnership badge */}
                <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">
                  <span className="text-xs text-gray-400 font-inter">Strategic Partner</span>
                  <div
                    className="flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all duration-200 font-poppins"
                    style={{ color: partner.accent }}
                  >
                    Learn more
                    <ExternalLink size={12} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14 p-6 bg-ubuntu-blue rounded-2xl text-center"
        >
          <p className="text-white font-inter text-sm leading-relaxed max-w-2xl mx-auto">
            <span className="text-ubuntu-yellow font-bold">Ubuntu Fibre</span> is
            certified and accredited by the{" "}
            <span className="text-ubuntu-yellow font-semibold">
              Independent Communications Authority of South Africa (ICASA)
            </span>
            , ensuring full regulatory compliance and service quality standards.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
