import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-600">
          We are passionate about creating innovative and sustainable
          architectural solutions that inspire and elevate everyday life.
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
          alt="Architecture"
          className="rounded-2xl shadow-lg w-full object-cover h-[400px]"
        />

        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our team of architects, designers, and innovators work together to
            deliver cutting-edge projects that merge functionality with beauty.
            From concept to completion, we ensure that each project is
            thoughtfully designed and executed with precision.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We aim to push the boundaries of design by blending creativity,
            technology, and sustainability. Every project is an opportunity to
            shape spaces that bring comfort, efficiency, and long-term value to
            communities.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Innovation
            </h3>
            <p className="text-gray-600">
              We embrace modern technologies and creative thinking to design
              spaces that inspire.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Sustainability
            </h3>
            <p className="text-gray-600">
              Eco-friendly practices are at the heart of every design decision
              we make.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Excellence
            </h3>
            <p className="text-gray-600">
              We are committed to delivering high-quality projects with
              precision and professionalism.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
