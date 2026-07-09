import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { company } from "@/lib/content";
import { createBreadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "KIT Care Privacy Policy.",
  path: "/privacy",
});

const intro = `This Privacy Policy applies to all personal information collected by ${company.name} via this website.`;

const sections = [
  {
    title: '1. What is "personal information"?',
    body: [
      'The Privacy Act 1988 (Cth) currently defines "personal information" as meaning information or an opinion about an identified individual or an individual who is reasonably identifiable:',
      "whether the information or opinion is true or not; and",
      "whether the information or opinion is recorded in a material form or not.",
      'If the information does not disclose your identity or enable your identity to be ascertained, it will in most cases not be classified as "personal information" and will not be subject to this privacy policy.',
    ],
  },
  {
    title: "2. What information do we collect?",
    body: [
      "The kind of personal information that we collect from you will depend on how you use the website.",
    ],
  },
  {
    title: "3. How we collect your personal information",
    body: [
      "We may collect personal information from you whenever you input such information into the website.",
      "We also collect cookies from your computer which enable us to tell when you use the website and also to help customise your website experience. As a general rule, however, it is not possible to identify you personally from our use of cookies.",
    ],
  },
  {
    title: "4. Purpose of collection",
    body: [
      "The purpose for which we collect personal information is to provide you with the best service experience possible on the website.",
      "We customarily disclose personal information only to our service providers who assist us in operating the website. Your personal information may also be exposed from time to time to maintenance and support personnel acting in the normal course of their duties.",
      "By using our website, you consent to the receipt of direct marketing material. We will only use your personal information for this purpose if we have collected such information direct from you, and if it is material of a type which you would reasonably expect to receive from us. We do not use sensitive personal information in direct marketing activity. Our direct marketing material will include a simple means by which you can request not to receive further communications of this nature.",
    ],
  },
  {
    title: "5. Access and correction",
    body: [
      "Australian Privacy Principle 12 permits you to obtain access to the personal information we hold about you in certain circumstances, and Australian Privacy Principle 13 allows you to correct inaccurate personal information subject to certain exceptions. If you would like to obtain such access, please contact us as set out below.",
    ],
  },
  {
    title: "6. Complaint procedure",
    body: [
      `If you have a complaint concerning the manner in which we maintain the privacy of your personal information, please contact us as set out below. All complaints will be considered by the ${company.name} executive team and we may seek further information from you to clarify your concerns. If we agree that your complaint is well founded, we will, in consultation with you, take appropriate steps to rectify the problem. If you remain dissatisfied with the outcome, you may refer the matter to the Office of the Australian Information Commissioner.`,
    ],
  },
  {
    title: "7. Overseas transfer",
    body: [
      "Your personal information will not be disclosed to recipients outside Australia unless you expressly request us to do so. If you request us to transfer your personal information to an overseas recipient, the overseas recipient will not be required to comply with the Australian Privacy Principles and we will not be liable for any mishandling of your information in such circumstances.",
    ],
  },
  {
    title: "8. How to contact us about privacy",
    body: [
      `If you have any queries, or if you seek access to your personal information, or if you have a complaint about our privacy practices, you can contact us through: ${company.email}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <SiteHeader />
      <main>
        <PageHero
          title="Privacy Policy"
          description="How KIT Care handles personal information submitted through this website."
        />
        <section className="px-6 py-20">
          <div className="mx-auto max-w-3xl text-base leading-8 text-muted">
            <p className="rounded-md border border-border-soft bg-sky-soft p-5 text-sm leading-7 text-navy">
              Last updated: 1 July 2026
            </p>
            <p className="mt-8 text-base leading-8 text-muted">{intro}</p>
            <div className="mt-10 space-y-10">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-bold leading-tight text-navy">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-5">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
