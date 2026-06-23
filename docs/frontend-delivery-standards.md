# Frontend Delivery Standards for KITCARE Template

Date: 2026-06-24

## Purpose

This document defines how we should design and build the KITCARE company-introduction website so it can become a reusable commercial-grade frontend template for future NDIS/provider websites.

The delivery priority is:
1. Visual quality and trust.
2. Clear page structure.
3. Modular reusable implementation.
4. Performance, accessibility, and Vercel-friendly deployment.

## Required Skills Workflow

### 1. `superpowers:brainstorming`

Use before changing product direction, page structure, visual style, or feature scope.

Project rule:
- Do not jump straight into implementation when a page or design direction is unclear.
- For each major page, confirm the page goal, target user, primary CTA, required sections, and what should be excluded.

### 2. `build-web-apps:frontend-app-builder`

Use for the actual frontend design and build process.

Project rule:
- Generate visual concepts before writing code.
- For a multi-section company site, do not rely on only one hero mockup.
- Use one concept per major page or major section when needed: Home, About Us, Services, Service Detail, and Contact.
- After a concept is approved, treat it as the visual spec. Implementation should match layout, spacing, typography, colors, imagery, section rhythm, and CTA hierarchy.
- Build a small design system from the accepted concept before coding.

Important implication:
- The template should be designed like an agency deliverable, not a generic Tailwind starter page.

### 3. `imagegen`

Use for visual concept mockups and important raster assets.

Project rule:
- Use Image Gen for full-page or section-level visual concepts before implementation.
- Use real-looking, relevant healthcare/community-care imagery direction, not sterile stock placeholders.
- If generated assets become part of the project, move final assets into the workspace and reference them from the codebase.
- Do not use generated bitmap assets for UI controls that should be real HTML text, buttons, links, or forms.

### 4. `vercel:nextjs`

Use when scaffolding or architecting the Next.js application.

Project rule:
- Use Next.js App Router.
- Prefer Server Components by default.
- Add client components only for real interactivity, such as mobile navigation, form state, accordions, or filters.
- Keep the site mostly static.
- Use `next/image`, `next/font`, metadata, sitemap, and route-level SEO patterns.
- If email submission is added later, initialize email SDKs lazily and keep secrets out of client code.

### 5. `build-web-apps:react-best-practices`

Use after meaningful React or Next.js component work.

Project rule:
- Avoid one giant page component.
- Avoid unnecessary client-side JavaScript.
- Avoid barrel imports if they increase bundle size.
- Keep repeated UI patterns as focused components.
- Keep service data, company data, and UI components separated.

### 6. `build-web-apps:frontend-testing-debugging`

Use after visual implementation or UI fixes.

Project rule:
- A passing build is not enough.
- Verify the rendered page in a browser.
- Check desktop and mobile.
- Check for blank page, framework overlays, console errors, clipping, overlapping text, bad wrapping, missing assets, and broken interactions.
- Compare implementation screenshots against the approved visual concept.

### 7. `browser:control-in-app-browser`

Use for rendered UI inspection whenever the Browser plugin is available.

Project rule:
- Prefer in-app browser inspection over guessing from code.
- Use screenshots and DOM checks for visual QA.
- Keep browser testing as part of the handoff for every completed frontend milestone.

### 8. `build-web-apps:shadcn`

Use only if the project adopts shadcn/ui.

Recommendation:
- Do not default to shadcn for the public marketing website unless we intentionally want its component system.
- A public company site can be more distinctive with custom Tailwind components and a small local design system.
- If we later add forms, dialogs, sheets, accordions, or a component library, shadcn can help, but it should not force the site into a dashboard/product-app look.

## Recommended Skill Sequence by Phase

### Phase 0: Documentation and Direction

Use:
- `superpowers:brainstorming`

Output:
- Project brief.
- Research notes.
- Page inventory.
- Visual direction options.

### Phase 1: Visual Concept

Use:
- `build-web-apps:frontend-app-builder`
- `imagegen`

Output:
- Approved concept for the homepage.
- Approved concept or wireframe for each reusable page type.
- Design tokens: colors, typography, spacing, radius, shadows, image treatment, CTA style.

### Phase 2: Technical Plan

Use:
- `superpowers:writing-plans`
- `vercel:nextjs`

Output:
- Implementation plan with files, components, data modules, and tests.

### Phase 3: Build

Use:
- `vercel:nextjs`
- `build-web-apps:react-best-practices`
- `build-web-apps:frontend-app-builder`

Output:
- Next.js static company site.
- Modular page and section components.
- Data-driven services and company content.

### Phase 4: Visual QA

Use:
- `build-web-apps:frontend-testing-debugging`
- `browser:control-in-app-browser`

Output:
- Browser screenshots.
- Desktop and mobile checks.
- Comparison notes against approved concept.
- Fixes for visual drift before handoff.

## Page Rules

