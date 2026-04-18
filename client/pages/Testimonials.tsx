import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSEO } from "../hooks/use-seo";
import {
  MessageCircle,
  Star,
  ArrowRight,
} from "lucide-react";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "TechStartup India",
    role: "Founder & CEO",
    image: "👨‍💼",
    rating: 5,
    testimonial:
      "360 Biz Health transformed our HR operations completely. Their HRMS solution saved us 20+ hours per week in payroll management. Highly recommended!",
    service: "HR Technology & HRMS",
  },
  {
    name: "Priya Sharma",
    company: "Fashion Elite Ltd",
    role: "Operations Manager",
    image: "👩‍💼",
    rating: 5,
    testimonial:
      "The statutory compliance support is outstanding. We never worried about PF, ESIC, or labour law issues since partnering with them. Peace of mind guaranteed!",
    service: "Statutory Compliance",
  },
  {
    name: "Amit Patel",
    company: "Manufacturing Corp",
    role: "Finance Head",
    image: "👨‍💼",
    rating: 5,
    testimonial:
      "Their taxation and GST advisory service helped us optimize our tax structure and reduce compliance burden significantly. Great team!",
    service: "Financial & Taxation",
  },
  {
    name: "Neha Gupta",
    company: "Healthcare Services",
    role: "HR Director",
    image: "👩‍💼",
    rating: 5,
    testimonial:
      "The insurance advisory team helped us secure the best group health plans for our employees. Customer satisfaction improved tremendously.",
    service: "Insurance Advisory",
  },
  {
    name: "Vikram Singh",
    company: "Creative Studios",
    role: "Founder",
    image: "👨‍💼",
    rating: 5,
    testimonial:
      "Their IP and branding protection services were crucial for our business. We successfully filed our trademark and protected our intellectual property.",
    service: "IP & Branding",
  },
  {
    name: "Ananya Desai",
    company: "E-Commerce Solutions",
    role: "Business Head",
    image: "👩‍💼",
    rating: 5,
    testimonial:
      "Working with 360 Biz Health has been a game-changer. They understand our business needs and provide customized solutions. Exceptional service!",
    service: "Multiple Services",
  },
];

export default function Testimonials() {
  const navigate = useNavigate();

  useSEO({
    title: "Client Testimonials & Success Stories | 360 Biz Health Reviews",
    description: "Read what our 120+ happy clients say about our HR, payroll, compliance & tax services. 95% client retention & proven results.",
    keywords: "client testimonials, success stories, customer reviews, 360 biz health reviews",
    canonical: "https://360bizhealth.com/testimonials",
    url: "https://360bizhealth.com/testimonials",
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Client Testimonials",
      description: "Success stories and testimonials from 360 Biz Health clients"
    }
  });

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
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] pt-20 pb-20 px-4 overflow-hidden flex items-center">
          {/* Animated Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="text-center mb-12">
              <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-primary to-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                  Client Success Stories
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl font-black mb-8 text-gray-900 leading-tight">
                What Our Clients
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
                  Say About Us
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                Real success stories from businesses that transformed with 360 Biz Health
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 px-4 bg-gradient-to-b from-blue-50/30 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-primary transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg italic">
                    "{testimonial.testimonial}"
                  </p>

                  {/* Divider */}
                  <div className="border-t border-gray-200 pt-6 mb-6"></div>

                  {/* Author Info */}
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 text-sm font-medium">
                        {testimonial.role}
                      </p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                      <span className="inline-block mt-2 text-xs font-semibold text-primary bg-blue-50 px-3 py-1 rounded-full">
                        {testimonial.service}
                      </span>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl md:text-6xl font-black text-primary mb-2">
                  500+
                </div>
                <p className="text-gray-600 font-medium text-lg">Happy Clients</p>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-black text-primary mb-2">
                  98%
                </div>
                <p className="text-gray-600 font-medium text-lg">
                  Client Satisfaction
                </p>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-black text-primary mb-2">
                  10+
                </div>
                <p className="text-gray-600 font-medium text-lg">Years of Trust</p>
              </div>
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Experience the 360 Biz Health difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 transition-all hover:shadow-2xl shadow-lg"
              >
                Get Started Now <ArrowRight className="w-5 h-5" />
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
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
