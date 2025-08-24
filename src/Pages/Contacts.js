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
        duration: 900,
        delay: stagger(120),
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
              duration: 700,
              easing: "easeOutCubic",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
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
    <div className="relative min-h-screen bg-gray-950 text-white font-sans overflow-hidden">
      <style>{`
        /* === Base === */
        .hero-title { font-size: 3.5rem; font-weight: 900; letter-spacing: -1px; }
        .hero-sub { font-size: 1.15rem; color: #bbb; margin-top: 1rem; max-width: 650px; margin-left: auto; margin-right: auto; }
        .btn-primary { background: linear-gradient(90deg,#6366f1,#ec4899); padding: 0.9rem 2.2rem; border-radius: 9999px; font-weight: 600; transition: all 0.3s; }
        .btn-primary:hover { transform: scale(1.05); box-shadow: 0 10px 25px rgba(236,72,153,0.45); }
        .contact-card { background: rgba(30,30,40,0.95); border-radius: 1.25rem; padding: 2rem; box-shadow: 0 10px 30px rgba(0,0,0,0.35); transition: all 0.3s; backdrop-filter: blur(10px); }
        .contact-card:hover { transform: translateY(-6px); box-shadow: 0 25px 50px rgba(99,102,241,0.4); }
        .input-field { width: 100%; padding: 1rem; border-radius: 1rem; border: 1px solid #333; background: #111; color: #fff; margin-bottom: 1rem; transition: all 0.3s; }
        .input-field:focus { outline: none; border-color: #6366f1; box-shadow: 0 0 15px rgba(99,102,241,0.5); }
        .textarea-field { min-height: 150px; resize: none; }

        /* === Floating shapes === */
        .floating-shape { position: absolute; border-radius: 50%; opacity: 0.12; filter: blur(60px); animation: float 10s infinite alternate ease-in-out; }
        .shape1 { width: 350px; height: 350px; top: -50px; left: -100px; background: #6366f1; }
        .shape2 { width: 300px; height: 300px; bottom: -80px; right: -100px; background: #ec4899; animation-delay: 3s; }
        .shape3 { width: 200px; height: 200px; top: 40%; left: 70%; background: #06b6d4; animation-delay: 5s; }

        @keyframes float { 0% { transform: translateY(0) translateX(0); } 100% { transform: translateY(-40px) translateX(40px); } }

        /* === Blueprint grid overlay === */
        .blueprint-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
          z-index: 0;
        }

        /* === Rotating cube === */
        .cube {
          position: absolute;
          width: 100px;
          height: 100px;
          top: 60%;
          left: 15%;
          transform-style: preserve-3d;
          animation: spin 12s infinite linear;
          opacity: 0.15;
        }
        .cube div {
          position: absolute;
          width: 100px;
          height: 100px;
          border: 2px solid #4fd1c5;
          background: rgba(0,0,0,0.2);
        }
        .front  { transform: translateZ(50px); }
        .back   { transform: rotateY(180deg) translateZ(50px); }
        .right  { transform: rotateY(90deg) translateZ(50px); }
        .left   { transform: rotateY(-90deg) translateZ(50px); }
        .top    { transform: rotateX(90deg) translateZ(50px); }
        .bottom { transform: rotateX(-90deg) translateZ(50px); }

        @keyframes spin { from { transform: rotateX(0) rotateY(0); } to { transform: rotateX(360deg) rotateY(360deg); } }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.3rem; }
          .hero-sub { font-size: 1rem; }
          .cube { display: none; } /* hide cube on mobile for performance */
        }
      `}</style>

      {/* GRID OVERLAY */}
      <div className="blueprint-grid"></div>

      {/* FLOATING SHAPES */}
      <div className="floating-shape shape1"></div>
      <div className="floating-shape shape2"></div>
      <div className="floating-shape shape3"></div>

      {/* ROTATING ARCHITECTURAL CUBE */}
      <div className="cube z-0">
        <div className="front"></div>
        <div className="back"></div>
        <div className="right"></div>
        <div className="left"></div>
        <div className="top"></div>
        <div className="bottom"></div>
      </div>

      {/* HERO */}
      <section ref={heroRef} className="py-28 text-center relative z-10">
        <h1 className="hero-line hero-title bg-gradient-to-r from-indigo-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          Designing Tomorrow’s Landmarks
        </h1>
        <p className="hero-line hero-sub">
          Every line is a vision, every shape a possibility.  
          Let’s build timeless architecture together.
        </p>
        <a href="#contact-form" className="mt-8 inline-block hero-line btn-primary">
          Start Your Project
        </a>
      </section>

      {/* CONTACT FORM & INFO */}
      <section id="contact-form" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 relative z-10">
        {/* FORM */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent! (demo)");
            e.target.reset();
          }}
          className="flex flex-col bg-gray-900/60 p-8 rounded-3xl shadow-lg backdrop-blur-xl border border-white/10"
        >
          <input className="input-field" type="text" placeholder="Your Name" required />
          <input className="input-field" type="email" placeholder="Your Email" required />
          <textarea className="input-field textarea-field" placeholder="Tell us about your project or vision..." required></textarea>
          <button className="btn-primary mt-4 self-start">Send Message</button>
        </form>

        {/* INFO CARDS */}
        <div className="flex flex-col gap-6">
          {[
            { title: "Studio Email", content: "studio@designatelier.com" },
            { title: "Phone", content: "+998 (90) 123-45-67" },
            { title: "Studio Address", content: "Samarkand Darvoza, Tashkent, Uzbekistan" },
          ].map((card, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="contact-card"
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-300">{card.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="max-w-6xl mx-auto px-6 mb-20 relative z-10">
        <div className="w-full h-80 rounded-3xl overflow-hidden shadow-xl border border-white/10">
          <iframe
            title="Our Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.90573330128!2d69.21626747642244!3d41.31115127130769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9a1b1d12bf%3A0x8f5e4eaf0c1c45e2!2sSamarkand%20Darvoza%20Mall!5e0!3m2!1sen!2suz!4v1692965423361!5m2!1sen!2suz"
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
