'use client';

import Image from "next/image";
import "../globals.css";

const heroSections = [
  {
    id: 1,
    title: "Welcome to MEDCARE",
    subtitle: "Taking care of your health is our top priority",
    description:
      "Being healthy is more than just not getting sick. It entails mental, physical, and social well-being. It's not just about treatment, it's about healing.",
    buttonText: "Book an Appointment",
    imageUrl: "/assets/doctor-image.webp",
    buttonLink: "/inquiryform",
  },
];

export default function HeroSection() {
  return (
    <section className="hero-container">
      {heroSections.map((section) => (
        <div key={section.id} className="hero-subcontainer">
          {/* Left Side (Text Content) */}
          <div className="hero-left">
            <h1 className="hero-title">{section.title}</h1>
            <h2 className="hero-subtitle">{section.subtitle}</h2>
            <p className="hero-description">{section.description}</p>
            <a href={section.buttonLink} className="hero-button">
              {section.buttonText}
            </a>
          </div>

          {/* Right Side (Image) */}
          <div className="hero-right">
            <Image
              src={section.imageUrl}
              alt="Doctor"
              className="hero-image"
              width={500}
              height={500}
            />
          </div>
        </div>
      ))}
    </section>
  );
}
