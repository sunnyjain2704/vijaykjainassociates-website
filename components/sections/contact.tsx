

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-1 bg-blue-50 rounded-full">
            <p className="text-sm font-semibold text-[#2563EB]">Contact Us</p>
          </div>

          {/* ✅ Updated Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0B1F3B] font-poppins">
            Get in Touch with Our Team
          </h2>

          {/* ✅ Updated Description */}
          <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
            Connect with us for reliable audit, taxation, compliance and
            financial advisory services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                  <Phone className="h-6 w-6 text-[#2563EB]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#0B1F3B]">Phone</h3>
                <p className="text-[#6B7280]">+91 9827072872</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                  <Mail className="h-6 w-6 text-[#2563EB]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#0B1F3B]">Email</h3>
                <p className="text-[#6B7280]">cavijayjain2011@yahoo.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                  <MapPin className="h-6 w-6 text-[#2563EB]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#0B1F3B]">Address</h3>
                <p className="text-[#6B7280]">
                  306, Block-A, The One Building
                  <br />5 RNT Marg, Indore – 452003
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                  <Clock className="h-6 w-6 text-[#2563EB]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#0B1F3B]">Working Hours</h3>
                <p className="text-[#6B7280]">
                  Monday - Friday: 9:30 AM - 6:00 PM
                  <br />
                  Saturday: By Appointment
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-8">
            <ContactForm />
          </div>
        </div>

        {/* ✅ FIXED MAP (Indore) */}
        <div className="rounded-lg overflow-hidden h-96 bg-gray-200">
          <iframe
            width="100%"
            height="100%"
            style={{ border: "none" }}
            src="https://www.google.com/maps?q=Manas+Bhavan+RNT+Marg+Indore&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
