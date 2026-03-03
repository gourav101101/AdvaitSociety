"use client";

import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-cream relative">
      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/916260107683"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-forest mb-6">
            Get in <span className="text-gold italic">Touch</span>
          </h1>
          <p className="text-lg text-forest/80 max-w-2xl mx-auto">
            Begin your healing journey today. Reach out to us or book a
            consultation directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <div className="bg-forest text-cream rounded-3xl p-10 shadow-xl">
              <h3 className="text-3xl font-serif mb-8">Our Clinics</h3>

              <div className="space-y-10 mb-10">
                <div className="flex items-start gap-4">
                  <MapPin className="text-gold shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl font-serif mb-2 text-gold">
                      Indore Center
                    </h4>
                    <p className="text-cream/80 leading-relaxed">
                      Aerodrum road, Anjani Nagar, Kalani Nagar,
                      <br />
                      Madhya Pradesh 452005
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-gold shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-xl font-serif mb-2 text-gold">
                      Manawar Center
                    </h4>
                    <p className="text-cream/80 leading-relaxed">
                      Manawar, Madhya Pradesh
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-cream/20 space-y-6">
                  <div className="flex items-center gap-4">
                    <Phone className="text-gold shrink-0" size={24} />
                    <span className="text-lg">+91 6260107683</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="text-gold shrink-0" size={24} />
                    <span className="text-lg">support@advaitsociety.com</span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.9!2d75.8577!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzEwLjYiTiA3NcKwNTEnMjcuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Quick Contact Options */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg border border-blue-100">
              <h3 className="text-2xl font-serif text-forest mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-8">
                Choose your preferred way to reach us. We're here to help you start your healing journey.
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+916260107683"
                  className="flex items-center gap-4 bg-white p-5 rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest">Call Us Now</p>
                    <p className="text-blue-600 font-medium">+91 6260107683</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/916260107683"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white p-5 rounded-xl border-2 border-[#25D366] hover:bg-green-50 transition-all group"
                >
                  <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest">WhatsApp Chat</p>
                    <p className="text-[#25D366] font-medium">Quick Response</p>
                  </div>
                </a>

                <a
                  href="mailto:support@advaitsociety.com"
                  className="flex items-center gap-4 bg-white p-5 rounded-xl border-2 border-gray-300 hover:bg-gray-50 transition-all group"
                >
                  <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest">Email Us</p>
                    <p className="text-gray-600 font-medium text-sm">support@advaitsociety.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Clinic Timings */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 shadow-lg text-white">
              <h3 className="text-xl font-serif mb-6">Clinic Timings</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/80">Monday - Saturday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Sunday</span>
                  <span className="font-semibold text-red-400">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
