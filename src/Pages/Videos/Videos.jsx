// src/Pages/Videos.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { api } from '../../utils/api';

const courseDetails = {
  '3d-design': { instructor: 'Джон Смит', videos: 18, highlights: ['Введение в инструменты 3D-моделирования', 'Текстурирование и освещение', 'Создание анимации в Blender'] },
  figma: { instructor: 'Анна Дизайнова', videos: 12, highlights: ['Обзор интерфейса Figma', 'Создание адаптивных UI-комплектов', 'Прототипирование взаимодействий'] },
  direction: { instructor: 'Марк Дэниэлс', videos: 10, highlights: ['Принципы визуального сторителлинга', 'Композиция сцены', 'Ракурсы камеры и переходы'] },
  'web-dev': { instructor: 'Эмили Чжао', videos: 20, highlights: ['Основы React и Next.js', 'Бэкенд на Node.js и MongoDB', 'Деплой на Vercel'] },
  animation: { instructor: 'Карлос Моушн', videos: 15, highlights: ['Основы покадровой анимации', 'Рабочий процесс в After Effects', 'Экспорт для соцсетей'] },
  branding: { instructor: 'Сара Айденти', videos: 9, highlights: ['Основы бренд-стратегии', 'Процесс создания логотипа', 'Разработка гайдбука'] },
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
      .catch((err) => console.error('Ошибка при загрузке категорий:', err))
      .finally(() => setLoading(false));
  }, []);

  const handleBuy = (cat) => {
    const message = encodeURIComponent(`Здравствуйте! Я хочу приобрести курс "${cat.name}".`);
    window.open(`https://t.me/fkhv_1?text=${message}`, '_blank');
  };

  const handlePreview = (cat) => {
    setSelectedCourse(cat);
    setModalOpen(true);
  };

  const handleNavigate = (cat) => {
    const hasAccess = mockUser.purchasedCourses.includes(cat.slug);
    if (hasAccess) navigate(`/videos/${cat.slug}`);
    else alert('Пожалуйста, приобретите курс для доступа к полному содержимому.');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white text-xl px-4">
        Загружаем категории...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white py-6 px-4 sm:px-6 lg:px-12">
      {/* Заголовок */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 gradient-text animate-gradient">
          🎥 Категории видео-курсов
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto px-2 sm:px-0">
          Изучайте профессиональные курсы по дизайну и разработке. Полная поддержка мобильных устройств и интерактивный интерфейс.
        </p>
      </div>

      {/* Сетка курсов */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {categories.map((cat) => {
          const purchased = mockUser.purchasedCourses.includes(cat.slug);
          return (
            <div
              key={cat.slug}
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 group cursor-pointer"
            >
              {/* Миниатюра */}
              <div className="relative h-44 sm:h-52 w-full overflow-hidden">
                <img
                  src={cat.image}
                  alt={`Превью ${cat.name}`}
                  className="h-full w-full object-cover brightness-90 group-hover:brightness-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 group-hover:bg-opacity-40 transition-all duration-500" />
              </div>

              {/* Содержимое карточки */}
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
                    Просмотр
                  </button>

                  {purchased ? (
                    <button
                      onClick={() => handleNavigate(cat)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 sm:py-2 sm:px-4 rounded-2xl text-xs sm:text-sm w-full sm:w-auto transition-all duration-300 shadow-md hover:shadow-xl"
                    >
                      Начать обучение
                    </button>
                  ) : (
                    <button
                      onClick={() => handleBuy(cat)}
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-3 sm:py-2 sm:px-4 rounded-2xl text-xs sm:text-sm w-full sm:w-auto transition-all duration-300 shadow-md hover:shadow-xl"
                    >
                      Купить курс
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Модальное окно */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Предпросмотр курса"
        className="bg-gray-900 rounded-2xl mx-4 sm:mx-auto max-w-md sm:max-w-2xl mt-16 sm:mt-24 p-4 sm:p-6 text-white outline-none overflow-y-auto max-h-[90vh] shadow-2xl"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-2 sm:px-0"
      >
        {selectedCourse && (
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 gradient-text animate-gradient">{selectedCourse.name}</h2>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">{selectedCourse.description}</p>

            <div className="mb-4 text-sm sm:text-base">
              <p><span className="font-semibold">Преподаватель:</span> {courseDetails[selectedCourse.slug]?.instructor || 'Уточняется'}</p>
              <p><span className="font-semibold">Количество видео:</span> {courseDetails[selectedCourse.slug]?.videos || 'Уточняется'}</p>
            </div>

            <div>
              <p className="font-semibold mb-2 text-sm sm:text-base">Вы изучите:</p>
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
              Закрыть
            </button>
          </div>
        )}
      </Modal>

      {/* Анимация градиента */}
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
