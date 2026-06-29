

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#0B1F3B] text-[#D1D5DB]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center space-x-3">
              {/* ✅ Bigger Logo */}
              <Image
                src="/footer_logo.png"
                alt="Vijay K Jain & Associates"
                width={48}
                height={48}
                className="object-contain flex-shrink-0"
              />
              <span className="font-bold text-white font-poppins text-lg leading-tight whitespace-nowrap">
                Vijay K Jain & Associates
              </span>
            </Link>

            <p className="text-sm text-[#9CA3AF]">
              Chartered Accountant firm based in Indore with over 30 years of
              experience delivering audit, taxation, compliance and advisory
              services.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              {["Audit & Assurance", "Taxation", "Financial Advisory", "Risk & Compliance", "Corporate Services", "Business Consulting"].map(
                (item, i) => (
                  <li key={i}>
                    <Link
                      href="/services"
                      className="hover:text-[#2563EB] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#2563EB]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#2563EB]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-[#2563EB]">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#2563EB]">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://www.icai.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2563EB]"
                >
                  ICAI
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Office</h3>

            <div className="space-y-3 text-sm">
              {/* Phone */}
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-[#2563EB] mt-0.5" />
                <a
                  href="tel:+919713700582"
                  className="hover:text-white hover:underline transition"
                >
                  +91 9713700582
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-[#2563EB] mt-0.5" />
                <div className="flex flex-col">
                  <a
                    href="mailto:cavijayjain2011@yahoo.com"
                    className="hover:text-white hover:underline transition"
                  >
                    cavijayjain2011@yahoo.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#2563EB] mt-0.5" />
                <span>
                  307, Manas Bhawan Extension, <br />11, RNT Marg, Indore – 452001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1F2937]"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4">
          <p className="text-sm text-[#9CA3AF]">
            © {new Date().getFullYear()} Vijay K Jain & Associates. All rights
            reserved.
          </p>

          <p className="text-sm text-[#9CA3AF]">Registered with ICAI</p>
        </div>
      </div>
    </footer>
  );
}
