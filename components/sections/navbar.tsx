

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/career" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[#D1D5DB] bg-white bg-opacity-98 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ✅ Increased height */}
        <div className="flex items-center justify-between min-h-20 py-2">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 min-w-0">

            <Image
              src="/logo.png"
              alt="Vijay K. Jain & Associates"
              width={80}
              height={80}
              className="h-6 w-auto sm:h-7 lg:h-9 object-contain flex-shrink-0 self-center"
            />

            <span className="font-poppins font-semibold tracking-[0.02em] text-[#0B1F3B] text-xl sm:text-2xl lg:text-3xl leading-none self-center">
              Vijay K. Jain & Associates
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-lg font-bold text-[#6B7280] hover:text-[#0B1F3B] transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <Link href="/contact">
              <Button className="ml-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex-shrink-0 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-slate-900 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-lg font-bold text-[#6B7280] hover:text-[#0B1F3B] hover:bg-[#F8FAFC]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full mt-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}