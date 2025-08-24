import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

function Blog() {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animate Hero Title
    animate(".hero-title", {
      translateY: [-40, 0],
      opacity: [0, 1],
      duration: 1200,
      easing: "easeOutExpo",
    });

    animate(".hero-subtitle", {
      translateY: [40, 0],
      opacity: [0, 1],
      duration: 1200,
      delay: 400,
      easing: "easeOutExpo",
    });

    // Animate Blog Cards
    if (cardsRef.current.length > 0) {
      animate(cardsRef.current, {
        translateY: [60, 0],
        opacity: [0, 1],
        delay: stagger(250, { start: 600 }),
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
      image: "https://source.unsplash.com/800x600/?technology,futuristic",
    },
    {
      title: "Learning Made Easy",
      description:
        "Discover how we make online education more effective and engaging.",
      image: "https://source.unsplash.com/800x600/?education,modern",
    },
    {
      title: "Behind the Scenes",
      description:
        "A look at how we build, create, and innovate to bring you premium content.",
      image: "https://source.unsplash.com/800x600/?workspace,creative",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      {/* Hero Section */}
      <section className="relative text-center py-28 px-6">
        <h1 className="hero-title text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
          Our Blog
        </h1>
        <p className="hero-subtitle text-lg max-w-2xl mx-auto mt-6 text-gray-300">
          Insights, stories, and updates from our team. Stay informed and
          inspired.
        </p>
      </section>

      {/* Blog Posts */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-10">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="relative rounded-3xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-xl border border-white/10 transform hover:scale-105 hover:shadow-purple-500/40 transition-all duration-500 cursor-pointer"
          >
            <div className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3 text-white drop-shadow">
                {post.title}
              </h2>
              <p className="text-gray-300 mb-5">{post.description}</p>
              <button className="inline-block px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300">
                Read More →
              </button>
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Blog;
