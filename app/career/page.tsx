

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/navbar';
import { Footer } from '@/components/sections/footer';
import { Button } from '@/components/ui/button';
import { Briefcase, Users, TrendingUp, Heart } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Professional Growth',
    description:
      'Exposure to audit, taxation and advisory assignments across diverse industries',
  },
  {
    icon: Users,
    title: 'Collaborative Environment',
    description:
      'Work closely with experienced professionals in a structured and supportive setup',
  },
  {
    icon: Briefcase,
    title: 'Practical Exposure',
    description:
      'Hands-on experience in statutory audits, GST compliance and financial reporting',
  },
  {
    icon: Heart,
    title: 'Long-Term Development',
    description:
      'Focus on continuous learning, skill development and career progression',
  },
];

const positions = [
  {
    title: 'Qualified Chartered Accountant',
    department: 'Audit & Taxation',
    experience: '2-5 years',
    description:
      'Handling statutory audits, tax compliance and client advisory assignments',
  },
  {
    title: 'Semi Qualified CA',
    department: 'Audit & Compliance',
    experience: '1-3 years',
    description:
      'Support in audit assignments, GST filings and financial reporting',
  },
  {
    title: 'CA Articleship',
    department: 'All Departments',
    experience: 'Pursuing CA',
    description:
      'Articleship training with exposure to audit, taxation and compliance work',
  },
  {
    title: 'Accounts Executive',
    department: 'Accounting & GST',
    experience: '1-3 years',
    description:
      'Bookkeeping, GST returns, and assisting in financial statement preparation',
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
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function CareerPage() {
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
                Careers at Vijay K Jain & Associates
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Join our team of professionals and build your career in audit, taxation and financial advisory services
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us */}
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
                Why Join Vijay K Jain & Associates?
              </h2>
              <p className="text-[#6B7280] max-w-2xl mx-auto">
                We provide an environment where professionals gain practical experience and develop strong domain expertise
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white rounded-lg border border-[#E5E7EB] p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="mb-4 p-3 bg-blue-100 rounded-lg w-fit">
                      <Icon className="h-6 w-6 text-[#2563EB]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1F3B] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-[#6B7280]">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </section>

        {/* Open Positions */}
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
                Open Positions
              </h2>
              <p className="text-[#6B7280] max-w-2xl mx-auto">
                We are currently looking for professionals across audit, taxation and compliance roles
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {positions.map((position, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="border border-[#E5E7EB] rounded-lg p-8 hover:border-[#2563EB] hover:shadow-lg transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#0B1F3B] mb-2 group-hover:text-[#2563EB] transition-colors">
                        {position.title}
                      </h3>

                      <div className="flex flex-col sm:flex-row gap-4 text-[#6B7280] mb-3">
                        <span className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4" />
                          {position.experience}
                        </span>
                      </div>

                      <p className="text-[#6B7280]">
                        {position.description}
                      </p>
                    </div>

                    <Link href="/contact">
                      <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white whitespace-nowrap">
                        Apply Now
                      </Button>
                    </Link>

                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-[#0B1F3B] font-poppins">
                Our Recruitment Process
              </h2>
            </motion.div>

            <motion.div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Application', desc: 'Submit your resume' },
                { step: '2', title: 'Screening', desc: 'Initial review of profile' },
                { step: '3', title: 'Interview', desc: 'Technical discussion' },
                { step: '4', title: 'Offer', desc: 'Final selection and offer' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#2563EB] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-[#0B1F3B]">{item.title}</h3>
                  <p className="text-sm text-[#6B7280]">{item.desc}</p>
                </div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0B1F3B] text-white py-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold">Start Your Career With Us</h2>
            <p className="text-blue-100">
              Share your resume with us and explore opportunities to grow with our firm
            </p>
            <Link href="/contact">
              <Button className="bg-[#2563EB]">Get in Touch</Button>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}