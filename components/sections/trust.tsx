
'use client';

import { motion } from 'framer-motion';
import { Award, CheckCircle, Shield, Users } from 'lucide-react';

export function Trust() {
  const credentials = [
    {
      icon: Award,
      title: 'ICAI Registered',
      description:
        'All professionals registered with the Institute of Chartered Accountants of India (ICAI)',
    },
    {
      icon: Shield,
      title: 'Strong Compliance Focus',
      description:
        'High standards in audit, taxation and regulatory compliance across all engagements',
    },
    {
      icon: Users,
      title: 'Diverse Industry Exposure',
      description:
        'Clients across manufacturing, real estate, trading, hospitality and service sectors',
    },
    {
      icon: CheckCircle,
      title: '30+ Years Experience',
      description:
        'Established in 1988 with three decades of trusted professional practice',
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

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1 bg-blue-50 rounded-full border border-blue-100 mb-4">
            <p className="text-sm font-semibold text-[#2563EB]">
              Credentials & Trust
            </p>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B1F3B] font-poppins mb-4">
            Why Businesses Trust Us
          </h2>

          <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
            Our work is built on integrity, experience and a strong commitment to professional standards.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {credentials.map((cred, index) => {
            const Icon = cred.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-[#F8FAFC] rounded-lg border border-[#E5E7EB] p-8 hover:border-[#2563EB] hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="mb-4 w-fit rounded-lg bg-blue-100 p-3 group-hover:bg-[#2563EB] transition-all">
                  <Icon className="h-6 w-6 text-[#2563EB] group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-[#0B1F3B] mb-2 font-poppins group-hover:text-[#2563EB] transition-colors">
                  {cred.title}
                </h3>

                <p className="text-[#6B7280] text-sm">
                  {cred.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}


