

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
                <a href="tel:+919713700582" className="text-[#6B7280] hover:text-[#2563EB] transition-colors">+91 9713700582</a>
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
                <a href="mailto:cavijayjain2011@yahoo.com" className="text-[#6B7280] hover:text-[#2563EB] transition-colors">cavijayjain2011@yahoo.com</a>
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
                  307, Manas Bhawan Extension,
                  <br />315-316, Bharti Bhawan,
                  <br />11, RNT Marg, Indore – 452001
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
                  Monday - Friday: 11:00 AM - 7:00 PM
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.6!2d75.8744075!3d22.7162641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd5ca9946a27%3A0x46637890a3d140c5!2sVijay+K+Jain+and+Associates!5e0!3m2!1sen!2sin!4v1719000000000!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
