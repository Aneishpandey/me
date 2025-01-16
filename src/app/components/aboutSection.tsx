'use client';

import Image from "next/image";

const aboutSections = [
  {
    id: 1,
    title: "About us ",
    subtitle: "Welcome to Medcare Central Hospital",
    description:
      "Being healthy is more than just not getting sick. It entails mental, physical, and social well-being. It's not just about treatment, it's about healing.",
    buttonText: "Book an Appointment",
    imageUrl: "/assets/doctor-image.webp",
    buttonLink: "#book-appointment",
    features: [
      "15+ years of experience",
      "A multispeciality hospital",
      "24/7 medical service",
      "A team of professionals",
    ],
  },
];

export default function AboutSection() {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
      {aboutSections.map((section) => (
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

            {/* Features Section */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {section.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-4 h-4 flex items-center justify-center rounded-full border-2 border-green-400 text-green-500">
                    ✓
                  </div>
                  <span className="text-primary-600">{feature}</span>
                </div>
              ))}
            </div>

            {/* Button */}
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
          <div className="hidden md:block w-full bg-black-500">
            <Image
              src={section.imageUrl}
              alt={section.title}
              width={200}
              height={800}
              
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
