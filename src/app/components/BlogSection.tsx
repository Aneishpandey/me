'use client';

const blogs = [
  {
    id: 1,
    imgSrc: '/assets/blog1.jpg',
    alt: 'Blog 1',
    author: 'John Doe',
    date: 'January 20, 2025',
    title: 'Blog Post Title 1',
    description: 'A brief introduction to the blog content. This is where the short description of the blog would go.',
  },
  {
    id: 2,
    imgSrc: '/assets/blog2.jpg',
    alt: 'Blog 2',
    author: 'Jane Smith',
    date: 'January 18, 2025',
    title: 'Blog Post Title 2',
    description: 'A brief introduction to the blog content. This is where the short description of the blog would go.',
  },
  {
    id: 3,
    imgSrc: '/assets/blog3.jpg',
    alt: 'Blog 3',
    author: 'Emily Clark',
    date: 'January 15, 2025',
    title: 'Blog Post Title 3',
    description: 'A brief introduction to the blog content. This is where the short description of the blog would go.',
  },
];

export default function BlogsSection() {
  return (
    <section className="section-center bg-white">
      {/* Section Title */}
      <div className="text-center mb-8">
        <a href="#" className="text-[#3ee7ad] text-sm font-semibold">OUR BLOGS</a>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
          Latest Blogs & Articles
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card bg-white rounded-lg shadow-md overflow-hidden">
            <div className="blog-image">
              <img src={blog.imgSrc} alt={blog.alt} className="w-full h-64 object-cover" />
            </div>
            <div className="blog-content p-4">
              <h4 className="text-sm text-gray-500">By {blog.author}</h4>
              <p className="text-sm text-gray-400">Published on {blog.date}</p>
              <h3 className="text-xl font-semibold text-gray-800 mt-2">{blog.title}</h3>
              <p className="text-gray-600 mt-2">{blog.description}</p>
              <div className="flex items-center text-[#3ee7ad] mt-4">
                <span>View Details</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 9.293a1 1 0 011.414 0L10 12.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More Articles Button */}
      <div className="text-center mt-8">
        <button className="bg-primary-500 text-[#3ee7ad] px-6 py-3 rounded-md text-lg">
          More Articles
        </button>
      </div>
    </section>
  );
} 