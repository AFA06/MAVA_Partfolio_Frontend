// src/Pages/Blog.jsx
import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

const blogPosts = [
  {
    id: "welcome",
    title: "Welcome to Our Blog",
    description:
      "Stay updated with the latest news, updates, and insights from our platform.",
    image: "https://source.unsplash.com/1200x800/?technology,futuristic",
    tags: ["Platform", "News"],
    preview:
      "We build with care — premium content and practical tips for creators and learners.",
  },
  {
    id: "learning",
    title: "Learning Made Easy",
    description:
      "Discover how we make online education more effective and engaging.",
    image: "https://source.unsplash.com/1200x800/?education,modern",
    tags: ["Learning", "Tips"],
    preview:
      "Short, structured courses with hands-on projects to keep you moving forward.",
  },
  {
    id: "behind",
    title: "Behind the Scenes",
    description:
      "A look at how we build, create, and innovate to bring you premium content.",
    image: "https://source.unsplash.com/1200x800/?workspace,creative",
    tags: ["Culture", "Product"],
    preview:
      "Our team shares design decisions, tools, and the stories behind product choices.",
  },
];

export default function Blog() {
  const cardsRef = useRef([]);
  const heroRef = useRef(null);

  // Parallax tilt for images
  function handlePointerMove(e, idx) {
    const el = cardsRef.current[idx];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rotateY = (px - 0.5) * 10; // -5..5 deg
    const rotateX = (0.5 - py) * 8; // -4..4 deg
    const img = el.querySelector(".card-image");
    const depth = el.querySelector(".card-deco");
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
    if (img) img.style.transform = `scale(1.08) translateZ(20px)`;
    if (depth) depth.style.transform = `translate3d(${(px - 0.5) * 30}px, ${(py - 0.5) *
      20}px, -10px)`;
  }
  function resetTilt(idx) {
    const el = cardsRef.current[idx];
    if (!el) return;
    const img = el.querySelector(".card-image");
    const depth = el.querySelector(".card-deco");
    el.style.transform = `none`;
    if (img) img.style.transform = `scale(1)`;
    if (depth) depth.style.transform = `translate3d(0,0,0)`;
  }

  useEffect(() => {
    // Hero entrance
    if (heroRef.current) {
      animate(heroRef.current.querySelectorAll(".hero-line"), {
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 900,
        delay: stagger(120),
        easing: "easeOutCubic",
      });
    }

    // Scroll-triggered animations for cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const node = entry.target;
          if (entry.isIntersecting) {
            animate(node, {
              translateY: [40, 0],
              opacity: [0, 1],
              duration: 900,
              easing: "easeOutCubic",
              delay: node.dataset.index ? parseInt(node.dataset.index) * 120 : 0,
            });
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.18 }
    );

    cardsRef.current.forEach((c, i) => {
      if (c) {
        c.style.opacity = 0;
        c.dataset.index = i;
        observer.observe(c);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-white font-sans">
      {/* Inline CSS */}
      <style>{`
        .hero-gradient {
          background: linear-gradient(120deg, rgba(79,70,229,0.12), rgba(139,92,246,0.09) 30%, rgba(236,72,153,0.05));
          position: relative;
          overflow: visible;
        }
        @keyframes slow-rotate {
          0% { transform: rotate(0deg) translateX(0); }
          50% { transform: rotate(6deg) translateX(6px); }
          100% { transform: rotate(0deg) translateX(0); }
        }
        .hero-orb {
          position: absolute;
          width: 420px;
          height: 420px;
          filter: blur(80px);
          opacity: 0.28;
          border-radius: 50%;
          animation: slow-rotate 12s linear infinite;
          pointer-events: none;
          mix-blend-mode: screen;
        }
        .hero-orb.a { background: radial-gradient(circle at 30% 30%, #7c3aed, #4f46e5); top: -90px; left: -60px; }
        .hero-orb.b { background: radial-gradient(circle at 70% 70%, #ec4899, #f97316); bottom: -90px; right: -60px; animation-duration: 14s; opacity: 0.18; }

        .card-deco {
          transition: transform 0.6s cubic-bezier(.2,.9,.3,1);
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .preview {
          transform: translateY(100%);
          transition: transform 420ms cubic-bezier(.2,.9,.3,1);
        }
        .card:hover .preview {
          transform: translateY(0%);
        }

        .btn-premium:active { transform: scale(0.98); }
        .card:hover { box-shadow: 0 20px 40px rgba(99,102,241,0.12), 0 6px 12px rgba(124,58,237,0.06); }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.2rem; }
          .hero-sub { font-size: 0.95rem; }
        }
      `}</style>

      {/* HERO */}
      <header ref={heroRef} className="hero-gradient relative overflow-hidden py-28 px-6">
        <div className="hero-orb a" />
        <div className="hero-orb b" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="hero-line hero-title text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-pink-300">
              Thoughtful articles,
            </span>{" "}
            <span className="block text-[#e6e9f2] mt-2 md:mt-0">crafted for creators</span>
          </h1>
          <p className="hero-line hero-sub mt-6 text-gray-300 max-w-2xl mx-auto">
            Deep dives, lessons, and practical guides — curated to help you design, build,
            and ship better products.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              className="inline-flex items-center px-5 py-3 rounded-full text-sm font-medium btn-premium bg-gradient-to-r from-indigo-500 to-pink-500 shadow-lg hover:scale-105 transition-transform duration-300 focus:outline-none"
              href="#posts"
            >
              Explore posts
            </a>
            <a
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-white/10 text-gray-200 hover:bg-white/5 transition-colors"
              href="#subscribe"
            >
              Subscribe
            </a>
          </div>
        </div>
      </header>

      {/* POSTS */}
      <main className="max-w-7xl mx-auto px-6 -mt-12 pb-28" id="posts">
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <article
              key={post.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="card relative rounded-2xl overflow-hidden border border-white/6 bg-gradient-to-b from-white/4 to-white/2 backdrop-blur-sm p-0 transition-all duration-500"
              onPointerMove={(e) => handlePointerMove(e, idx)}
              onPointerLeave={() => resetTilt(idx)}
              aria-labelledby={`post-${post.id}-title`}
            >
              <div className="relative h-64">
                <img
                  className="card-image w-full h-full object-cover transition-transform duration-700"
                  src={post.image}
                  alt={post.title}
                />
                <div className="card-deco" aria-hidden="true" />
                <div className="absolute top-4 left-4 flex gap-2 z-10">
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="absolute left-0 right-0 bottom-0 p-4 preview bg-gradient-to-t from-black/70 to-transparent text-gray-100">
                  <p className="text-sm line-clamp-3">{post.preview}</p>
                </div>
              </div>
              <div className="p-6">
                <h3
                  id={`post-${post.id}-title`}
                  className="text-xl font-bold mb-2 text-white tracking-tight"
                >
                  {post.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-3">{post.description}</p>
                <div className="flex items-center justify-between gap-4">
                  <a
                    className="text-sm inline-flex items-center gap-2 font-medium px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow hover:translate-y-[-2px] transition-transform duration-300"
                    href={`/blog/${post.id}`}
                  >
                    Read Article
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <div className="text-xs text-gray-400">
                    <div>5 min read</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* SUBSCRIBE */}
      <section
        id="subscribe"
        className="max-w-4xl mx-auto px-6 py-14 rounded-2xl bg-gradient-to-r from-white/4 to-white/6 border border-white/6 text-center"
      >
        <h4 className="text-lg font-semibold text-white mb-3">Stay up to date</h4>
        <p className="text-sm text-gray-300 mb-6">
          Join our newsletter — short monthly notes, curated reads, and product updates.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const el = e.currentTarget;
            const input = el.querySelector("input");
            if (input) {
              input.value = "";
              animate(el, { scale: [1, 0.98, 1], duration: 300 });
              alert("Subscribed (demo) — integrate your mailing service.");
            }
          }}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          <input
            aria-label="Email"
            type="email"
            required
            placeholder="you@company.com"
            className="min-w-[260px] px-4 py-3 rounded-full bg-white/6 placeholder:text-gray-300 border border-white/6 text-white focus:outline-none"
          />
          <button
            type="submit"
            className="px-5 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 shadow hover:scale-105 transition-transform duration-200"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
