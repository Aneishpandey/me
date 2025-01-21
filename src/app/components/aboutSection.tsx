// components/AboutSection.tsx
'use client';
import Image from "next/image";

const aboutSections = [
  {
    id: 1,
    title: "About us ",
    subtitle: "Welcome to Medcare Central Hospital",
    description: "Being healthy is more than just not getting sick. It entails mental, physical, and social well-being. It's not just about treatment, it's about healing.",
    buttonText: "Book an Appointment",
    imageUrl: "/assets/heroimage.jpeg",
    buttonLink: "/inquiryform",
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
    <section className="hero-container bg-[#f5fcfb]">
      {aboutSections.map((section) => (
        <div key={section.id} className="hero-subcontainer">
          {/* Text Section */}
          <div className="hero-left">
            <h2 className="about-title">{section.title}</h2>
            <h1 className="about-subtitle">{section.subtitle}</h1>
            <p className="about-description">{section.description}</p>

            {/* Features Grid */}
            <div className="features-grid">
              {section.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-checkmark">✓</div>
                  <span className="feature-text">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="about-button">
              <a href={section.buttonLink} className="hero-button">
                {section.buttonText}
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="hero-right w-full">
            <Image
              src={section.imageUrl}
              alt={section.title}
              width={1000}
              height={1000}
              className="hero-image"
            />
          </div>
        </div>
      ))}
    </section>
  );
}