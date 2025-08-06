import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { api } from '../../utils/api';

// courseDetails stays same, keyed by slug

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
    .replace(/\s+/g, '-')        // Replace spaces with -
    .replace(/[^\w-]+/g, '')     // Remove all non-word chars
    .replace(/-{2,}/g, '-');     // Replace multiple - with single -
const Videos = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      api.get('/admin/video-categories')
      .then((res) => {
        // res.data.categories expected
        let cats = res.data.categories || res.data;
        // Add slug for routing etc
        cats = cats.map(cat => ({
          ...cat,
          slug: slugify(cat.title),
          name: cat.title,         // keep name for UI
          image: cat.thumbnailUrl, // for image src
        }));
        setCategories(cats);
      })
      .catch((err) => {
        console.error('Failed to fetch categories:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleBuy = (cat) => {
    const message = encodeURIComponent(`Hello! I want to purchase the "${cat.name}" course.`);
    const telegramLink = `https://t.me/fkhv_1?text=${message}`;
    window.open(telegramLink, '_blank');
  };

  const handlePreview = (cat) => {
    setSelectedCourse(cat);
    setModalOpen(true);
  };

  const handleNavigate = (cat) => {
    const hasAccess = mockUser.purchasedCourses.includes(cat.slug);
    if (hasAccess) {
      navigate(`/videos/${cat.slug}`);
    } else {
      alert('Please purchase the course to access full content.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white text-xl">
        Loading categories...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white py-10 px-4 sm:px-8 lg:px-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">🎥 Video Course Categories</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Browse our expert-created content across various design and development fields.
        </p>
      </div>

      {/* Scrollable Course Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-y-auto"
        style={{ maxHeight: 'calc(100vh - 280px)', paddingRight: '4px' }}
      >
        {categories.map((cat) => {
          const purchased = mockUser.purchasedCourses.includes(cat.slug);

          return (
            <div
              key={cat.slug}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-md group"
            >
              <div className="relative h-48 w-full overflow-hidden cursor-pointer">
                <img
                  src={cat.image}
                  alt={`${cat.name} Thumbnail`}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all" />
              </div>

              <div className="p-5 flex flex-col justify-between h-[200px]">
                <div>
                  <h2 className="text-2xl font-semibold mb-1">{cat.name}</h2>
                  <p className="text-gray-400 text-sm mb-2">{cat.description}</p>
                  <p className="text-green-400 font-semibold">{cat.price.toLocaleString()} UZS</p>
                </div>

                <div className="mt-4 flex gap-2 flex-wrap">
                  <button
                    onClick={() => handlePreview(cat)}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-xl transition"
                  >
                    Preview
                  </button>

                  {purchased ? (
                    <button
                      onClick={() => handleNavigate(cat)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition"
                    >
                      Start Learning
                    </button>
                  ) : (
                    <button
                      onClick={() => handleBuy(cat)}
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl transition"
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
        className="bg-gray-900 rounded-xl max-w-2xl mx-auto mt-24 p-6 text-white outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      >
        {selectedCourse && (
          <div>
            <h2 className="text-3xl font-bold mb-2">{selectedCourse.name}</h2>
            <p className="text-gray-400 mb-4">{selectedCourse.description}</p>

            <div className="mb-4">
              <p>
                <span className="font-semibold">Instructor:</span>{' '}
                {courseDetails[selectedCourse.slug]?.instructor || 'TBA'}
              </p>
              <p>
                <span className="font-semibold">Number of Videos:</span>{' '}
                {courseDetails[selectedCourse.slug]?.videos || 'TBA'}
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">What You'll Learn:</p>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-300">
                {(courseDetails[selectedCourse.slug]?.highlights || []).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setModalOpen(false)}
              className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-xl w-full"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Videos;
