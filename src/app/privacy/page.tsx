import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "KIT Care privacy policy draft for review.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="Privacy Policy"
          description="This draft page should be reviewed by KIT Care before publication."
        />
        <section className="px-6 py-20">
          <div className="mx-auto max-w-3xl text-base leading-8 text-muted">
            <p>
              KIT Care respects your privacy. Information submitted through this
              website should be used only to respond to enquiries and provide
              relevant service information.
            </p>
            <p className="mt-5">
              Before launch, this page should be replaced or reviewed with the
              provider&apos;s final privacy wording, data handling process, and
              contact details.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
