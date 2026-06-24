import Image from 'next/image';

interface TeamCardProps {
  name: string;
  title: string;
  expertise: string;
  image: string;
}

export function TeamCard({ name, title, expertise, image }: TeamCardProps) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center transition-all duration-300 hover:shadow-lg border border-[#E5E7EB]">
      <div className="relative mb-4 h-48 w-48 overflow-hidden rounded-lg bg-[#F3F4F6]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="mb-1 text-lg font-semibold text-[#0B1F3B] font-poppins">{name}</h3>
      <p className="mb-2 text-sm text-[#2563EB] font-medium">{title}</p>
      <p className="text-sm text-[#6B7280]">{expertise}</p>
    </div>
  );
}
