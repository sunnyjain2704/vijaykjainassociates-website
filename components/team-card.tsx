interface TeamCardProps {
  name: string;
  title: string;
  expertise: string;
  image?: string;
}

export function TeamCard({ name, title, expertise }: TeamCardProps) {
  const skip = new Set(["ca", "dr.", "(dr.)", "(fca)", "fca"]);
  const initials = name
    .split(" ")
    .filter((n) => !skip.has(n.toLowerCase()) && !n.startsWith("("))
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const expertiseItems = expertise.split("|").map((s) => s.trim());

  return (
    <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center transition-all duration-300 hover:shadow-lg border border-[#E5E7EB]">
      <div className="mb-4 h-20 w-20 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center text-white text-2xl font-bold font-poppins">
        {initials}
      </div>
      <h3 className="mb-1 text-lg font-semibold text-[#0B1F3B] font-poppins">{name}</h3>
      <p className="mb-3 text-sm text-[#2563EB] font-medium">{title}</p>
      <ul className="text-sm text-[#6B7280] text-left list-disc pl-4 space-y-1 w-full">
        {expertiseItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
