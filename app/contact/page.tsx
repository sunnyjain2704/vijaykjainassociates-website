

"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { ContactForm } from "@/components/contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 9713700582"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["cavijayjain2011@yahoo.com"],
  },
  {
    icon: MapPin,
    title: "Office Address",
    details: ["307, Manas Bhawan Extension,", "11, RNT Marg, Indore – 452001"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday – Friday: 11:00 AM – 7:00 PM", "Saturday: By Appointment"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F8FAFC]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0B1F3B] to-[#1F3A5F] text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl font-bold font-poppins">
                Contact Us
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Connect with our team for professional audit, taxation, and
                advisory services
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <motion.div
                className="lg:col-span-1"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.div key={index} variants={itemVariants}>
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                              <Icon className="h-6 w-6 text-[#2563EB]" />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-[#0B1F3B] mb-1">
                              {info.title}
                            </h3>
                            <div className="space-y-1">
                              {info.details.map((detail, i) =>
                                detail.includes("@") ? (
                                  <a key={i} href={`mailto:${detail}`} className="text-sm text-[#6B7280] hover:text-[#2563EB] transition-colors">{detail}</a>
                                ) : detail.startsWith("+91") ? (
                                  <a key={i} href={`tel:${detail.replace(/\s/g, "")}`} className="text-sm text-[#6B7280] hover:text-[#2563EB] transition-colors">{detail}</a>
                                ) : (
                                  <p key={i} className="text-sm text-[#6B7280]">{detail}</p>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                className="lg:col-span-2 bg-white rounded-lg border border-[#E5E7EB] p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-[#0B1F3B] font-poppins mb-6">
                  Send us a Message
                </h2>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="pb-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-0">
            <div className="rounded-lg overflow-hidden h-96">
              <iframe
                width="100%"
                height="100%"
                style={{ border: "none" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.6!2d75.8744075!3d22.7162641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd5ca9946a27%3A0x46637890a3d140c5!2sVijay+K+Jain+and+Associates!5e0!3m2!1sen!2sin!4v1719000000000!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="bg-[#0B1F3B] text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold font-poppins">
                Serving Clients Across India
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Based in Indore, we provide audit, taxation, and advisory
                services to clients across multiple industries throughout India.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
