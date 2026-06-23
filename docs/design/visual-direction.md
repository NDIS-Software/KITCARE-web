# KITCARE Visual Direction and Design System

Date: 2026-06-24

Concept reference:
- `docs/design/kitcare-homepage-concept.png`

## Direction

KITCARE should feel like a warm, modern, English-language Australian NDIS provider website. The visual system should communicate trust, independence, dignity, and practical support without becoming hospital-like or generic SaaS marketing.

## Approved Information Architecture

Top-level navigation:
- Home
- About Us
- Services
- Contact

Services dropdown:
- Personal Care
- Community Participation
- Household Tasks
- Travel & Transport

Primary CTAs:
- Explore Services
- Contact Us

## Page Rhythm

Home sections:
- Header with Services dropdown and primary Contact Us button.
- Hero with large supporting lifestyle image and two CTAs.
- Trust strip with four concise proof points plus compliant NDIS mark placement area.
- Services overview with four image-led cards.
- About KITCARE preview paired with Why choose KITCARE list.
- FAQ preview.
- Contact CTA band.
- Footer with brand, navigation, legal links, and NDIS mark placement area.

## Visual Tokens

Colors:
- Primary navy: `#082f63`
- Deep text: `#10243f`
- Teal accent: `#009688`
- Teal dark: `#007d73`
- Soft sky background: `#eef8fb`
- Border: `#d9e7e9`
- White surface: `#ffffff`
- Muted text: `#536271`

Typography:
- Use Geist Sans through `next/font`.
- H1: large, bold, tight but readable, navy.
- H2: medium-large, bold, navy.
- Body: 16-18px, comfortable line height.
- Buttons and nav: deliberate 14-16px sizing, medium weight.
- Do not use negative letter spacing.

Layout:
- Max content width around 1180-1240px.
- White page background with occasional soft sky section bands.
- Avoid nested cards.
- Cards are allowed for repeated service items only.
- Card radius: 8px.
- Image radius: 8px.
- Use stable image aspect ratios.

Imagery:
- Use dignified multicultural support scenes.
- Show support workers helping participants in community, home, travel, and daily living contexts.
- Avoid pity-based disability imagery.
- Avoid hospital, clinical, or emergency-care visuals.
- Do not recreate the official NDIS logo. Use a placeholder until the official provider mark is supplied.

Icons:
- Use simple teal outline icons for trust points and service category marks.
- Keep stroke weight consistent.
- Use meaningful icons only; no decorative icon rows.

Interactions:
- Services dropdown on desktop.
- Mobile navigation should expose the same four top-level items and service links.
- FAQ can be static in v1 or use lightweight client-side disclosure if implemented.
- Contact form is UI-only in v1 unless email handling is separately approved.

## Copy Direction

Approved key copy:
- KITCARE
- Registered NDIS Provider
- Support that helps you live with confidence
- Explore Services
- Contact Us
- Personal Care
- Community Participation
- Household Tasks
- Travel & Transport

Tone:
- Plain English.
- Respectful and practical.
- Focus on support, independence, community, and confidence.
- Avoid guarantees about NDIS funding, outcomes, or 24/7 availability unless confirmed.

## Implementation Notes

- Treat the concept image as the visual reference for Stage 2 onward.
- Build UI text, buttons, links, forms, and navigation as real HTML, not bitmap text.
- The generated concept is a reference, not a production asset source for every photo. Final production images may use generated assets or external/client images, but must match this direction.
- Commit and push at each stage checkpoint.

