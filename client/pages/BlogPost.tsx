import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSEO } from "../hooks/use-seo";
import {
  Menu,
  X,
  MessageCircle,
  Clock,
  User,
  ArrowRight,
  Share2,
} from "lucide-react";

const blogPostsData = [
  {
    id: 1,
    title: "Why HRMS is Essential for Growing Businesses",
    excerpt:
      "Modern HRMS solutions streamline HR operations, reduce compliance risks, and improve employee satisfaction. Learn how to choose the right system.",
    category: "HR Technology",
    author: "Rajesh Kumar",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "📊",
    content: `
      <h2>Introduction</h2>
      <p>In today's fast-paced business environment, managing human resources efficiently is crucial for success. An HRMS (Human Resource Management System) can transform the way you manage your workforce, from recruitment to retirement.</p>

      <h2>What is HRMS?</h2>
      <p>HRMS is an integrated system that automates and streamlines all your HR processes. It covers everything from employee onboarding, payroll management, performance tracking, to compliance and reporting.</p>

      <h2>Key Benefits of HRMS</h2>
      <ul>
        <li><strong>Time Saving:</strong> Automate repetitive tasks and save hours of manual work every week</li>
        <li><strong>Accuracy:</strong> Reduce errors in payroll, attendance, and compliance calculations</li>
        <li><strong>Employee Satisfaction:</strong> Provide employees self-service portals to access their information</li>
        <li><strong>Better Decision Making:</strong> Get real-time insights into your workforce metrics</li>
        <li><strong>Compliance:</strong> Stay updated with changing labor laws and regulations automatically</li>
      </ul>

      <h2>How HRMS Solves Common HR Challenges</h2>
      <h3>Manual Payroll Processing</h3>
      <p>One of the most time-consuming HR tasks is payroll processing. With HRMS, you can automate salary calculations, deductions, and compliance filings. This not only saves time but also eliminates errors that can lead to employee dissatisfaction and legal issues.</p>

      <h3>Attendance Management</h3>
      <p>Traditional attendance tracking is outdated and error-prone. Modern HRMS systems integrate with biometric systems, mobile apps, and cloud-based tracking, giving you real-time visibility into employee attendance.</p>

      <h3>Compliance Management</h3>
      <p>Labor laws are constantly changing. An HRMS ensures you stay compliant with PF, ESIC, PT, and other statutory requirements. The system automatically updates regulations and reminds you of filing deadlines.</p>

      <h2>Choosing the Right HRMS</h2>
      <p>When selecting an HRMS, consider these factors:</p>
      <ul>
        <li>Your company size and industry</li>
        <li>Specific modules you need</li>
        <li>Integration with existing systems</li>
        <li>Scalability for future growth</li>
        <li>Customer support and training</li>
        <li>Cost and ROI</li>
      </ul>

      <h2>Conclusion</h2>
      <p>HRMS is no longer a luxury but a necessity for growing businesses. It allows you to focus on strategic HR initiatives while the system handles routine tasks efficiently. With the right HRMS in place, you can improve employee experience, ensure compliance, and drive business growth.</p>

      <p>At 360 Biz Health, we help businesses implement and optimize their HRMS systems to achieve maximum ROI and operational efficiency.</p>
    `,
  },
  {
    id: 2,
    title: "Complete Guide to GST Compliance in 2024",
    excerpt:
      "Understanding GST filing requirements, deadlines, and common mistakes. A comprehensive guide to ensure your business stays compliant.",
    category: "Taxation",
    author: "Priya Sharma",
    date: "March 12, 2024",
    readTime: "8 min read",
    image: "💰",
    content: `
      <h2>Introduction to GST</h2>
      <p>The Goods and Services Tax (GST) is a comprehensive tax system that has unified the indirect tax structure in India. Understanding GST compliance is essential for every business, regardless of size.</p>

      <h2>GST Filing Requirements</h2>
      <p>Every registered business must file regular GST returns. The frequency depends on your turnover and business type:</p>
      <ul>
        <li>GSTR-1: Monthly sales return (by 11th of next month)</li>
        <li>GSTR-2A: Monthly purchase details (auto-populated)</li>
        <li>GSTR-3B: Monthly return with ITC (by 20th of next month)</li>
        <li>GSTR-9: Annual return (by 31st December)</li>
      </ul>

      <h2>Common GST Compliance Mistakes to Avoid</h2>
      <h3>Missed Filing Deadlines</h3>
      <p>Late GST filing can result in penalties and interest charges. It's crucial to mark your calendar and set reminders for all filing deadlines.</p>

      <h3>Incorrect ITC Claims</h3>
      <p>Many businesses claim Input Tax Credit (ITC) incorrectly. Ensure you have valid invoices and that suppliers are GST registered.</p>

      <h3>Improper Invoice Documentation</h3>
      <p>All invoices must contain mandatory details as per GST rules. Missing details can lead to rejection during GST audits.</p>

      <h2>GST Compliance Best Practices</h2>
      <ul>
        <li>Maintain proper records and documentation</li>
        <li>Use GST-compliant accounting software</li>
        <li>Regular reconciliation of sales and purchases</li>
        <li>Keep invoices organized and accessible</li>
        <li>Stay updated with GST notifications and circulars</li>
      </ul>

      <h2>Conclusion</h2>
      <p>GST compliance doesn't have to be complicated. With proper systems, regular monitoring, and professional guidance, you can ensure seamless GST compliance and avoid penalties.</p>
    `,
  },
  {
    id: 3,
    title: "PF & ESIC Compliance: What Every Business Should Know",
    excerpt:
      "Statutory compliance made easy. Everything you need to know about PF, ESIC, and PT requirements for your business.",
    category: "Compliance",
    author: "Amit Patel",
    date: "March 10, 2024",
    readTime: "6 min read",
    image: "📋",
    content: `
      <h2>Understanding PF (Provident Fund)</h2>
      <p>The Employees' Provident Fund (EPF) is a retirement benefit scheme that provides social security to workers. Both employers and employees contribute to this fund.</p>

      <h3>PF Contribution Rates</h3>
      <ul>
        <li>Employee Contribution: 12% of basic wages</li>
        <li>Employer Contribution: 12% of basic wages</li>
        <li>Total: 24% of basic wages monthly</li>
      </ul>

      <h2>ESIC (Employees' State Insurance)</h2>
      <p>ESIC is a self-financing social security system that provides medical and cash benefits to workers. It's mandatory for establishments with 10 or more employees.</p>

      <h3>ESIC Contribution Rates</h3>
      <ul>
        <li>Employee Contribution: 0.75% of wages</li>
        <li>Employer Contribution: 3.25% of wages</li>
        <li>Total: 4% of wages</li>
      </ul>

      <h2>PT (Professional Tax)</h2>
      <p>Professional Tax is levied on remuneration paid to employees. The rate varies by state and salary level.</p>

      <h2>Compliance Obligations</h2>
      <ul>
        <li>Monthly remittance of contributions</li>
        <li>Timely filing of returns</li>
        <li>Maintaining proper registers</li>
        <li>Annual reconciliation</li>
        <li>Compliance with wage code norms</li>
      </ul>

      <h2>Common Issues and Solutions</h2>
      <p>Delayed contributions, incorrect wage calculations, and missed filings are common issues. Implementing an automated HRMS can help avoid these problems.</p>

      <h2>Conclusion</h2>
      <p>PF and ESIC compliance is not optional—it's a legal requirement. Non-compliance can result in penalties, legal actions, and reputational damage to your business.</p>
    `,
  },
  {
    id: 4,
    title: "How to Protect Your Business Through IP Registration",
    excerpt:
      "Trademark, copyright, and patent protection explained. Learn how intellectual property protection can safeguard your business.",
    category: "IP & Branding",
    author: "Neha Gupta",
    date: "March 8, 2024",
    readTime: "7 min read",
    image: "🔐",
    content: `
      <h2>What is Intellectual Property?</h2>
      <p>Intellectual Property (IP) refers to creations of the mind—inventions, literary and artistic works, designs, symbols, and names used in business. IP protection ensures that creators and businesses benefit from their innovations.</p>

      <h2>Types of IP Protection</h2>
      <h3>1. Trademark</h3>
      <p>A trademark is a unique sign or symbol that identifies your business, products, or services. It includes brand names, logos, slogans, and even sounds.</p>

      <h3>2. Copyright</h3>
      <p>Copyright protects original works of authorship—literature, music, art, films, and software. It gives creators exclusive rights to reproduce and distribute their work.</p>

      <h3>3. Patent</h3>
      <p>A patent protects new inventions and processes. It gives the inventor exclusive rights to make, use, or sell the invention for a specified period.</p>

      <h3>4. Design Registration</h3>
      <p>Design registration protects the unique visual appearance of a product. It covers the shape, pattern, ornamentation, and color of the product.</p>

      <h2>Why IP Protection Matters</h2>
      <ul>
        <li>Prevents unauthorized use of your intellectual property</li>
        <li>Provides legal grounds to take action against infringement</li>
        <li>Enhances brand value and reputation</li>
        <li>Creates competitive advantage</li>
        <li>Can generate revenue through licensing</li>
      </ul>

      <h2>IP Registration Process</h2>
      <p>The registration process varies by the type of IP:</p>
      <ul>
        <li>Trademark: Search, application filing, examination, and registration (6-18 months)</li>
        <li>Patent: Examination and prosecution (2-5 years)</li>
        <li>Copyright: Registration is optional; rights exist from creation</li>
        <li>Design: Filing and examination (1-2 years)</li>
      </ul>

      <h2>Common IP Mistakes to Avoid</h2>
      <ul>
        <li>Not registering your IP</li>
        <li>Using unregistered trademarks</li>
        <li>Ignoring competitor IP</li>
        <li>Not updating registrations</li>
        <li>Poor documentation</li>
      </ul>

      <h2>Conclusion</h2>
      <p>IP protection is an investment in your business's future. It safeguards your innovations and builds brand value. Don't delay—register your IP today.</p>
    `,
  },
  {
    id: 5,
    title: "Employee Benefits: Beyond the Salary Package",
    excerpt:
      "A modern approach to employee compensation. Understand health insurance, retirement benefits, and other crucial components.",
    category: "HR Technology",
    author: "Vikram Singh",
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "👥",
    content: `
      <h2>The Importance of Employee Benefits</h2>
      <p>In today's competitive job market, offering comprehensive benefits is essential to attract and retain top talent. Benefits go beyond salary and include health insurance, retirement plans, and wellness programs.</p>

      <h2>Essential Employee Benefits</h2>
      <h3>Health Insurance</h3>
      <p>Group health insurance is a crucial benefit that provides medical coverage to employees and their families. It includes hospitalization, outpatient care, and preventive health check-ups.</p>

      <h3>Retirement Benefits</h3>
      <p>PF and NPS are the primary retirement schemes in India. These help employees build a retirement corpus and provide financial security post-retirement.</p>

      <h3>Leave Benefits</h3>
      <p>Paid leaves (annual, sick, casual) and special leaves (maternity, paternity) are essential for work-life balance and employee well-being.</p>

      <h3>Performance Bonuses</h3>
      <p>Variable pay tied to performance motivates employees and rewards high performers. Bonuses can be annual or quarterly.</p>

      <h2>Emerging Benefits Trends</h2>
      <ul>
        <li>Mental health and wellness programs</li>
        <li>Flexible work arrangements</li>
        <li>Learning and development opportunities</li>
        <li>Stock options and ESOPS</li>
        <li>Childcare support</li>
      </ul>

      <h2>Conclusion</h2>
      <p>A well-designed benefits package is key to employee satisfaction and retention. Regular review and updates to your benefits ensure they remain competitive and relevant.</p>
    `,
  },
  {
    id: 6,
    title: "Tax Deductions for Small Businesses: Don't Leave Money on the Table",
    excerpt:
      "Maximize your tax benefits by understanding legitimate deductions and exemptions available to small business owners.",
    category: "Taxation",
    author: "Ananya Desai",
    date: "March 1, 2024",
    readTime: "7 min read",
    image: "📈",
    content: `
      <h2>Understanding Tax Deductions</h2>
      <p>Tax deductions reduce your taxable income, resulting in lower taxes. As a small business owner, you can deduct various business expenses from your income.</p>

      <h2>Common Business Deductions</h2>
      <h3>Operating Expenses</h3>
      <ul>
        <li>Rent for office/retail space</li>
        <li>Utilities (electricity, water, internet)</li>
        <li>Supplies and materials</li>
        <li>Insurance premiums</li>
        <li>Professional fees (accounting, legal)</li>
      </ul>

      <h3>Depreciation</h3>
      <p>Assets like equipment, machinery, and vehicles depreciate over time. You can claim depreciation as a deduction.</p>

      <h3>Employee Salaries and Benefits</h3>
      <p>All employee salaries, bonuses, and benefits are deductible business expenses.</p>

      <h3>Travel and Transportation</h3>
      <p>Business travel, vehicle maintenance, and fuel are deductible. Keep proper records and receipts.</p>

      <h2>Home Office Deduction</h2>
      <p>If you operate your business from home, you can claim a portion of your home expenses as deductions. Calculate the percentage of space used for business.</p>

      <h2>Maximizing Your Tax Benefits</h2>
      <ul>
        <li>Maintain detailed records of all expenses</li>
        <li>Keep all receipts and invoices</li>
        <li>Categorize expenses properly</li>
        <li>Review deductions regularly</li>
        <li>Consult with a tax professional</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Tax planning is crucial for small business profitability. By understanding and claiming all eligible deductions, you can significantly reduce your tax liability.</p>
    `,
  },
  {
    id: 7,
    title: "Labor Laws Every Entrepreneur Must Know",
    excerpt:
      "Essential labor law knowledge for business owners. Understand your responsibilities and protect your business from legal issues.",
    category: "Compliance",
    author: "Rajesh Kumar",
    date: "February 28, 2024",
    readTime: "9 min read",
    image: "⚖️",
    content: `
      <h2>Overview of Indian Labor Laws</h2>
      <p>India has comprehensive labor laws that protect workers and regulate employer-employee relationships. Understanding these laws is crucial for business owners to avoid legal issues.</p>

      <h2>Key Labor Laws</h2>
      <h3>Industrial Disputes Act, 1947</h3>
      <p>This law governs industrial relations, dispute resolution, and procedures for termination and retrenchment.</p>

      <h3>Minimum Wages Act, 1948</h3>
      <p>Employers must pay at least the minimum wage as determined by the government. Rates vary by state and skill level.</p>

      <h3>Factories Act, 1948</h3>
      <p>This law ensures safe working conditions, proper ventilation, sanitation, and safety measures in factories.</p>

      <h3>Payment of Gratuity Act, 1972</h3>
      <p>Employers must pay gratuity to employees who have worked for 5 or more years. The amount is calculated based on salary and service duration.</p>

      <h2>Employment Rights and Responsibilities</h2>
      <h3>Employee Rights</h3>
      <ul>
        <li>Fair wages and timely payment</li>
        <li>Safe working conditions</li>
        <li>Protection from discrimination</li>
        <li>Right to form unions</li>
        <li>Statutory benefits (PF, ESIC, gratuity)</li>
      </ul>

      <h3>Employer Responsibilities</h3>
      <ul>
        <li>Provide safe and healthy workplace</li>
        <li>Maintain proper records</li>
        <li>Pay statutory contributions</li>
        <li>Ensure fair treatment</li>
        <li>Comply with leave regulations</li>
      </ul>

      <h2>Termination and Severance</h2>
      <p>Improper termination can lead to legal disputes. Follow proper procedures:</p>
      <ul>
        <li>Give written notice (varies by contract)</li>
        <li>Conduct disciplinary proceedings if required</li>
        <li>Pay all dues and benefits</li>
        <li>Provide gratuity if applicable</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Non-compliance with labor laws can result in penalties, court cases, and damage to reputation. Stay informed and ensure your business follows all applicable labor laws.</p>
    `,
  },
  {
    id: 8,
    title: "Digital Transformation in HR: A Practical Guide",
    excerpt:
      "From manual processes to automated systems. A step-by-step guide to transforming your HR department digitally.",
    category: "HR Technology",
    author: "Priya Sharma",
    date: "February 25, 2024",
    readTime: "8 min read",
    image: "💻",
    content: `
      <h2>What is HR Digital Transformation?</h2>
      <p>HR digital transformation is the integration of digital technology into HR processes to improve efficiency, employee experience, and decision-making. It moves HR from manual, paper-based systems to automated digital processes.</p>

      <h2>Benefits of Digital HR Transformation</h2>
      <ul>
        <li>Increased efficiency and productivity</li>
        <li>Improved employee experience</li>
        <li>Better data-driven decisions</li>
        <li>Enhanced compliance and security</li>
        <li>Reduced operational costs</li>
        <li>Faster recruitment and onboarding</li>
      </ul>

      <h2>Key Areas of HR Transformation</h2>
      <h3>Recruitment and Onboarding</h3>
      <p>Use applicant tracking systems (ATS) and digital onboarding platforms to streamline hiring and get new employees productive faster.</p>

      <h3>Payroll and Compensation</h3>
      <p>Automate payroll processing, salary disbursement, and benefit administration to reduce errors and improve efficiency.</p>

      <h3>Performance Management</h3>
      <p>Implement digital performance tracking, goal management, and feedback systems for continuous improvement.</p>

      <h3>Learning and Development</h3>
      <p>Use online learning platforms, webinars, and virtual training to upskill your workforce.</p>

      <h2>Steps for Successful HR Digital Transformation</h2>
      <ol>
        <li>Assess current state and identify gaps</li>
        <li>Define clear transformation objectives</li>
        <li>Select appropriate HR technology solutions</li>
        <li>Plan change management and training</li>
        <li>Implement in phases</li>
        <li>Monitor progress and optimize</li>
      </ol>

      <h2>Overcoming Transformation Challenges</h2>
      <ul>
        <li>Resistance to change: Involve employees early and show benefits</li>
        <li>Data migration: Plan carefully and validate data</li>
        <li>Integration: Ensure systems work together seamlessly</li>
        <li>Training: Provide comprehensive training and support</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Digital transformation in HR is not optional—it's essential for staying competitive. Start your transformation journey today to unlock the full potential of your HR function.</p>
    `,
  },
];

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const post = blogPostsData.find((p) => p.id === parseInt(id || "1"));

  // Set SEO metadata for blog post
  if (post) {
    useSEO({
      title: `${post.title} | Blog`,
      description: post.excerpt,
      keywords: `${post.category}, blog, ${post.title.split(' ').slice(0, 3).join(', ')}`,
      canonical: `https://360bizhealth.com/blog/${post.id}`,
      url: `https://360bizhealth.com/blog/${post.id}`,
      type: "article",
      image: "https://360bizhealth.com/logo.png",
      author: post.author,
      schema: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: "https://360bizhealth.com/logo.png",
        author: {
          "@type": "Person",
          name: post.author,
          affiliation: {
            "@type": "Organization",
            name: "360 Biz Health"
          }
        },
        datePublished: post.date,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://360bizhealth.com/blog/${post.id}`
        },
        publisher: {
          "@type": "Organization",
          name: "360 Biz Health",
          logo: {
            "@type": "ImageObject",
            url: "https://360bizhealth.com/logo.png"
          }
        }
      }
    });
  }

  if (!post) {
    return (
      <div className="bg-white text-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <button
            onClick={() => navigate("/blog")}
            className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

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
        aria-label="Open WhatsApp chat"
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
                  className="text-gray-700 hover:text-primary transition-colors cursor-pointer font-medium"
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
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            {/* Back Button */}
            <button
              onClick={() => navigate("/blog")}
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white font-semibold mb-6 transition group block"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Back to Blog
            </button>

            {/* Category Badge */}
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 pt-8 border-t border-white/20">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{post.image}</div>
                <div>
                  <p className="font-semibold text-white">{post.author}</p>
                  <p className="text-sm text-blue-200">{post.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 md:ml-auto">
                <div className="flex items-center gap-2 text-blue-200">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
                <button
                  onClick={() => {
                    const text = `Check out this article: ${post.title} on 360 Biz Health Blog`;
                    const url = window.location.href;
                    navigator.share?.({ title: post.title, text, url }).catch(() => {
                      navigator.clipboard.writeText(`${url}\n\n${text}`);
                    });
                  }}
                  className="flex items-center gap-2 text-blue-200 hover:text-white transition cursor-pointer font-semibold"
                >
                  <Share2 className="w-5 h-5" />
                  <span className="hidden sm:inline">Share</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div
              className="text-gray-700 leading-relaxed space-y-6 text-lg"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/<h2>/g, '<h2 class="text-4xl font-black text-gray-900 mt-10 mb-6 pt-6">')
                  .replace(/<h3>/g, '<h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4 pt-4">')
                  .replace(/<p>/g, '<p class="text-lg leading-relaxed text-gray-700 mb-4">')
                  .replace(/<ul>/g, '<ul class="space-y-3 ml-8 list-disc my-6">')
                  .replace(/<ol>/g, '<ol class="space-y-3 ml-8 list-decimal my-6">')
                  .replace(/<li>/g, '<li class="text-lg text-gray-700">'),
              }}
            />
          </div>
        </section>

        {/* Author Bio */}
        <section className="py-12 px-4 bg-blue-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl p-8 flex items-center gap-6">
              <div className="text-6xl">{post.image}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {post.author}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.author} is a content writer at 360 Biz Health with expertise in {post.category.toLowerCase()}. They share insights and best practices to help businesses succeed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary via-blue-600 to-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-black mb-6">Need Professional Guidance?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Let our experts help you implement the strategies discussed in this article.
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
            <div className="md:col-span-2">
              <div className="mb-6">
                <h2 className="text-4xl font-black text-white mb-2">
                  360 Biz Health
                </h2>
                <p className="text-slate-400">Trusted Business Solutions Partner</p>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Empowering 500+ businesses with comprehensive HR, compliance,
                taxation, insurance, and IP solutions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => navigate("/")}
                    className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/blog")}
                    className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer"
                  >
                    Blog
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => navigate("/services")}
                    className="text-slate-400 hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer"
                  >
                    All Services
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Get In Touch</h3>
              <ul className="space-y-5">
                <li>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+917906003449"
                    className="text-slate-300 hover:text-primary transition font-semibold"
                  >
                    +91 79060 03449
                  </a>
                </li>
                <li>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:360bizhealth@gmail.com"
                    className="text-slate-300 hover:text-primary transition font-semibold break-all"
                  >
                    360bizhealth@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-slate-500 text-sm font-medium">
                  © 2026 360 Biz Health. All rights reserved.
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
