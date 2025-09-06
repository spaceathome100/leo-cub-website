import "../styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Leo Club Of Hopeville",
  description: "Youth leadership & service – Sponsored by Lions Club of Chennai",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 bg-gray-50">{children}</main>
        <Footer />
        <Analytics /> {/* ✅ Vercel Analytics initialized */}
        <SpeedInsights /> {/* ✅ Vercel Speed Insights initialized */}
      </body>
    </html>
  );
}
