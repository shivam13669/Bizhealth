import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  DollarSign,
  FileCheck,
  Shield,
  Users,
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
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-2xl font-bold text-primary">
            360 Biz Health
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-primary"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <main>
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
            <a
              href="https://wa.me/919999999999?text=Hi%20360%20Biz%20Health,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
            >
              Talk on WhatsApp
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
