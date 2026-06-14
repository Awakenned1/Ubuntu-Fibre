"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Send,
  CheckCircle,
  Loader,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Head Office",
    value: "Johannesburg, Gauteng, South Africa",
    href: null,
    color: "#F5B400",
  },
  {
    icon: Phone,
    label: "Main Line",
    value: "+27 84 497 5834",
    href: "tel:+27844975834",
    color: "#009B4D",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@ubuntufibre.co.za",
    href: "mailto:info@ubuntufibre.co.za",
    color: "#0A2E63",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+27 84 497 5834",
    href: "https://wa.me/27844975834",
    color: "#009B4D",
  },
];

const serviceOptions = [
  "Fibre Optic Network Installation",
  "Sales & Marketing Solutions for ISPs",
  "Contact Centre Campaign Management",
  "Other / General Enquiry",
];

interface FormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  service?: string;
}

type SubmitStatus = "idle" | "loading" | "success";

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[+\d\s()-]{7,20}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!form.service) newErrors.service = "Please select a service.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitStatus("loading");
    setTimeout(() => setSubmitStatus("success"), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-light-gray">
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
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ubuntu-blue mb-4 font-poppins">
            Contact Us
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base font-inter leading-relaxed">
            Ready to get connected? Speak to our team or fill in the form and
            we&apos;ll get back to you within one business hour.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black text-ubuntu-blue mb-6 font-poppins">
              Contact Information
            </h3>

            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${item.color}15`, border: `1.5px solid ${item.color}30` }}
                  >
                    <item.icon size={20} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1 font-inter">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-dark-text font-semibold text-sm hover:text-ubuntu-blue transition-colors font-inter"
                        {...(item.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-dark-text font-semibold text-sm font-inter">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Business hours */}
            <div className="p-5 bg-ubuntu-blue rounded-2xl text-white">
              <h4 className="font-bold mb-3 font-poppins text-sm">Business Hours</h4>
              <div className="space-y-2 font-inter text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-200">Monday – Friday</span>
                  <span className="text-ubuntu-yellow font-semibold">08:00 – 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Saturday</span>
                  <span className="text-ubuntu-yellow font-semibold">08:00 – 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Technical Support</span>
                  <span className="text-ubuntu-green font-semibold">24/7</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 lg:p-8">
              <h3 className="text-xl font-black text-ubuntu-blue mb-6 font-poppins">
                Request a Connection
              </h3>

              {submitStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle size={56} className="text-ubuntu-green mb-4" />
                  <h4 className="text-xl font-black text-dark-text mb-2 font-poppins">
                    Thank you!
                  </h4>
                  <p className="text-gray-500 text-sm font-inter leading-relaxed max-w-xs">
                    Your enquiry has been received. A member of our team will
                    contact you within one business hour.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Full Name + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label="Full Name"
                      name="fullName"
                      type="text"
                      value={form.fullName}
                      onChange={handleChange}
                      error={errors.fullName}
                      required
                      placeholder="John Smith"
                    />
                    <FormField
                      label="Company Name"
                      name="companyName"
                      type="text"
                      value={form.companyName}
                      onChange={handleChange}
                      placeholder="Acme Corp (optional)"
                    />
                  </div>

                  {/* Phone + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      error={errors.phone}
                      required
                      placeholder="+27 82 000 0000"
                    />
                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      error={errors.email}
                      required
                      placeholder="john@company.co.za"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-semibold text-dark-text mb-1.5 font-poppins">
                      Service Required <span className="text-ubuntu-red">*</span>
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm bg-white text-dark-text transition-colors focus:outline-none focus:ring-2 focus:ring-ubuntu-blue/30 font-inter ${
                        errors.service
                          ? "border-ubuntu-red focus:border-ubuntu-red"
                          : "border-gray-200 focus:border-ubuntu-blue"
                      }`}
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-ubuntu-red text-xs mt-1.5 font-inter">{errors.service}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-dark-text mb-1.5 font-poppins">
                      Message <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us more about your requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-dark-text transition-colors focus:outline-none focus:border-ubuntu-blue focus:ring-2 focus:ring-ubuntu-blue/30 resize-none font-inter"
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={submitStatus === "loading"}
                    className="w-full flex items-center justify-center gap-2.5 py-4 bg-ubuntu-blue text-white font-bold rounded-xl hover:bg-ubuntu-sec disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-ubuntu-blue/25 font-poppins text-sm"
                    whileHover={submitStatus !== "loading" ? { scale: 1.02 } : {}}
                    whileTap={submitStatus !== "loading" ? { scale: 0.98 } : {}}
                  >
                    {submitStatus === "loading" ? (
                      <>
                        <Loader size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Request Connection
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
}

function FormField({ label, name, type, value, onChange, error, required, placeholder }: FormFieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-dark-text mb-1.5 font-poppins">
        {label}
        {required && <span className="text-ubuntu-red ml-0.5">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl border text-sm text-dark-text placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-ubuntu-blue/30 font-inter ${
          error
            ? "border-ubuntu-red focus:border-ubuntu-red"
            : "border-gray-200 focus:border-ubuntu-blue"
        }`}
      />
      {error && <p className="text-ubuntu-red text-xs mt-1.5 font-inter">{error}</p>}
    </div>
  );
}
