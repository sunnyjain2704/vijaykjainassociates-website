

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <section
      id="home"
      // className="relative min-h-screen bg-[#F8FAFC] flex items-center overflow-hidden pt-20"
      className="relative bg-[#F8FAFC] flex items-start overflow-hidden pt-12 pb-16"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#2563EB] opacity-5 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B1F3B] opacity-5 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              {/* ✅ Updated Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0B1F3B] leading-tight font-poppins text-balance">
                Vijay K. Jain & Associates <br />
                <span className="text-[#2563EB]">Chartered Accountants</span>
              </h1>

              {/* ✅ Updated Description */}
              <p className="text-lg text-[#6B7280] leading-relaxed max-w-md">
                Established in 1988, we provide trusted audit, taxation,
                compliance and financial advisory services backed by over three
                decades of professional experience.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white group"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="#services">
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="border-[#D1D5DB] text-[#0B1F3B] hover:bg-[#F3F4F6]"
                >
                  Explore Services
                </Button> */}
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#D1D5DB] text-[#0B1F3B] hover:bg-[#F1F5F9] hover:border-[#2563EB] hover:text-[#2563EB] transition-all duration-200"
                >
                  Explore Services
                </Button>
              </Link>
            </motion.div>

            {/* ✅ Updated Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 pt-8"
              variants={itemVariants}
            >
              {[
                { value: "30+", label: "Years Experience" },
                { value: "100+", label: "Clients Served" },
                { value: "Multiple", label: "Industries" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="group cursor-default"
                >
                  <p className="text-3xl font-bold text-[#2563EB] font-poppins group-hover:text-[#1D4ED8] transition-colors">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[#6B7280]">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative h-96 lg:h-full"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="/hero.jpg"
              alt="Vijay K. Jain & Associates"
              fill
              className="object-cover rounded-lg shadow-2xl"
              loading="eager"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
