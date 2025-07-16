import stories from "./stories";
import ImpactStoryCard from "@/components/ImpactStoryCard";
import Link from "next/link";

export default function ImpactStoriesPage() {
  const sortedStories = [...stories].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="max-w-5xl mx-auto px-4 pt-28 pb-16">
      <h1 className="text-4xl font-bold text-leoBlue mb-8 text-center">
        Impact Stories
      </h1>

      <div className="flex flex-col gap-6">
        {sortedStories.map((story) => (
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
