import Hero from "@/components/Hero";
import AboutWithLogo from "@/components/AboutWithLogo";
import RecentActions from "@/components/RecentActions";
import Section from "@/components/Section";
import UpcomingActions from "@/components/UpcomingActions";
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
      <UpcomingActions />
    </>
  );
}
