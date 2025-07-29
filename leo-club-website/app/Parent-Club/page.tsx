"use client";
import React from "react";
import LeoTalk from "@/components/LeoTalk";

export default function ParentClubPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-10 text-center">
      <LeoTalk />
      <h1 className="text-4xl font-bold text-leoBlue mb-6">Parent Club</h1>

      <div className="space-y-4 text-lg text-left leading-relaxed text-gray-700">
        <p className="font-semibold">
          Lions Club of Chennai Aavarampoo<br />
          District 3241 E
        </p>

        <p>
          The Lions Club of Chennai Aavarampoo, under District 3241 E, is an active volunteer chapter hosting
          monthly meetings in Anna Nagar. With around 68 members and standard service activities aligned with
          Lions’ mission, the club contributes to community well‑being, especially in health and youth services.
        </p>

        <h2 className="text-2xl font-semibold text-leoGold mt-6">Activities & Service Focus</h2>

        <p>
          Although specific project details for the Aavarampoo club are not publicly listed, most Lions Clubs in
          this district typically engage in:
        </p>

        <ul className="list-disc pl-6 text-left inline-block">
          <li>Eye and vision-care programmes, such as free screening camps</li>
          <li>Health camps, including diabetes and general health awareness</li>
          <li>Community service initiatives, like hygiene drives, school support, and environmental activities</li>
          <li>Youth outreach, through Leos and student engagement, aligned with Lions International’s broader mission “We Serve”</li>
        </ul>
      </div>
    </div>
  );
}
