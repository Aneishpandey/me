'use client';

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuLinks = [
    { href: "/", label: "Home" },
    { href: "/aboutus", label: "About us" },
    { href: "/doctormeet", label: "Meet the Doctor" },
    { href: "/FAQs", label: "FAQs" },
    { href: "#support", label: "Support" },
  ];

  const handleLinkClick = () => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  return (
    <nav className="  bg-white py-4 border-b border-gray-300 shadow-lg z-10">
      <div className="section-center flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src="/assets/Medicorp_Logo.webp" alt="MEDICORP Logo" className="h-10 ml-4" />
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden lg:flex space-x-6">
          {menuLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-gray-500">
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden lg:block">
          <Link href="#contact" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
            Contact
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={toggleMobileMenu} 
            className="text-black focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white text-black py-4 space-y-4 px-6 border-t border-gray-200 transition-all ease-in-out duration-300">
          {menuLinks.map(({ href, label }) => (
            <Link key={href} href={href} onClick={handleLinkClick} className="block py-2 hover:text-gray-500">
              {label}
            </Link>
          ))}
          {/* Mobile Contact Button (Centered and Not Stretched) */}
          <Link href="#contact" onClick={handleLinkClick} className="block py-1 px-5 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-center text-sm mx-auto w-1/3">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
