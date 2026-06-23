# KITCARE Reusable NDIS Provider Website Brief

Date: 2026-06-24

## Goal

Build a reusable static website template for Australian NDIS registered provider companies, starting with KITCARE. The template should be easy to adapt for future similar care-provider clients without needing a database or custom backend.

## Recommendation

We should build our own lightweight Next.js template instead of directly cloning a public template.

Reasoning:
- Public templates are either generic SaaS/startup pages or medical clinic pages. They do not naturally fit NDIS provider trust, service, contact, area, and compliance content.
- A custom template lets us create reusable content data files for company details, service lists, areas served, values, FAQs, and contact options.
- Next.js with TypeScript and Tailwind CSS gives a modern React workflow, strong SEO support, and simple Vercel deployment.
- The scope is small enough that adapting a large template may take more time than building a focused one.

Best use of public templates:
- Use them as technical and layout references only.
- Do not copy their visual identity, text, or component structure wholesale.
- Borrow proven patterns such as hero, service grid, FAQ, testimonial, and contact CTA sections.

Frontend delivery should follow the standards in `docs/frontend-delivery-standards.md`. In particular, visual concepts should be approved before implementation, and every completed page should be verified in a browser against the accepted design.

## Target Users

Primary audiences:
- NDIS participants looking for reliable support.
- Family members and carers comparing providers.
- Support coordinators and plan managers comparing services before contacting the provider.

Secondary audiences:
- Job applicants, if Careers is added later.
- Search users looking for NDIS services by suburb or region.

## Content Strategy

The template should support these sections:
- Header with logo, phone, email, home, about us, services, and contact.
- Hero focused on registered NDIS provider positioning and service area.
- Trust strip with registration, local support, response, and personalised care messages.
- Service overview cards.
- About section.
- Why choose us section.
- Contact CTA.
- Values, mission, and vision.
- Areas served.
- FAQ.
- Footer with contact details, service links, acknowledgement, useful official links, and legal links.

Recommended first version pages:
- Home
- About Us
- Services index
- Individual service detail pages generated from reusable service data under Services, such as `/services/personal-care`
- Contact

Legal footer pages:
- Basic Privacy Policy draft page for client/legal review

Optional later pages:
- Blog
- Careers
- Area pages
- Accommodation pages if the provider offers SIL, SDA, STA, MTA, or respite
- Testimonials or Google review integration
- Referrals page if the business later wants a structured referral workflow

## Service Template Model

Each service should be represented as structured content:
- Title
- Short summary
- Plain-language explanation
- Who it helps
- What support may include
- CTA label
- SEO title
- SEO description
- Slug

This allows future companies to change content without rewriting components.

## Design Direction

The design should feel:
- Calm
- Trustworthy
- Accessible
- Local
- Professional but not corporate-heavy

Avoid:
- Hospital-style sterile design.
- SaaS/product-style gradients and oversized marketing claims.
- Overcrowded mega menus in the first version.
- Vague stock copy that could belong to any provider.

Visual direction options to review:
- Option A: Professional care provider, clean homepage, strong contact conversion.
- Option B: Community-first, warmer storytelling, values and people focus.
- Option C: SEO-service hub, more service and suburb content, stronger long-term search footprint.

## Technical Direction

Recommended stack:
- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Static generation where possible
- Vercel deployment

No initial database.

No initial backend.

Contact form options:
- Phase 1: phone, email, and visible contact form UI without live submission.
- Phase 2: Vercel Function that sends email through a provider such as Resend, Postmark, SendGrid, or AWS SES.
- Phase 3: add spam protection, validation, and optional CRM forwarding if needed.

## Reusability Plan

Keep company-specific data in configuration files:
- Company profile
- Contact details
- Brand colors
- Navigation
- Services
- Areas served
- FAQ
- Values
- Compliance and acknowledgement text

Reusable components should read from these files. A future client should be mostly a content-and-theme change, not a redesign.

## SEO Plan

Initial SEO priorities:
- Clear homepage title around registered NDIS provider and location.
- Individual service pages with unique content.
- Area-served content without creating low-quality duplicate pages.
- FAQ schema later if needed.
- Strong metadata, Open Graph image, sitemap, and robots file.
- Plain-language headings that match real search intent.

Important search themes:
- Registered NDIS provider
- NDIS support services
- Personal care
- Community participation
- Household tasks
- Travel and transport
- Support coordination if offered
- SIL, SDA, STA, respite if offered
- Location-specific queries

## Accessibility Requirements

The template should follow practical WCAG-friendly defaults:
- Semantic headings.
- Keyboard-accessible navigation.
- High color contrast.
- Visible focus states.
- Descriptive link text.
- Real text instead of text embedded in images.
- Responsive layouts for mobile users.
- Forms with labels and validation messages.

## Compliance and Content Cautions

Before publishing, the company must confirm:
- Registered provider status and legal entity name.
- ABN or ACN if displayed.
- Registered support categories actually offered.
- Service areas.
- Clinical or nursing claims.
- Pricing wording.
- Privacy policy.
- Consent and privacy language for contact enquiries.

The template should not imply:
- Guaranteed NDIS approval.
- Guaranteed funding access.
- Clinical outcomes without evidence.
- 24/7 care unless operationally true.
- Services that are not registered or actively provided.

## Initial Build Scope

For the first build, keep scope focused:
- Scaffold Next.js project.
- Implement data-driven homepage.
- Implement service data and service pages.
- Implement contact UI.
- Implement core responsive layout.
- Add SEO metadata.
- Add basic accessibility checks.
- Prepare for Vercel deployment.

Do not add:
- Database.
- Authentication.
- Admin dashboard.
- Payment.
- Live chat.
- Blog CMS.
- Complex animations.

## Open Questions

These should be answered before implementation:
- What is the exact company name, logo, ABN, and NDIS registration wording for KITCARE?
- Which services does KITCARE actually provide?
- Which suburbs or regions should be targeted first?
- Should the first version include only English, or English plus another language?
- What contact email should receive enquiries when Vercel email handling is added?
