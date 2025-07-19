import stories from "../stories";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ImpactStoryClient from "@/components/ImpactStoryClient";

type Props = {
    params: {
        slug: string;
    };
};

export function generateMetadata({ params }: Props): Metadata {
    const story = stories.find((s) => s.slug === params.slug);
    return {
        title: story ? `${story.title} | Impact Story` : "Impact Story",
        description: story?.description || "An inspiring community impact story",
    };
}

export default function ImpactStoryDetail({ params }: Props) {
    const story = stories.find((s) => s.slug === params.slug);
    if (!story) return notFound();

    return <ImpactStoryClient story={story} />;
}
