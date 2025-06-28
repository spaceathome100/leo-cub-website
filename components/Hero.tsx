import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[#145DA0] text-white overflow-hidden min-h-[70vh] flex items-center justify-center">
      {/* Scrolling background map */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="flex animate-scrollLoopFast sm:animate-scrollLoopSlow min-w-[200%] h-full">
          <img
            src="/images/world-map.svg"
            alt="World Map"
            className="w-full h-full object-cover scale-100"
            draggable={false}
          />
          <img
            src="/images/world-map.svg"
            alt="World Map Repeat"
            className="w-full h-full object-cover scale-100"
            draggable={false}
          />
        </div>
      </div>

      {/* Blue overlay for contrast */}
      <div className="absolute inset-0 bg-[#145DA0] opacity-50 z-10" />

      {/* Foreground content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center py-20">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Serve Kindness
        </h2>
        <p className="max-w-2xl text-lg md:text-xl mb-8 mx-auto">
          Join the Leo Club and make a positive impact on our community today.
        </p>
        <Link
          href="/take-action"
          className="btn-primary bg-white text-[#145DA0] hover:bg-leoGold transition font-semibold"
        >
          Take Action Now
        </Link>
      </div>
    </section>
  );
}
