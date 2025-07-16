// components/ImpactStoryCard.tsx

import Image from "next/image";

interface ImpactStoryCardProps {
    title: string;
    description: string;
    image: string;
    date: string;
    location: string;
}

export default function ImpactStoryCard({
    title,
    description,
    image,
    date,
    location,
}: ImpactStoryCardProps) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative w-full sm:w-1/3 h-60 sm:h-auto">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-contain bg-white"
                />
            </div>
            <div className="p-4 sm:w-2/3 flex flex-col justify-between">
                <div>
                    <h2 className="text-xl font-semibold text-leoBlue">{title}</h2>
                    <p className="text-sm text-gray-500 mb-1">
                        {new Date(date).toLocaleDateString()} • {location}
                    </p>
                    <p className="text-gray-700 line-clamp-3">{description}</p>
                </div>
                <p className="mt-2 text-leoAccent font-semibold">Read More →</p>
            </div>
        </div>
    );
}
