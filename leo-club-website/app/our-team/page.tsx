"use client";

import { useState } from "react";
import Image from "next/image";
import "./teamStyles.css";
import LeoTalk from "@/components/LeoTalk";

/**
 * NOTE: Save the following utilities in `teamStyles.css` (same folder):
 *
 * .perspective { perspective: 1000px; }
 * .transform-style { transform-style: preserve-3d; }
 * .backface-hidden { backface-visibility: hidden; }
 * .rotate-y-180 { transform: rotateY(180deg); }
 * .duration-700 { transition-duration: 700ms; }
 */

const team = [
  { name: "LEO SHARAN KUMAR P B", role: "PRESIDENT", image: "/team/sharan.png", bio: ["Leading with vision and kindness.", "Believes service begins with empathy."] },
  { name: "LEO VINOTH B", role: "IMM PAST PRESIDENT", image: "/team/vinoth.png", bio: ["Legacy isn’t given — it's earned.", "Mentors the next generation of Leos."] },
  { name: "LEO SANTO BRIANA A", role: "VICE PRESIDENT", image: "/team/santo.png", bio: ["Grace under pressure.", "Community first, always."] },
  { name: "LEO SHINENDRAN N", role: "SECRETARY", image: "/team/shinendran.png", bio: ["Order in every action.", "Keeps the mission on schedule."] },
  { name: "LEO SRIVASTHAN H", role: "TREASURER", image: "/team/srivasthan.png", bio: ["Every rupee has a purpose.", "Transparency is non‑negotiable."] },
  { name: "LEO PRATIMA DIXIT R", role: "MEMBERSHIP CHAIRPERSON", image: "/team/pratima.png", bio: ["Welcomes every new Leo like family.", "Growth with heart."] },
  { name: "LEO KESHAV K", role: "LEADERSHIP CHAIRPERSON", image: "/team/keshav.png", bio: ["Turns potential into performance.", "Leads by example."] },
  { name: "LEO MANISH MADHAVAN K K", role: "SERVICE CHAIRPERSON", image: "/team/manish.png", bio: ["Action over words.", "Weekends = volunteering."] },
  { name: "LEO SIDHESH G S", role: "PUBLIC RELATION OFFICER", image: "/team/sidhesh.png", bio: ["Every story deserves a spotlight.", "Amplifying Leo voices."] },
  { name: "LEO AKSHAYA R G", role: "CHILDHOOD CANCER CHAIRPERSON", image: "/team/akshaya.png", bio: ["Hope is medicine.", "Kids first, always."] },
  { name: "LEO LAKSHITA M S", role: "DIABETES CHAIRPERSON", image: "/team/lakshita.png", bio: ["Fighting sugar, spreading sweetness.", "Advocate for healthy habits."] },
  { name: "LEO DURGESH A", role: "DISASTER RELIEF CHAIRPERSON", image: "/team/durgesh.png", bio: ["First on-site, last to leave.", "Prepared for every storm."] },
  { name: "LEO SHRENICA CHAWDA A", role: "ENVIRONMENT CHAIRPERSON", image: "/team/shrenica.png", bio: ["Planet before profit.", "Plants trees like confetti."] },
  { name: "LEO KIRUTHIKA A B", role: "HUMANITARIAN CHAIRPERSON", image: "/team/kiruthika.png", bio: ["Wherever there’s a need, she’s there.", "Kindness in action."] },
  { name: "LEO NALLAMALLI HRISHEEK", role: "HUNGER RELIEF CHAIRPERSON", image: "/team/hrisheek.png", bio: ["No plate should be empty.", "Organises food drives weekly."] },
  { name: "LEO SORNALATHA V", role: "SPORTS CHAIRPERSON", image: "/team/sornalatha.png", bio: ["Team spirit on and off field.", "Healthy body, healthy community."] },
  { name: "LEO MONIKAA SHREE", role: "TWINNING CHAIRPERSON", image: "/team/monikaa.png", bio: ["Building bridges between clubs.", "Collaboration is her super‑power."] },
  { name: "LEO KARTIGAYINI K", role: "VISION CHAIRPERSON", image: "/team/kartigayini.png", bio: ["Eye care advocate.", "Bringing clearer futures."] },
  { name: "LEO MANASADHEVI H", role: "YOUTH CHAIRPERSON", image: "/team/manasadhevi.png", bio: ["Empowering tomorrow’s leaders today.", "Youth energy = Leo energy."] },
];

export default function OurTeamPage() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <main className="bg-white py-24 px-4 overflow-x-hidden">
      <h1 className="text-5xl font-extrabold text-center text-leoBlue mb-16">
        Meet Our Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-4">
        {team.map((member, i) => (
          <div
            key={i}
            className="group perspective w-72 h-[26rem] mx-auto"
            onClick={() => handleFlip(i)}
          >
            <div
              className={`relative w-full h-full transform-style preserve-3d duration-700 ease-in-out ${flippedIndex === i ? "rotate-y-180" : ""
                }`}
            >
              {/* Front */}
              <div className="absolute inset-0 backface-hidden bg-white border rounded-2xl overflow-hidden flex flex-col">
                <div className="w-full h-72 overflow-hidden flex-shrink-0">
                  {member.role === "PRESIDENT" ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "10% 10%" }}
                    />
                  ) : (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={320}
                      className="w-full h-full object-cover object-top"
                    />
                  )}
                </div>

                <div className="px-4 pt-3 pb-4 text-center">
                  <h3 className="text-base font-bold text-leoBlue leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-leoAccent text-xs font-semibold uppercase tracking-wide mt-1">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-400 mt-1 italic">(click to read more)</p>
                </div>
              </div>

              {/* Back */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-leoBlue text-white border rounded-2xl p-4 flex flex-col items-center justify-center text-sm overflow-hidden">
                <div className="flex-1 flex flex-col justify-center overflow-y-auto max-h-full text-center px-2">
                  <h4 className="text-lg font-bold mb-2 leading-snug">
                    {member.name}
                  </h4>
                  <p className="text-leoAccent text-xs font-semibold uppercase tracking-wide mb-4">
                    {member.role}
                  </p>
                  <ul className="space-y-1 text-sm">
                    {member.bio.map((line, j) => (
                      <li key={j}>“{line}”</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <LeoTalk />
    </main>
  );
}