
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import {
  FileText,
  TrendingUp,
  Calculator,
  Shield,
  DollarSign,
  Users,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Audit & Assurance",
    subtitle: "Reliable Audit Services",
    description:
      "Providing statutory, internal and concurrent audit services with a strong focus on compliance and accuracy.",
    details: [
      "Statutory Audit under Companies Act",
      "Internal Audit Services",
      "Concurrent & Bank Audits",
      "IND AS Compliance & Reporting",
      "Audit of Trusts, NGOs & Societies",
    ],
  },
  {
    icon: TrendingUp,
    title: "Financial Advisory",
    subtitle: "Business & Financial Guidance",
    description:
      "Professional advisory services to support financial decision-making and business growth.",
    details: [
      "Financial Planning & Analysis",
      "Business Valuation & Due Diligence",
      "Business Restructuring Advisory",
      "CMA Reports & Financial Analysis",
      "Strategic Financial Consulting",
    ],
  },
  {
    icon: Calculator,
    title: "Taxation",
    subtitle: "Direct & Indirect Tax Services",
    description:
      "Comprehensive taxation services covering compliance, planning, and advisory.",
    details: [
      "Income Tax Planning & Return Filing",
      "GST Compliance & Advisory",
      "Tax Audit & Representation",
      "Handling Tax Notices & Assessments",
      "Direct & Indirect Tax Advisory",
    ],
  },
  {
    icon: Shield,
    title: "Risk & Compliance",
    subtitle: "Internal Controls & Governance",
    description:
      "Strengthening business processes through risk assessment and compliance frameworks.",
    details: [
      "Risk Assessment & Mitigation",
      "Internal Financial Controls (IFC)",
      "Regulatory Compliance",
      "SOP Development",
      "Fraud Risk & Prevention",
    ],
  },
  {
    icon: DollarSign,
    title: "Financial Consulting",
    subtitle: "Capital & Financial Planning",
    description:
      "Supporting businesses with financial structuring, funding, and performance improvement.",
    details: [
      "Fund Raising & Banking Support",
      "Working Capital Planning",
      "Financial Strategy Consulting",
      "Profitability & Cost Analysis",
      "Budgeting & Forecasting",
    ],
  },
  {
    icon: Users,
    title: "Corporate Services",
    subtitle: "Business Setup & Compliance",
    description:
      "Comprehensive support for company formation and ongoing corporate compliance.",
    details: [
      "Company Incorporation & Setup",
      "ROC & Annual Compliance",
      "Corporate Governance Support",
      "Regulatory Filings",
      "Business Structuring Advisory",
    ],
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

export default function ServicesPage() {
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
                Our Services
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                With over 30 years of professional experience, we provide audit,
                taxation, and advisory services tailored to your business needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group bg-white rounded-lg border border-[#E5E7EB] p-8 transition-all duration-300 hover:border-[#2563EB] hover:shadow-xl"
                  >
                    <div className="mb-6 inline-block rounded-lg bg-blue-100 p-4 group-hover:bg-[#2563EB] group-hover:text-white transition-all">
                      <Icon className="h-8 w-8 text-[#2563EB] group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="text-2xl font-bold text-[#0B1F3B] font-poppins mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#2563EB] font-medium mb-3">
                      {service.subtitle}
                    </p>
                    {/* <p className="text-[#6B7280] mb-6">{service.description}</p> */}

                    <div className="space-y-2 mb-6">
                      {service.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-[#2563EB] mt-1">•</span>
                          <p className="text-sm text-[#6B7280]">{detail}</p>
                        </div>
                      ))}
                    </div>

                    <Link href="/contact">
                      <Button
                        variant="outline"
                        className="w-full border-[#D1D5DB] text-[#0B1F3B] hover:bg-[#F1F5F9] hover:border-[#2563EB] hover:text-[#2563EB] transition-all duration-200"
                      >
                        Get Consultation
                      </Button>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0B1F3B] text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold font-poppins">
                Need Professional Assistance?
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                Connect with our team to get reliable financial and compliance
                solutions for your business.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
