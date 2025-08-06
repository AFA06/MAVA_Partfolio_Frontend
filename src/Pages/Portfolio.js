import React from 'react';

const Portfolio = () => {
  return (
    <section className="py-24 px-6 text-center bg-white text-gray-900">
      <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
      <p className="text-lg max-w-3xl mx-auto mb-10">
        A showcase of our architectural and interior design works.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Replace placeholders with real projects or images */}
        {Array(6).fill(0).map((_, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-xl shadow">
            <div className="h-48 bg-gray-300 rounded mb-4" />
            <h3 className="font-semibold text-xl mb-2">Project {i + 1}</h3>
            <p className="text-gray-700 text-sm">Short description about the project.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
