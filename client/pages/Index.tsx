import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Brain,
  FileCheck,
  DollarSign,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";

export default function Index() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    // Replace SCRIPT_URL with your actual Google Apps Script deployment URL
    const scriptURL =
      "https://script.google.com/macros/d/YOUR_SCRIPT_ID/useless/do";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Redirect to WhatsApp after form submission
        const phone = formData.get("phone") as string;
        const company = formData.get("company") as string;
        const requirement = formData.get("requirement") as string;
        const whatsappMessage = `Hi 360 Biz Health, I'm ${formData.get("name")} from ${company}. I'm interested in: ${requirement}`;
        window.open(
          `https://wa.me/919999999999?text=${encodeURIComponent(whatsappMessage)}`,
          "_blank"
        );

        // Reset form
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const services = [
    {
      id: "hr-tech",
      title: "HR Technology & HRMS",
      description:
        "Complete HR solutions including Payroll, Attendance, ESS, and Automation",
      icon: Users,
      features: ["Payroll Management", "Attendance Tracking", "Employee Portal"],
    },
    {
      id: "compliance",
      title: "Statutory Compliance",
      description:
        "PF, ESIC, PT, LWF, Labour Laws compliance and filings",
      icon: FileCheck,
      features: ["PF Filing", "ESIC Compliance", "Labour Law Audit"],
    },
    {
      id: "finance",
      title: "Financial & Taxation",
      description: "GST, Income Tax, and strategic financial advisory",
      icon: DollarSign,
      features: ["GST Compliance", "Income Tax Planning", "Financial Advisory"],
    },
    {
      id: "insurance",
      title: "Insurance Advisory",
      description: "Comprehensive group health, accident, and corporate insurance",
      icon: Shield,
      features: ["Group Health Plans", "Corporate Insurance", "Claims Support"],
    },
    {
      id: "ip",
      title: "IP & Branding",
      description:
        "Trademark registration, Copyright, and professional logo design",
      icon: Brain,
      features: ["Trademark Filing", "Copyright Protection", "Logo Design"],
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO, Tech Startup Inc.",
      content:
        "360 Biz Health transformed our HR operations. We saved 40% on compliance costs and improved employee satisfaction significantly.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "CFO, Manufacturing Co.",
      content:
        "Their tax advisory saved us ₹25 lakhs annually. The team is proactive and understands our business deeply.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Founder, E-commerce Venture",
      content:
        "Best decision for our business. Their HRMS implementation was seamless and the support is exceptional.",
      rating: 5,
    },
  ];

  const caseStudies = [
    {
      company: "E-Commerce Platform",
      challenge: "Manual payroll processing consuming 80 hours/month",
      solution: "Implemented HRMS with automated payroll",
      result: "Reduced processing time by 95%, zero errors, cost savings of ₹3L annually",
      metric: "₹3L Annual Savings",
    },
    {
      company: "Manufacturing Firm",
      challenge: "Multiple compliance violations and penalties",
      solution: "Comprehensive compliance audit and remediation",
      result: "100% compliance achieved, zero penalties, tax optimization of ₹50L",
      metric: "₹50L Tax Optimized",
    },
    {
      company: "Consulting Firm",
      challenge: "No structured IP protection strategy",
      solution: "Complete IP audit and trademark registration",
      result: "Protected all brand assets, gained competitive advantage",
      metric: "5 Patents Filed",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
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
                { name: "Blog", href: "/blog" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Case Studies", href: "#case-studies" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    if (item.href.startsWith("#")) {
                      document.getElementById(item.href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
                    } else {
                      navigate(item.href);
                    }
                  }}
                  className="text-gray-700 hover:text-primary transition-colors font-medium cursor-pointer"
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
                { name: "Blog", href: "/blog" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Case Studies", href: "#case-studies" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    if (item.href.startsWith("#")) {
                      document.getElementById(item.href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
                    } else {
                      navigate(item.href);
                    }
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-primary transition-colors text-left cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 px-4 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Top right gradient orb */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

          {/* Bottom left gradient orb */}
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

          {/* Floating shapes - top right */}
          <div className="absolute top-20 right-10 w-20 h-20 border-2 border-blue-200 rounded-3xl opacity-30 rotate-45"></div>
          <div className="absolute top-40 right-32 w-12 h-12 bg-blue-300 rounded-full opacity-20"></div>

          {/* Floating shapes - bottom left */}
          <div className="absolute bottom-32 left-10 w-16 h-16 border-2 border-purple-200 rounded-2xl opacity-25"></div>
          <div className="absolute bottom-20 left-40 w-10 h-10 bg-purple-300 rounded-full opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-100px)]">
            {/* Left - Text Content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-6xl md:text-7xl font-black mb-6 text-gray-900 leading-tight">
                Grow Your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                  Business Smart
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-12 max-w-lg">
                One platform for HR, compliance, tax, insurance & IP.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="/contact"
                  className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold inline-flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </a>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold inline-flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </button>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-black text-primary">500+</div>
                  <p className="text-sm text-gray-600">Clients</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-primary">10+</div>
                  <p className="text-sm text-gray-600">Years</p>
                </div>
              </div>
            </div>

            {/* Right - Image + Floating Cards */}
            <div className="hidden md:block relative h-[600px]">
              {/* Left side - Illustration */}
              <div className="absolute left-0 top-0 bottom-0 w-1/2 flex items-center justify-center">
                <div className="relative w-full h-full max-w-xs">
                  {/* Gradient background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-3xl blur-2xl"></div>

                  {/* Illustration */}
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fe2670299988f4576b1c2ceb59fdf5fe5%2F3ea6fe6fdae9495d8b2c6a71bc3da248?format=webp&width=600"
                    alt="Business growth illustration"
                    className="relative w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Right side - Floating Cards */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center perspective">
                {/* Card 1 - Top right */}
                <div className="absolute top-0 right-0 w-64 bg-gradient-to-br from-blue-50 via-blue-25 to-white border border-blue-200/60 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:border-blue-300 group backdrop-blur-sm">
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center text-white font-bold text-sm">→</div>
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">👥</div>
                  <h3 className="font-bold text-gray-900 mb-2">HR & Payroll</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Complete automation</p>
                </div>

                {/* Card 2 - Middle */}
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-64 bg-gradient-to-br from-green-50 via-green-25 to-white border border-green-200/60 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:border-green-300 group backdrop-blur-sm">
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center text-white font-bold text-sm">→</div>
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">✅</div>
                  <h3 className="font-bold text-gray-900 mb-2">Compliance</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Zero penalties</p>
                </div>

                {/* Card 3 - Bottom right */}
                <div className="absolute bottom-0 right-0 w-64 bg-gradient-to-br from-purple-50 via-purple-25 to-white border border-purple-200/60 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:border-purple-300 group backdrop-blur-sm">
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center text-white font-bold text-sm">→</div>
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">💰</div>
                  <h3 className="font-bold text-gray-900 mb-2">Tax Optimized</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">Save ₹lakhs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="py-24 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              10+ years of proven expertise serving 500+ businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Proven Track Record",
                desc: "10+ years helping businesses grow",
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "Experienced specialists across all areas",
              },
              {
                icon: Zap,
                title: "Quick Implementation",
                desc: "Fast setup with minimal disruption",
              },
              {
                icon: Shield,
                title: "Complete Security",
                desc: "Secure handling of sensitive data",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  id={`why-${idx}`}
                  className="rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-6">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions designed to solve your business challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={`service-${idx}`}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-primary transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="bg-gradient-to-br from-primary to-blue-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-gray-700"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Case Studies
            </h2>
            <p className="text-xl text-gray-600">
              Proven results across industries
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                id={`case-${idx}`}
                className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-2xl p-8 hover:shadow-2xl hover:border-primary transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      {study.company}
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                          Challenge
                        </p>
                        <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                          Solution
                        </p>
                        <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/5 to-blue-100/20 rounded-xl p-8 flex flex-col justify-center border border-primary/10">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
                      Results
                    </p>
                    <p className="text-gray-700 mb-6 leading-relaxed">{study.result}</p>
                    <div className="bg-gradient-to-r from-primary to-blue-700 text-white rounded-lg p-4 shadow-lg">
                      <p className="text-3xl font-black">{study.metric}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                id={`testimonial-${idx}`}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-primary transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Community Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🤝",
                title: "Join the Community",
                description: "Connect with like-minded businesses and professionals to grow together.",
              },
              {
                icon: "💬",
                title: "Chat Communication",
                description: "Get instant support and communicate with our team anytime, anywhere.",
              },
              {
                icon: "🚀",
                title: "Github Access",
                description: "Access our open-source repositories and contribute to the community.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                id={`community-${idx}`}
                className="text-center p-8 rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-blue-50 hover:shadow-lg hover:border-primary transition-all"
              >
                <div className="text-6xl mb-4 inline-block">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary via-blue-600 to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Get expert guidance from our team. Schedule a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white hover:bg-gray-50 text-primary px-10 py-4 rounded-lg font-bold inline-flex items-center justify-center gap-2 transition-all hover:shadow-2xl shadow-lg"
            >
              Schedule Consultation <ArrowRight className="w-5 h-5" />
            </a>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-lg font-bold inline-flex items-center justify-center gap-2 transition-all hover:shadow-2xl shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <div>
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  Get In Touch
                </h2>
                <p className="text-gray-600 text-lg">We'll respond within 24 hours</p>
              </div>

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

            {/* Right Column - Contact Illustration */}
            <div className="flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe2670299988f4576b1c2ceb59fdf5fe5%2F1fbe3391d7ad4a658849b2239e2aaea0?format=webp&width=800&height=1200"
                alt="Contact illustration"
                className="w-full h-auto max-w-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
              <div className="flex gap-3">
                <a href="#" className="w-12 h-12 bg-slate-800 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 text-slate-400 hover:text-white hover:shadow-lg hover:shadow-primary/50 group" title="Facebook">
                  <span className="text-lg group-hover:scale-110 transition-transform">f</span>
                </a>
                <a href="#" className="w-12 h-12 bg-slate-800 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 text-slate-400 hover:text-white hover:shadow-lg hover:shadow-primary/50 group" title="Twitter">
                  <span className="text-lg group-hover:scale-110 transition-transform">𝕏</span>
                </a>
                <a href="#" className="w-12 h-12 bg-slate-800 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 text-slate-400 hover:text-white hover:shadow-lg hover:shadow-primary/50 group" title="LinkedIn">
                  <span className="text-sm font-bold group-hover:scale-110 transition-transform">in</span>
                </a>
                <a href="#" className="w-12 h-12 bg-slate-800 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 text-slate-400 hover:text-white hover:shadow-lg hover:shadow-primary/50 group" title="Instagram">
                  <span className="text-lg group-hover:scale-110 transition-transform">📷</span>
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li><button onClick={() => navigate("/")} className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block cursor-pointer">Home</button></li>
                <li><button onClick={() => navigate("/services")} className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block cursor-pointer">Services</button></li>
                <li><button onClick={() => navigate("/blog")} className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block cursor-pointer">Blog</button></li>
                <li><button onClick={() => navigate("/testimonials")} className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block cursor-pointer">Testimonials</button></li>
                <li><a href="#case-studies" className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Case Studies</a></li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                <li><a href="#services" className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">HR & Payroll</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Compliance</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Taxation</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Insurance</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">IP & Branding</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Get In Touch</h3>
              <ul className="space-y-5">
                <li>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:+919999999999" className="text-slate-300 hover:text-primary transition font-semibold">+91 9999 999 999</a>
                </li>
                <li>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:hello@360bizhealth.com" className="text-slate-300 hover:text-primary transition font-semibold break-all">hello@360bizhealth.com</a>
                </li>
                <li>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Location</p>
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
                <a href="#" className="text-slate-500 hover:text-primary text-sm font-medium transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-slate-500 hover:text-primary text-sm font-medium transition-colors duration-300">Terms & Conditions</a>
                <a href="#" className="text-slate-500 hover:text-primary text-sm font-medium transition-colors duration-300">Support</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
