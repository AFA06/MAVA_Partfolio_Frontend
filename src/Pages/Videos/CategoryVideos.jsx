import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Lock, PlayCircle, Menu } from "lucide-react";
import { hasPurchased } from "../../utils/purchase"; // Ensure correct path

const CategoryVideos = () => {
  const { category } = useParams();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [userHasAccess, setUserHasAccess] = useState(false);
  const [showSidebar, setShowSidebar] = useState(
    localStorage.getItem("sidebarVisible") === "true"
  );
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`/api/videos?category=${category}`);
        const vids = res.data.videos || [];
        setVideos(vids);
        const previewOrFirst = vids.find((v) => v.isPreview) || vids[0];
        setSelectedVideo(previewOrFirst);
      } catch (err) {
        console.error("Failed to load videos", err);
      }
    };

    fetchVideos();

    const access = hasPurchased(category);
    setUserHasAccess(access);
  }, [category]);

  const handleVideoClick = (video) => {
    if (userHasAccess || video.isPreview) {
      setSelectedVideo(video);
    } else {
      showToast("🔒 Please purchase to unlock this video.");
    }
  };

  const toggleSidebar = () => {
    const newState = !showSidebar;
    setShowSidebar(newState);
    localStorage.setItem("sidebarVisible", newState);
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const formatPrice = (price) =>
    price <= 0 ? "Free" : `${price.toLocaleString()} UZS`;

  return (
    <div className="relative min-h-screen bg-gray-950 text-white flex">
      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 h-full z-30 bg-gray-900 border-r border-gray-700 w-72 p-6 transform transition-transform duration-300 ease-in-out ${
          showSidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <h2 className="text-xl font-semibold mb-4">🎬 Videos</h2>
        <div className="space-y-3 overflow-y-auto max-h-[80vh] pr-2">
          {videos.map((vid, idx) => (
            <div
              key={vid._id}
              onClick={() => handleVideoClick(vid)}
              className={`flex items-start justify-between p-3 rounded-lg cursor-pointer hover:bg-gray-800 transition ${
                selectedVideo?._id === vid._id ? "bg-gray-800" : ""
              }`}
            >
              <div className="flex items-start gap-2">
                {userHasAccess || vid.isPreview ? (
                  <PlayCircle className="text-green-400 w-5 h-5 mt-1" />
                ) : (
                  <Lock className="text-red-400 w-5 h-5 mt-1" />
                )}
                <div>
                  <p className="font-medium text-sm">{idx + 1}. {vid.title}</p>
                  <p className="text-xs text-gray-400">{vid.instructor || "Unknown"}</p>
                </div>
              </div>
              <span className="text-xs text-gray-400">{formatPrice(vid.price)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 lg:ml-0 ml-0 w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold capitalize">
            {category.replace(/-/g, " ")}
          </h1>
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-md hover:bg-gray-800 border border-gray-700"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Video Player */}
        <div className="bg-black aspect-video rounded-xl overflow-hidden flex justify-center items-center">
          {selectedVideo ? (
            <video
              key={selectedVideo._id}
              src={selectedVideo.videoUrl}
              className="w-full h-full"
              controls
            />
          ) : (
            <div className="text-center text-gray-400 pt-20">
              No video selected
            </div>
          )}
        </div>

        {/* Buy Box */}
        {!userHasAccess && (
          <div className="bg-gray-800 p-6 rounded-xl text-center mt-6 space-y-4">
            <p className="text-lg font-semibold">
              🔒 This course requires purchase to unlock all videos.
            </p>
            <a
              href="https://t.me/fkhv_1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 px-6 py-3 rounded-lg text-white font-semibold shadow-lg transition duration-300"
            >
              Buy Full Course via Telegram
            </a>
          </div>
        )}

        {/* Suggested Courses */}
        <div>
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            ✨ Suggested Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Figma UI/UX",
                image: "/images/figma.jpg",
                link: "/videos/figma",
              },
              {
                name: "Web Development",
                image: "/images/web-dev.jpg",
                link: "/videos/web-dev",
              },
              {
                name: "Animation Mastery",
                image: "/images/animation.jpg",
                link: "/videos/animation",
              },
            ].map((course) => (
              <a
                href={course.link}
                key={course.name}
                className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-transform"
              >
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{course.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded shadow-lg z-50 animate-bounce">
          {toast}
        </div>
      )}
    </div>
  );
};

export default CategoryVideos;
