import { useEffect } from 'react';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service';
  author?: string;
  schema?: Record<string, any>;
}

export function useSEO(config: SEOConfig) {
  useEffect(() => {
    // Set title
    document.title = `${config.title} | 360 Biz Health`;
    
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

    // Add schema markup if provided
    if (config.schema) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(config.schema);
    }

    return () => {
      // Cleanup if needed
    };
  }, [config]);
}
