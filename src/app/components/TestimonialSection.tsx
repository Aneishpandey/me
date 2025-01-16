'use client';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    profileImage: "/assets/blog1.jpg",
    rating: "⭐⭐⭐⭐⭐",
    testimonial:
      "Excellent service and highly professional team. I feel well taken care of every time I visit.",
  },
  {
    id: 2,
    name: "Jane Smith",
    profileImage: "/assets/blog2.jpg",
    rating: "⭐⭐⭐⭐⭐",
    testimonial:
      "Great experience! The staff is very friendly and always ready to assist. Highly recommended!",
  },
  {
    id: 3,
    name: "Emily Clark",
    profileImage: "/assets/blog3.jpg",
    rating: "⭐⭐⭐⭐⭐",
    testimonial:
      "The best healthcare experience I've ever had. They truly care about your well-being.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-center bg-white-500">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          CLIENT TESTIMONIALS
        </h2>
      </div>

      {/* Testimonial Cards */}
      <div className="section grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-6 bg-white rounded-lg shadow-md text-center h-[300px]"
          >
            {/* Profile Section */}
            <div className="mb-4">
              <img
                src={testimonial.profileImage}
                className="testimonial-profile-img"
                alt={`Profile of ${testimonial.name}`}
              />
            </div>
            <h4 className="text-gray-800 font-semibold mb-2">- {testimonial.name}</h4>
            <div className="text-yellow-400 text-xl mb-2">{testimonial.rating}</div>
            <p className="text-gray-600 italic">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>

      {/* SEE ALL GOOGLE REVIEWS Button */}
      <div className="text-center mt-8">
        <button className="bg-[#f9f9f9] text-[#3ee7ad] px-6 py-3 rounded-md text-lg">
          SEE ALL GOOGLE REVIEWS
        </button>
      </div>
    </section>
  );
}
