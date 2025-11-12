// src/pages/Contacts.jsx
import React, { useState, useMemo } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function Contacts() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  // Paper-like texture overlay
  const paperDataUrl = useMemo(() => {
    const canvas = document.createElement("canvas");
    const s = 120;
    canvas.width = s;
    canvas.height = s;
    const ctx = canvas.getContext("2d");
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

  const contactItems = [
    {
      title: t("contactsPage.address.title"),
      text: "г. Ташкент, Узбекистан",
      icon: <MapPin />,
    },
    {
      title: t("contactsPage.phone.title"),
      text: "+998 99 936-65-56\n+998 90 014-14-44",
      icon: <Phone />,
    },
    {
      title: t("contactsPage.email.title"),
      text: "mavagroup2009@gmail.com",
      icon: <Mail />,
    },
    {
      title: t("contactsPage.hours.title"),
      icon: <Clock />,
      text: (
        <div className="space-y-1.5 text-sm sm:text-base text-neutral-700">
          {[
            ["Понедельник", "09:00–21:00"],
            ["Вторник", "09:00–21:00"],
            ["Среда", "09:00–21:00"],
            ["Четверг", "09:00–21:00"],
            ["Пятница", "14:00–21:00"],
            ["Суббота", "10:00–19:00"],
            ["Воскресенье", "Закрыто"],
          ].map(([day, time], i) => (
            <div
              key={i}
              className="flex justify-between border-b border-[#f1e7dc] pb-0.5 last:border-none"
            >
              <span className="font-medium">{day}</span>
              <span
                className={`${
                  time === "Закрыто"
                    ? "text-red-500 font-medium"
                    : "text-neutral-700"
                }`}
              >
                {time}
              </span>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await axios.post("http://localhost:5050/api/contact", form);
      if (res.data.success) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      } else setSuccess(false);
    } catch (err) {
      console.error(err);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-[#faf7f2] via-[#f3ede8] to-[#ebe3dc] text-[#2b2b2b] antialiased overflow-x-hidden">
      {/* Paper overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `url(${paperDataUrl})`,
          mixBlendMode: "multiply",
        }}
      />

      {/* Header */}
      <header className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16 text-center"
        >
          <h1 className="text-[clamp(2.25rem,6vw,3.75rem)] font-serif font-bold tracking-tight text-neutral-900">
            {t("contactsPage.title")}
          </h1>
          <div className="mt-5 h-[3px] w-40 mx-auto bg-gradient-to-r from-[#8b5e3c] via-[#a47148] to-[#8b5e3c] rounded-full" />
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-neutral-700">
            {t("contactsPage.subtitle")}
          </p>
        </motion.div>
      </header>

      {/* Contact Cards */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {contactItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-[#e4d6c7] bg-white/80 backdrop-blur-lg p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#a47148] to-[#8b5e3c] text-white mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>
              <h3 className="font-serif font-semibold text-lg text-neutral-900">
                {item.title}
              </h3>
              <div className="mt-2 text-neutral-700 whitespace-pre-line leading-relaxed">
                {item.text}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl sm:max-w-2xl rounded-3xl border border-[#e4d6c7] bg-white/90 shadow-2xl p-8 sm:p-12 text-center backdrop-blur-xl"
        >
          <h4 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-900">
            {t("contactsPage.form.title")}
          </h4>
          <div className="mt-3 h-[3px] w-28 mx-auto bg-gradient-to-r from-[#a47148] via-[#8b5e3c] to-[#a47148] rounded-full" />
          <p className="mt-4 text-neutral-600 text-sm sm:text-base">
            {t("contactsPage.form.subtitle")}
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5 text-left">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                {t("contactsPage.form.name")}
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full p-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#a47148] shadow-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                {t("contactsPage.form.email")}
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full p-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#a47148] shadow-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                {t("contactsPage.form.message")}
              </label>
              <textarea
                rows="5"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full p-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#a47148] shadow-sm"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4a373] to-[#b5835a] text-white font-semibold shadow-md hover:shadow-lg transition"
            >
              {loading
                ? t("contactsPage.form.sending") || "Отправка..."
                : t("contactsPage.form.button")}
            </button>

            {success === true && (
              <p className="mt-2 text-green-600">{t("contactsPage.form.alert")}</p>
            )}
            {success === false && (
              <p className="mt-2 text-red-600">
                {t("contactsPage.form.error") || "Ошибка отправки."}
              </p>
            )}
          </form>
        </motion.div>
      </section>

      {/* Google Maps */}
      <section className="relative w-full h-[400px] sm:h-[500px] mt-12">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.73372759458!2d69.2877!3d41.3108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad6b25b6b3b%3A0x7f79a0f7b6c8b9c!2sHamid%20Olimjon%20Metro%20Station!5e0!3m2!1sen!2suz!4v1693501234567!5m2!1sen!2suz"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-t-3xl shadow-2xl"
        ></iframe>
      </section>
    </div>
  );
}
