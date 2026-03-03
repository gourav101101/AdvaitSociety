import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand - Takes more space */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <img 
                src="/logomain.png" 
                alt="Dr. Lajpatrai Mehra" 
                className="w-12 h-12 rounded-full object-cover bg-white ring-2 ring-white/10 group-hover:ring-blue-500/50 transition-all"
              />
              <span className="font-serif text-2xl font-medium tracking-wide">
                Advait Society
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Premium holistic healthcare clinic specializing in LMNT Neurotherapy and Herbal Medicine. 
              Drug-free healing with zero side effects.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all group"
              >
                <Instagram size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all group"
              >
                <Facebook size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all group"
              >
                <Twitter size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Our Approach", href: "/approach" },
                { name: "Therapies", href: "/therapies" },
                { name: "Success Stories", href: "/success-stories" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {[
                "Neurotherapy (LMNT)",
                "Herbal Medicine",
                "Speech Therapy",
                "Health Camps",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm block">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin size={18} className="text-blue-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Aerodrum road, Anjani Nagar, Kalani Nagar, Indore, MP 452005
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={18} className="text-blue-400 shrink-0" />
                <a href="tel:+916260107683" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  +91 6260107683
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={18} className="text-blue-400 shrink-0" />
                <a href="mailto:support@advaitsociety.com" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  support@advaitsociety.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Advait Society. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
