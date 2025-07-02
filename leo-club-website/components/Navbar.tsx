'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaFacebook, FaLinkedin, FaChevronDown } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "Take Action",
    dropdown: [
      { href: "/take-action/blood-donation", label: "Blood Donation" },
      //{ href: "/take-action/blood-request", label: "Request Blood" },
      { href: "/take-action/volunteer", label: "Volunteer" },
      { href: "/take-action/awareness", label: "Awareness Events" },
    ],
  },
  { href: "/impact-stories", label: "Impact Stories" },
  { href: "/transparency", label: "Transparency" },
  { href: "/our-lion-partners", label: "Our Lion Partners" },
  { href: "/our-team", label: "Our Team" },
  { href: "/about-us", label: "About Us" },
];

export function Navbar() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <>
      <header className="bg-leoBlue text-white shadow-md z-50 fixed top-0 w-full">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Leo Club Logo" width={50} height={50} className="rounded-full" />
            <span className="text-2xl font-bold uppercase tracking-wide text-leoGold">Leo Club</span>
          </Link>

          <button className="md:hidden" onClick={() => setIsOpen(true)} aria-label="Open Menu">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 text-sm font-medium relative">
              {navLinks.map((link, index) => (
                <li key={index} className="relative">
                  {link.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => setDropdownOpen((prev) => !prev)}
                        className="flex items-center gap-1 text-white hover:text-leoGold transition"
                      >
                        {link.label}
                        <FaChevronDown className="w-3 h-3 mt-0.5" />
                      </button>

                      {dropdownOpen && (
                        <div
                          onMouseLeave={() => setDropdownOpen(false)}
                          className="absolute top-full left-0 mt-2 w-48 bg-white text-leoBlue rounded-md shadow-lg z-50"
                        >
                          {link.dropdown.map((sublink) => (
                            <Link
                              key={sublink.href}
                              href={sublink.href}
                              className="block px-4 py-2 text-sm text-leoBlue hover:bg-leoBlue/10"
                              onClick={() => setDropdownOpen(false)}
                            >
                              {sublink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-sm text-white hover:text-leoGold transition ${path === link.href ? "text-leoGold font-semibold" : ""
                        }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.aside
              className="fixed top-0 right-0 w-64 h-full bg-leoBlue text-white z-50 shadow-lg p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <button className="self-end mb-6" onClick={() => setIsOpen(false)} aria-label="Close Menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <nav className="flex flex-col gap-4 text-sm">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.dropdown ? (
                      <div className="border-b border-white/20">
                        <button
                          onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                          className="w-full text-left py-2 flex justify-between items-center text-white font-semibold hover:text-leoGold"
                        >
                          {link.label}
                          <FaChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${mobileDropdownOpen ? "rotate-180" : ""
                              }`}
                          />
                        </button>
                        {mobileDropdownOpen && (
                          <div className="pl-3 pb-2">
                            {link.dropdown.map((sublink) => (
                              <Link
                                key={sublink.href}
                                href={sublink.href}
                                className="block text-sm py-1 text-white hover:text-leoGold"
                                onClick={() => setIsOpen(false)}
                              >
                                {sublink.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block py-2 px-2 border-b border-white/20 text-white text-sm ${path === link.href ? "text-leoGold font-semibold" : "hover:text-leoGold"
                          }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              <div className="mt-6 pt-4 border-t border-white/20 flex gap-4 justify-center">
                <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                  <FaInstagram className="w-5 h-5 hover:text-leoGold transition" />
                </Link>
                <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                  <FaFacebook className="w-5 h-5 hover:text-leoGold transition" />
                </Link>
                <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                  <FaLinkedin className="w-5 h-5 hover:text-leoGold transition" />
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
