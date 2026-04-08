import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  DollarSign,
  FileCheck,
  Shield,
  Users,
  Menu,
  X,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    title: "HR Technology & HRMS",
    description:
      "Complete HR solutions including payroll, attendance, ESS, and automation.",
    icon: Users,
    features: ["Payroll Management", "Attendance Tracking", "Employee Portal"],
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100/50",
  },
  {
    title: "Statutory Compliance",
    description: "PF, ESIC, PT, LWF, labour law compliance, filings, and audits.",
    icon: FileCheck,
    features: ["PF Filing", "ESIC Compliance", "Labour Law Audit"],
    color: "from-green-500 to-green-600",
    bgColor: "from-green-50 to-green-100/50",
  },
  {
    title: "Financial & Taxation",
    description: "GST, income tax, and strategic financial advisory support.",
    icon: DollarSign,
    features: ["GST Compliance", "Income Tax Planning", "Financial Advisory"],
    color: "from-purple-500 to-purple-600",
    bgColor: "from-purple-50 to-purple-100/50",
  },
  {
    title: "Insurance Advisory",
    description: "Group health, accident, and corporate insurance solutions.",
    icon: Shield,
    features: ["Group Health Plans", "Corporate Insurance", "Claims Support"],
    color: "from-orange-500 to-orange-600",
    bgColor: "from-orange-50 to-orange-100/50",
  },
  {
    title: "IP & Branding",
    description:
      "Trademark registration, copyright protection, and professional branding.",
    icon: Brain,
    features: ["Trademark Filing", "Copyright Protection", "Logo Design"],
    color: "from-pink-500 to-pink-600",
    bgColor: "from-pink-50 to-pink-100/50",
  },
];

const benefits = [
  {
    title: "Expert Team",
    description: "10+ years of experience across all service areas",
  },
  {
    title: "Quick Turnaround",
    description: "Fast implementation with minimal disruption",
  },
  {
    title: "Dedicated Support",
    description: "24/7 customer support and maintenance",
  },
];

export default function Services() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/919999999999?text=Hi%20360%20Biz%20Health,%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
      "_blank"
    );
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => navigate("/")}
              className="text-2xl font-bold text-primary cursor-pointer hover:opacity-80 transition-opacity"
            >
              360 Biz Health
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {[
                { name: "Services", href: "/services" },
                { name: "Testimonials", href: "/#testimonials" },
                { name: "Case Studies", href: "/#case-studies" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    if (item.href.startsWith("/#")) {
                      navigate("/");
                      setTimeout(() => {
                        const id = item.href.replace("/#", "");
                        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    } else {
                      navigate(item.href);
                    }
                  }}
                  className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-4">
              {[
                { name: "Services", href: "/services" },
                { name: "Testimonials", href: "/#testimonials" },
                { name: "Case Studies", href: "/#case-studies" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    if (item.href.startsWith("/#")) {
                      navigate("/");
                      setTimeout(() => {
                        const id = item.href.replace("/#", "");
                        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    } else {
                      navigate(item.href);
                    }
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen pt-20 pb-20 px-4 overflow-hidden flex items-center">
          {/* Animated Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Top right orb */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

            {/* Bottom left orb */}
            <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>

            {/* Grid pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 w-full">
            {/* Main Content */}
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-primary to-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                  Our Services
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl font-black mb-8 text-gray-900 leading-tight">
                Business Solutions
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
                  That Scale
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                Everything your business needs to grow. From HR automation to compliance management, taxation, insurance, and IP protection — we've got you covered.
              </p>

              {/* CTA Buttons in Hero */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-gradient-to-r from-primary to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 transition-all hover:shadow-2xl shadow-lg"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 transition-all hover:shadow-2xl shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Talk to Us
                </button>
              </div>
            </div>

            {/* Benefits Row - Enhanced */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-primary hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="mb-4 h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                    <div className="text-2xl text-white font-bold group-hover:scale-110 transition-transform">✓</div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid sm:grid-cols-3 gap-8 mt-16 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">500+</div>
                <p className="text-gray-600 font-medium">Happy Clients</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">10+</div>
                <p className="text-gray-600 font-medium">Years Experience</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">24/7</div>
                <p className="text-gray-600 font-medium">Support Available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 bg-gradient-to-b from-blue-50/30 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className={`group relative bg-gradient-to-br ${service.bgColor} border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-primary transition-all duration-300 hover:-translate-y-2`}
                  >
                    {/* Icon Container */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title and Description */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                    {/* Features List */}
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary via-blue-600 to-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Let's discuss which services are the perfect fit for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 transition-all hover:shadow-2xl shadow-lg"
              >
                Schedule Consultation <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 transition-all hover:shadow-2xl shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <h2 className="text-4xl font-black text-white mb-2">360 Biz Health</h2>
                <p className="text-slate-400">Trusted Business Solutions Partner</p>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Empowering 500+ businesses with comprehensive HR, compliance, taxation, insurance, and IP solutions.
              </p>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => navigate("/")}
                    className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/");
                      setTimeout(() => {
                        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }}
                    className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300"
                  >
                    Why Choose Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/services")}
                    className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/");
                      setTimeout(() => {
                        document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }}
                    className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/");
                      setTimeout(() => {
                        document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }}
                    className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300"
                  >
                    Case Studies
                  </button>
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
                    className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300"
                  >
                    HR & Payroll
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/services")}
                    className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300"
                  >
                    Compliance
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/services")}
                    className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300"
                  >
                    Taxation
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/services")}
                    className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300"
                  >
                    Insurance
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/services")}
                    className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300"
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
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+919999999999"
                    className="text-slate-300 hover:text-primary transition font-semibold"
                  >
                    +91 9999 999 999
                  </a>
                </li>
                <li>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:hello@360bizhealth.com"
                    className="text-slate-300 hover:text-primary transition font-semibold break-all"
                  >
                    hello@360bizhealth.com
                  </a>
                </li>
                <li>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                    Location
                  </p>
                  <p className="text-slate-300">New York, USA</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700/50 pt-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-slate-500 text-sm font-medium">
                  © 2024 360 Biz Health. All rights reserved.
                </p>
              </div>
              <div className="flex gap-8 md:justify-end">
                <a
                  href="#"
                  className="text-slate-500 hover:text-primary text-sm font-medium transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-slate-500 hover:text-primary text-sm font-medium transition-colors duration-300"
                >
                  Terms & Conditions
                </a>
                <a
                  href="#"
                  className="text-slate-500 hover:text-primary text-sm font-medium transition-colors duration-300"
                >
                  Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
