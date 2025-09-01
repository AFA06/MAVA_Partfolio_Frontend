// src/Pages/Contacts.jsx
import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contacts() {
  return (
    <div className="w-full bg-[#eeece8] text-gray-900 font-sans">
      {/* HERO */}
      <header className="relative flex flex-col items-center justify-center text-center py-28 px-6 bg-gradient-to-b from-[#eeece8] to-[#e2e0dc] border-b border-gray-400">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')]"></div>
        <div className="relative z-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/484/484167.png"
            alt="contacts icon"
            className="w-20 h-20 mb-6 opacity-80 mx-auto"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-800 mb-4 tracking-tight">
            Контакты
          </h1>
          <p className="max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed">
            Свяжитесь с нами для обсуждения проектов или получения консультации.
          </p>
        </div>
      </header>

      {/* Contact Info */}
      <section className="relative py-20 px-6 sm:px-12 md:px-20 bg-[#e8e6e2] border-t border-gray-400">
        <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/graph-paper.png')]"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-10">
            Наши контакты
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-700">
            <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 border border-gray-300">
              <MapPin className="h-10 w-10 text-gray-800 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Адрес</h3>
              <p className="text-sm whitespace-pre-line">Ташкент, Узбекистан{"\n"}Самарканд Дарвоза</p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 border border-gray-300">
              <Phone className="h-10 w-10 text-gray-800 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Телефон</h3>
              <p className="text-sm">+998 90 123 45 67</p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 border border-gray-300">
              <Mail className="h-10 w-10 text-gray-800 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-sm">info@architecture.com</p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 border border-gray-300">
              <Clock className="h-10 w-10 text-gray-800 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Рабочие часы</h3>
              <p className="text-sm whitespace-pre-line">Пн - Сб{"\n"}9:00 - 19:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-6 py-14 rounded-2xl bg-[#fdfdfb] border border-gray-300 shadow-md text-center my-20">
        <h4 className="text-xl font-serif font-semibold text-gray-800 mb-3">
          Отправьте нам сообщение
        </h4>
        <p className="text-sm text-gray-600 mb-6">
          Мы ответим на ваши вопросы и обсудим детали проекта.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Сообщение отправлено (демо).");
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
        >
          <input
            type="text"
            placeholder="Ваше имя"
            className="p-3 sm:p-4 rounded-xl border border-gray-400 text-gray-800 focus:outline-none sm:col-span-2"
            required
          />
          <input
            type="email"
            placeholder="Ваш email"
            className="p-3 sm:p-4 rounded-xl border border-gray-400 text-gray-800 focus:outline-none sm:col-span-2"
            required
          />
          <textarea
            placeholder="Ваше сообщение"
            rows="6"
            className="p-3 sm:p-4 rounded-xl border border-gray-400 text-gray-800 focus:outline-none sm:col-span-2"
            required
          ></textarea>
          <button
            type="submit"
            className="sm:col-span-2 bg-gray-800 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg hover:bg-gray-700 transition"
          >
            Отправить
          </button>
        </form>
      </section>

      {/* Map */}
      <section className="h-[300px] sm:h-[400px]">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.592480404966!2d69.2401!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3b2bde39df%3A0x9d184f7a7d0c25b0!2sTashkent!5e0!3m2!1sru!2s!4v1673000000000!5m2!1sru!2s"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}
