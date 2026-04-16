import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MessageCircle,
  Search,
  Clock,
  User,
  TrendingUp,
} from "lucide-react";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const blogPosts = [
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
    featured: true,
    views: 1240,
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
    featured: true,
    views: 890,
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
    featured: true,
    views: 756,
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
    featured: false,
    views: 645,
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
    featured: false,
    views: 523,
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
    featured: false,
    views: 434,
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
    featured: false,
    views: 612,
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
    featured: false,
    views: 789,
  },
];

const categories = [
  "All",
  "HR Technology",
  "Compliance",
  "Taxation",
  "IP & Branding",
];

export default function Blog() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/919999999999?text=Hi%20360%20Biz%20Health,%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
      "_blank"
    );
  };

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

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
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-6xl font-black mb-6">
                Business News & Insights
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Latest updates on HR, compliance, taxation, and business solutions
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-6 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-white text-primary"
                      : "bg-white/20 text-white hover:bg-white/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles Section */}
        {selectedCategory === "All" && (
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-black text-gray-900">Trending Now</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {featuredPosts.map((post, idx) => (
                  <div
                    key={post.id}
                    onClick={() => navigate(`/blog/${post.id}`)}
                    className={`group cursor-pointer ${
                      idx === 0 ? "md:col-span-2 md:row-span-2" : ""
                    }`}
                  >
                    <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 hover:shadow-2xl transition-all duration-300 h-full hover:-translate-y-2`}>
                      <div className={`flex flex-col h-full p-8 ${idx === 0 ? "justify-between" : ""}`}>
                        <div>
                          <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                            {post.image}
                          </div>
                          <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                            {post.category}
                          </span>
                          <h3 className={`font-black text-gray-900 mb-3 group-hover:text-primary transition-colors ${
                            idx === 0 ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
                          }`}>
                            {post.title}
                          </h3>
                          {idx === 0 && (
                            <p className="text-gray-700 mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-4">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-gray-900 mb-8">
              {selectedCategory === "All" ? "Latest Articles" : selectedCategory}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => navigate(`/blog/${post.id}`)}
                  className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-primary transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                >
                  {/* Image/Icon Section */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 text-5xl flex items-center justify-center h-48 group-hover:from-blue-100 group-hover:to-blue-200 transition-colors">
                    {post.image}
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block bg-blue-100 text-primary text-xs font-bold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {post.views}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-black text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600">
                  No articles found. Try a different search or category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary via-blue-600 to-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
          </div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-black mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest business news and insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-all hover:shadow-lg">
                Subscribe
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
