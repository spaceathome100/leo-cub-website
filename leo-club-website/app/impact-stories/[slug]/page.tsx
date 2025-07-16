"use client";

import stories from "../stories";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImpactStoryDetail({ params }: { params: { slug: string } }) {
    const story = stories.find((s) => s.slug === params.slug);
    if (!story) return notFound();

    return (
        <main className="max-w-4xl mx-auto px-4 pt-28 pb-10">
            <h1 className="text-4xl font-bold mb-2 text-leoBlue">{story.title}</h1>
            <p className="text-sm text-gray-600 mb-6">
                {story.location} — {new Date(story.date).toLocaleDateString()}
            </p>

            {/* Carousel */}
            <div className="mb-6">
                <Swiper
                    spaceBetween={10}
                    navigation
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    className="rounded-xl overflow-hidden"
                >
                    {story.images.map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="relative w-full aspect-[4/3] sm:h-96 bg-white">
                                <Image
                                    src={img}
                                    alt={story.title}
                                    fill
                                    className="object-contain bg-white"
                                />
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Full Description */}
            <article className="prose prose-lg max-w-none text-gray-800 whitespace-pre-line">
                {story.fullText}
            </article>

            <p className="mt-8 italic text-gray-500">— {story.author}</p>
        </main>
    );
}
