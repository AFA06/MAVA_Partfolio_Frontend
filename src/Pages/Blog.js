// src/Pages/Blog.jsx
import React from "react";

export default function Blog() {
  return (
    <div className="w-full bg-[#eeece8] text-gray-900 font-sans">
      {/* HERO */}
      <header className="relative flex flex-col items-center justify-center text-center py-28 px-6 bg-gradient-to-b from-[#eeece8] to-[#e2e0dc] border-b border-gray-400">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')]"></div>
        <div className="relative z-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2990/2990506.png"
            alt="blog icon"
            className="w-20 h-20 mb-6 opacity-80 mx-auto"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-800 mb-4 tracking-tight">
            Наш Блог
          </h1>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed">
            Видео и короткие заметки о нашей работе, проектах и вдохновении.
          </p>
        </div>
      </header>

      {/* VIDEO Section */}
      <section className="relative py-20 px-6 sm:px-12 md:px-20 bg-[#e8e6e2] border-t border-gray-400">
        <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/graph-paper.png')]"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2990/2990501.png"
            alt="video icon"
            className="w-16 h-16 mx-auto mb-6 opacity-80"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
            Видео из нашей жизни
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-10">
            Короткие ролики о нашей работе, проектах и вдохновении.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Example YouTube Embed */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 md:h-80 rounded-xl shadow-lg border border-gray-300"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>

            {/* Example Instagram Embed */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 md:h-80 rounded-xl shadow-lg border border-gray-300"
                src="https://www.instagram.com/reel/CyZ5z1wAnkU/embed"
                title="Instagram reel"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section
        id="subscribe"
        className="max-w-4xl mx-auto px-6 py-14 rounded-2xl bg-[#fdfdfb] border border-gray-300 shadow-md text-center my-20"
      >
        <h4 className="text-xl font-serif font-semibold text-gray-800 mb-3">
          Будьте в курсе
        </h4>
        <p className="text-sm text-gray-600 mb-6">
          Подпишитесь на нашу рассылку — короткие ежемесячные заметки,
          полезные материалы и новости о проектах.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Подписка оформлена (демо).");
          }}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          <input
            aria-label="Email"
            type="email"
            required
            placeholder="you@company.com"
            className="min-w-[260px] px-4 py-3 rounded-full border border-gray-400 text-gray-800 focus:outline-none"
          />
          <button
            type="submit"
            className="px-5 py-3 rounded-full bg-gray-800 text-white text-sm font-semibold shadow hover:bg-gray-700 transition"
          >
            Подписаться
          </button>
        </form>
      </section>
    </div>
  );
}