Every page must have:
- One clear business goal.
- One primary CTA.
- A limited number of sections.
- Unique SEO title and description.
- Reusable page-level layout.
- No duplicated filler copy.
- No section that exists only to make the page longer.

Every page should answer:
- Who is this for?
- What can the company help with?
- Why should the visitor trust this provider?
- What should the visitor do next?

## Initial Page Inventory

First-version navigation has four primary entries:
- Home
- About Us
- Services
- Contact

Service detail pages live under Services, such as `/services/personal-care`, and appear in the Services dropdown. They are reusable detail pages, not separate top-level navigation items.

### Home

Goal:
- Establish trust and direct visitors to services or contact.

Recommended sections:
- Header and navigation.
- Hero with registered provider positioning.
- Trust strip.
- Services overview.
- About preview.
- Why choose us.
- Contact CTA.
- FAQ preview.
- Footer.

Avoid:
- Overly long NDIS education blocks.
- Repeating the same claims in multiple sections.
- Large mega menu in the first version.

### About Us

Goal:
- Explain the provider, values, mission, and care philosophy.

Recommended sections:
- Intro.
- Mission and vision.
- Values.
- Team or operating approach.
- Compliance/trust notes.
- Contact CTA.

Avoid:
- Generic paragraphs that could belong to any company.
- Unverified claims about years of experience, staff qualifications, or 24/7 support.

### Services Index

Goal:
- Let visitors quickly find relevant supports.

Recommended sections:
- Short service intro.
- Categorized service cards.
- How support works.
- Contact CTA.

Navigation behavior:
- Services appears as a top-level navigation item.
- Desktop can show a Services dropdown with key service detail links.
- Mobile can show Services as an expandable section or a Services page followed by service links.
- The Services index remains useful even if a visitor does not open the dropdown.

Avoid:
- Listing every NDIS code as navigation text.
- Making technical service labels more prominent than plain-language explanations.

### Service Detail

Goal:
- Explain one service clearly and convert to enquiry.

Recommended sections:
- Service hero.
- What this support includes.
- Who it may help.
- How KITCARE approaches the service.
- Related services.
- Contact CTA.

Avoid:
- Copy-pasting the same body text across service pages.
- Making unconfirmed clinical or outcome claims.

### Contact

Goal:
- Provide fast ways to contact the business.

Recommended sections:
- Phone, email, service area, opening hours if confirmed.
- Contact form UI.
- Map or service-area summary.
- Emergency disclaimer if relevant.

Avoid:
- Claiming instant response unless operationally true.
- Hiding phone/email behind only a form.

## Component Rules

Use a modular structure:
- `site-header`
- `site-footer`
- `section`
- `hero`
- `service-card`
- `service-list`
- `cta-band`
- `faq-list`
- `contact-card`
- `contact-form`
- `trust-strip`

Component standards:
- Each component should have one responsibility.
- Shared components should accept data props, not hard-coded company copy.
- Company-specific content should live in content/config files.
- Avoid deeply nested card layouts.
- Avoid turning every section into a card.
- Keep repeated section spacing and typography consistent.

## Content Data Model

Recommended content files:
- `company.ts`: brand, contact, ABN, registration wording, service area.
- `navigation.ts`: header and footer links.
- `services.ts`: service list and service detail content.
- `areas.ts`: service areas.
- `faqs.ts`: common questions.
- `values.ts`: mission, vision, values.
- `seo.ts`: shared metadata defaults.

This structure keeps future websites reusable. Most future provider sites should be adapted by changing content files, design tokens, images, and page visibility rather than rewriting the application.

## Visual Quality Rules

The site should feel:
- Calm.
- Trustworthy.
- Human.
- Professional.
- Accessible.
- Commercial-grade.

Design constraints:
- Use real visual assets or generated high-quality assets.
- Keep typography disciplined and readable.
- Make CTAs obvious but not aggressive.
- Use generous whitespace without making pages empty.
- Avoid generic SaaS gradients.
- Avoid one-color palettes.
- Avoid oversized card grids.
- Avoid decorative blobs, meaningless badges, or fake metrics.
- Avoid hospital-style sterile design unless the client specifically wants it.

## Build Quality Rules

Implementation standards:
- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- Static generation where possible.
- No database in the first version.
- No backend in the first version unless contact email is approved.
- Responsive desktop/tablet/mobile layouts.
- Accessible forms and navigation.
- SEO metadata and structured route strategy.

Before a page is considered complete:
- The page renders in browser.
- Mobile layout is checked.
- No obvious console errors.
- No text overlap or clipping.
- Images load and are cropped intentionally.
- CTA links go to the intended pages.
- The page matches the approved visual concept closely.

## Definition of Done

A page is done only when:
- Its purpose and sections are documented.
- Its approved concept exists.
- Its implementation is modular.
- Its content is not repetitive.
- It is checked in a browser on desktop and mobile.
- Visual differences from the concept are fixed or explicitly accepted.
- It can be reused for a future provider with content/config changes.
