import assert from "node:assert/strict";
import { test } from "node:test";
import { company, services } from "../content.ts";
import {
  absoluteUrl,
  createLocalBusinessJsonLd,
  createPageMetadata,
  createServiceJsonLd,
  getSitemapEntries,
} from "../seo.ts";

test("builds canonical URLs from the production site origin", () => {
  assert.equal(absoluteUrl("/services"), "https://kitcare.com.au/services");
  assert.equal(absoluteUrl("contact"), "https://kitcare.com.au/contact");
  assert.equal(absoluteUrl("/"), "https://kitcare.com.au/");
});

test("uses the customer company address in local business schema", () => {
  const schema = createLocalBusinessJsonLd();

  assert.equal(schema.name, company.name);
  assert.equal(schema.telephone, company.phone);
  assert.equal(schema.email, company.email);
  assert.equal(company.headOffice, "1 Queen Street Black Burn VIC 3130");
  assert.equal(schema.address.streetAddress, "1 Queen Street");
  assert.equal(schema.address.addressLocality, "Black Burn");
  assert.equal(schema.address.addressRegion, "VIC");
  assert.equal(schema.address.postalCode, "3130");
  assert.equal(schema.address.addressCountry, "AU");
});

test("includes static and service routes in the sitemap source", () => {
  const entries = getSitemapEntries();
  const paths = entries.map((entry) => entry.path);

  assert.deepEqual(paths.slice(0, 5), [
    "/",
    "/about",
    "/services",
    "/contact",
    "/privacy",
  ]);
  assert.equal(
    paths.filter((path) => path.startsWith("/services/")).length,
    services.length,
  );
  assert.ok(paths.includes("/services/personal-care"));
});

test("creates route metadata with canonical and social URLs", () => {
  const metadata = createPageMetadata({
    title: "Contact",
    description: "Contact KIT Care for NDIS support services in Melbourne.",
    path: "/contact",
  });

  assert.equal(metadata.title, "Contact");
  assert.equal(metadata.alternates?.canonical, "/contact");
  assert.equal(metadata.openGraph?.url, "https://kitcare.com.au/contact");
  assert.equal(
    (metadata.twitter as { card?: string } | undefined)?.card,
    "summary_large_image",
  );
});

test("creates service schema for each searchable service page", () => {
  const service = services.find((item) => item.slug === "personal-care");

  assert.ok(service);

  const schema = createServiceJsonLd(service);

  assert.equal(schema.name, service.title);
  assert.equal(schema.provider.name, company.name);
  assert.equal(schema.areaServed.name, company.serviceArea);
  assert.equal(schema.url, "https://kitcare.com.au/services/personal-care");
  assert.equal(schema.serviceType, service.group);
});
