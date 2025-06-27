// components/Footer.tsx

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12 text-center text-sm">
      <p className="mb-2">
        © {new Date().getFullYear()} Leo Club – All rights reserved.
      </p>
      <p className="mb-2">
        Sponsored by Lions Club of Chennai
      </p>
      <div className="flex justify-center gap-4 mt-4 text-leoGold">
        <a href="/about-us" className="hover:underline">About</a>
        <a href="/take-action" className="hover:underline">Take Action</a>
        <a href="/our-team" className="hover:underline">Our Team</a>
      </div>
    </footer>
  );
}
