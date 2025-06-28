// app/page.tsx

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Link from "next/link";
import AboutWithLogo from "@/components/AboutWithLogo"; // ✅ Import the new component

export default function Home() {
  return (
    <>
      <Hero />
      <AboutWithLogo /> {/* ✅ Insert right after Hero */}

      <Section id="recent-actions" title="Recent Actions">
        {/* Map recent actions cards here */}
        <p className="text-center text-gray-600">No recent actions yet – stay tuned!</p>
      </Section>

      <Section id="upcoming-events" title="Upcoming Events">
        {/* Map upcoming events here */}
        <p className="text-center text-gray-600">Events calendar coming soon.</p>
      </Section>

      <Section id="cta" title="Need Blood?">
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/take-action#need" className="btn-primary">I Need Blood</Link>
          <Link href="/take-action#give" className="btn-secondary">I Want to Donate</Link>
        </div>
      </Section>
    </>
  );
}
