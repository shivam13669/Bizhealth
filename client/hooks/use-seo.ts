import { useEffect } from 'react';

export interface FAQ {
  question: string;
  answer: string;
}

export interface ArticleConfig {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  wordCount?: number;
}

export interface LocalBusinessConfig {
  name: string;
  address: string;
  telephone: string;
  email: string;
  hours?: Record<string, string>;
  areaServed?: string[];
  priceRange?: string;
}

export interface Breadcrumb {
  name: string;
  url: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service' | 'contact' | 'business';
  author?: string;
  schema?: Record<string, any>;
  robots?: 'index, follow' | 'noindex, nofollow' | 'noindex, follow' | 'index, nofollow';
  faqs?: FAQ[];
  article?: ArticleConfig;
  localBusiness?: LocalBusinessConfig;
  breadcrumbs?: Breadcrumb[];
}

export function useSEO(config: SEOConfig) {
  useEffect(() => {
    // Set title (avoid duplication if brand is already in title)
    const finalTitle = config.title.includes('360 Biz Health')
      ? config.title
      : `${config.title} | 360 Biz Health`;
    document.title = finalTitle;
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', config.description);

    // Add keywords if provided
    if (config.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', config.keywords);
    }

    // Add robots meta tag if specified
    if (config.robots) {
      let metaRobots = document.querySelector('meta[name="robots"]');
      if (!metaRobots) {
        metaRobots = document.createElement('meta');
        metaRobots.setAttribute('name', 'robots');
        document.head.appendChild(metaRobots);
      }
      metaRobots.setAttribute('content', config.robots);
    }

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', config.canonical || window.location.href);

    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: config.title },
      { property: 'og:description', content: config.description },
      { property: 'og:type', content: config.type || 'website' },
      { property: 'og:url', content: config.url || window.location.href },
    ];

    if (config.image) {
      ogTags.push({ property: 'og:image', content: config.image });
    }

    ogTags.forEach(tag => {
      let existing = document.querySelector(`meta[property="${tag.property}"]`);
      if (!existing) {
        existing = document.createElement('meta');
        existing.setAttribute('property', tag.property);
        document.head.appendChild(existing);
      }
      existing.setAttribute('content', tag.content);
    });

    // Generate schema based on config type and add custom schema
    let finalSchema = config.schema;

    // Add FAQ schema if FAQs are provided
    if (config.faqs && config.faqs.length > 0) {
      finalSchema = finalSchema || {};
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: config.faqs.map(faq => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      };

      let faqScript = document.querySelector('script[type="application/ld+json"][data-type="faq"]');
      if (!faqScript) {
        faqScript = document.createElement('script');
        faqScript.setAttribute('type', 'application/ld+json');
        faqScript.setAttribute('data-type', 'faq');
        document.head.appendChild(faqScript);
      }
      faqScript.textContent = JSON.stringify(faqSchema);
    }

    // Add Article schema if article config is provided
    if (config.article) {
      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: config.article.headline,
        description: config.article.description,
        image: config.article.image || config.image || '',
        datePublished: config.article.datePublished,
        dateModified: config.article.dateModified || config.article.datePublished,
        author: {
          "@type": "Person",
          name: config.article.author
        },
        wordCount: config.article.wordCount || 800
      };

      let articleScript = document.querySelector('script[type="application/ld+json"][data-type="article"]');
      if (!articleScript) {
        articleScript = document.createElement('script');
        articleScript.setAttribute('type', 'application/ld+json');
        articleScript.setAttribute('data-type', 'article');
        document.head.appendChild(articleScript);
      }
      articleScript.textContent = JSON.stringify(articleSchema);
    }

    // Add LocalBusiness schema if config is provided
    if (config.localBusiness) {
      const businessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: config.localBusiness.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: config.localBusiness.address.split(',')[0]?.trim() || '',
          addressLocality: config.localBusiness.address.split(',')[1]?.trim() || 'India',
          addressCountry: "IN"
        },
        telephone: config.localBusiness.telephone,
        email: config.localBusiness.email,
        priceRange: config.localBusiness.priceRange || '₹₹',
        areaServed: config.localBusiness.areaServed || ['IN'],
        openingHoursSpecification: config.localBusiness.hours ? Object.entries(config.localBusiness.hours).map(([day, hours]) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: day,
          opens: hours.split('-')[0]?.trim() || '09:00',
          closes: hours.split('-')[1]?.trim() || '17:00'
        })) : undefined
      };

      let businessScript = document.querySelector('script[type="application/ld+json"][data-type="business"]');
      if (!businessScript) {
        businessScript = document.createElement('script');
        businessScript.setAttribute('type', 'application/ld+json');
        businessScript.setAttribute('data-type', 'business');
        document.head.appendChild(businessScript);
      }
      businessScript.textContent = JSON.stringify(businessSchema);
    }

    // Add Breadcrumb schema if provided
    if (config.breadcrumbs && config.breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: config.breadcrumbs.map((breadcrumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: breadcrumb.name,
          item: breadcrumb.url
        }))
      };

      let breadcrumbScript = document.querySelector('script[type="application/ld+json"][data-type="breadcrumb"]');
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.setAttribute('type', 'application/ld+json');
        breadcrumbScript.setAttribute('data-type', 'breadcrumb');
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    }

    // Add main schema markup if provided
    if (finalSchema) {
      let script = document.querySelector('script[type="application/ld+json"][data-type="main"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-type', 'main');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(finalSchema);
    }

    return () => {
      // Cleanup if needed
    };
  }, [config]);
}
