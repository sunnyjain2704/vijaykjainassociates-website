

import { TeamCard } from '@/components/team-card';

export function Team() {
  const team = [
    {
      name: 'CA Sunny Jain',
      title: 'Partner',
      expertise:
        'Audit, Taxation & Financial Consulting | Budgeting, Costing & Risk Advisory | Wealth Management & Business Consulting',
      image: '/placeholder-user.jpg',
    },
    {
      name: 'CA (Dr.) Subhash Mathur',
      title: 'Partner',
      expertise:
        'Corporate Advisory | Strategic Management | Business Restructuring & CSR',
      image: '/placeholder-user.jpg',
    },
    {
      name: 'CA Pooja Jain (FCA)',
      title: 'Partner',
      expertise:
        'GST & Taxation Expert | Statutory & Internal Audit | Compliance Advisory',
      image: '/placeholder-user.jpg',
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-1 bg-blue-50 rounded-full">
            <p className="text-sm font-semibold text-[#2563EB]">Leadership</p>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B1F3B] font-poppins">
            Our Leadership Team
          </h2>

          <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
            Experienced professionals with strong expertise in audit, taxation, compliance and financial advisory services.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}