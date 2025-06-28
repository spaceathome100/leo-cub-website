import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-[#145DA0] text-white overflow-hidden">
      {/* World map background layer */}
      <div className="absolute inset-0 bg-[url('/images/world-map.svg')] bg-cover bg-center opacity-30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-16 flex flex-col items-center justify-center text-center min-h-[60vh]">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Serve Kindness
        </h2>
        <p className="max-w-2xl text-lg md:text-xl mb-8">
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
