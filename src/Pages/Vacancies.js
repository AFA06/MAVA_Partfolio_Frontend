import React, { useEffect, useRef } from "react";
import { animate } from "animejs";
import useNavbarHeight from "../hooks/useNavbarHeight";

function Vacancies() {
  const navbarHeight = useNavbarHeight();
  const titleRef = useRef(null);
  const cardRef = useRef(null);
  const orbRefs = [useRef(null), useRef(null)];
  const canvasRef = useRef(null);

  useEffect(() => {
    // Animate title
    if (titleRef.current) {
      animate(titleRef.current, {
        opacity: [0, 1],
        translateY: [-50, 0],
        duration: 1200,
        easing: "easeOutExpo",
      });
    }

    // Animate card
    if (cardRef.current) {
      animate(cardRef.current, {
        opacity: [0, 1],
        scale: [0.9, 1],
        delay: 400,
        duration: 1200,
        easing: "easeOutElastic(1, .6)",
      });
    }

    // Floating orb animations
    orbRefs.forEach((ref, index) => {
      if (ref.current) {
        animate(ref.current, {
          translateX: [0, index === 0 ? 40 : -40],
          translateY: [0, index === 0 ? 30 : -30],
          direction: "alternate",
          loop: true,
          duration: 6000,
          easing: "easeInOutSine",
        });
      }
    });

    // 🌌 Starfield particle background
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({ length: 120 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.2,
      }));
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const updateStars = () => {
      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
    };

    const animateStars = () => {
      drawStars();
      updateStars();
      requestAnimationFrame(animateStars);
    };

    resizeCanvas();
    animateStars();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center px-6 overflow-hidden"
      style={{
        paddingTop: navbarHeight,
        background:
          "linear-gradient(135deg, #0a0a12 0%, #141625 50%, #1d1f33 100%)",
      }}
    >
      {/* 🌌 Starfield Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ width: "100%", height: "100%" }}
      ></canvas>

      {/* Glow Orbs */}
      <div
        ref={orbRefs[0]}
        className="absolute top-20 left-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-30"
      ></div>
      <div
        ref={orbRefs[1]}
        className="absolute bottom-20 right-10 w-52 h-52 bg-blue-500 rounded-full blur-3xl opacity-30"
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center">
        <h1
          ref={titleRef}
          className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-8"
        >
          🚀 Join Our Team
        </h1>

        <div
          ref={cardRef}
          className="p-10 rounded-2xl shadow-2xl border border-white/20 bg-white/10 backdrop-blur-xl text-white"
        >
          <h2 className="text-2xl font-semibold mb-4">
            Currently No Vacancies
          </h2>
          <p className="text-lg opacity-80 mb-6">
            We don’t have open roles at the moment, but we’re always looking for
            passionate and talented people.  
            Stay tuned — new opportunities are coming soon!
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-bold rounded-xl shadow-lg hover:scale-105 transition-transform">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Vacancies;
