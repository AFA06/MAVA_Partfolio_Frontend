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

  // Glass-like texture overlay
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
    <div className="relative min-h-screen w-full bg-gradient-to-br from-[#101010] via-[#181818] to-[#202020] text-white antialiased overflow-x-hidden">
      {/* glass texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `url(${paperDataUrl})`,
          mixBlendMode: "overlay",
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
          <h1 className="text-[clamp(2.25rem,6vw,3.75rem)] font-serif font-bold tracking-tight text-white">
            {t("contactsPage.title")}
          </h1>
          <div className="mt-5 h-[3px] w-40 mx-auto bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-full" />
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-gray-300">
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
              className="group relative rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-white/10 transition hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/90 to-blue-500/90 text-white mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>
              <h3 className="font-serif font-semibold text-lg text-white">{item.title}</h3>
              <p className="mt-2 text-sm sm:text-base whitespace-pre-line text-gray-300">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl sm:max-w-2xl rounded-3xl border border-white/10 bg-white/10 shadow-2xl p-8 sm:p-12 text-center backdrop-blur-2xl"
        >
          <h4 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            {t("contactsPage.form.title")}
          </h4>
          <div className="mt-3 h-[3px] w-28 mx-auto bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-full" />
          <p className="mt-4 text-gray-300 text-sm sm:text-base">
            {t("contactsPage.form.subtitle")}
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5 text-left">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                {t("contactsPage.form.name")}
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full p-3 rounded-xl border border-white/20 bg-black/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                {t("contactsPage.form.email")}
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full p-3 rounded-xl border border-white/20 bg-black/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                {t("contactsPage.form.message")}
              </label>
              <textarea
                rows="5"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full p-3 rounded-xl border border-white/20 bg-black/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-sm"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500/80 to-blue-500/80 text-white font-semibold shadow-md hover:from-cyan-400 hover:to-blue-400 transition"
            >
              {loading ? t("contactsPage.form.sending") || "Отправка..." : t("contactsPage.form.button")}
            </button>

            {success === true && <p className="mt-2 text-green-400">{t("contactsPage.form.alert")}</p>}
            {success === false && <p className="mt-2 text-red-400">{t("contactsPage.form.error") || "Ошибка отправки."}</p>}
          </form>
        </motion.div>
      </section>

      {/* GOOGLE MAPS */}
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
