import {
  ArrowRight,
  Brain,
  DollarSign,
  FileCheck,
  Shield,
  Users,
  MessageCircle,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  description: string;
  problem: string;
  benefit: string;
  icon: any;
  color: string;
  bgColor: string;
  forAudience: string[];
  features: string[];
  detailedDescription: string;
  benefits: {
    title: string;
    description: string;
  }[];
  implementationSteps: string[];
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  pricing?: string;
  faq?: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: "payroll",
    slug: "payroll-automation",
    title: "Payroll Automation",
    description:
      "Eliminate manual payroll errors and save 20+ hours monthly. Automate salary processing, TDS, statutory deductions with 100% accuracy.",
    problem: "Stuck manually processing payroll every month?",
    benefit: "Reduce payroll errors by 90% & ensure compliance automatically",
    icon: DollarSign,
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100/50",
    forAudience: ["Startups (10-50)", "SMEs (50-500)", "Enterprises"],
    features: [
      "✓ Automated salary processing",
      "✓ TDS & statutory deduction handling",
      "✓ Payslip generation in seconds",
      "✓ Payroll audit trails",
    ],
    detailedDescription:
      "Stop wasting hours manually processing payroll every month. Our payroll automation system handles everything—from basic salary calculations to complex statutory deductions, TDS, PF, ESIC, PT, and LWF.\n\nYour team gets automated payslips, attendance integration, and zero manual errors. All compliance requirements are handled automatically, and you get complete audit trails for every transaction.",
    benefits: [
      {
        title: "Save 20+ Hours Monthly",
        description: "Automate what used to take days of manual work",
      },
      {
        title: "99.9% Accuracy",
        description: "Eliminate manual calculation errors completely",
      },
      {
        title: "Instant Payslips",
        description: "Employees get payslips in seconds, not days",
      },
      {
        title: "Full Compliance",
        description: "All statutory deductions handled automatically",
      },
    ],
    implementationSteps: [
      "Week 1: Setup & data migration from your existing system",
      "Week 2: Salary structure configuration & testing",
      "Week 3: Employee training & soft launch",
      "Week 4: Full launch with ongoing support",
    ],
    whyChooseUs: [
      {
        title: "Multi-Location Ready",
        description: "Handle payroll across multiple locations seamlessly",
      },
      {
        title: "Government Integration",
        description: "Direct ESIC, PF, and PT portal integration",
      },
      {
        title: "Real-Time Reporting",
        description: "Access payroll data anytime, from anywhere",
      },
      {
        title: "Dedicated Support",
        description: "Personalized Key Account Manager for your needs",
      },
    ],
    pricing: "Starting from ₹5,000/month for up to 50 employees",
    faq: [
      {
        question: "Can you integrate with our existing HR system?",
        answer:
          "Yes, we integrate with most HRIS, ERP, and attendance systems. We handle the migration seamlessly.",
      },
      {
        question: "What if we have complex salary structures?",
        answer:
          "No problem. Our system handles simple to extremely complex salary structures with multiple allowances, deductions, and conditions.",
      },
      {
        question: "How long does implementation take?",
        answer:
          "Typically 3-4 weeks from setup to full launch. We handle everything including data migration and employee training.",
      },
      {
        question: "Is there a contract lock-in period?",
        answer:
          "No. Most clients stay for years because of the value, but you're not locked in. Month-to-month commitment only.",
      },
    ],
  },
  {
    id: "compliance",
    slug: "statutory-compliance",
    title: "Statutory Compliance",
    description:
      "Stay 100% compliant with PF, ESIC, PT, LWF & labor laws without manual effort. We handle all filings, audits, and government submissions.",
    problem: "Worried about compliance penalties & missed deadlines?",
    benefit: "Zero compliance risk with automated government filings",
    icon: FileCheck,
    color: "from-green-500 to-green-600",
    bgColor: "from-green-50 to-green-100/50",
    forAudience: ["Startups (20-50)", "SMEs (50-500)", "Enterprises"],
    features: [
      "✓ PF & ESIC automated filings",
      "✓ PT, LWF, and bonus calculations",
      "✓ Labor law compliance audits",
      "✓ Penalty prevention & alerts",
    ],
    detailedDescription:
      "Compliance is complex. Every state has different rules, deadlines are tight, and penalties are harsh. We take this completely off your plate.\n\nOur team monitors all compliance requirements, meets every deadline, handles government submissions, and keeps you protected from penalties. From PF reconciliation to labor law audits, we've got it covered.",
    benefits: [
      {
        title: "Zero Penalties",
        description: "Never miss a compliance deadline again",
      },
      {
        title: "Multi-State Expertise",
        description: "Full compliance across PAN India operations",
      },
      {
        title: "Automated Filing",
        description: "All government submissions done automatically",
      },
      {
        title: "Peace of Mind",
        description: "Regular compliance audits keep you protected",
      },
    ],
    implementationSteps: [
      "Week 1: Complete compliance audit of your current setup",
      "Week 2: Identify gaps and remediation plan",
      "Week 3: Implement compliance fixes and automation",
      "Ongoing: Monthly monitoring and proactive alerts",
    ],
    whyChooseUs: [
      {
        title: "Expert Team",
        description: "Chartered accountants and labor law experts on board",
      },
      {
        title: "Proactive Monitoring",
        description: "We alert you before issues become penalties",
      },
      {
        title: "Government Portal Access",
        description: "Direct integration with ESIC, PF, and labor portals",
      },
      {
        title: "Audit Support",
        description: "Full documentation and support for labor audits",
      },
    ],
    pricing: "Custom pricing based on employee count and complexity",
    faq: [
      {
        question: "What happens if there's a compliance issue?",
        answer:
          "We proactively identify issues and fix them. Our goal is prevention, not firefighting. In rare cases, we provide full support for remediation.",
      },
      {
        question: "Do you handle income tax compliance too?",
        answer:
          "No, income tax is handled by our Financial & Tax Advisory team. We recommend combining both for complete coverage.",
      },
      {
        question: "What's included in the compliance audit?",
        answer:
          "Complete review of PF, ESIC, PT, LWF, labor law compliance, wage code accuracy, and risk assessment.",
      },
    ],
  },
  {
    id: "hr-outsourcing",
    slug: "hr-outsourcing",
    title: "End-to-End HR Outsourcing",
    description:
      "Full HR support so you can focus on business growth. From hiring to exit, we manage recruitment, performance, and employee relations.",
    problem: "Don't have time to manage HR full-time?",
    benefit: "Professional HR management without hiring an HR team",
    icon: Users,
    color: "from-purple-500 to-purple-600",
    bgColor: "from-purple-50 to-purple-100/50",
    forAudience: ["Startups (20-100)", "SMEs (100-500)"],
    features: [
      "✓ Recruitment & onboarding",
      "✓ Performance management",
      "✓ Employee relations & exit handling",
      "✓ HR policy development",
    ],
    detailedDescription:
      "Growing businesses need professional HR support, but hiring a full HR team is expensive. We become your HR department.\n\nFrom recruiting the right talent to managing performance, handling conflicts, and smooth exits—we manage it all. You get experienced HR professionals without the overhead of hiring and managing them yourself.",
    benefits: [
      {
        title: "Full HR Coverage",
        description: "Recruitment, onboarding, performance, and more",
      },
      {
        title: "Expert Guidance",
        description: "Access to seasoned HR professionals on demand",
      },
      {
        title: "Better Employee Experience",
        description: "Professional HR processes improve retention",
      },
      {
        title: "Cost Savings",
        description: "Much cheaper than hiring an internal HR team",
      },
    ],
    implementationSteps: [
      "Week 1: HR audit and current process documentation",
      "Week 2: Policy development and documentation",
      "Week 3: Recruitment process setup and KRA definition",
      "Ongoing: Monthly HR operations and strategic support",
    ],
    whyChooseUs: [
      {
        title: "Dedicated HR Manager",
        description: "One point of contact for all HR needs",
      },
      {
        title: "Recruitment Network",
        description: "Access to our talent pool and recruitment partners",
      },
      {
        title: "Conflict Resolution",
        description: "Expert mediation for employee disputes",
      },
      {
        title: "Custom Policies",
        description: "Tailored policies that match your culture",
      },
    ],
    pricing: "Starting from ₹15,000/month for basic HR support",
    faq: [
      {
        question: "Will you handle recruitment for us?",
        answer:
          "Yes, full end-to-end recruitment including job posting, screening, interviews, and selection. We can also integrate with external recruiters.",
      },
      {
        question: "What if we need ongoing employee support?",
        answer:
          "We provide full employee relations support including conflict resolution, performance coaching, and exit management.",
      },
    ],
  },
  {
    id: "tax-advisory",
    slug: "tax-advisory",
    title: "Financial & Tax Advisory",
    description:
      "Strategic tax planning & financial guidance. GST compliance, income tax planning, financial forecasting to minimize tax burden.",
    problem: "Paying more taxes than you should?",
    benefit: "Optimize taxes & reduce financial burden by 15-25%",
    icon: TrendingUp,
    color: "from-orange-500 to-orange-600",
    bgColor: "from-orange-50 to-orange-100/50",
    forAudience: ["Startups (All)", "SMEs (50-500)", "Enterprises"],
    features: [
      "✓ GST & income tax planning",
      "✓ Cost optimization strategies",
      "✓ Financial forecasting & budgeting",
      "✓ Tax return filing & representation",
    ],
    detailedDescription:
      "Most businesses pay 15-25% more in taxes than necessary. Why? Because they don't have a tax strategy.\n\nOur chartered accountants work with you to optimize your tax position, plan ahead, and ensure full compliance. We handle GST, income tax, bookkeeping, and provide financial insights to help you make better business decisions.",
    benefits: [
      {
        title: "Reduce Tax Burden",
        description: "Legitimate strategies to minimize taxes",
      },
      {
        title: "Better Financial Clarity",
        description: "Real-time financial reporting and insights",
      },
      {
        title: "Confident Growth",
        description: "Scale without tax or compliance worries",
      },
      {
        title: "Expert Representation",
        description: "We represent you to tax authorities",
      },
    ],
    implementationSteps: [
      "Month 1: Complete financial review and tax position assessment",
      "Month 2: Strategic planning and tax optimization roadmap",
      "Month 3-6: Implementation of tax-saving strategies",
      "Ongoing: Quarterly reviews and forward planning",
    ],
    whyChooseUs: [
      {
        title: "Chartered Accountants",
        description: "CA-qualified professionals with 10+ years experience",
      },
      {
        title: "Proactive Planning",
        description: "We plan ahead instead of reacting after year-end",
      },
      {
        title: "Complete Solutions",
        description: "GST, income tax, bookkeeping, and advisory all in one",
      },
      {
        title: "ITR & Compliance",
        description: "Expert handling of ITR filing and tax representation",
      },
    ],
    pricing: "Starting from ₹10,000/month for startups, custom for larger businesses",
    faq: [
      {
        question: "Can you really reduce my tax burden?",
        answer:
          "Yes, through legitimate strategies like GST credit optimization, timing of expenses, business structure optimization, and investment planning. Typical savings are 15-25%.",
      },
      {
        question: "Do you handle GST compliance?",
        answer:
          "Yes, complete GST compliance including return filing, reconciliation, and quarterly advisory.",
      },
      {
        question: "How often will you communicate?",
        answer:
          "Quarterly reviews at minimum. Monthly for larger accounts. Plus on-demand support anytime.",
      },
    ],
  },
  {
    id: "insurance",
    slug: "corporate-insurance",
    title: "Corporate Insurance Solutions",
    description:
      "Protect your business & employees. Group health insurance, accident coverage, and claims management tailored to your needs.",
    problem: "Employees asking for health coverage?",
    benefit: "Complete employee protection at competitive rates",
    icon: Shield,
    color: "from-pink-500 to-pink-600",
    bgColor: "from-pink-50 to-pink-100/50",
    forAudience: ["Startups (30+)", "SMEs (50-500)", "Enterprises"],
    features: [
      "✓ Group health insurance programs",
      "✓ Accident & disability coverage",
      "✓ Claims processing & support",
      "✓ Policy renewal & optimization",
    ],
    detailedDescription:
      "Employee health insurance is no longer a luxury—it's essential for retention and welfare. We manage your complete insurance portfolio at the best rates.\n\nFrom selecting the right policies to handling claims and renewals, we ensure your team is protected. We negotiate better terms, optimize coverage, and provide dedicated claims support.",
    benefits: [
      {
        title: "Employee Retention",
        description: "Good health benefits significantly improve retention",
      },
      {
        title: "Best Rates",
        description: "Our partnerships get you better pricing than retail",
      },
      {
        title: "Hassle-Free Claims",
        description: "We handle claim processing and follow-up",
      },
      {
        title: "Comprehensive Coverage",
        description: "Health, accident, disability, and more",
      },
    ],
    implementationSteps: [
      "Week 1: Current needs assessment and employee feedback",
      "Week 2: Insurance options comparison and quotations",
      "Week 3: Selection and enrollment process",
      "Week 4: Policy activation and employee communication",
    ],
    whyChooseUs: [
      {
        title: "Multiple Insurer Access",
        description: "We work with top insurers to get best pricing",
      },
      {
        title: "Dedicated Claims Manager",
        description: "Single point of contact for all insurance matters",
      },
      {
        title: "Annual Optimization",
        description: "We review and optimize your coverage annually",
      },
      {
        title: "Expert Negotiation",
        description: "Our relationships get you better terms",
      },
    ],
    pricing: "Varies by coverage and employee count. Typical range ₹300-800/employee/month",
    faq: [
      {
        question: "What's the typical premium for group health insurance?",
        answer:
          "Typical range is ₹300-800 per employee per month depending on coverage, age, and company location. We negotiate to get best rates.",
      },
      {
        question: "What's included in comprehensive coverage?",
        answer:
          "Hospitalization, pre/post hospitalization, day care procedures, mental health coverage, maternity, and more. We customize based on your needs.",
      },
      {
        question: "How long does claims settlement take?",
        answer:
          "Most claims are settled within 3-5 days. We have direct integration with major hospitals and insurers for faster processing.",
      },
    ],
  },
  {
    id: "ip-branding",
    slug: "ip-branding",
    title: "IP & Branding Protection",
    description:
      "Protect your intellectual property & brand identity. Trademark registration, copyright filing, and professional branding guidance.",
    problem: "Want to protect your brand & ideas?",
    benefit: "Legal protection for your unique brand & innovations",
    icon: Brain,
    color: "from-indigo-500 to-indigo-600",
    bgColor: "from-indigo-50 to-indigo-100/50",
    forAudience: ["Startups (All)", "SMEs (All)"],
    features: [
      "✓ Trademark registration & renewal",
      "✓ Copyright & IP protection",
      "✓ Brand guidelines development",
      "✓ Domain & portfolio management",
    ],
    detailedDescription:
      "Your brand is your most valuable asset. Protecting it legally is crucial. We handle everything from trademark registration to copyright protection and brand strategy.\n\nOur IP specialists guide you through the registration process, ensure you have proper protection, and help you build a strong brand identity that stands out.",
    benefits: [
      {
        title: "Legal Protection",
        description: "Full trademark and copyright protection for your brand",
      },
      {
        title: "Expert Guidance",
        description: "IP lawyers who understand startups and SMEs",
      },
      {
        title: "Quick Processing",
        description: "Faster trademark registration with our expertise",
      },
      {
        title: "Ongoing Support",
        description: "Renewals, monitoring, and enforcement support",
      },
    ],
    implementationSteps: [
      "Week 1: IP audit and brand protection strategy",
      "Week 2: Trademark search and feasibility check",
      "Week 3: Application filing and government interaction",
      "Month 4-6: Registration and post-registration support",
    ],
    whyChooseUs: [
      {
        title: "IP Specialists",
        description: "Dedicated intellectual property lawyers on board",
      },
      {
        title: "Government Relations",
        description: "Direct coordination with trademark and copyright offices",
      },
      {
        title: "Portfolio Management",
        description: "Manage trademarks across multiple classes",
      },
      {
        title: "Enforcement Support",
        description: "Help enforce your rights if infringement occurs",
      },
    ],
    pricing: "Trademark registration ₹3,000-5,000 per class. Renewals ₹2,000 per class",
    faq: [
      {
        question: "How long does trademark registration take?",
        answer:
          "Typically 4-6 months from filing to registration. We handle all government interactions and keep you updated.",
      },
      {
        question: "Do I need to register in multiple classes?",
        answer:
          "Depends on your business. We advise on which classes you should protect based on your business model and growth plans.",
      },
      {
        question: "What if my trademark is already registered by someone else?",
        answer:
          "We do a complete trademark search first. If there's a conflict, we advise alternatives or can help with opposition if you have prior rights.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getAllServices(): ServiceDetail[] {
  return servicesData;
}
