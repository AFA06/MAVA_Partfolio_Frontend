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
    { title: t("contactsPage.address.title"), text: t("contactsPage.address.text"), icon: <MapPin /> },
    { title: t("contactsPage.phone.title"), text: t("contactsPage.phone.text"), icon: <Phone /> },
    { title: t("contactsPage.email.title"), text: t("contactsPage.email.text"), icon: <Mail /> },
    { title: t("contactsPage.hours.title"), text: t("contactsPage.hours.text"), icon: <Clock /> },
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
    <div className="relative min-h-screen w-full bg-[#f8f7f3] text-[#232323] antialiased overflow-x-hidden">
      {/* paper overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `url(${paperDataUrl})`,
          mixBlendMode: "multiply",
        }}
      />

      {/* Hero */}
      <header className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16 text-center"
        >
          <h1 className="text-[clamp(1.75rem,6vw,3.5rem)] sm:text-[clamp(2rem,6vw,3.75rem)] leading-[1.1] font-serif tracking-tight text-neutral-900">
            {t("contactsPage.title")}
          </h1>
          <div className="mt-4 sm:mt-5 h-[2.5px] sm:h-[3px] w-28 sm:w-44 mx-auto bg-neutral-800" />
          <p className="mt-4 sm:mt-6 max-w-xl mx-auto text-sm sm:text-base leading-relaxed text-neutral-700">
            {t("contactsPage.subtitle")}
          </p>
        </motion.div>
      </header>

      {/* CONTACT CARDS */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {contactItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-neutral-200 bg-white/80 p-5 sm:p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900 text-white mb-3 sm:mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>
              <h3 className="font-serif font-semibold text-lg text-neutral-900">{item.title}</h3>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base whitespace-pre-line text-neutral-700">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl sm:max-w-2xl rounded-2xl border border-neutral-200 bg-white/80 shadow-lg p-6 sm:p-8 text-center backdrop-blur"
        >
          <h4 className="text-xl sm:text-2xl font-serif font-bold text-neutral-900">
            {t("contactsPage.form.title")}
          </h4>
          <div className="mt-2 sm:mt-3 h-[2px] w-20 sm:w-24 mx-auto bg-neutral-800" />
          <p className="mt-2 sm:mt-4 text-neutral-600 text-sm sm:text-base">
            {t("contactsPage.form.subtitle")}
          </p>

          <form onSubmit={handleSubmit} className="mt-4 sm:mt-6 space-y-4 text-left">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                {t("contactsPage.form.name")}
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full p-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800"
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
                className="w-full p-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800"
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
                className="w-full p-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full px-6 py-3 rounded-lg border border-neutral-900 bg-neutral-900 text-white font-semibold hover:bg-neutral-700 transition"
            >
              {loading ? t("contactsPage.form.sending") || "Отправка..." : t("contactsPage.form.button")}
            </button>

            {success === true && <p className="mt-2 text-green-600">{t("contactsPage.form.alert")}</p>}
            {success === false && <p className="mt-2 text-red-600">{t("contactsPage.form.error") || "Ошибка отправки."}</p>}
          </form>
        </motion.div>
      </section>
    </div>
  );
}
