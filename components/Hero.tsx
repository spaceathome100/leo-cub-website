import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-leoRed to-leoGold text-white py-20 px-4 text-center shadow-inner">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
        Serve Kindness
      </h2>
      <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
        Join the Leo Club and make a positive impact on our community today.
      </p>
      <Link href="/take-action" className="btn-primary text-leoRed bg-white hover:bg-yellow-200">
        Take Action Now
      </Link>
    </section>
  );
}