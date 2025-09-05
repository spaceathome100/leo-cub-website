"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";

type Event = {
  title: string;
  date: string | Timestamp;
  tag: string;
  description: string;
  image: string;
};

export default function UpcomingActions() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const q = query(
          collection(db, "upcoming_events"),
          orderBy("date"),
          limit(3)
        );
        const snapshot = await getDocs(q);
        const fetched = snapshot.docs.map((doc) => doc.data() as Event);
        setEvents(fetched);
      } catch (err) {
        console.error("Failed to fetch upcoming events:", err);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="py-12 px-4 bg-leoBlue/5" id="upcoming-actions">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-leoBlue mb-8">
          Upcoming Actions
        </h2>
        <div className="space-y-6">
          {events.map((event, idx) => {
            // Convert Timestamp to string if needed
            const displayDate =
              (event.date as any)?.toDate?.()
                ? (event.date as Timestamp)
                    .toDate()
                    .toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                : (event.date as string);

            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <div className="relative w-full sm:w-1/3 h-48 sm:h-auto">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-contain bg-gray-100"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between w-full sm:w-2/3">
                  <div>
                    <span className="inline-block text-xs font-medium bg-leoAccent text-white px-3 py-1 rounded-full mb-2">
                      {event.tag}
                    </span>
                    <h3 className="text-xl font-semibold text-leoBlue">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {event.description}
                    </p>
                  </div>
                  <div className="mt-4 text-sm font-medium text-leoGold">
                    📅 {displayDate}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
