import { useNavigate } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h2 className="text-4xl font-black text-white mb-2">360 Biz Health</h2>
              <p className="text-slate-400">Trusted Business Solutions Partner</p>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              Empowering 500+ businesses with comprehensive HR, compliance, taxation, insurance, and IP solutions. Your trusted partner for sustainable growth and business excellence.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 text-slate-300 hover:text-white hover:shadow-lg hover:shadow-blue-600/50 group"
                title="Facebook"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 text-slate-300 hover:text-white hover:shadow-lg hover:shadow-primary/50 group"
                title="Twitter/X"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 text-slate-300 hover:text-white hover:shadow-lg hover:shadow-blue-700/50 group"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 text-slate-300 hover:text-white hover:shadow-lg hover:shadow-pink-600/50 group"
                title="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/services")}
                  className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/blog")}
                  className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/testimonials")}
                  className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <a
                  href="/#case-studies"
                  className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300"
                >
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => navigate("/services")}
                  className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer"
                >
                  HR & Payroll
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/services")}
                  className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer"
                >
                  Compliance
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/services")}
                  className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer"
                >
                  Taxation
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/services")}
                  className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer"
                >
                  Insurance
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/services")}
                  className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer"
                >
                  IP & Branding
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Get In Touch</h3>
            <ul className="space-y-5">
              <li>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:+917906003449" className="text-slate-300 hover:text-primary transition font-semibold">
                  +91 79060 03449
                </a>
              </li>
              <li>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:360bizhealth@gmail.com" className="text-slate-300 hover:text-primary transition font-semibold break-all">
                  360bizhealth@gmail.com
                </a>
              </li>
              <li>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Location</p>
                <p className="text-slate-300">New Delhi, India</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 pt-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-slate-500 text-sm font-medium">
                © 2026 360 Biz Health. All rights reserved.
              </p>
            </div>
            <div className="flex gap-8 md:justify-end">
              <a href="#" className="text-slate-500 hover:text-primary text-sm font-medium transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-primary text-sm font-medium transition-colors duration-300">
                Terms & Conditions
              </a>
              <a href="#" className="text-slate-500 hover:text-primary text-sm font-medium transition-colors duration-300">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
