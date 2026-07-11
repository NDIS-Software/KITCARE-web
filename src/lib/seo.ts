import type { Metadata } from "next";
import { company, faqs, serviceAreaHighlights, services } from "./content.ts";

export type Service = (typeof services)[number];

type SitemapChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export type SitemapEntry = {
  path: string;
  url: string;
  lastModified: string;
  changeFrequency: SitemapChangeFrequency;
  priority: number;
};

type PageMetadataInput = {
  title?: string;
  titleAbsolute?: boolean;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

const productionSiteUrl = "https://kitcare.com.au";
const lastContentUpdate = "2026-07-09";

function normalizeSiteUrl(value: string | undefined) {
  const trimmedValue = value?.trim().replace(/\/+$/, "");

  if (!trimmedValue) {
    return productionSiteUrl;
  }

  try {
    return new URL(trimmedValue).origin;
  } catch {
    return productionSiteUrl;
  }
}

export const siteConfig = {
  name: company.name,
  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  locale: "en_AU",
  defaultTitle: `${company.name} | Registered NDIS Provider in Melbourne`,
  description:
    "KIT Care provides personalised NDIS support services across Melbourne, including personal care, travel and transport, household tasks, community participation, life skills, and supported independent living.",
  defaultImage: "/images/generated/kitcare-neighbourhood-support-hero.png",
  logo: "/images/brand/kitcare-logo.png",
  keywords: [
    "KIT Care",
    "registered NDIS provider Melbourne",
    "NDIS support services Melbourne",
    "personal care NDIS",
    "community participation NDIS",
    "household tasks NDIS",
    "travel transport NDIS",
    "supported independent living Melbourne",
  ],
} as const;

function parseAustralianAddress(address: string) {
  const normalizedAddress = address.trim().replace(/\s+/g, " ");
  const match = normalizedAddress.match(
    /^(.+\b(?:Street|St|Road|Rd|Avenue|Ave|Drive|Dr|Court|Ct|Lane|Ln|Way|Place|Pl|Boulevard|Blvd))\s+(.+)\s+(ACT|NSW|NT|QLD|SA|TAS|VIC|WA)\s+(\d{4})$/i,
  );

  if (!match) {
    return {
      streetAddress: normalizedAddress,
      addressLocality: company.serviceArea,
      addressRegion: "VIC",
      postalCode: "",
    };
  }

  return {
    streetAddress: match[1],
    addressLocality: match[2],
    addressRegion: match[3].toUpperCase(),
    postalCode: match[4],
  };
}

export const companyAddress = {
  "@type": "PostalAddress",
  ...parseAustralianAddress(company.headOffice),
  addressCountry: "AU",
};

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return new URL(normalizedPath, `${siteConfig.url}/`).toString();
}

function socialTitle(title?: string) {
  if (!title || title === siteConfig.defaultTitle) {
    return siteConfig.defaultTitle;
  }

  return `${title} | ${company.name}`;
}

function socialImage(image: string = siteConfig.defaultImage) {
  return {
    url: absoluteUrl(image),
    width: 1200,
    height: 630,
    alt: `${company.name} ${company.registrationLabel}`,
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: company.name,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${company.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  category: "NDIS disability support services",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    address: true,
    email: true,
    telephone: true,
  },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: company.name,
    locale: siteConfig.locale,
    type: "website",
    images: [socialImage()],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.defaultImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export function createPageMetadata({
  title,
  titleAbsolute = false,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.defaultImage,
  keywords,
  noIndex = false,
}: PageMetadataInput = {}): Metadata {
  return {
    title: title
      ? titleAbsolute
        ? { absolute: title }
        : title
      : undefined,
    description,
    keywords: keywords ? [...keywords] : undefined,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: socialTitle(title),
      description,
      url: absoluteUrl(path),
      siteName: company.name,
      locale: siteConfig.locale,
      type: "website",
      images: [socialImage(image)],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle(title),
      description,
      images: [absoluteUrl(image)],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}

export function createServiceMetadata(service: Service): Metadata {
  return createPageMetadata({
    title: `${service.title} NDIS Support`,
    description: service.summary,
    path: service.href,
    image: service.image,
    keywords: [
      `${service.title} NDIS`,
      `${service.title} Melbourne`,
      service.group,
      `NDIS ${service.code}`,
      company.name,
    ],
  });
}

export function getSitemapEntries(): SitemapEntry[] {
  const staticEntries = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/services", changeFrequency: "weekly", priority: 0.9 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  ] satisfies Array<{
    path: string;
    changeFrequency: SitemapChangeFrequency;
    priority: number;
  }>;

  const serviceEntries = services.map((service) => ({
    path: service.href,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...serviceEntries].map((entry) => ({
    ...entry,
    url: absoluteUrl(entry.path),
    lastModified: lastContentUpdate,
  }));
}

export function createOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: company.name,
    legalName: company.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    image: absoluteUrl(siteConfig.defaultImage),
    email: company.email,
    telephone: company.phone,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: company.phone,
      email: company.email,
      contactType: "customer support",
      areaServed: "AU",
      availableLanguage: "English",
    },
  };
}

export function createLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absoluteUrl("/#local-business"),
    name: company.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.defaultImage),
    logo: absoluteUrl(siteConfig.logo),
    telephone: company.phone,
    email: company.email,
    priceRange: "$$",
    address: companyAddress,
    areaServed: {
      "@type": "AdministrativeArea",
      name: company.serviceArea,
      containsPlace: serviceAreaHighlights.map((area) => ({
        "@type": "Place",
        name: area,
      })),
    },
    parentOrganization: {
      "@id": absoluteUrl("/#organization"),
      name: company.name,
    },
  };
}

export function createWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: company.name,
    url: siteConfig.url,
    publisher: {
      "@id": absoluteUrl("/#organization"),
      name: company.name,
    },
    inLanguage: "en-AU",
  };
}

export function createFaqJsonLd(items = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": absoluteUrl("/#faq"),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function createServiceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl(`${service.href}#service`),
    name: service.title,
    description: service.summary,
    serviceType: service.group,
    category: `NDIS ${service.code}`,
    url: absoluteUrl(service.href),
    image: absoluteUrl(service.image),
    provider: {
      "@id": absoluteUrl("/#local-business"),
      name: company.name,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: company.serviceArea,
    },
    audience: {
      "@type": "Audience",
      audienceType: "NDIS participants, families, and support coordinators",
    },
    offers: {
      "@type": "Offer",
      url: absoluteUrl(service.href),
      availability: "https://schema.org/InStock",
    },
  };
}

export function createBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
