"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import ImpactStoryClient from "@/components/ImpactStoryClient";

export default function ImpactStoryPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const [story, setStory] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStory = async () => {
      if (!slug) return;

      try {
        const q = query(collection(db, "impact_stories"), where("slug", "==", slug));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          setStory(snapshot.docs[0].data());
        } else {
          console.warn("Story not found in Firestore");
          setStory(null);
        }
      } catch (err) {
        console.error("Error fetching story:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [slug]);

  if (loading) {
    return <div className="text-center py-20 text-gray-500">Loading story...</div>;
  }

  if (!story) {
    return <div className="text-center py-20 text-red-500">Story not found.</div>;
  }

  return <ImpactStoryClient story={story} />;
}
