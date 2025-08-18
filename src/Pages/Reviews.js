// frontend/src/Pages/Reviews.js

import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Olivia Martinez",
    role: "Interior Designer",
    review:
      "Working with this architectural team was transformative. Their precision, creativity, and understanding of space elevated our project beyond expectations.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Ethan Johnson",
    role: "Project Manager",
    review:
      "Every detail was carefully crafted. They balanced aesthetics with functionality in a way that truly impressed us.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophia Lee",
    role: "Homeowner",
    review:
      "They didn’t just design a house, they created a sanctuary. The attention to natural light and flow is simply unmatched.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "David Kim",
    role: "Developer",
    review:
      "Collaborating with them was seamless. They delivered on time, exceeded design expectations, and kept communication transparent.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const Reviews = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-50 text-gray-900 relative overflow-hidden">
      {/* Subtle Aura Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-1/4 w-72 h-72 bg-purple-200 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-200 rounded-full blur-[140px] opacity-40"></div>
      </div>

      {/* Header Section */}
      <section className="py-20 text-center max-w-3xl mx-auto px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Client Experiences
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Stories from those who trusted us to shape their spaces — where
          architecture meets soul, and design becomes timeless.
        </motion.p>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-white/70 backdrop-blur-xl shadow-xl hover:shadow-2xl transition duration-500 rounded-3xl border border-gray-200 p-8 flex flex-col h-full">
              {/* Reviewer */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gray-200 shadow-sm"
                />
                <div>
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed italic flex-grow">
                “{review.review}”
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Call-to-Action */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center relative overflow-hidden">
        {/* Glow aura behind */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-1/3 w-96 h-96 bg-purple-500 rounded-full blur-[180px] opacity-30"></div>
          <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-blue-500 rounded-full blur-[180px] opacity-30"></div>
        </div>

        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Ready to Begin Your Journey?
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-gray-300 mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Join countless satisfied clients who trusted us to transform their
          visions into reality. Together, let’s craft something extraordinary.
        </motion.p>
        <motion.a
          href="/contact"
          className="inline-block px-10 py-4 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all"
          whileHover={{ scale: 1.05 }}
        >
          Contact Us
        </motion.a>
      </section>
    </div>
  );
};

export default Reviews;
