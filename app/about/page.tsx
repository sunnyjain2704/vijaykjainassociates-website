
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Award, Users, Target, Zap } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Integrity",
    description:
      "Unwavering commitment to ethical practices and professional standards",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "Delivering exceptional results through expertise and attention to detail",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with clients to understand and achieve their goals",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Embracing new methodologies and technologies to stay ahead",
  },
];

const team = [
  {
    name: "CA Sunny Jain",
    title: "Partner",
    qualification: "B.Com, FCA, DISA, FAFD (Cert.), CCCA (Cert.)",
    expertise:
      "Statutory and internal audits, Tax planning and advisory, Budgeting, forecasting and financial analysis, Costing and profitability analysis, Risk assessment and SOP development, Wealth management and business consulting",
  },
  {
    name: "CA (Dr.) Subhash Mathur",
    title: "Partner",
    qualification: "B.Sc., FCA, LL.B., MBA, Ph.D.",
    expertise:
      "Corporate advisory and financial consulting, Strategic management and business restructuring, Industry-specific financial solutions, CSR and governance advisory",
  },
  {
    name: "CA Pooja Jain",
    title: "Partner",
    qualification: "B.Com, ACA, Ind-AS (Cert.)",
    expertise:
      "GST compliance and advisory, Direct and indirect tax planning, Statutory audits of corporates and other entities, Resolving day-to-day taxation issues",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // ✅ fixed (removed delayChildren)
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.1, // ✅ ensures proper stagger rendering
    },
  }),
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F8FAFC]">

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0B1F3B] to-[#1F3A5F] text-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl font-bold font-poppins text-balance">
                About Vijay K Jain & Associates
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Trusted chartered accountant services delivering excellence in audit, taxation, compliance and financial advisory
              </p>
            </motion.div>
          </div>
        </section>

        {/* Firm Overview */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/about.jpg"
                    alt="Vijay K. Jain & Associates"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                className="space-y-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >

                {/* About */}
                <motion.div variants={itemVariants} className="space-y-5">
                  <h2 className="text-5xl font-bold text-[#0B1F3B] font-poppins">
                    About Us
                  </h2>

                  <p className="text-lg text-[#6B7280] leading-relaxed">
                    M/s Vijay K. Jain & Associates is a partnership firm of Chartered Accountants based in Indore, established in 1988. With over three decades of professional experience, the firm has built a strong reputation for delivering reliable, insightful, and value-driven financial and advisory services.
                  </p>

                  <p className="text-lg text-[#6B7280] leading-relaxed">
                    Our practice is driven by a commitment to excellence, integrity, and a deep understanding of evolving business and regulatory environments. We cater to a diverse clientele across industries, offering tailored solutions in audit, taxation, compliance, and financial advisory.
                  </p>
                </motion.div>

                {/* Experience */}
                <motion.div variants={itemVariants} className="flex gap-6">
                  <div className="bg-blue-50 px-6 py-4 rounded-lg text-center shadow-sm">
                    <p className="text-3xl font-bold text-[#2563EB]">30+</p>
                    <p className="text-sm text-[#6B7280]">Years Experience</p>
                  </div>
                </motion.div>

                {/* Why Choose Us */}
                <motion.div variants={itemVariants} className="space-y-3">
                  <h3 className="text-lg font-semibold text-[#0B1F3B]">
                    Why Choose Us
                  </h3>

                  {[
                    "ICAI registered chartered accountants",
                    "Over 30 years of professional experience",
                    "Diverse industry exposure",
                    "Client-centric and solution-driven approach",
                    "Expertise in both traditional and emerging financial domains",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      custom={index} // ✅ critical fix
                      variants={itemVariants}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 h-2 w-2 bg-[#2563EB] rounded-full"></span>
                      <p className="text-lg text-[#6B7280]">{item}</p>
                    </motion.div>
                  ))}
                </motion.div>

              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-[#0B1F3B] font-poppins mb-4">
                Our Core Values
              </h2>
              <p className="text-[#6B7280] max-w-2xl mx-auto">
                These principles guide everything we do
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-[#F8FAFC] rounded-lg p-8 text-center hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Icon className="h-6 w-6 text-[#2563EB]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1F3B] mb-2">
                      {value.title}
                    </h3>
                    <p className="text-[#6B7280]">{value.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-[#0B1F3B] font-poppins mb-4">
                Our Leadership Team
              </h2>
              <p className="text-[#6B7280] max-w-2xl mx-auto">
                Experienced professionals committed to your success
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-lg border border-[#E5E7EB] p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1F3B] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#2563EB] font-medium mb-2">
                    {member.title}
                  </p>
                  <p className="text-xs text-[#6B7280] mb-3">
                    {member.qualification}
                  </p>
                  <ul className="text-sm text-[#6B7280] text-left list-disc pl-4 space-y-1">
                    {member.expertise.split(",").map((item, i) => (
                      <li key={i}>{item.trim()}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0B1F3B] text-white py-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold">Join Our Team</h2>
            <p className="text-lg text-blue-100">
              We're always looking for talented professionals to join our growing firm
            </p>
            <Link href="/career">
              <Button size="lg" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                Explore Careers
              </Button>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}