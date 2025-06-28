import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: '5 Reasons to Hire a Certified Civil Engineer',
    summary: 'Discover why hiring a certified civil engineer ensures safety, quality, and compliance for your projects.',
    image: '/blog1.jpg',
  },
  {
    id: 2,
    title: 'Top Home Cleaning Tips to Save Time',
    summary: 'Get your home sparkling clean with these quick and efficient cleaning hacks.',
    image: '/blog2.jpg',
  },
  {
    id: 3,
    title: 'How to Choose the Right Electrician',
    summary: 'Safety first! Learn how to pick a skilled and verified electrician for your home repairs.',
    image: '/blog3.jpg',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        UrbanX Blog
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{post.summary}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
