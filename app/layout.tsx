import "../styles/globals.css";
import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Leo Club",
  description: "Youth leadership & service – Sponsored by Lions Club of Chennai XYZ"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 bg-gray-50">{children}</main>
        <Footer />
      </body>
    </html>
  );
}