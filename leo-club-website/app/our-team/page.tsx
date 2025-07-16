"use client";

import Image from "next/image";
import LeoTalk from "@/components/LeoTalk";
import "./teamStyles.css"; // Optional if you want to keep custom styles

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
  return (
    <main className="bg-white py-24 px-4 overflow-x-hidden">
      <h1 className="text-5xl font-extrabold text-center text-leoBlue mb-20">
        Meet Our Team
      </h1>

      <div className="space-y-12 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className={`
              flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12
              bg-gray-50 shadow-md rounded-xl p-6
              ${index % 2 === 1 ? "md:flex-row-reverse" : ""}
            `}
            style={{ minHeight: "320px" }}
          >
            {/* Photo (uncropped) */}
            <div className="flex-shrink-0 w-full max-w-[300px] h-[300px] bg-white rounded-lg overflow-hidden flex items-center justify-center border">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-leoBlue">{member.name}</h3>
              <p className="text-leoAccent text-sm font-semibold uppercase mt-1">{member.role}</p>
              <ul className="mt-4 text-gray-700 list-disc list-inside text-sm space-y-1">
                {member.bio.map((line, i) => (
                  <li key={i}>“{line}”</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <LeoTalk />
      </div>
    </main>
  );
}
