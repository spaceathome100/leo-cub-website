"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const recentActions = [
  {
    title: "Blood Donation Drive",
    slug: "blood-donation",
    description:
      "We organized a successful drive collecting over 100 units of blood with local hospitals.",
    image: "/images/action2.png",
  },
  {
    title: "Beach Cleanup",
    slug: "beach-cleanup",
    description:
      "Leo volunteers joined hands for a large-scale coastal cleanup at Marina Beach.",
    image: "/images/action2.png",
  },
  {
    title: "School Supplies Drive",
    slug: "school-supplies",
    description:
      "Distributed educational kits to 250+ underprivileged students in Chennai. This was made possible through sponsor donations and dedicated volunteers. Together we made a difference by making education more accessible.",
    image: "/images/action2.png",
  },
];

export default function RecentActions() {
  return (
    <section className="py-12 px-4 md:px-16 bg-gray-100" id="recent-actions">
      <h2 className="text-3xl font-bold text-center text-leoBlue mb-8">
        Recent Actions
      </h2>

      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          spaceBetween={20}
          slidesPerView={1}
          className="pb-20 px-2 sm:px-6 custom-swiper"
        >
          {recentActions.map((action, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row overflow-visible max-w-[95vw] sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl w-full mx-auto h-[460px] md:h-[360px]">

                {/* Left: Image */}
                <div className="h-1/2 md:h-full md:w-1/2">
                  <Image
                    src={action.image}
                    alt={action.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right: Text */}
                <div className="p-6 h-1/2 md:h-full md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-leoBlue mb-2">
                      {action.title}
                    </h3>
                    <p className="text-gray-700 line-clamp-3">
                      {action.description}
                    </p>
                  </div>

                  <Link
                    href={`/projects/${action.slug}`}
                    className="mt-4 inline-flex items-center justify-center bg-leoGold text-leoBlue font-bold text-base md:text-lg py-3 px-6 rounded-full shadow hover:bg-yellow-400 transition-all duration-300 w-full md:w-auto"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ⬅️ Arrows - Only visible on md and above */}
        <div className="swiper-button-prev hidden md:block text-leoBlue text-2xl" />
        <div className="swiper-button-next hidden md:block text-leoBlue text-2xl" />
      </div>
    </section>
  );
}
