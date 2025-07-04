"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "./teamStyles.css";
import LeoTalk from "@/components/LeoTalk";

const team = [
  {
    name: "LEO SHARAN KUMAR P B",
    role: "PRESIDENT",
    image: "/team/sharan.png",
    bio: [
      "Leading with vision and kindness.",
      "Believes service begins with empathy.",
    ],
  },
  {
    name: "LEO VINOTH B",
    role: "IMM PAST PRESIDENT",
    image: "/team/vinoth.png",
    bio: [
      "Legacy isn’t given — it's earned.",
      "Mentors the next generation of Leos.",
    ],
  },
  {
    name: "LEO SANTO BRIANA A",
    role: "VICE PRESIDENT",
    image: "/team/santo.png",
    bio: [
      "Grace under pressure.",
      "Community first, always.",
    ],
  },
  {
    name: "LEO SHINENDRAN N",
    role: "SECRETARY",
    image: "/team/shinendran.png",
    bio: [
      "Order in every action.",
      "Keeps the mission on schedule.",
    ],
  },
  {
    name: "LEO SRIVASTHAN H",
    role: "TREASURER",
    image: "/team/srivasthan.png",
    bio: [
      "Every rupee has a purpose.",
      "Transparency is non‑negotiable.",
    ],
  },
  {
    name: "LEO PRATIMA DIXIT R",
    role: "MEMBERSHIP CHAIRPERSON",
    image: "/team/pratima.png",
    bio: [
      "Welcomes every new Leo like family.",
      "Growth with heart.",
    ],
  },
  {
    name: "LEO KESHAV K",
    role: "LEADERSHIP CHAIRPERSON",
    image: "/team/keshav.png",
    bio: [
      "Turns potential into performance.",
      "Leads by example.",
    ],
  },
  {
    name: "LEO MANISH MADHAVAN K K",
    role: "SERVICE CHAIRPERSON",
    image: "/team/manish.png",
    bio: [
      "Action over words.",
      "Weekends = volunteering.",
    ],
  },
  {
    name: "LEO SIDHESH G S",
    role: "PUBLIC RELATION OFFICER",
    image: "/team/sidhesh.png",
    bio: [
      "Every story deserves a spotlight.",
      "Amplifying Leo voices.",
    ],
  },
  {
    name: "LEO AKSHAYA R G",
    role: "CHILDHOOD CANCER CHAIRPERSON",
    image: "/team/akshaya.png",
    bio: [
      "Hope is medicine.",
      "Kids first, always.",
    ],
  },
  {
    name: "LEO LAKSHITA M S",
    role: "DIABETES CHAIRPERSON",
    image: "/team/lakshita.png",
    bio: [
      "Fighting sugar, spreading sweetness.",
      "Advocate for healthy habits.",
    ],
  },
  {
    name: "LEO DURGESH A",
    role: "DISASTER RELIEF CHAIRPERSON",
    image: "/team/durgesh.png",
    bio: [
      "First on-site, last to leave.",
      "Prepared for every storm.",
    ],
  },
  {
    name: "LEO SHRENICA CHAWDA A",
    role: "ENVIRONMENT CHAIRPERSON",
    image: "/team/shrenica.png",
    bio: [
      "Planet before profit.",
      "Plants trees like confetti.",
    ],
  },
  {
    name: "LEO KIRUTHIKA A B",
    role: "HUMANITARIAN CHAIRPERSON",
    image: "/team/kiruthika.png",
    bio: [
      "Wherever there’s a need, she’s there.",
      "Kindness in action.",
    ],
  },
  {
    name: "LEO NALLAMALLI HRISHEEK",
    role: "HUNGER RELIEF CHAIRPERSON",
    image: "/team/hrisheek.png",
    bio: [
      "No plate should be empty.",
      "Organises food drives weekly.",
    ],
  },
  {
    name: "LEO SORNALATHA V",
    role: "SPORTS CHAIRPERSON",
    image: "/team/sornalatha.png",
    bio: [
      "Team spirit on and off field.",
      "Healthy body, healthy community.",
    ],
  },
  {
    name: "LEO MONIKAA SHREE",
    role: "TWINNING CHAIRPERSON",
    image: "/team/monikaa.png",
    bio: [
      "Building bridges between clubs.",
      "Collaboration is her super-power.",
    ],
  },
  {
    name: "LEO KARTIGAYINI K",
    role: "VISION CHAIRPERSON",
    image: "/team/kartigayini.png",
    bio: [
      "Eye care advocate.",
      "Bringing clearer futures.",
    ],
  },
  {
    name: "LEO MANASADHEVI H",
    role: "YOUTH CHAIRPERSON",
    image: "/team/manasadhevi.png",
    bio: [
      "Empowering tomorrow’s leaders today.",
      "Youth energy = Leo energy.",
    ],
  },
];

export default function OurTeamPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="bg-white py-24 px-4">
      <h1 className="text-5xl font-extrabold text-center text-leoBlue mb-16">
        Meet Our Team
      </h1>

      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        slidesPerView={1.1}
        loop
        centeredSlides
        spaceBetween={-20}
        pagination={{ clickable: true }}
        speed={700}
        breakpoints={{
          640: { slidesPerView: 1.4, spaceBetween: -30 },
          768: { slidesPerView: 2.1, spaceBetween: -40 },
          1024: { slidesPerView: 3, spaceBetween: -60 },
        }}
        modules={[Pagination]}
        className="max-w-7xl mx-auto custom-swiper"
      >
        {team.map((m, i) => {
          const isActive = i === activeIndex;
          return (
            <SwiperSlide key={i} className="pt-12 pb-16 px-4">
              <div
                className={`mx-auto max-w-xs transition-all duration-700 ease-in-out transform ${isActive
                  ? "scale-105 z-20 shadow-2xl"
                  : "scale-90 opacity-80 blur-[0.3px] z-10"
                  } bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-xl`}
              >
                <div className="w-full h-64 rounded-t-3xl overflow-hidden">
                  {m.role === "PRESIDENT" ? (
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "10% 10%" }}
                    />
                  ) : (
                    <Image
                      src={m.image}
                      alt={m.name}
                      width={400}
                      height={256}
                      className="w-full h-full object-cover object-top"
                    />
                  )}
                </div>

                <div className="p-6 text-center">
                  <h2 className="text-lg font-bold text-leoBlue leading-tight">
                    {m.name}
                  </h2>
                  <p className="text-leoAccent text-xs font-semibold mb-4 tracking-wide uppercase">
                    {m.role}
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {m.bio.map((line, j) => (
                      <li key={j}>“{line}”</li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <LeoTalk />
    </main>
  );
}
