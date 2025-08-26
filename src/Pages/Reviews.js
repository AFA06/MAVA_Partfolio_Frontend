import React, { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import hero1 from "../assets/hero1.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HERO_IMAGE = hero1;
const bgFragments = [
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800",
];

const reviews = [
  {
    name: "Оливия Мартинес",
    role: "Дизайнер интерьеров",
    review:
      "С первого дня это было преобразующее. Они превратили свет, текстуру и пропорции в пространство, которое дышит. Результат — спокойный и уникально наш.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Итан Джонсон",
    role: "Руководитель проекта",
    review:
      "Практичность без ущерба для красоты. Четкие чертежи, активная координация, никакого стресса. Этап строительства прошёл максимально гладко.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "София Ли",
    role: "Владелица дома",
    review:
      "Они спроектировали убежище. Утренний свет, тихие уголки, поток, который ощущается естественным. Это больше, чем дом — это чувство.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Дэвид Ким",
    role: "Девелопер",
    review:
      "Они соединили цифры и историю. Сдача помещений шла с невероятной скоростью, потому что архитектура продавала видение ещё до открытия.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

function useParallaxTilt(intensity = 12) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rx = useSpring(useTransform(y, [0, 1], [intensity, -intensity]), {
    stiffness: 120,
    damping: 18,
    mass: 0.3,
  });
  const ry = useSpring(useTransform(x, [0, 1], [-intensity, intensity]), {
    stiffness: 120,
    damping: 18,
    mass: 0.3,
  });

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
  };
  const onMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return { rx, ry, onMouseMove, onMouseLeave };
}

const Reviews = () => {
  const { rx, ry, onMouseMove, onMouseLeave } = useParallaxTilt(14);

  return (
    <div className="font-sans min-h-screen bg-black text-white relative overflow-hidden">
      {/* ---- HERO ---- */}
      <section className="relative w-full h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-75"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90"></div>

        {/* Floating 3D fragments */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{ perspective: 1200 }}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          <motion.div
            style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
            className="w-full h-full"
          >
            {bgFragments.map((src, i) => (
              <div
                key={i}
                className="absolute rounded-xl overflow-hidden border border-white/10 shadow-2xl animate-floaty"
                style={{
                  top: `${15 + i * 20}%`,
                  left: i % 2 === 0 ? `${5 + i * 10}%` : "auto",
                  right: i % 2 !== 0 ? `${5 + i * 10}%` : "auto",
                  width: `${140 + i * 30}px`,
                  height: `${100 + i * 20}px`,
                  transform: `translateZ(${80 + i * 30}px)`,
                  animationDelay: `${i * 2}s`,
                }}
              >
                <img src={src} alt="фрагмент" className="w-full h-full object-cover" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero text */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full text-center sm:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg"
            >
              Архитектура с{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-amber-300">
                присутствием
              </span>
              .
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 sm:mt-6 max-w-xl text-white/80 text-base sm:text-lg md:text-xl mx-auto sm:mx-0"
            >
              Пространственные истории, сформированные светом, пропорциями и честностью материалов.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ---- REVIEWS ---- */}
      <section className="text-center pt-14 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4"
        >
          Что говорят наши клиенты
        </motion.h2>
        <p className="text-white/70 max-w-xl mx-auto text-base sm:text-lg">
          Честные слова людей, для которых мы создаём дизайн.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{ 640: { slidesPerView: 1.2 }, 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5200, disableOnInteraction: false }}
          loop
        >
          {reviews.map((r, idx) => (
            <SwiperSlide key={idx}>
              <Card3D review={r} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ---- CTA ---- */}
      <section className="relative px-4 sm:px-6 pb-20">
        <div className="relative max-w-6xl mx-auto overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_20%,rgba(251,191,36,0.15),transparent_70%)] animate-pulse" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 sm:p-10 md:p-16 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
                Давайте создадим что-то незабываемое.
              </h3>
              <p className="mt-3 sm:mt-4 text-white/75 text-base sm:text-lg">
                От концепции до реализации наша студия работает вместе с вами, чтобы создать работу, которая вдохновляет.
              </p>
              <a
                href="/contact"
                className="mt-6 sm:mt-8 inline-block rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-8 sm:px-10 py-3 font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                Начать проект
              </a>
            </div>
            <div className="relative min-h-[200px] sm:min-h-[260px]">
              <img
                src="https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1600"
                alt="cta"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ---- 3D Review Card ----
function Card3D({ review }) {
  const ref = useRef(null);
  const tiltX = useMotionValue(0.5);
  const tiltY = useMotionValue(0.5);

  const rx = useSpring(useTransform(tiltY, [0, 1], [12, -12]), {
    stiffness: 140,
    damping: 14,
  });
  const ry = useSpring(useTransform(tiltX, [0, 1], [-12, 12]), {
    stiffness: 140,
    damping: 14,
  });
  const glow = useTransform(tiltX, [0, 1], ["40%", "60%"]);

  const handleMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    tiltX.set((e.clientX - r.left) / r.width);
    tiltY.set((e.clientY - r.top) / r.height);
  };
  const handleLeave = () => {
    tiltX.set(0.5);
    tiltY.set(0.5);
  };

  const handleTouchMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const touch = e.touches[0];
    const px = (touch.clientX - r.left) / r.width;
    const py = (touch.clientY - r.top) / r.height;
    tiltX.set(px);
    tiltY.set(py);
  };
  const handleTouchEnd = () => {
    tiltX.set(0.5);
    tiltY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className="group h-full"
    >
      <div
        className="relative h-full rounded-2xl sm:rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-6 sm:p-7 shadow-xl hover:shadow-amber-500/20 transition-shadow"
        style={{ transform: "translateZ(30px)" }}
      >
        <motion.div
          style={{ left: glow }}
          className="pointer-events-none absolute -top-10 w-[60%] h-[200%] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(251,191,36,0.15),transparent)] opacity-0 group-hover:opacity-100 transition"
        />

        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
          <img
            src={review.image}
            alt={review.name}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-white/20"
          />
          <div className="text-left">
            <div className="font-semibold text-sm sm:text-base">{review.name}</div>
            <div className="text-xs text-white/60">{review.role}</div>
          </div>
          <Quote className="ml-auto w-4 h-4 sm:w-5 sm:h-5 text-amber-300/80" />
        </div>

        <div className="flex gap-1 mb-3">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
          ))}
        </div>

        <p className="text-white/85 leading-relaxed italic text-sm sm:text-base">
          “{review.review}”
        </p>
      </div>
    </motion.div>
  );
}

export default Reviews;
