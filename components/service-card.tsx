import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group flex flex-col items-start rounded-lg border border-[#E5E7EB] bg-white p-6 transition-all duration-300 hover:border-[#2563EB] hover:shadow-lg hover:shadow-blue-500/10">
      {/* <div className="mb-4 rounded-lg bg-[#0B1F3B] bg-opacity-5 p-3 transition-colors group-hover:bg-[#2563EB] group-hover:bg-opacity-5">
        <Icon className="h-6 w-6 text-[#0B1F3B] transition-colors group-hover:text-[#2563EB]" />
      </div> */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0B1F3B]/5 group-hover:bg-[#2563EB]/10">
        <Icon size={22} className="text-[#0B1F3B] group-hover:text-[#2563EB]" />
      </div>
      <h3 className="mb-2 font-semibold text-[#0B1F3B] font-poppins">
        {title}
      </h3>
      <p className="text-sm text-[#6B7280]">{description}</p>
    </div>
  );
}
