"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

type Story = {
    title: string;
    date: string;
    location: string;
    images: string[];
    content?: string[];  // Make optional
    authors?: string[];
};

export default function ImpactStoryClient({ story }: { story: Story }) {
    return (
        <main className="max-w-4xl mx-auto px-4 pt-28 pb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-leoBlue mb-6">{story.title}</h1>

            <p className="text-gray-600 mb-4 text-sm">
                <span className="font-medium">Date:</span> {formatDate(story.date)} •{" "}
                <span className="font-medium">Venue:</span> {story.location}
            </p>

            {/* Image Carousel */}
            {Array.isArray(story.images) && story.images.length > 0 && (
                <Swiper
                    navigation
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    className="rounded-xl overflow-hidden mb-8"
                >
                    {story.images.map((img: string, idx: number) => (
                        <SwiperSlide key={idx}>
                            <div className="relative w-full aspect-[4/3] sm:h-96 bg-white">
                                <Image
                                    src={img}
                                    alt={`Image ${idx + 1} for ${story.title}`}
                                    fill
                                    className="object-contain bg-white"
                                    sizes="100vw"
                                    priority={idx === 0}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            {/* Full Story Content */}
            {Array.isArray(story.content) && story.content.length > 0 ? (
                <div className="prose prose-lg max-w-none text-gray-800">
                    {story.content.map((para: string, idx: number) =>
                        para.trim() === "" ? <br key={idx} /> : <p key={idx}>{para}</p>
                    )}
                </div>

            ) : (
                <p className="text-gray-600 italic mt-4">No story content available.</p>
            )}

            {/* Optional: Authors */}
            {Array.isArray(story.authors) && story.authors.length > 0 && (
                <div className="mt-8 text-sm text-gray-600">
                    <p className="font-semibold">Reported by:</p>
                    <ul className="list-disc list-inside">
                        {story.authors.map((author: string, idx: number) => (
                            <li key={idx}>{author}</li>
                        ))}
                    </ul>
                </div>
            )}
        </main>
    );
}