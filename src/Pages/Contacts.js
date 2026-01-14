// /src/pages/Contacts.jsx
// FULL MOBILE RESPONSIVE CONTACTS PAGE (Formspree ready + phone with flag+code only + required fields + 1000 char limit + popup status)
// Sends to: https://formspree.io/f/xaqqwkqr

import React, { useMemo, useState } from "react";
import { MapPin, Phone, Mail, Clock, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";

const FORMSPREE_URL = "https://formspree.io/f/xaqqwkqr";
const MAX_MESSAGE_LEN = 1000;

// ✅ Only flag + code (no country names)
const COUNTRY_CODES = [
  { code: "+998", flag: "🇺🇿" },
  { code: "+7", flag: "🇰🇿" },
  { code: "+996", flag: "🇰🇬" },
  { code: "+992", flag: "🇹🇯" },
  { code: "+993", flag: "🇹🇲" },
  { code: "+90", flag: "🇹🇷" },
  { code: "+971", flag: "🇦🇪" },
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+49", flag: "🇩🇪" },
];

export default function Contacts() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "+998", // ✅ default Uzbekistan
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Popup / toast state
  const [popup, setPopup] = useState({
    open: false,
    type: "success", // "success" | "error" | "info"
    title: "",
    message: "",
  });

  const openPopup = (type, title, message) => {
    setPopup({ open: true, type, title, message });
  };

  const closePopup = () => setPopup((p) => ({ ...p, open: false }));

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
                  isDark
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
                      : isDark
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
        Validation helpers
  ---------------------------------------------- */
  const normalizePhoneDigits = (value) => value.replace(/[^\d]/g, "");

  const isFormValid = () => {
    const nameOk = form.name.trim().length > 0;
    const emailOk = form.email.trim().length > 0;
    const phoneOk = normalizePhoneDigits(form.phone).length >= 7; // basic minimum
    const msgOk =
      form.message.trim().length > 0 && form.message.length <= MAX_MESSAGE_LEN;
    const codeOk = form.countryCode && form.countryCode.startsWith("+");
    return nameOk && emailOk && phoneOk && msgOk && codeOk;
  };

  /* ----------------------------------------------
        Submit Handler (Formspree)
  ---------------------------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.message.length > MAX_MESSAGE_LEN) {
      openPopup(
        "error",
        t("contactsPage.form.error", { defaultValue: "Error" }),
        `Message is too long. Max ${MAX_MESSAGE_LEN} characters.`
      );
      return;
    }

    if (!isFormValid()) {
      openPopup(
        "info",
        "Incomplete form",
        "Please fill in all required fields before sending."
      );
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: `${form.countryCode} ${normalizePhoneDigits(form.phone)}`,
        message: form.message,
      };

      const res = await axios.post(FORMSPREE_URL, payload, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (res.status >= 200 && res.status < 300) {
        setForm({
          name: "",
          email: "",
          countryCode: "+998",
          phone: "",
          message: "",
        });
        openPopup(
          "success",
          "Sent!",
          "Your message was sent successfully. We will contact you soon."
        );
      } else {
        openPopup("error", "Not sent", "Something went wrong. Please try again.");
      }
    } catch (err) {
      openPopup(
        "error",
        "Not sent",
        "Could not send your message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  /* ----------------------------------------------
        Theme classes
  ---------------------------------------------- */
  const bgMain = isDark
    ? "bg-[#050509] text-gray-100"
    : "bg-[#f5f5f6] text-gray-900";

  const card = isDark
    ? "bg-white/5 border border-white/10 hover:bg-white/10"
    : "bg-white border border-gray-200 shadow-md hover:shadow-lg";

  const formCard = isDark
    ? "bg-white/5 border border-white/10"
    : "bg-white border border-gray-200 shadow-xl";

  const inputStyle = isDark
    ? "bg-white/5 border-white/20 text-gray-100 placeholder-gray-400"
    : "bg-gray-50 border-gray-300 text-gray-800";

  const focusRing = isDark
    ? "focus:ring-yellow-500/40"
    : "focus:ring-gray-900/20";

  // Popup colors
  const popupStyles =
    popup.type === "success"
      ? isDark
        ? "bg-emerald-500/15 border-emerald-400/30 text-emerald-100"
        : "bg-emerald-50 border-emerald-200 text-emerald-900"
      : popup.type === "error"
      ? isDark
        ? "bg-red-500/15 border-red-400/30 text-red-100"
        : "bg-red-50 border-red-200 text-red-900"
      : isDark
      ? "bg-white/10 border-white/15 text-gray-100"
      : "bg-white border-gray-200 text-gray-900";

  return (
    <div className={`relative min-h-screen w-full ${bgMain}`}>
      {/* BG Texture */}
      {theme === "light" && (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url(${paperDataUrl})`,
            mixBlendMode: "multiply",
          }}
        />
      )}

      {/* -------------------------------- POPUP (Modal/Toast) -------------------------------- */}
      <AnimatePresence>
        {popup.open && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-end sm:items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Card */}
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-md rounded-2xl border p-5 shadow-2xl ${popupStyles}`}
            >
              <button
                type="button"
                onClick={closePopup}
                className={`absolute right-3 top-3 rounded-lg p-2 transition ${
                  isDark ? "hover:bg-white/10" : "hover:bg-black/5"
                }`}
                aria-label="Close popup"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pr-10">
                <h3 className="text-lg font-semibold">{popup.title}</h3>
                <p
                  className={`mt-2 text-sm ${
                    isDark ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  {popup.message}
                </p>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={closePopup}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
                    isDark
                      ? "bg-white/10 hover:bg-white/15 border border-white/15"
                      : "bg-gray-900 text-white hover:bg-black"
                  }`}
                >
                  OK
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              isDark
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
                className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full mb-4 ${
                  isDark
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

          <p
            className={`text-sm sm:text-base mb-6 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("contactsPage.form.subtitle")}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* NAME */}
            <div>
              <label className="block text-sm font-medium mb-1">
                {t("contactsPage.form.name")} *
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`w-full p-3 rounded-xl border focus:ring-2 ${focusRing} transition ${inputStyle}`}
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium mb-1">
                {t("contactsPage.form.email")} *
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`w-full p-3 rounded-xl border focus:ring-2 ${focusRing} transition ${inputStyle}`}
              />
            </div>

            {/* PHONE (flag + code only, no names) */}
            <div>
              <label className="block text-sm font-medium mb-1">
                {t("contactsPage.form.phone", { defaultValue: "Phone" })} *
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-3">
                <select
                  name="countryCode"
                  required
                  value={form.countryCode}
                  onChange={(e) =>
                    setForm({ ...form, countryCode: e.target.value })
                  }
                  className={`w-full p-3 rounded-xl border focus:ring-2 ${focusRing} transition ${inputStyle}`}
                  aria-label="Country code"
                >
                  {COUNTRY_CODES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.flag} {c.code}
                    </option>
                  ))}
                </select>

                <input
                  type="tel"
                  name="phone"
                  required
                  inputMode="tel"
                  placeholder={t("contactsPage.form.phonePlaceholder", {
                    defaultValue: "99 123 45 67",
                  })}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={`w-full p-3 rounded-xl border focus:ring-2 ${focusRing} transition ${inputStyle}`}
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm font-medium mb-1">
                {t("contactsPage.form.message")} *{" "}
                <span
                  className={`text-xs font-normal ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  ({form.message.length}/{MAX_MESSAGE_LEN})
                </span>
              </label>

              <textarea
                rows="5"
                name="message"
                required
                maxLength={MAX_MESSAGE_LEN}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`w-full p-3 rounded-xl border focus:ring-2 ${focusRing} transition ${inputStyle}`}
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading || !isFormValid()}
              className={`w-full mt-3 px-6 py-3 rounded-xl text-base font-semibold transition
                ${
                  isDark
                    ? "bg-yellow-500 text-black hover:bg-yellow-400"
                    : "bg-gray-900 text-white hover:bg-black"
                }
                ${loading || !isFormValid() ? "opacity-70 cursor-not-allowed" : ""}
              `}
            >
              {loading
                ? t("contactsPage.form.sending", { defaultValue: "Sending..." })
                : t("contactsPage.form.button", { defaultValue: "Send message" })}
            </button>
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
            className={`${isDark ? "brightness-75" : ""}`}
          />
        </div>
      </section>
    </div>
  );
}
