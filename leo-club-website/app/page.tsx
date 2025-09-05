import Hero from "@/components/Hero";
import AboutWithLogo from "@/components/AboutWithLogo";
import RecentActions from "@/components/RecentActions";
import UpcomingActions from "@/components/UpcomingActions";
import LeoTalk from "@/components/LeoTalk";

export default function Home() {
  return (
    <>
      <LeoTalk />
      <Hero />
      <AboutWithLogo />
      <RecentActions />
      <UpcomingActions />
    </>
  );
}
