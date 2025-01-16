'use client';

const services = [
  {
    id: 1,
    title: 'Cardiology',
    description: 'Specialized care for heart and vascular conditions.',
    logo: '/assets/cardiology.png',
  },
  {
    id: 2,
    title: 'Neurology',
    description: 'Expert treatments for brain and nervous system disorders.',
    logo: '/assets/neurology.jpg',
  },
  {
    id: 3,
    title: 'Urology',
    description: 'Advanced solutions for urinary tract conditions.',
    logo: '/assets/urology.png',
  },
  {
    id: 4,
    title: 'Pulmonary',
    description: 'Respiratory treatments for optimal lung health.',
    logo: '/assets/pulmonary.jpeg',
  },
  {
    id: 5,
    title: 'Radiology',
    description: 'Imaging services for accurate diagnosis and care.',
    logo: '/assets/radiology.png',
  },
  {
    id: 6,
    title: 'Hypnotherapy',
    description: 'Therapy sessions for mental and emotional healing.',
    logo: '/assets/hypotherapy.jpeg',
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-green-50 section">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text uppercase">
          Medical Services
        </h3>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-primary-800 mt-2">
          Find Out More About Our Services
        </h2>
      </div>

      {/* Service Cards */}
      <div className="section-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            {/* Logo Wrapper */}
            <div className="logo-wrapper">
              <img src={service.logo} alt={service.title} className="logo-img" />
            </div>
            {/* Title */}
            <h3 className="service-title">{service.title}</h3>
            {/* Description */}
            <p className="service-description">{service.description}</p>
            {/* Button */}
            <button className="service-btn">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
} 

