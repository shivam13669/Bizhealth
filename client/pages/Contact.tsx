import { useState } from "react";
import { ArrowRight, MessageCircle, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/919999999999?text=Hi%20360%20Biz%20Health,%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
      "_blank"
    );
  };

  const handleContactForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Google Sheets integration via Apps Script
    const scriptURL =
      "https://script.google.com/macros/d/YOUR_SCRIPT_ID/useless/do";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const phone = formData.get("phone") as string;
        const company = formData.get("company") as string;
        const requirement = formData.get("requirement") as string;
        const whatsappMessage = `Hi 360 Biz Health, I'm ${formData.get("name")} from ${company}. I'm interested in: ${requirement}`;
        window.open(
          `https://wa.me/919999999999?text=${encodeURIComponent(whatsappMessage)}`,
          "_blank"
        );

        e.currentTarget.reset();
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
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
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.href)}
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
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.href);
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

      {/* Page Container */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-white via-blue-50/30 to-white">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? Our team is here to help you grow your business.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Form */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Send us a message
                </h2>
                <p className="text-gray-600 text-lg mb-10">
                  We'll respond within 24 hours
                </p>

                <form onSubmit={handleContactForm} className="space-y-6">
                  {/* Two column row for Name and Email */}
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition placeholder-gray-400 bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition placeholder-gray-400 bg-white"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition placeholder-gray-400 bg-white"
                      placeholder="+91 9999999999"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition placeholder-gray-400 bg-white"
                      placeholder="Your Company"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none placeholder-gray-400 bg-white"
                      placeholder="Tell us about your business needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all hover:shadow-xl shadow-lg inline-flex items-center justify-center gap-2"
                  >
                    Send Message <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>

              {/* Right Column - Contact Information & Illustration */}
              <div className="flex flex-col justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe2670299988f4576b1c2ceb59fdf5fe5%2F1fbe3391d7ad4a658849b2239e2aaea0?format=webp&width=800&height=1200"
                  alt="Contact illustration"
                  className="w-full h-auto max-w-2xl mx-auto mb-8"
                />

                {/* Contact Info */}
                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                      Phone
                    </p>
                    <a
                      href="tel:+919999999999"
                      className="text-xl font-bold text-gray-900 hover:text-primary transition"
                    >
                      +91 9999 999 999
                    </a>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                      Email
                    </p>
                    <a
                      href="mailto:hello@360bizhealth.com"
                      className="text-lg font-bold text-gray-900 hover:text-primary transition break-all"
                    >
                      hello@360bizhealth.com
                    </a>
                  </div>

                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 transition-all hover:shadow-xl shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

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
                    onClick={() => navigate("/services")}
                    className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/contact")}
                    className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300"
                  >
                    Contact
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
