import Image from "next/image";

export default function AboutWithLogo() {
  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        
        {/* Larger Logo on the Left */}
        <div className="w-52 md:w-72 flex-shrink-0 mx-auto md:mx-0">
          <Image
            src="/logo.png" // Make sure this exists in your /public folder
            alt="Leo Club Logo"
            width={400}
            height={400}
            className="object-contain"
            priority
          />
        </div>

        {/* Description on the Right */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-leoBlue mb-4">About the Leo Club</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to the Leo club of Hopeville
            <br /><br />
            Serve Kindness.
            <br /><br />
            The Leo club of Hopeville is a youth-led service organization committed to creating real change through compassion and action. 
            Backed by Lions Club International and proudly sponsored by the Lions Club of Chennai Aavarampoo, 
            we empower young individuals to lead with empathy and purpose.
            <br /><br />
            Our mission is to inspire and mobilize the youth to serve their communities with kindness and dedication. 
            We believe in the power of service to transform lives, uplift communities, and foster a spirit of global citizenship.
            <br /><br />
            Through impactful initiatives such as blood donation drives, educational outreach, and community 
            volunteering we strive to make service a way of life.
            We believe that every small act of kindness can lead to a larger wave of transformation.
            Join us as we Serve Kindness and build a brighter, more empathetic world together.
            <br /><br />
            Backed by the Lions Club of Chennai, we serve with pride and aim to inspire others
            to join us in building a brighter, more empathetic world.
          </p>
        </div>
      </div>
    </section>
  );
}
