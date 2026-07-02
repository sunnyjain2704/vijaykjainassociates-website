

"use client";

import { ServiceCard } from "@/components/service-card";
import {
  Calculator,
  FileText,
  TrendingUp,
  DollarSign,
  Shield,
  Users,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: FileText,
      title: "Audit & Assurance",
      description:
        "Statutory audits, internal audits, concurrent audits and tax audits across various entities.",
    },
    {
      icon: Calculator,
      title: "Taxation",
      description:
        "Direct and indirect tax planning, GST compliance, tax audits and representation before authorities.",
    },
    {
      icon: TrendingUp,
      title: "Financial Advisory",
      description:
        "Budgeting, forecasting, financial analysis and business consulting services.",
    },
    {
      icon: Shield,
      title: "Risk & Compliance",
      description:
        "Risk assessment, IFC implementation, regulatory compliance and fraud prevention.",
    },
    {
      icon: Users,
      title: "Corporate Services",
      description:
        "Company incorporation, ROC compliance, corporate governance and regulatory filings.",
    },
    {
      icon: DollarSign,
      title: "Business Consulting",
      description:
        "Working capital planning, fund raising support, profitability analysis and budgeting.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 opacity-100">
          <div className="inline-block px-4 py-1 bg-blue-50 rounded-full">
            <p className="text-sm font-semibold text-[#2563EB]">Our Services</p>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B1F3B] font-poppins">
            Professional Services
          </h2>

          <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
            We provide audit, taxation, compliance and financial advisory
            services tailored to diverse business needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto opacity-100">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
