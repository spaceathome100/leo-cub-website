// components/AboutWithLogo.tsx

import Image from "next/image";

export default function AboutWithLogo() {
  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        
        {/* Logo on the Left */}
        <div className="w-40 md:w-60 flex-shrink-0 mx-auto md:mx-0">
          <Image
            src="/logo.png" // ⚠️ Ensure this file is in the /public folder
            alt="Leo Club Logo"
            width={240}
            height={240}
            className="object-contain"
            priority
          />
        </div>

        {/* Description on the Right */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-leoBlue mb-4">About the Leo Club</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The Leo Club of Hopevillie is a youth-led initiative under the guidance of Lions Club International.
            Our mission is to nurture leadership, cultivate a spirit of service, and create impactful change
            within communities. Through blood donation drives, educational outreach, and local volunteering
            efforts, we empower the next generation to lead with compassion and purpose.
            <br /><br />
            Backed by the Lions Club of Chennai, we serve with pride and aim to inspire others
            to join us in building a brighter, more empathetic world.
          </p>
        </div>
      </div>
    </section>
  );
}
