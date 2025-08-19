// frontend/src/Pages/Reviews.js
import React, { useMemo, useRef } from "react";
import { Star, Quote } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// --- Replace these with your own project assets if you have them ---
const HERO_VIDEO = "/Assets/videos/6415705_TopShot_LawFirmOffice.mp4"; // put a video file here (muted b-roll, 10–20s)
const HERO_FALLBACK =
  "/images/hero1.jpg"; // fallback image

const bgFragments = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero1.jpg", // you can repeat or add more images if you like
];
const reviews = [
  {
    name: "Olivia Martinez",
    role: "Interior Designer",
    review:
      "Transformative from day one. They sculpted light, texture, and proportion into a space that breathes. The result is serene and distinctly ours.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Ethan Johnson",
    role: "Project Manager",
    review:
      "Constructability without compromising beauty. Clear drawings, proactive coordination, zero drama. The build phase was the smoothest I’ve managed.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophia Lee",
    role: "Homeowner",
    review:
      "They designed a sanctuary. Morning light, quiet corners, a flow that feels inevitable. It’s more than a house—it’s a feeling.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "David Kim",
    role: "Developer",
    review:
      "They hit the numbers and the narrative. Leasing velocity was insane because the architecture sold the vision before we even opened.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Emma White",
    role: "Business Owner",
    review:
      "Brand, space, and experience became one story. Our clients mention the ambience in almost every meeting. That speaks for itself.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Liam Brown",
    role: "Engineer",
    review:
      "Detailing is surgical. Tolerances held, interfaces clean, and the finish is impeccable. They care about the things most people never see.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/28.jpg",
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
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
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
  const { rx, ry, onMouseMove, onMouseLeave } = useParallaxTilt(10);
  const cardStyle = useMemo(
    () => ({
      transformStyle: "preserve-3d",
    }),
    []
  );


  const starRow = (n) =>
    Array.from({ length: n }).map((_, i) => (
      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
    ));

  return (
    <div className="min-h-screen bg-[#0b0d11] text-white relative overflow-hidden">
      {/* ---- GLOBAL DECOR / KEYFRAMES ---- */}
      <style>{`
        @keyframes grain {
          0% { transform: translate(0,0) }
          100% { transform: translate(-100%, -100%) }
        }
        @keyframes marquee {
          0% { transform: translateX(0) }
          100% { transform: translateX(-50%) }
        }
      `}</style>

      {/* ---- HERO with video + parallax fragments ---- */}
      <section className="relative h-[70vh] md:h-[80vh] w-full">
        {/* Video bg */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={HERO_FALLBACK}
            alt="Hero background"
          />
          {/* vignette + color grade */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#0b0d11]"></div>
        </div>

        {/* subtle film grain */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08] -z-10"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
            backgroundSize: "300px 300px",
            animation: "grain 12s steps(10,end) infinite",
          }}
        />

        {/* floating image fragments with slow parallax */}
        <div
          className="absolute inset-0 -z-10"
          style={{ perspective: 1200 }}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          <motion.div
            style={{
              rotateX: rx,
              rotateY: ry,
              transformStyle: "preserve-3d",
            }}
            className="w-full h-full"
          >
            <div className="absolute top-[12%] left-[6%] w-60 h-40 rounded-xl overflow-hidden border border-white/10 shadow-2xl"
              style={{ transform: "translateZ(60px)" }}>
              <img
                src={bgFragments[0]}
                alt=""
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <div className="absolute bottom-[12%] left-[18%] w-44 h-28 rounded-xl overflow-hidden border border-white/10 shadow-2xl"
              style={{ transform: "translateZ(90px)" }}>
              <img
                src={bgFragments[1]}
                alt=""
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <div className="absolute top-[16%] right-[10%] w-72 h-44 rounded-xl overflow-hidden border border-white/10 shadow-2xl"
              style={{ transform: "translateZ(120px)" }}>
              <img
                src={bgFragments[2]}
                alt=""
                className="w-full h-full object-cover scale-110"
              />
            </div>
          </motion.div>
        </div>

        {/* Hero copy */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
            >
              Architecture with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-amber-300">Presence</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 max-w-2xl text-white/80"
            >
              Spatial stories shaped by light, proportion, and material honesty.
              Built to be lived in, remembered, and admired.
            </motion.p>

            {/* trust bar */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-4 text-sm text-white/70"
            >
              <div className="backdrop-blur-sm bg-white/10 border border-white/15 rounded-full px-4 py-2">
                120+ completed projects
              </div>
              <div className="backdrop-blur-sm bg-white/10 border border-white/15 rounded-full px-4 py-2">
                Avg. 4.9★ client rating
              </div>
              <div className="backdrop-blur-sm bg-white/10 border border-white/15 rounded-full px-4 py-2">
                Global award mentions
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---- LOGO MARQUEE (social proof) ---- */}
      <section className="relative py-10 border-y border-white/10 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="overflow-hidden">
          <div
            className="flex items-center gap-16 whitespace-nowrap will-change-transform"
            style={{ animation: "marquee 30s linear infinite" }}
          >
            {[
              "ArchiDaily",
              "Design Milk",
              "Dezeen",
              "Wallpaper*",
              "Frame",
              "Domus",
              "Icon",
            ].map((brand, i) => (
              <span
                key={i}
                className="text-white/50 hover:text-white/80 transition-colors text-lg tracking-widest"
              >
                {brand}
              </span>
            ))}
            {/* duplicate for seamless loop */}
            {[
              "ArchiDaily",
              "Design Milk",
              "Dezeen",
              "Wallpaper*",
              "Frame",
              "Domus",
              "Icon",
            ].map((brand, i) => (
              <span
                key={`d-${i}`}
                className="text-white/50 hover:text-white/80 transition-colors text-lg tracking-widest"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---- REVIEWS TITLE ---- */}
      <section className="text-center pt-16 pb-6 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-white/70 max-w-2xl mx-auto"
        >
          Honest words from the people we design for—developers, homeowners, and
          teams shaping the cities we love.
        </motion.p>
      </section>

      {/* ---- REVIEWS CAROUSEL (3D cards) ---- */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={28}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
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
      <section className="relative px-6 pb-24">
        <div className="relative max-w-6xl mx-auto overflow-hidden rounded-3xl border border-white/10">
          {/* gradient aura */}
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_20%,rgba(251,191,36,0.18),transparent_60%)]" />
          <div className="relative z-10 grid md:grid-cols-2">
            <div className="p-10 md:p-16">
              <h3 className="text-3xl md:text-4xl font-extrabold">
                Let’s build something unforgettable.
              </h3>
              <p className="mt-4 text-white/75">
                From quick studies to full delivery, our studio partners with
                you to craft work that performs—and moves people.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-block rounded-full bg-amber-400 text-black px-8 py-3 font-semibold hover:bg-amber-300 transition"
              >
                Start a Project
              </a>
            </div>
            <div className="relative min-h-[260px]">
              <img
                src="https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1600&auto=format&fit=crop"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#0b0d11] via-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/** 3D tilt card with glass surface */
function Card3D({ review }) {
  const ref = useRef(null);
  const tiltX = useMotionValue(0.5);
  const tiltY = useMotionValue(0.5);

  const rx = useSpring(useTransform(tiltY, [0, 1], [10, -10]), {
    stiffness: 140,
    damping: 14,
  });
  const ry = useSpring(useTransform(tiltX, [0, 1], [-10, 10]), {
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

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformStyle: "preserve-3d",
      }}
      className="group h-full"
    >
      <div
        className="relative h-full rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-7 shadow-xl"
        style={{ transform: "translateZ(30px)" }}
      >
        {/* Accent glow that shifts with tilt */}
        <motion.div
          style={{
            left: glow,
          }}
          className="pointer-events-none absolute -top-10 w-[60%] h-[200%] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(251,191,36,0.10),transparent)] opacity-0 group-hover:opacity-100 transition"
        />

        {/* Header */}
        <div className="flex items-center gap-4 mb-5">
          <img
            src={review.image}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover border border-white/20"
          />
          <div>
            <div className="font-semibold">{review.name}</div>
            <div className="text-xs text-white/60">{review.role}</div>
          </div>
          <Quote className="ml-auto w-5 h-5 text-amber-300/80" />
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-3">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
          ))}
        </div>

        {/* Review */}
        <p className="text-white/85 leading-relaxed italic">
          “{review.review}”
        </p>
      </div>
    </motion.div>
  );
}

export default Reviews;
