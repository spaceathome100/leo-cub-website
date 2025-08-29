"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import ImpactStoryCard from "@/components/ImpactStoryCard";
import Link from "next/link";

export interface Story {
  slug: string;
  title: string;
  description: string;
  location: string;
  date: string;
  authors: string[];
  images: string[];
  content: string[];
}

export default function ImpactStoriesPage() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const q = query(collection(db, "impact_stories"), orderBy("date", "desc"));
        const snapshot = await getDocs(q);
        const fetchedStories = snapshot.docs.map(doc => doc.data() as Story);
        setStories(fetchedStories);
      } catch (err) {
        console.error("Error fetching stories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (loading) {
    return <div className="text-center py-20 text-gray-500">Loading stories...</div>;
  }

  if (stories.length === 0) {
    return <div className="text-center py-20 text-gray-500">No stories found.</div>;
  }

  return (
    <main className="max-w-5xl mx-auto px-4 pt-28 pb-16">
      <h1 className="text-4xl font-bold text-leoBlue mb-8 text-center">
        Impact Stories
      </h1>

      <div className="flex flex-col gap-6">
        {stories.map((story) => (
          <Link
            key={story.slug}
            href={`/impact-stories/${story.slug}`}
            className="block"
          >
            <ImpactStoryCard
              title={story.title}
              description={story.description}
              image={story.images[0]}
              date={story.date}
              location={story.location}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
