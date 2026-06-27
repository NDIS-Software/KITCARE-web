# NDIS Registration Groups Website Content Guide

This guide explains how KIT Care's current website template uses NDIS registration groups for service copy, navigation, service cards, and reusable future provider websites.

## Important Compliance Notes

- Use the provider's confirmed registration groups before publishing any service page.
- Do not describe a provider as "NDIS approved". Use "Registered NDIS Provider" only when the provider is registered.
- Do not promise that a support will be fully funded, automatically approved, or available to every participant.
- Keep service descriptions practical and participant-centred. Avoid medical claims unless the provider has clinical scope and approved copy.
- The official NDIS Registered Provider mark must come from the NDIA/NDIS logo pack. Do not redraw, generate, recolour, distort, or recreate the logo.
- The NDIS logo download page may be protected by browser checks. If the official asset cannot be downloaded by automation, request the supplied logo pack from the client and place the correct asset in `public/images/brand/`.

Official reference: https://www.ndis.gov.au/contact/feedback-and-enquiries/ndis-logo-guidelines

## Current Website Service Groups

| Code | NDIS Registration Group | Website Service Name | Plain-English Meaning | Website Content Use |
| --- | --- | --- | --- | --- |
| 0107 | Assist-Personal Activities | Personal Care | Support with personal daily activities, routines, hygiene, dressing, meals, mobility, and confidence at home. | Core service card, service detail page, home page featured service. |
| 0108 | Assist-Travel/Transport | Travel & Transport | Assistance to travel safely to appointments, shopping, errands, activities, and community access. | Core service card, service detail page, home page featured service. |
| 0115 | Daily Tasks/Shared Living | Daily Tasks / Shared Living | Practical assistance with daily routines and shared living responsibilities. The group wording should be reviewed for the provider's applicable date and registration scope. | Extended service page for providers registered for this support. |
| 0138 | Assistance with supported independent living | Supported Independent Living | Support that helps participants live more independently at home, including routines, skills, shared responsibilities, and safe daily support. | Extended service page and future accommodation/SIL content module. |
| 0116 | Innov Community Participation | Innovative Community Participation | Goal-based support that builds confidence, social connection, capacity, and participation in community settings. | Extended service card and community participation copy module. |
| 0117 | Development-Life Skills | Development Life Skills | Skill-building support for everyday independence, decision-making, routines, communication, and confidence. | Extended service card and capacity-building copy module. |
| 0120 | Household Tasks | Household Tasks | Practical household support such as light cleaning, laundry, kitchen routines, and maintaining a safer home. | Core service card, service detail page, home page featured service. |
| 0125 | Participate Community | Community Participation | Support to attend activities, pursue interests, connect socially, and participate in the local community. | Core service card, service detail page, home page featured service. |
| 0136 | Group/Centre Activities | Group & Centre Activities | Inclusive group or centre-based activities that support social connection, participation, and confidence. | Extended service card and future activities/programs module. |

## Recommended Website IA For Similar Providers

Use four top-level pages for the first version:

1. Home
2. About Us
3. Services
4. Contact

Keep each registration group as a service detail page under `/services/[slug]`. This keeps the top navigation simple while allowing the provider to show a richer service catalogue.

## Reusable Content Rules

- Put all service content in `src/lib/content.ts`.
- Each service should include `title`, `code`, `group`, `slug`, `href`, `summary`, `image`, `icon`, `detail`, `includes`, and `helps`.
- Use `featuredServiceSlugs` to control which services appear on the Home page.
- Keep service cards concise: code, group, title, one summary, and one photo.
- Keep service detail pages modular: one hero, one image/copy section, one "What support may include" list, and one "Who this may help" list.

## Visual Direction For NDIS Provider Sites

- Use warm natural light, real-life support scenes, accessible spaces, and community settings.
- Avoid hospital-like, clinical, dark, or overly corporate imagery unless the provider is a clinical practice.
- Show people with disability respectfully, as adults with agency, choice, and real lives.
- Use cards sparingly and consistently. Service cards are appropriate; avoid stacking many nested cards inside other cards.
- Use a restrained palette with navy for trust, teal for action and care, white for clarity, and light sky backgrounds for warmth.
- Keep all visible website copy in English unless the provider specifically requests multilingual content.

## NDIS Logo Handling

The current implementation includes an "official mark-ready" placement area. Replace it only after receiving the correct official file from the NDIS registered provider logo pack.

Recommended file path once supplied:

```text
public/images/brand/ndis-registered-provider-mark.png
```

Before production launch:

1. Confirm the provider is currently registered.
2. Confirm the provider is allowed to use the Registered Provider mark.
3. Add the official mark image exactly as supplied.
4. Do not recolour, crop, stretch, redraw, or generate the NDIS mark.
5. Review page copy so it does not imply government endorsement beyond registration.
