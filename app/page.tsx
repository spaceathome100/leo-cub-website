import Hero from "@/components/Hero";
import AboutWithLogo from "@/components/AboutWithLogo";
import RecentActions from "@/components/RecentActions";
import Section from "@/components/Section";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero section with scrolling world map */}
      <Hero />

      {/* About the Leo Club with logo */}
      <AboutWithLogo />

      {/* Recent Actions carousel */}
      <RecentActions />

      {/* Upcoming Events section */}
      <Section id="upcoming-events" title="Upcoming Events">
        <p className="text-center text-gray-600">Events calendar coming soon.</p>
      </Section>

      {/* Call-to-action buttons */}
      <Section id="cta" title="Need Blood?">
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/take-action#need" className="btn-primary">
            I Need Blood
          </Link>
          <Link href="/take-action#give" className="btn-secondary">
            I Want to Donate
          </Link>
        </div>
      </Section>
    </>
  );
}
