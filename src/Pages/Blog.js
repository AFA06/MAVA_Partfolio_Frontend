import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

function Blog() {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animate Hero Title
    animate(".hero-title", {
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 1200,
      easing: "easeOutExpo",
    });

    // Animate Blog Cards
    if (cardsRef.current.length > 0) {
      animate(cardsRef.current, {
        translateY: [50, 0],
        opacity: [0, 1],
        delay: stagger(200),
        duration: 1000,
        easing: "easeOutExpo",
      });
    }
  }, []);

  const blogPosts = [
    {
      title: "Welcome to Our Blog",
      description:
        "Stay updated with the latest news, updates, and insights from our platform.",
      image: "https://source.unsplash.com/600x400/?technology,innovation",
    },
    {
      title: "Learning Made Easy",
      description:
        "Discover how we make online education more effective and engaging.",
      image: "https://source.unsplash.com/600x400/?education,design",
    },
    {
      title: "Behind the Scenes",
      description:
        "A look at how we build, create, and innovate to bring you premium content.",
      image: "https://source.unsplash.com/600x400/?office,work",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 text-center">
        <h1 className="hero-title text-5xl font-bold mb-4">Our Blog</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Insights, stories, and updates from our team. Stay informed and
          inspired.
        </p>
      </section>

      {/* Blog Posts */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <button className="inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors">
                Read More
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Blog;
