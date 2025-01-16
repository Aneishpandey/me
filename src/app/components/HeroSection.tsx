
'use client';

import Image from "next/image";

const heroSections = [
  {
    id: 1,
    title: "Welcome to MEDCARE",
    subtitle: "Taking care of your health is our top priority",
    description:
      "Being healthy is more than just not getting sick. It entails mental, physical, and social well-being. It's not just about treatment, it's about healing.",
    buttonText: "Book an Appointment",
    imageUrl: "/assets/doctor-image.webp",
    buttonLink: "#book-appointment",
  },
];

export default function HeroSection() {
  return (
    <section className="bg-primary-500 min-h-screen flex items-center justify-center py-10">
      {heroSections.map((section) => (
        <div
          key={section.id}
          className="section-center flex items-center justify-between px-6 space-y-8 w-full"
        >
          {/* Text Section (Left Side) */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-lg text-primary-600">{section.title}</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-700">
              {section.subtitle}
            </h1>
            <p className="text-lg text-primary-600">{section.description}</p>
            <div className="mt-6">
              <a
                href={section.buttonLink}
                className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors"
              >
                {section.buttonText}
              </a>
            </div>
          </div>

          {/* Image Section (Right Side) */}
          <div className="hidden md:block w-1/2">
            <Image
              src={section.imageUrl}
              alt={section.title}
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      ))}
    </section>
  );
}