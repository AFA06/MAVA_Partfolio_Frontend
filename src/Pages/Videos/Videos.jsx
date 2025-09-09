import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { api } from '../../utils/api';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const paperDataUrl = useMemo(() => {
    const canvas = document.createElement('canvas');
    const s = 120;
    canvas.width = s;
    canvas.height = s;
    const ctx = canvas.getContext('2d');
    const imgData = ctx.createImageData(s, s);
    for (let i = 0; i < imgData.data.length; i += 4) {
      const v = 245 + Math.floor(Math.random() * 10);
      imgData.data[i] = v;
      imgData.data[i + 1] = v;
      imgData.data[i + 2] = v;
      imgData.data[i + 3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
    return canvas.toDataURL();
  }, []);

  useEffect(() => {
    api
      .get('/admin/video-categories')
      .then((res) => {
        let cats = res.data.categories || res.data;
        cats = cats.map((cat) => ({
          ...cat,
          slug: slugify(cat.title),
          name: cat.title,
          image: cat.thumbnailUrl,
        }));
        setCategories(cats);
      })
      .catch((err) => console.error('Error loading categories:', err))
      .finally(() => setLoading(false));
  }, []);

  const handleBuy = (cat) => {
    const message = encodeURIComponent(
      `Здравствуйте! Я хочу приобрести курс "${cat.name}".`
    );
    window.open(`https://t.me/fkhv_1?text=${message}`, '_blank');
  };

  const handlePreview = (cat) => {
    setSelectedCourse(cat);
    setModalOpen(true);
  };

  const handleNavigate = (cat) => {
    const hasAccess = mockUser.purchasedCourses.includes(cat.slug);
    if (hasAccess) navigate(`/videos/${cat.slug}`);
    else alert(t('videosPage.buyCourse'));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-neutral-800 text-xl px-4 bg-[#f8f7f3]">
        {t('videosPage.loading')}
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-[#f8f7f3] text-[#232323] antialiased">
      {/* Sketch filters */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="wobble" filterUnits="objectBoundingBox">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="1"
              seed="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="0.6"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <pattern
            id="pencilStroke"
            width="300"
            height="6"
            patternUnits="userSpaceOnUse"
          >
            <rect width="300" height="6" fill="transparent" />
            <path
              d="M2 3 Q 60 0 120 3 T 298 3"
              stroke="#1f2937"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </pattern>
        </defs>
      </svg>

      {/* Paper grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `url(${paperDataUrl})`,
          mixBlendMode: 'multiply',
        }}
      />

      {/* Hero */}
      <header className="relative px-6 sm:px-10 pt-24 pb-16 text-center">
        <h1
          className="text-[clamp(2rem,5vw,3.5rem)] font-serif font-bold text-neutral-900 tracking-tight"
          style={{ filter: 'url(#wobble)' }}
        >
          {t('videosPage.heroTitle')}
        </h1>
        <div className="mt-3 h-[6px] w-48 mx-auto">
          <svg
            width="100%"
            height="6"
            viewBox="0 0 300 6"
            preserveAspectRatio="none"
          >
            <rect width="300" height="6" fill="url(#pencilStroke)" />
          </svg>
        </div>
        <p className="mt-6 max-w-2xl mx-auto text-[17px] leading-relaxed text-neutral-700">
          {t('videosPage.heroSubtitle')}
        </p>
      </header>

      {/* Courses */}
      <section className="px-6 sm:px-10 pb-24">
        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat) => {
            const purchased = mockUser.purchasedCourses.includes(cat.slug);
            return (
              <div
                key={cat.slug}
                className="relative rounded-[22px] border border-neutral-300 bg-white/80 backdrop-blur-[1px] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-2xl transition cursor-pointer flex flex-col"
              >
                <div className="h-48 w-full mb-4 overflow-hidden rounded-xl border border-neutral-200">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h2
                  className="text-2xl font-serif font-semibold text-neutral-900 mb-1"
                  style={{ filter: 'url(#wobble)' }}
                >
                  {cat.name}
                </h2>
                <div className="h-[6px] w-32 mb-3">
                  <svg
                    width="100%"
                    height="6"
                    viewBox="0 0 300 6"
                    preserveAspectRatio="none"
                  >
                    <rect width="300" height="6" fill="url(#pencilStroke)" />
                  </svg>
                </div>
                <p className="text-sm text-neutral-700 line-clamp-2 mb-2">
                  {cat.description}
                </p>
                <p className="text-[15px] font-medium text-green-700">
                  {cat.price?.toLocaleString()} UZS
                </p>

                <div className="mt-auto pt-4 flex gap-2 flex-wrap">
                  <button
                    onClick={() => handlePreview(cat)}
                    className="px-5 py-2 bg-neutral-900 text-white text-sm font-semibold rounded-full hover:bg-neutral-700 transition"
                  >
                    {t('videosPage.preview')}
                  </button>
                  {purchased ? (
                    <button
                      onClick={() => handleNavigate(cat)}
                      className="px-5 py-2 bg-green-700 text-white text-sm font-semibold rounded-full hover:bg-green-600 transition"
                    >
                      {t('videosPage.startLearning')}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleBuy(cat)}
                      className="px-5 py-2 bg-yellow-600 text-white text-sm font-semibold rounded-full hover:bg-yellow-500 transition"
                    >
                      {t('videosPage.buyCourse')}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel={t('videosPage.preview')}
        className="bg-white rounded-[22px] mx-4 sm:mx-auto max-w-md sm:max-w-2xl mt-16 sm:mt-24 p-6 text-neutral-900 outline-none overflow-y-auto max-h-[90vh] shadow-xl border border-neutral-200"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-2 sm:px-0"
      >
        {selectedCourse && (
          <div>
            <h2
              className="text-2xl sm:text-3xl font-serif font-bold mb-2"
              style={{ filter: 'url(#wobble)' }}
            >
              {selectedCourse.name}
            </h2>
            <div className="h-[6px] w-32 mb-3">
              <svg
                width="100%"
                height="6"
                viewBox="0 0 300 6"
                preserveAspectRatio="none"
              >
                <rect width="300" height="6" fill="url(#pencilStroke)" />
              </svg>
            </div>
            <p className="text-neutral-700 mb-4 text-sm sm:text-base">
              {selectedCourse.description}
            </p>

            <div className="mb-4 text-sm sm:text-base space-y-1">
              <p>
                <span className="font-semibold">
                  {t('videosPage.instructor')}:
                </span>{' '}
                {t(`courses.${selectedCourse.slug}.instructor`)}
              </p>
              <p>
                <span className="font-semibold">
                  {t('videosPage.videosCount')}:
                </span>{' '}
                {t(`courses.${selectedCourse.slug}.videos`)}
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2 text-sm sm:text-base">
                {t('videosPage.youWillLearn')}
              </p>
              <ul className="list-disc list-inside text-xs sm:text-sm space-y-1 text-neutral-700">
                {(
                  t(`courses.${selectedCourse.slug}.highlights`, {
                    returnObjects: true,
                  }) || []
                ).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setModalOpen(false)}
              className="mt-6 px-5 py-2 bg-red-600 text-white text-sm font-semibold rounded-full hover:bg-red-500 transition"
            >
              {t('videosPage.close')}
            </button>
          </div>
        )}
      </Modal>

      {/* Outro section */}
      <section className="px-6 sm:px-10 py-28 text-center bg-[#f3f2ef] border-t border-neutral-300">
        <h2
          className="text-[clamp(1.75rem,4vw,2.5rem)] font-serif font-bold text-neutral-900 mb-6"
          style={{ filter: 'url(#wobble)' }}
        >
          {t('videosPage.outroTitle')}
        </h2>
        <p className="max-w-2xl mx-auto text-[16px] leading-relaxed text-neutral-700 mb-8">
          {t('videosPage.outroText')}
        </p>
      </section>
    </div>
  );
};

export default Videos;
