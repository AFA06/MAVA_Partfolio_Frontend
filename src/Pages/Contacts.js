// FULL MOBILE RESPONSIVE CONTACTS PAGE (UPDATED)
// Paste this into /src/pages/Contacts.jsx

import React, { useState, useMemo } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

export default function Contacts() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  /* ----------------------------------------------
     PAPER TEXTURE (Light Mode)
  ---------------------------------------------- */
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

  /* ----------------------------------------------
       CONTACT ITEMS
  ---------------------------------------------- */
  const contactItems = [
    {
      title: t("contactsPage.address.title"),
      text: "г. Ташкент, Узбекистан",
      icon: <MapPin size={28} />,
    },
    {
      title: t("contactsPage.phone.title"),
      text: "+998 99 936-65-56\n+998 90 014-14-44",
      icon: <Phone size={28} />,
    },
    {
      title: t("contactsPage.email.title"),
      text: "mavagroup2009@gmail.com",
      icon: <Mail size={28} />,
    },
    {
      title: t("contactsPage.hours.title"),
      icon: <Clock size={28} />,
      text: (
        <div className="space-y-1.5 text-sm sm:text-base">
          {[
            ["monday", "09:00–21:00"],
            ["tuesday", "09:00–21:00"],
            ["wednesday", "09:00–21:00"],
            ["thursday", "09:00–21:00"],
            ["friday", "14:00–21:00"],
            ["saturday", "10:00–19:00"],
            ["sunday", "closed"],
          ].map(([dayKey, time], i) => {
            const isClosed = time === "closed";
            return (
              <div
                key={i}
                className={`flex justify-between border-b pb-1 last:border-none text-xs sm:text-sm ${
                  theme === "dark"
                    ? "border-white/10 text-gray-200"
                    : "border-gray-300 text-gray-700"
                }`}
              >
                <span className="font-medium">
                  {t(`contactsPage.hours.${dayKey}`)}
                </span>

                <span
                  className={`${
                    isClosed
                      ? "text-red-500 font-medium"
                      : theme === "dark"
                      ? "text-gray-300"
                      : "text-gray-700"
                  }`}
                >
                  {isClosed ? t("contactsPage.hours.closed") : time}
                </span>
              </div>
            );
          })}
        </div>
      ),
    },
  ];

  /* ----------------------------------------------
        Submit Handler
  ---------------------------------------------- */
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
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  /* ----------------------------------------------
        Theme classes
  ---------------------------------------------- */
  const bgMain =
    theme === "dark"
      ? "bg-[#050509] text-gray-100"
      : "bg-[#f5f5f6] text-gray-900";

  const card =
    theme === "dark"
      ? "bg-white/5 border border-white/10 hover:bg-white/10"
      : "bg-white border border-gray-200 shadow-md hover:shadow-lg";

  const formCard =
    theme === "dark"
      ? "bg-white/5 border border-white/10"
      : "bg-white border border-gray-200 shadow-xl";

  const inputStyle =
    theme === "dark"
      ? "bg-white/5 border-white/20 text-gray-100 placeholder-gray-400"
      : "bg-gray-50 border-gray-300 text-gray-800";

  return (
    <div className={`relative min-h-screen w-full ${bgMain}`}>
      {/* BG Texture */}
      {theme === "light" && (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 opacity-[0.15]"
          style={{ backgroundImage: `url(${paperDataUrl})`, mixBlendMode: "multiply" }}
        />
      )}

      {/* -------------------------------- HEADER -------------------------------- */}
      <header className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 pt-20 sm:pt-24 pb-10 text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            {t("contactsPage.title")}
          </h1>

          <div
            className={`mt-5 h-[3px] w-24 mx-auto rounded-full ${
              theme === "dark"
                ? "bg-gradient-to-r from-yellow-500 to-yellow-400"
                : "bg-gray-300"
            }`}
          />

          <p className="mt-5 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            {t("contactsPage.subtitle")}
          </p>
        </motion.div>
      </header>

      {/* -------------------------------- INFO CARDS -------------------------------- */}
      <section className="px-4 sm:px-6 py-10 sm:py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {contactItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`rounded-2xl p-5 sm:p-6 ${card} transition`}
            >
              <div
                className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full mb-4
                ${
                  theme === "dark"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-gray-900 text-white"
                }`}
              >
                {item.icon}
              </div>

              <h3 className="font-semibold text-base sm:text-lg mb-1.5">
                {item.title}
              </h3>

              <div className="whitespace-pre-line text-sm leading-relaxed">
                {item.text}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* -------------------------------- CONTACT FORM -------------------------------- */}
      <section className="px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className={`max-w-xl sm:max-w-2xl mx-auto rounded-3xl p-8 sm:p-12 ${formCard}`}
        >
          <h4 className="text-xl sm:text-2xl font-semibold mb-2">
            {t("contactsPage.form.title")}
          </h4>

          <p className="text-sm sm:text-base text-gray-400 mb-6">
            {t("contactsPage.form.subtitle")}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* NAME */}
            <div>
              <label className="block text-sm font-medium mb-1">
                {t("contactsPage.form.name")}
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`w-full p-3 rounded-xl border focus:ring-2 transition ${inputStyle}`}
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium mb-1">
                {t("contactsPage.form.email")}
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`w-full p-3 rounded-xl border focus:ring-2 transition ${inputStyle}`}
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm font-medium mb-1">
                {t("contactsPage.form.message")}
              </label>
              <textarea
                rows="4"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`w-full p-3 rounded-xl border focus:ring-2 transition ${inputStyle}`}
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full mt-3 px-6 py-3 rounded-xl text-base font-semibold transition
              ${
                theme === "dark"
                  ? "bg-yellow-500 text-black hover:bg-yellow-400"
                  : "bg-gray-900 text-white hover:bg-black"
              }`}
            >
              {loading
                ? t("contactsPage.form.sending")
                : t("contactsPage.form.button")}
            </button>

            {success === true && (
              <p className="mt-2 text-green-600 text-sm">
                {t("contactsPage.form.alert")}
              </p>
            )}
            {success === false && (
              <p className="mt-2 text-red-600 text-sm">
                {t("contactsPage.form.error")}
              </p>
            )}
          </form>
        </motion.div>
      </section>

      {/* -------------------------------- GOOGLE MAP -------------------------------- */}
      <section className="w-full mt-10">
        <div className="w-full h-[330px] sm:h-[420px] md:h-[500px] rounded-t-3xl overflow-hidden shadow-xl">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.73372759458!2d69.2877!3d41.3108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad6b25b6b3b%3A0x7f79a0f7b6c8b9c!2sHamid%20Olimjon%20Metro%20Station!5e0!3m2!1sen!2suz!4v1693501234567!5m2!1sen!2suz"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            className={`${theme === "dark" ? "brightness-75" : ""}`}
          ></iframe>
        </div>
      </section>
    </div>
  );
}
