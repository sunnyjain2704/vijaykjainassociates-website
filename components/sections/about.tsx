// 'use client';

// import Image from 'next/image';
// import { motion } from 'framer-motion';

// export function About() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: 'easeOut' },
//     },
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.8, ease: 'easeOut' },
//     },
//   };

//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
//           {/* Image */}
//           <motion.div
//             className="relative h-96 rounded-lg overflow-hidden shadow-lg"
//             variants={imageVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: '-100px' }}
//           >
//             <Image
//               src="/about.jpg"
//               alt="Vijay K Jain & Associates"
//               fill
//               className="object-cover"
//             />
//           </motion.div>

//           {/* Content */}
//           <motion.div
//             className="space-y-6"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: '-100px' }}
//           >
//             <motion.div variants={itemVariants}>
//               <div className="inline-block px-4 py-1 bg-blue-50 rounded-full">
//                 <p className="text-sm font-semibold text-[#2563EB]">About Our Firm</p>
//               </div>
//             </motion.div>

//             <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold text-[#0B1F3B] font-poppins leading-tight">
//               Premium Chartered Accountant Services
//             </motion.h2>

//             <motion.p variants={itemVariants} className="text-lg text-[#6B7280] leading-relaxed">
//                Vijay K Jain & Associates. is a firm of Chartered Accountants situated in Central India with strong experience across audit, taxation and consultancy services.
//             </motion.p>

//             <motion.p variants={itemVariants} className="text-lg text-[#6B7280] leading-relaxed">
//               The firm is led by CA Gautam Jain, an Ex-Price Waterhouse Coopers professional with extensive experience in financial advisory and audit practices.
//             </motion.p>

//             <motion.div variants={itemVariants} className="space-y-4 pt-4">
//               <div className="flex gap-4">
//                 <div className="flex-shrink-0">
//                   <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
//                     <span className="text-[#2563EB] font-bold">✓</span>
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-[#0B1F3B]">Industry Expertise</h3>
//                   <p className="text-[#6B7280] text-sm">Deep knowledge across multiple sectors and business sizes</p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="flex-shrink-0">
//                   <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
//                     <span className="text-[#2563EB] font-bold">✓</span>
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-[#0B1F3B]">Client-Focused</h3>
//                   <p className="text-[#6B7280] text-sm">Personalized advisory tailored to your business needs</p>
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <div className="flex-shrink-0">
//                   <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
//                     <span className="text-[#2563EB] font-bold">✓</span>
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-[#0B1F3B]">Integrity & Excellence</h3>
//                   <p className="text-[#6B7280] text-sm">Committed to highest professional standards</p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Image */}
          <motion.div
            className="relative h-96 rounded-lg overflow-hidden shadow-lg"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Image
              src="/about.jpg"
              alt="Vijay K. Jain & Associates"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <div className="inline-block px-4 py-1 bg-blue-50 rounded-full">
                <p className="text-sm font-semibold text-[#2563EB]">
                  About Our Firm
                </p>
              </div>
            </motion.div>

            {/* ✅ Updated Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold text-[#0B1F3B] font-poppins leading-tight"
            >
              Trusted Chartered Accountant Services
            </motion.h2>

            {/* ✅ Updated Content */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-[#6B7280] leading-relaxed"
            >
              M/s Vijay K. Jain & Associates is a partnership firm of Chartered
              Accountants based in Indore, established in 1988. With over three
              decades of professional experience, the firm has built a strong
              reputation for delivering reliable, insightful, and value-driven
              financial and advisory services.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-[#6B7280] leading-relaxed"
            >
              Our practice is driven by a commitment to excellence, integrity,
              and a deep understanding of evolving business and regulatory
              environments. We cater to a diverse clientele across industries,
              offering tailored solutions in audit, taxation, compliance, and
              financial advisory.
            </motion.p>

            {/* ✅ Updated Points (client-aligned) */}
            <motion.div variants={itemVariants} className="space-y-4 pt-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                    <span className="text-[#2563EB] font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0B1F3B]">
                    30+ Years of Experience
                  </h3>
                  <p className="text-[#6B7280] text-sm">
                    Delivering reliable and value-driven financial services
                    since 1988
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                    <span className="text-[#2563EB] font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0B1F3B]">
                    Diverse Industry Exposure
                  </h3>
                  <p className="text-[#6B7280] text-sm">
                    Serving clients across multiple sectors with tailored
                    solutions
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100">
                    <span className="text-[#2563EB] font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0B1F3B]">
                    Client-Centric Approach
                  </h3>
                  <p className="text-[#6B7280] text-sm">
                    Focused on delivering practical and solution-driven advisory
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
