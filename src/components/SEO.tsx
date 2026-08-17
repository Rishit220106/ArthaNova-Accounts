import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string;
  noindex?: boolean;
  schema?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description = "Professional UK, US & Australia Accounting, Bookkeeping, Payroll & Tax Advisory Services.", 
  canonical = "/", 
  type = 'website', 
  image,
  noindex = false,
  schema,
  breadcrumbs 
}) => {
  const siteUrl = 'https://arthanovaccounts.com';
  const cleanCanonical = canonical.startsWith('/') ? canonical : `/${canonical}`;
  const fullUrl = canonical.startsWith('http') ? canonical : `${siteUrl}${cleanCanonical === '/' ? '/' : cleanCanonical}`;
  const siteName = 'ArthaNova Accounts';

  let pageTitle = "ArthaNova Accounts | Tax & Corporate Advisory";
  if (title) {
    if (title === "ArthaNova Accounts | Tax & Corporate Advisory" || title.includes("ArthaNova Accounts")) {
      pageTitle = title;
    } else {
      pageTitle = `${title} | ArthaNova Accounts`;
    }
  }

  const ogImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image.startsWith('/') ? image : `/${image}`}`) : `${siteUrl}/logo-an-mark-og.png`;

  const defaultWebsiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ArthaNova Accounts",
    "url": siteUrl,
    "description": description
  };

  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url.startsWith('http') ? crumb.url : `${siteUrl}${crumb.url.startsWith('/') ? crumb.url : `/${crumb.url}`}`
    }))
  } : null;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="application-name" content="ArthaNova Accounts" />
      <meta name="apple-mobile-web-app-title" content="ArthaNova Accounts" />
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schemas */}
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
