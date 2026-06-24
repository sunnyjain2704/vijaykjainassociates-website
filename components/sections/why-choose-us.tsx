

import { Award, Users, Lock, HeartHandshake } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "Integrity Driven",
      description:
        "Committed to ethical practices, transparency and high professional standards in all our services.",
    },
    {
      icon: Users,
      title: "Industry Experience",
      description:
        "Serving clients across multiple sectors with over 30 years of professional experience.",
    },
    {
      icon: Lock,
      title: "Compliance & Advisory",
      description:
        "Focused on audit, taxation and regulatory compliance with practical and reliable advisory support.",
    },
    {
      icon: HeartHandshake,
      title: "Client-Centric Approach",
      description:
        "Building long-term relationships by understanding client needs and delivering consistent value.",
    },
  ];

  return (
    <section className="py-20 bg-[#0B1F3B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-1 bg-blue-900 rounded-full border border-[#2563EB] border-opacity-30">
            <p className="text-sm font-semibold text-[#60A5FA]">
              Why Choose Us
            </p>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white font-poppins">
            What Sets Us Apart
          </h2>

          {/* ✅ FIXED */}
          <p className="text-lg text-[#D1D5DB] max-w-3xl mx-auto">
            Our services are built on integrity, experience and a strong
            commitment to professional excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group rounded-lg border border-[#1F3A5F] bg-[#0F2847] bg-opacity-80 p-8 transition-all duration-300 hover:border-[#2563EB] hover:bg-blue-900 hover:bg-opacity-20 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#2563EB]/5 group-hover:bg-[#2563EB]/10">
                  <Icon
                    size={22}
                    className="text-[#0B1F3B]  group-hover:text-[#2563EB]"
                  />
                </div> */}

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-sm group-hover:bg-white">
                  <Icon
                    size={22}
                    className="text-[#0B1F3B] group-hover:text-[#2563EB]"
                  />
                </div>

                <h3 className="mb-2 font-semibold text-white text-lg font-poppins">
                  {reason.title}
                </h3>

                <p className="text-[#D1D5DB]">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
