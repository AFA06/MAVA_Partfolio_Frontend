import React from "react";
import { useTranslation } from "react-i18next";

const courses = [
  {
    key: "course1",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  },
  {
    key: "course2",
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80",
  },
  {
    key: "course3",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
];

const Videos = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#f8f7f3]">
      {/* Hero Section */}
      <div className="relative bg-neutral-900 text-white py-20 px-4 sm:py-24 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
          {t("videosPage.heroTitle")}
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
          {t("videosPage.heroSubtitle")}
        </p>
        <a
          href="https://yourcompanywebsite.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 sm:px-10 py-3 sm:py-4 bg-white text-neutral-900 text-base sm:text-lg font-medium rounded-full shadow hover:bg-gray-200 transition"
        >
          {t("videosPage.visitCompany")}
        </a>
      </div>

      {/* Courses Section */}
      <div className="max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-neutral-900 mb-8 sm:mb-12">
          {t("videosPage.coursesTitle")}
        </h2>
        <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer flex flex-col"
            >
              <img
                src={course.image}
                alt={t(`videosPage.${course.key}.title`)}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-neutral-900">
                  {t(`videosPage.${course.key}.title`)}
                </h3>
                <p className="text-neutral-700 mb-4 flex-1 text-sm sm:text-base">
                  {t(`videosPage.${course.key}.description`)}
                </p>
                <a
                  href="https://yourcompanywebsite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 font-medium hover:underline text-sm sm:text-base mt-auto"
                >
                  {t("videosPage.preview")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-neutral-100 py-12 sm:py-16 px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-8 sm:mb-12">
          {t("videosPage.featuresTitle")}
        </h2>
        <div className="max-w-4xl mx-auto grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex flex-col items-center text-center px-4">
              <p className="text-4xl sm:text-5xl mb-2">{t(`videosPage.feature${num}.icon`)}</p>
              <h3 className="font-semibold text-lg sm:text-xl mb-1">
                {t(`videosPage.feature${num}.title`)}
              </h3>
              <p className="text-neutral-700 text-sm sm:text-base">{t(`videosPage.feature${num}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
