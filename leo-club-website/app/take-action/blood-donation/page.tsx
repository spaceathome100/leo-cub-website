'use client';

import Link from 'next/link';
import { FaTint, FaHandsHelping, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function BloodDonationPage() {
  return (
    <main className="bg-white text-leoBlue">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-[200px] pb-20 px-6 text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Be a Hero. Donate Blood. Save Lives.</h1>
        <p className="text-lg md:text-xl mb-6">Your one donation can save up to three lives.</p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/take-action/blood-donation/give">
            <button className="bg-leoGold text-leoBlue font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition">
              Give Blood
            </button>
          </Link>
          <Link href="/take-action/blood-donation/iwantblood">
            <button className="bg-leoBlue text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition">
              I Need Blood
            </button>
          </Link>
        </div>
      </motion.section>

      {/* Why Donate Section */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Why Donate Blood?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <FaTint className="mx-auto text-4xl text-leoBlue mb-4" />,
              title: 'Save Lives',
              desc: 'Your donation can save up to 3 people in need.',
            },
            {
              icon: <FaHandsHelping className="mx-auto text-4xl text-leoBlue mb-4" />,
              title: 'It’s Easy & Safe',
              desc: 'The process is simple and medically supervised.',
            },
            {
              icon: <FaClock className="mx-auto text-4xl text-leoBlue mb-4" />,
              title: 'Takes 30 Minutes',
              desc: 'That’s all it takes to be someone’s lifesaver.',
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              className="bg-leoBlue/10 p-6 rounded-xl text-center"
            >
              {card.icon}
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
