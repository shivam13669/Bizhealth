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
} from "lucide-react";

const services = [
  {
    title: "HR Technology & HRMS",
    description:
      "Complete HR solutions including payroll, attendance, ESS, and automation.",
    icon: Users,
    features: ["Payroll Management", "Attendance Tracking", "Employee Portal"],
  },
  {
    title: "Statutory Compliance",
    description: "PF, ESIC, PT, LWF, labour law compliance, filings, and audits.",
    icon: FileCheck,
    features: ["PF Filing", "ESIC Compliance", "Labour Law Audit"],
  },
  {
    title: "Financial & Taxation",
    description: "GST, income tax, and strategic financial advisory support.",
    icon: DollarSign,
    features: ["GST Compliance", "Income Tax Planning", "Financial Advisory"],
  },
  {
    title: "Insurance Advisory",
    description: "Group health, accident, and corporate insurance solutions.",
    icon: Shield,
    features: ["Group Health Plans", "Corporate Insurance", "Claims Support"],
  },
  {
    title: "IP & Branding",
    description:
      "Trademark registration, copyright protection, and professional branding.",
    icon: Brain,
    features: ["Trademark Filing", "Copyright Protection", "Logo Design"],
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
    <div className="min-h-screen bg-white text-gray-900">
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
        <section className="bg-gradient-to-br from-primary/5 via-white to-primary/10">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Services
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                End-to-end business support for HR, compliance, finance, and growth.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Explore the core services we provide to help businesses stay compliant,
                improve operations, and scale with confidence.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">{service.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-gray-700">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="border-t border-gray-100 bg-gray-50">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Need help choosing the right service?
              </h2>
              <p className="mt-3 max-w-2xl text-gray-600">
                Reach out and we can suggest the best setup for your business needs.
              </p>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
            >
              Talk on WhatsApp
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
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
