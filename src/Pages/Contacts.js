// src/Pages/Contacts.jsx
import React, { useRef, useEffect } from "react";
import { animate, stagger } from "animejs";

export default function Contacts() {
  const heroRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animate hero text
    if (heroRef.current) {
      animate(heroRef.current.querySelectorAll(".hero-line"), {
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 800,
        delay: stagger(100),
        easing: "easeOutCubic",
      });
    }

    // Animate info cards on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target, {
              translateY: [30, 0],
              opacity: [0, 1],
              duration: 600,
              easing: "easeOutCubic",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((el) => {
      if (el) {
        el.style.opacity = 0;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <style>{`
        .hero-title { font-size: 3rem; font-weight: 900; letter-spacing: -0.5px; }
        .hero-sub { font-size: 1.1rem; color: #aaa; margin-top: 1rem; max-width: 600px; margin-left: auto; margin-right: auto; }
        .btn-primary { background: linear-gradient(90deg,#7c3aed,#ec4899); padding: 0.8rem 2rem; border-radius: 9999px; font-weight: 600; transition: all 0.3s; }
        .btn-primary:hover { transform: scale(1.05); box-shadow: 0 10px 20px rgba(236,72,153,0.4); }
        .contact-card { background: #1f1f2e; border-radius: 1.25rem; padding: 2rem; box-shadow: 0 10px 30px rgba(0,0,0,0.3); transition: all 0.3s; }
        .contact-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(236,72,153,0.3); }
        .input-field { width: 100%; padding: 1rem; border-radius: 1rem; border: 1px solid #333; background: #111; color: #fff; margin-bottom: 1rem; transition: all 0.3s; }
        .input-field:focus { outline: none; border-color: #ec4899; box-shadow: 0 0 10px rgba(236,72,153,0.5); }
        .textarea-field { min-height: 140px; resize: none; }
        @media (max-width: 768px) { .hero-title { font-size: 2.2rem; } .hero-sub { font-size: 1rem; } }
      `}</style>

      {/* HERO */}
      <section ref={heroRef} className="py-24 text-center relative overflow-hidden">
        <h1 className="hero-line hero-title text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
          Let’s Build Something Amazing
        </h1>
        <p className="hero-line hero-sub">
          Questions, ideas, or collaboration? Reach out and let's create something extraordinary together.
        </p>
        <a href="#contact-form" className="mt-8 inline-block hero-line btn-primary">
          Contact Us
        </a>
      </section>

      {/* CONTACT FORM & INFO */}
      <section id="contact-form" className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* FORM */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent! (demo)");
            e.target.reset();
          }}
          className="flex flex-col bg-gray-800 p-8 rounded-3xl shadow-lg"
        >
          <input className="input-field" type="text" placeholder="Your Name" required />
          <input className="input-field" type="email" placeholder="Your Email" required />
          <textarea className="input-field textarea-field" placeholder="Your Message" required></textarea>
          <button className="btn-primary mt-4 self-start">Send Message</button>
        </form>

        {/* INFO CARDS */}
        <div className="flex flex-col gap-6">
          {[
            { title: "Email", content: "contact@yourcompany.com" },
            { title: "Phone", content: "+1 (555) 123-4567" },
            { title: "Address", content: "123 Innovation Street, Earth" },
          ].map((card, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="contact-card"
            >
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-300">{card.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="w-full h-72 rounded-3xl overflow-hidden shadow-lg border border-white/10">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0198330727663!2d-122.41941528468128!3d37.77492977975916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f22b0b47%3A0x37b8b2c8b9b3b92b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1692965423361!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
