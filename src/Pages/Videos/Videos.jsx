// src/Pages/Videos.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { api } from '../../utils/api';

const courseDetails = {
  '3d-design': { instructor: 'John Smith', videos: 18, highlights: ['Introduction to 3D modeling tools', 'Texturing and lighting techniques', 'Creating animations in Blender'] },
  figma: { instructor: 'Anna Designova', videos: 12, highlights: ['Figma interface walkthrough', 'Building responsive UI kits', 'Prototyping interactions'] },
  direction: { instructor: 'Mark Daniels', videos: 10, highlights: ['Principles of visual storytelling', 'Scene composition', 'Camera angles and transitions'] },
  'web-dev': { instructor: 'Emily Zhao', videos: 20, highlights: ['React and Next.js fundamentals', 'Backend with Node.js & MongoDB', 'Deploying on Vercel'] },
  animation: { instructor: 'Carlos Motion', videos: 15, highlights: ['Keyframe animation basics', 'After Effects workflow', 'Exporting for social media'] },
  branding: { instructor: 'Sara Identi', videos: 9, highlights: ['Brand strategy foundations', 'Logo creation process', 'Building style guides'] },
};

const mockUser = {
  email: 'user@example.com',
  purchasedCourses: ['figma', 'web-dev'],
};

const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')        
    .replace(/[^\w-]+/g, '')     
    .replace(/-{2,}/g, '-');     

const Videos = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      api.get('/admin/video-categories')
      .then((res) => {
        let cats = res.data.categories || res.data;
        cats = cats.map(cat => ({
          ...cat,
          slug: slugify(cat.title),
          name: cat.title,
          image: cat.thumbnailUrl,
        }));
        setCategories(cats);
      })
      .catch((err) => console.error('Failed to fetch categories:', err))
      .finally(() => setLoading(false));
  }, []);

  const handleBuy = (cat) => {
    const message = encodeURIComponent(`Hello! I want to purchase the "${cat.name}" course.`);
    window.open(`https://t.me/fkhv_1?text=${message}`, '_blank');
  };

  const handlePreview = (cat) => {
    setSelectedCourse(cat);
    setModalOpen(true);
  };

  const handleNavigate = (cat) => {
    const hasAccess = mockUser.purchasedCourses.includes(cat.slug);
    if (hasAccess) navigate(`/videos/${cat.slug}`);
    else alert('Please purchase the course to access full content.');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white text-xl px-4">
        Loading categories...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white py-6 px-4 sm:px-6 lg:px-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 gradient-text animate-gradient">
          🎥 Video Course Categories
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto px-2 sm:px-0">
          Explore professional courses across design and development. Full mobile support & interactive UI.
        </p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {categories.map((cat) => {
          const purchased = mockUser.purchasedCourses.includes(cat.slug);
          return (
            <div
              key={cat.slug}
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative h-44 sm:h-52 w-full overflow-hidden">
                <img
                  src={cat.image}
                  alt={`${cat.name} Thumbnail`}
                  className="h-full w-full object-cover brightness-90 group-hover:brightness-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 group-hover:bg-opacity-40 transition-all duration-500" />
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 flex flex-col justify-between h-[230px]">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-1 group-hover:text-yellow-400 transition-colors duration-300">{cat.name}</h2>
                  <p className="text-gray-400 text-xs sm:text-sm mb-1 line-clamp-2">{cat.description}</p>
                  <p className="text-green-400 font-semibold text-sm sm:text-base">{cat.price.toLocaleString()} UZS</p>
                </div>

                <div className="mt-3 sm:mt-4 flex gap-2 flex-wrap">
                  <button
                    onClick={() => handlePreview(cat)}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-3 sm:py-2 sm:px-4 rounded-2xl text-xs sm:text-sm w-full sm:w-auto transition-all duration-300 shadow-md hover:shadow-xl"
                  >
                    Preview
                  </button>

                  {purchased ? (
                    <button
                      onClick={() => handleNavigate(cat)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 sm:py-2 sm:px-4 rounded-2xl text-xs sm:text-sm w-full sm:w-auto transition-all duration-300 shadow-md hover:shadow-xl"
                    >
                      Start Learning
                    </button>
                  ) : (
                    <button
                      onClick={() => handleBuy(cat)}
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-3 sm:py-2 sm:px-4 rounded-2xl text-xs sm:text-sm w-full sm:w-auto transition-all duration-300 shadow-md hover:shadow-xl"
                    >
                      Buy Course
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Course Preview"
        className="bg-gray-900 rounded-2xl mx-4 sm:mx-auto max-w-md sm:max-w-2xl mt-16 sm:mt-24 p-4 sm:p-6 text-white outline-none overflow-y-auto max-h-[90vh] shadow-2xl"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-2 sm:px-0"
      >
        {selectedCourse && (
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 gradient-text animate-gradient">{selectedCourse.name}</h2>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">{selectedCourse.description}</p>

            <div className="mb-4 text-sm sm:text-base">
              <p><span className="font-semibold">Instructor:</span> {courseDetails[selectedCourse.slug]?.instructor || 'TBA'}</p>
              <p><span className="font-semibold">Number of Videos:</span> {courseDetails[selectedCourse.slug]?.videos || 'TBA'}</p>
            </div>

            <div>
              <p className="font-semibold mb-2 text-sm sm:text-base">What You'll Learn:</p>
              <ul className="list-disc list-inside text-xs sm:text-sm space-y-1 text-gray-300">
                {(courseDetails[selectedCourse.slug]?.highlights || []).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 sm:mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-3 sm:py-2 sm:px-4 rounded-2xl w-full sm:w-auto transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Close
            </button>
          </div>
        )}
      </Modal>

      {/* Gradient Animation */}
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .gradient-text {
            background: linear-gradient(90deg, #facc15, #ec4899, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 200% 200%;
          }
          .animate-gradient {
            animation: gradient 5s ease infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Videos;
