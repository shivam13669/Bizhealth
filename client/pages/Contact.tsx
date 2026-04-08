import { useState } from "react";
import { ArrowRight, MessageCircle, Menu, X, Mail, Phone, MapPin, ChevronDown } from "lucide-react";
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

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide comprehensive solutions including HR & HRMS, Statutory Compliance, Financial & Taxation, Insurance Advisory, and IP & Branding services. Each service is tailored to meet your specific business needs."
    },
    {
      question: "How quickly can you respond to my inquiry?",
      answer: "We typically respond to all inquiries within 24 hours. For urgent matters, you can reach us via WhatsApp for immediate assistance."
    },
    {
      question: "Do you offer customized solutions?",
      answer: "Yes, absolutely! Every business is unique. We work closely with our clients to understand their specific requirements and provide customized solutions that fit their needs and budget."
    },
    {
      question: "What is your pricing model?",
      answer: "Our pricing depends on the scope and complexity of your requirements. We offer flexible packages starting from basic support to comprehensive enterprise solutions. Contact us for a personalized quote."
    },
    {
      question: "Can you help with implementation?",
      answer: "Yes, we provide full implementation support including system setup, data migration, team training, and ongoing support to ensure smooth adoption of our solutions."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive ongoing support including regular updates, maintenance, consultation, and quick troubleshooting to ensure your business runs smoothly."
    },
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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

      {/* Page Container */}
      <div className="pt-20">
        {/* Contact Form Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-blue-50/50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Left Column - Contact Info Cards */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">Get In Touch</h2>
                  <p className="text-gray-600">We're here to help and answer any question you might have.</p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-5 mt-8">
                  {/* Phone Card */}
                  <a
                    href="tel:+919999999999"
                    className="group block bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Phone</p>
                        <p className="text-lg font-bold text-gray-900">+91 9999 999 999</p>
                      </div>
                    </div>
                  </a>

                  {/* Email Card */}
                  <a
                    href="mailto:hello@360bizhealth.com"
                    className="group block bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-1">Email</p>
                        <p className="text-lg font-bold text-gray-900 break-all">hello@360bizhealth.com</p>
                      </div>
                    </div>
                  </a>

                  {/* Location Card */}
                  <div className="group block bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-purple-600 uppercase tracking-widest mb-1">Location</p>
                        <p className="text-lg font-bold text-gray-900">New York, USA</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-3 transition-all hover:shadow-xl shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </button>
              </div>

              {/* Right Column - Form */}
              <div className="lg:col-span-3">
                <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>

                  <form onSubmit={handleContactForm} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition placeholder-gray-400 bg-white hover:border-gray-400"
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
                          className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition placeholder-gray-400 bg-white hover:border-gray-400"
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
                        className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition placeholder-gray-400 bg-white hover:border-gray-400"
                        placeholder="+91 9999999999"
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
                        className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none placeholder-gray-400 bg-white hover:border-gray-400"
                        placeholder="Tell us about your business needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all hover:shadow-xl shadow-lg inline-flex items-center justify-center gap-2"
                    >
                      Send Message
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Find answers to common questions about our services
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-xl overflow-hidden hover:border-primary transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 bg-white hover:bg-gradient-to-r hover:from-blue-50 to-transparent transition-colors"
                  >
                    <h3 className="text-lg font-bold text-gray-900 text-left">{faq.question}</h3>
                    <ChevronDown
                      className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                        openFaqIndex === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-6 pb-6 bg-gradient-to-b from-blue-50/50 to-white border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
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
