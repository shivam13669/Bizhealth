import { useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSEO } from "../hooks/use-seo";
import {
  ArrowRight,
  MessageCircle,
  CheckCircle,
  Award,
  Users,
  Shield,
  TrendingUp,
  Handshake,
  Zap,
} from "lucide-react";
import { servicesData } from "@shared/services";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

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
    description: "Competent Key Account Manager Support",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Tech Startup (25 employees)",
    role: "Founder",
    feedback: "Saved us 15+ hours every month on payroll processing. Their compliance support is a lifesaver.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "E-Commerce SME (180 employees)",
    role: "HR Manager",
    feedback: "Zero compliance issues since we partnered. Their proactive approach prevents problems before they happen.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    company: "Manufacturing (400 employees)",
    role: "Operations Head",
    feedback: "Professional service with genuine care. They feel like an extension of our team, not just a vendor.",
    rating: 5,
  },
];

const caseStudies = [
  {
    company: "E-Commerce Startup",
    size: "40 employees",
    challenge: "Spending 25 hours/month on payroll, compliance errors costing penalties",
    solution: "Complete payroll automation + compliance management",
    results: ["Reduced payroll time by 95%", "Zero compliance penalties", "20+ hours saved monthly"],
    savingsAmount: "₹2.5L annually",
  },
  {
    company: "Manufacturing SME",
    size: "200 employees",
    challenge: "Complex compliance across 3 locations, manual filing causing delays",
    solution: "Multi-location HRMS + statutory compliance automation",
    results: ["All filings 100% on time", "Reduced HR workload by 60%", "Centralized reporting"],
    savingsAmount: "₹8L+ annually",
  },
  {
    company: "Service Company",
    size: "80 employees",
    challenge: "No proper tax planning, overpaying taxes every year",
    solution: "Comprehensive tax planning + financial advisory",
    results: ["15% tax reduction", "Improved financial visibility", "Better cash flow planning"],
    savingsAmount: "₹12L annually",
  },
];

