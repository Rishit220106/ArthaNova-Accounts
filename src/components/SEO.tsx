import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  schema?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description = "Professional UK, US & Australia Accounting, Bookkeeping, Payroll & Tax Advisory Services.", 
  canonical = "/", 
  type = 'website', 
  schema,
  breadcrumbs 
}) => {
  const siteUrl = 'https://arthanovaaccounts.com';
  const fullUrl = `${siteUrl}${canonical}`;
  const siteName = 'ArthaNovaccounts';
  const pageTitle = "ArthaNovaccounts | International Accounting & Tax Advisory";

  const defaultWebsiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ArthaNovaccounts",
    "url": "https://arthanovaaccounts.com",
    "description": "Professional UK, US & Australia Accounting, Bookkeeping, Payroll & Tax Advisory Services."
  };

  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${siteUrl}${crumb.url}`
    }))
  } : null;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="application-name" content="ArthaNovaccounts" />
      <meta name="apple-mobile-web-app-title" content="ArthaNovaccounts" />
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={`${siteUrl}/logo-an-mark-og.png`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/logo-an-mark-og.png`} />

      {/* Schemas */}
      <script type="application/ld+json">
        {JSON.stringify(defaultWebsiteSchema)}
      </script>
      {schema && (
        <script type="application/ld+json">
          {schema}
        </script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};
