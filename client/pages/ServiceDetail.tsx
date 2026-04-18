import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import { getServiceBySlug } from "@shared/services";
import { useSEO } from "../hooks/use-seo";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = slug ? getServiceBySlug(slug) : null;

  // Set SEO metadata for the service page
  if (service) {
    useSEO({
      title: `${service.title} | Services`,
      description: service.description,
      keywords: `${service.title}, ${service.benefit}, HR services`,
      canonical: `https://360bizhealth.com/services/${service.slug}`,
      url: `https://360bizhealth.com/services/${service.slug}`,
      type: "service",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        description: service.detailedDescription || service.description,
        provider: {
          "@type": "Organization",
          name: "360 Biz Health",
          url: "https://360bizhealth.com"
        },
        areaServed: "IN",
        availableLanguage: "en-IN",
        offers: {
          "@type": "Offer",
          description: service.benefit,
          priceCurrency: "INR",
          price: service.pricing || "Custom"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "120"
        }
      }
    });
  }

  if (!service) {
    return (
      <div className="bg-white text-gray-900 min-h-screen">
        <Navigation />
        <main className="pt-32 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-8">
              Sorry, we couldn't find the service you're looking for.
            </p>
            <button
              onClick={() => navigate("/services")}
              className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Services
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/919999999999?text=Hi%20360%20Biz%20Health,%20I%20would%20like%20to%20know%20more%20about%20${service.title}.`,
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
        aria-label="Open WhatsApp chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      <Navigation />

      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <button
            onClick={() => navigate("/services")}
            className="flex items-center gap-2 text-primary hover:text-blue-700 font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Services
          </button>
        </div>

        {/* Hero Section */}
        <section className={`relative py-20 px-4 bg-gradient-to-br ${service.bgColor}`}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-start gap-8">
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br ${service.color} flex-shrink-0`}
              >
                <Icon className="w-12 h-12 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  {service.detailedDescription}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => navigate("/contact")}
                    className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 transition-all hover:shadow-2xl shadow-lg"
                  >
                    Schedule Free Consultation <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleWhatsAppClick}
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 transition-all hover:shadow-2xl shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Ask a Question
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Key Benefits</h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              What you'll gain from this service
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {service.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-blue-100/30 border border-blue-200 rounded-2xl p-8 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Service Features</h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              Everything included in this service
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0 font-bold">
                    ✓
                  </div>
                  <p className="text-lg text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">How We Get Started</h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              Our typical implementation timeline
            </p>

            <div className="space-y-6">
              {service.implementationSteps.map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    {idx < service.implementationSteps.length - 1 && (
                      <div className="w-1 h-16 bg-gradient-to-b from-primary to-blue-200 my-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-lg text-gray-700">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Why Choose 360 Biz Health</h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              What sets us apart from other providers
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {service.whyChooseUs.map((reason, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-primary transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {service.faq && service.faq.length > 0 && (
          <section className="py-20 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 mb-12">
                Common questions about this service
              </p>

              <div className="space-y-6">
                {service.faq.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-blue-50 to-blue-100/30 border border-blue-200 rounded-2xl p-8"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {item.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Pricing Section */}
        {service.pricing && (
          <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-4">Pricing</h2>
              <div className="bg-white border-2 border-primary rounded-2xl p-8">
                <p className="text-2xl font-bold text-primary mb-4">
                  {service.pricing}
                </p>
                <p className="text-gray-700 mb-6">
                  Exact pricing depends on your specific needs. We'll provide a custom quote after understanding your requirements.
                </p>
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold inline-flex items-center gap-2 transition-all"
                >
                  Get Custom Quote <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary via-blue-600 to-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your {service.title}?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Let's discuss how this service can help your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 transition-all hover:shadow-2xl shadow-lg"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold inline-flex items-center justify-center gap-2 transition-all hover:shadow-2xl shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Chat Now
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