export default function Services() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFilter = searchParams.get('type') || 'all';

  const filterOptions = [
    { id: 'all', label: 'All Services', count: 6 },
    { id: 'individual', label: 'Individual', count: 0 },
    { id: 'startup', label: 'Startup', count: 0 },
    { id: 'sme', label: 'SME', count: 0 },
    { id: 'enterprise', label: 'Enterprise', count: 0 },
  ];

  // Filter services based on selected type
  const filteredServices = useMemo(() => {
    if (selectedFilter === 'all') return servicesData;
    return servicesData.filter(service => {
      const audienceStr = service.forAudience.join(' ').toLowerCase();
      return audienceStr.includes(selectedFilter.toLowerCase());
    });
  }, [selectedFilter]);

  const handleFilterClick = (filterId: string) => {
    if (filterId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ type: filterId });
    }
  };

  useSEO({
    title: "360 Biz Health - HR, Compliance & Finance Services | Payroll & Tax Planning",
    description: "Complete HR, payroll automation, statutory compliance, tax planning & financial advisory services for startups & SMEs. Save 20+ hours monthly & reduce taxes by 15-25%.",
    keywords: "payroll automation India, HR services for startups India, compliance management India, tax planning India, statutory compliance services, ESIC filing, PF compliance, HR outsourcing India, financial advisory India, payroll software India",
    canonical: selectedFilter === 'all' ? "https://360bizhealth.com/services" : `https://360bizhealth.com/services?type=${selectedFilter}`,
    url: selectedFilter === 'all' ? "https://360bizhealth.com/services" : `https://360bizhealth.com/services?type=${selectedFilter}`,
    type: "service",
    image: "https://360bizhealth.com/logo.png",
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@graph": [
        {
          "@type": "Service",
          "@id": "https://360bizhealth.com/#payroll",
          name: "Payroll Automation",
          description: "Eliminate manual payroll errors and save 20+ hours monthly. Automate salary processing, TDS, statutory deductions with 100% accuracy.",
          provider: {
            "@type": "Organization",
            name: "360 Biz Health",
            url: "https://360bizhealth.com"
          },
          areaServed: "IN",
          availableLanguage: "en-IN",
          priceRange: "₹₹₹"
        },
        {
          "@type": "Service",
          "@id": "https://360bizhealth.com/#compliance",
          name: "Statutory Compliance",
          description: "Stay 100% compliant with PF, ESIC, PT, LWF & labor laws without manual effort. Zero compliance risk with automated government filings.",
          provider: {
            "@type": "Organization",
            name: "360 Biz Health",
            url: "https://360bizhealth.com"
          },
          areaServed: "IN",
          availableLanguage: "en-IN",
          priceRange: "₹₹₹"
        },
        {
          "@type": "Service",
          "@id": "https://360bizhealth.com/#hr-outsourcing",
          name: "End-to-End HR Outsourcing",
          description: "Professional HR management without hiring an HR team. Recruitment, onboarding, performance management, and employee relations.",
          provider: {
            "@type": "Organization",
            name: "360 Biz Health",
            url: "https://360bizhealth.com"
          },
          areaServed: "IN",
          availableLanguage: "en-IN",
          priceRange: "₹₹₹"
        },
        {
          "@type": "Organization",
          "@id": "https://360bizhealth.com/#organization",
          name: "360 Biz Health",
          url: "https://360bizhealth.com",
          description: "HR, compliance & finance solutions for Indian startups and SMEs",
          areaServed: "IN",
          knowsAbout: ["Payroll Management", "HR Services", "Compliance", "Tax Planning", "Financial Advisory"],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            ratingCount: "120"
          }
        }
      ]
    },
    localBusiness: {
      name: "360 Biz Health",
      address: "New Delhi, India",
      telephone: "+91-7906003449",
      email: "360bizhealth@gmail.com",
      areaServed: ["Delhi", "India"],
      priceRange: "₹₹₹",
      hours: {
        "Monday": "09:00 - 18:00",
        "Tuesday": "09:00 - 18:00",
        "Wednesday": "09:00 - 18:00",
        "Thursday": "09:00 - 18:00",
        "Friday": "09:00 - 18:00",
        "Saturday": "10:00 - 16:00",
        "Sunday": "Closed"
      }
    },
    faqs: [
      {
        question: "How much does payroll automation cost?",
        answer: "Our payroll automation pricing depends on the number of employees and complexity. We offer flexible packages starting from ₹5,000/month for small startups to enterprise custom pricing. Contact us for a personalized quote."
      },
      {
        question: "Can you handle compliance for multiple locations?",
        answer: "Yes, absolutely! We manage compliance across multiple states and locations. Our system handles state-specific regulations like different PT rates, ESIC applicability, and compliance requirements seamlessly."
      },
      {
        question: "How long does implementation take?",
        answer: "Most clients go live in 3-4 weeks. The timeline depends on the complexity of your payroll and data migration needs. We provide full support and training throughout the process."
      },
      {
        question: "What is your client retention rate?",
        answer: "We have 95% client retention rate with an average client lifetime of 3+ years. Our proactive support and proven results keep businesses coming back."
      },
      {
        question: "Do you offer free consultation?",
        answer: "Yes! We offer a free consultation where we analyze your current processes and show you exactly how much time and money you can save with our solutions. No obligation, just honest advice."
      },
      {
        question: "What makes your compliance service different?",
        answer: "We're proactive, not reactive. We file compliance before deadlines, monitor regulatory changes, and ensure zero penalties. Our clients have 0% compliance violation rate."
      }
    ]
  });

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/919999999999?text=Hi%20360%20Biz%20Health,%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
      "_blank"
    );
  };

  const handleServiceClick = (slug: string) => {
    navigate(`/services/${slug}`);
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
        title="Chat with us on WhatsApp"
        aria-label="Open WhatsApp chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Navigation */}
      <Navigation />

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
                HR, Compliance & Finance
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
                  Made Simple
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                Stop juggling spreadsheets and compliance deadlines. We automate payroll, ensure compliance, and handle taxes so you can focus on growing your business.
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
            <div className="grid sm:grid-cols-4 gap-6 mt-16 text-center">
              <div className="bg-white/50 backdrop-blur border border-white/20 rounded-2xl p-6">
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">120+</div>
                <p className="text-gray-700 font-semibold">Happy Clients</p>
              </div>
              <div className="bg-white/50 backdrop-blur border border-white/20 rounded-2xl p-6">
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">₹50Cr+</div>
                <p className="text-gray-700 font-semibold">Payroll Processed</p>
              </div>
              <div className="bg-white/50 backdrop-blur border border-white/20 rounded-2xl p-6">
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">95%</div>
                <p className="text-gray-700 font-semibold">Client Retention</p>
              </div>
              <div className="bg-white/50 backdrop-blur border border-white/20 rounded-2xl p-6">
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">24/7</div>
                <p className="text-gray-700 font-semibold">Support Available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 bg-gradient-to-b from-blue-50/30 to-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Problem-Solving Solutions for Your Business
            </h2>
            <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
              We don't just provide services, we solve real business problems and deliver measurable results.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {filterOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleFilterClick(option.id)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedFilter === option.id
                      ? 'bg-gradient-to-r from-primary to-blue-700 text-white shadow-lg'
                      : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-primary hover:text-primary'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <p className="text-center text-gray-600 mb-12 text-sm">
              Showing {filteredServices.length} {filteredServices.length === 1 ? 'service' : 'services'}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => handleServiceClick(service.slug)}
                    className={`group relative bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-primary transition-all duration-300 hover:-translate-y-2 text-left cursor-pointer`}
                  >
                    {/* Icon Container */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" aria-label={`${service.title} service icon`} />
                    </div>

                    {/* Problem Highlight */}
                    <p className="text-sm font-semibold text-primary mb-3 italic">{service.problem}</p>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    
                    {/* Benefit Callout */}
                    <div className="bg-white/60 border-l-4 border-primary rounded px-4 py-3 mb-6">
                      <p className="text-sm font-semibold text-primary">{service.benefit}</p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">{service.description}</p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="text-gray-700 text-sm font-medium">
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* For Audience */}
                    <div className="border-t border-gray-300 pt-4">
                      <p className="text-xs font-semibold text-gray-600 mb-2">IDEAL FOR:</p>
                      <div className="flex flex-wrap gap-2">
                        {service.forAudience.map((audience, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1 font-medium"
                          >
                            {audience}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Trust Us Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Why Trust 360 Biz Health?
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Proven expertise, dedicated support, and real results. Here's why 120+ businesses trust us with their HR, compliance, and finance.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Trust Reason 1 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-primary transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                  <Award className="w-7 h-7 text-white" aria-label="10+ years experience" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  10+ Years Experience
                </h3>
                <p className="text-gray-700">
                  Decade of expertise across HR, payroll, compliance, and taxation. We've handled it all.
                </p>
              </div>

              {/* Trust Reason 2 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-primary transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-white" aria-label="Expert team" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Expert Team
                </h3>
                <p className="text-gray-700">
                  Chartered Accountants, HR professionals, and tax experts on board. Real credentials, real expertise.
                </p>
              </div>

              {/* Trust Reason 3 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-primary transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-white" aria-label="Zero compliance issues" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Zero Compliance Issues
                </h3>
                <p className="text-gray-700">
                  95% client retention with zero compliance penalties. We're proactive, not reactive.
                </p>
              </div>

              {/* Trust Reason 4 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-primary transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4">
                  <TrendingUp className="w-7 h-7 text-white" aria-label="Proven ROI" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Proven ROI
                </h3>
                <p className="text-gray-700">
                  Average client saves ₹5-15L annually. That's why they stay with us for years.
                </p>
              </div>

              {/* Trust Reason 5 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-primary transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-4">
                  <Handshake className="w-7 h-7 text-white" aria-label="Dedicated support" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Dedicated Support
                </h3>
                <p className="text-gray-700">
                  You get a personal Key Account Manager, not a support ticket. We care about your success.
                </p>
              </div>

              {/* Trust Reason 6 */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-primary transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-white" aria-label="Quick implementation" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Quick Implementation
                </h3>
                <p className="text-gray-700">
                  Most clients go live in 3-4 weeks. Fast, smooth, with minimal disruption to your business.
                </p>
              </div>
            </div>

            {/* Trust Stats */}
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary/10 to-blue-100/30 rounded-2xl p-8 border border-primary/20">
                <p className="text-sm font-semibold text-primary mb-2">CLIENT SATISFACTION</p>
                <p className="text-4xl font-black text-gray-900 mb-2">95%</p>
                <p className="text-gray-700">
                  of clients stay with us for 3+ years. The best indicator of trust is repeat business.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-100/30 to-emerald-100/30 rounded-2xl p-8 border border-green-200">
                <p className="text-sm font-semibold text-green-700 mb-2">MONEY SAVED</p>
                <p className="text-4xl font-black text-gray-900 mb-2">₹50Cr+</p>
                <p className="text-gray-700">
                  Payroll processed safely and compliantly. Our clients' businesses run smoothly, year after year.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Real Results from Real Clients
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              See how businesses like yours are saving time, reducing costs, and staying compliant.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 rounded-2xl p-8 hover:shadow-xl transition-all"
                >
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 mb-6 italic font-medium">
                    "{testimonial.feedback}"
                  </p>

                  {/* Client Info */}
                  <div className="border-t border-blue-300 pt-4">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-600 mt-1">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Case Studies: Proven Impact
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              How we've helped businesses solve real problems and achieve measurable success.
            </p>

            <div className="space-y-12">
              {caseStudies.map((caseStudy, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 hover:shadow-2xl transition-all"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Company Info */}
                    <div>
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {caseStudy.company}
                        </h3>
                        <p className="text-gray-600 font-medium">
                          {caseStudy.size}
                        </p>
                      </div>

                      {/* Challenge */}
                      <div className="mb-8">
                        <p className="text-sm font-bold text-primary mb-2">CHALLENGE</p>
                        <p className="text-gray-700 leading-relaxed">
                          {caseStudy.challenge}
                        </p>
                      </div>

                      {/* Solution */}
                      <div>
                        <p className="text-sm font-bold text-primary mb-2">SOLUTION</p>
                        <p className="text-gray-700 leading-relaxed">
                          {caseStudy.solution}
                        </p>
                      </div>
                    </div>

                    {/* Right Side - Results */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8">
                      <p className="text-sm font-bold text-green-700 mb-4">
                        RESULTS & IMPACT
                      </p>

                      <ul className="space-y-4 mb-8">
                        {caseStudy.results.map((result, resultIdx) => (
                          <li key={resultIdx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                            <span className="text-gray-900 font-medium">
                              {result}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="bg-white rounded-xl p-4 text-center">
                        <p className="text-xs font-semibold text-gray-600 mb-1">
                          ANNUAL SAVINGS
                        </p>
                        <p className="text-2xl font-bold text-green-600">
                          {caseStudy.savingsAmount}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
              Stop Wasting Time on Admin Work
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Get a free consultation to see how much time & money you can save with our solutions. No obligation, just honest advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 transition-all hover:shadow-2xl shadow-lg"
              >
                Get Free Consultation <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 transition-all hover:shadow-2xl shadow-lg border-2 border-transparent hover:border-white"
              >
                <MessageCircle className="w-5 h-5" />
                Chat Now
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
