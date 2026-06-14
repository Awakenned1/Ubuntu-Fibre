"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Thabo Mokoena",
    role: "Homeowner, Sandton",
    text: "Excellent installation and support service. Very happy with our fibre connection — the speed is outstanding and the team was professional from start to finish.",
    rating: 5,
    avatar: "TM",
    color: "#0A2E63",
  },
  {
    name: "Sarah van der Berg",
    role: "MD, Cape Town SME",
    text: "Reliable internet for our business operations. We've had zero downtime in 8 months. Ubuntu Fibre is highly recommended for any business that depends on connectivity.",
    rating: 5,
    avatar: "SB",
    color: "#009B4D",
  },
  {
    name: "Sipho Dlamini",
    role: "IT Manager, Pretoria",
    text: "Great customer service and competitive pricing. The support team resolved a technical query within the hour. Best ISP we've worked with in years.",
    rating: 5,
    avatar: "SD",
    color: "#E31E24",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "fill-ubuntu-yellow text-ubuntu-yellow" : "text-gray-200"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-5 -translate-y-1/2 translate-x-1/2"
        style={{ background: "radial-gradient(circle, #0A2E63 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5 translate-y-1/2 -translate-x-1/2"
        style={{ background: "radial-gradient(circle, #F5B400 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-ubuntu-blue/8 text-ubuntu-blue text-xs font-bold uppercase tracking-widest rounded-full mb-4 font-poppins">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ubuntu-blue mb-4 font-poppins">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base font-inter leading-relaxed">
            Join thousands of satisfied homes and businesses connected through
            Ubuntu Fibre across South Africa.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-ubuntu-blue/10 hover:-translate-y-1.5 transition-all duration-300 p-7"
            >
              {/* Quote icon */}
              <div
                className="absolute top-5 right-5 opacity-10 group-hover:opacity-20 transition-opacity"
              >
                <Quote size={40} style={{ color: t.color }} className="fill-current" />
              </div>

              {/* Rating */}
              <StarRating rating={t.rating} />

              {/* Text */}
              <blockquote className="mt-4 mb-6">
                <p className="text-gray-600 text-sm leading-relaxed font-inter italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </blockquote>

              {/* Divider */}
              <div className="h-px bg-gray-100 mb-5" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm font-poppins flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-dark-text font-bold text-sm font-poppins">{t.name}</p>
                  <p className="text-gray-400 text-xs font-inter">{t.role}</p>
                </div>
                <div
                  className="ml-auto text-xs font-semibold uppercase tracking-wider font-poppins opacity-60"
                  style={{ color: t.color }}
                >
                  Verified
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Aggregate rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className="fill-ubuntu-yellow text-ubuntu-yellow" />
            ))}
          </div>
          <div>
            <span className="text-2xl font-black text-ubuntu-blue font-poppins">4.9</span>
            <span className="text-gray-500 font-inter text-sm ml-2">
              average rating from <strong className="text-dark-text">1,200+ reviews</strong>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
