import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const useOnScreen = (ref, rootMargin = "0px") => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const current = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );
    if (current) {
      observer.observe(current);
    }
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
};

const IconProject = () => (
  <svg
    className="w-10 h-10 mx-auto mb-4 text-gold"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 6h18M3 14h18M3 18h18" />
  </svg>
);

const IconClients = () => (
  <svg
    className="w-10 h-10 mx-auto mb-4 text-gold"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 21a6.5 6.5 0 0113 0" />
  </svg>
);

const IconRevenue = () => (
  <svg
    className="w-10 h-10 mx-auto mb-4 text-gold"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconAwards = () => (
  <svg
    className="w-10 h-10 mx-auto mb-4 text-gold"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <polygon
      strokeLinecap="round"
      strokeLinejoin="round"
      points="12 2 15 8.5 22 9.3 17 14 18.3 21 12 17.5 5.7 21 7 14 2 9.3 9 8.5"
    />
  </svg>
);

function Homepage() {
  // Refs for animated sections
  const aboutRef = useRef();
  const advantagesRef = useRef();
  const reviewsRef = useRef();
  const contactRef = useRef();

  // On screen detection
  const aboutVisible = useOnScreen(aboutRef, "-100px");
  const advantagesVisible = useOnScreen(advantagesRef, "-100px");
  const reviewsVisible = useOnScreen(reviewsRef, "-100px");
  const contactVisible = useOnScreen(contactRef, "-100px");

  const advantages = [
    {
      icon: <IconProject />,
      title: "352 Projects Completed",
      description:
        "Expertise that turns visions into reality with precision and excellence.",
    },
    {
      icon: <IconClients />,
      title: "567 Satisfied Clients",
      description:
        "Building lasting relationships through trust and outstanding results.",
    },
    {
      icon: <IconRevenue />,
      title: "656M Monthly Revenue",
      description:
        "Delivering high-value projects that drive sustained growth and innovation.",
    },
    {
      icon: <IconAwards />,
      title: "17 Awards Won",
      description:
        "Recognized for creativity, innovation, and architectural excellence.",
    },
  ];

  return (
    <div className="font-sans bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-75"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1650&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-wide mb-4">
            Shaping Space,
          </h1>
          <span
            className="text-indigo-400 drop-shadow-xl font-extrabold text-5xl md:text-7xl leading-tight tracking-wide mb-8 inline-block"
            style={{ width: 'auto', height: 'auto' }}
          >
            Defining Architecture
          </span>
          <p className="max-w-3xl text-lg md:text-2xl text-gray-300 mb-12 px-4">
            Innovative architectural solutions blending form and function for timeless design.
          </p>
          <Link
            to="/portfolio"
            className="w-56 h-14 flex items-center justify-center text-indigo-400 drop-shadow-xl font-semibold tracking-wide rounded-full border-2 border-indigo-400 cursor-pointer
              hover:bg-indigo-400 hover:text-black transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-400"
          >
            Explore Portfolio
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section
        ref={aboutRef}
        className={`max-w-7xl mx-auto px-6 py-20 transition-all duration-700 ease-in-out ${
          aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-bold text-gold mb-8 uppercase border-l-4 border-gold pl-4 max-w-max">
          About Us
        </h2>
        <p className="text-lg leading-relaxed text-gray-300 max-w-4xl mx-auto mb-6">
          Nex Architecture is a team of visionary designers and engineers,
          redefining the urban landscape through precision and innovation. With
          a legacy of over a decade, we have delivered exceptional structures
          that stand as symbols of sustainability and elegance.
        </p>
        <p className="text-lg leading-relaxed text-gray-400 max-w-4xl mx-auto">
          Every project we touch is guided by a philosophy: form follows
          function — with an artistic soul. From corporate towers to boutique
          residential builds, our mission is simple: craft meaningful,
          enduring architecture that enhances lives.
        </p>
      </section>

      {/* Our Advantages Section */}
      <section
        ref={advantagesRef}
        className={`bg-[#1a1a1a] py-20 px-6 transition-all duration-700 ease-in-out ${
          advantagesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-bold text-center text-gold uppercase mb-16">
          Our Advantages
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {advantages.map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              className="bg-black rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-gold mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section
        ref={reviewsRef}
        className={`max-w-7xl mx-auto px-6 py-20 transition-all duration-700 ease-in-out ${
          reviewsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-bold text-gold mb-12 text-center uppercase">
          What Our Clients Say
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <blockquote className="bg-[#111] p-8 rounded-xl shadow-md italic text-gray-300">
            "Nex Architecture transformed our vision into an architectural
            masterpiece. Their attention to detail and creativity is
            unmatched."
            <footer className="mt-4 font-semibold text-gold">— Jane Doe</footer>
          </blockquote>
          <blockquote className="bg-[#111] p-8 rounded-xl shadow-md italic text-gray-300">
            "Professional, innovative, and reliable — the team at Nex delivered
            beyond expectations."
            <footer className="mt-4 font-semibold text-gold">— John Smith</footer>
          </blockquote>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className={`max-w-7xl mx-auto px-6 py-20 transition-all duration-700 ease-in-out ${
          contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-bold text-gold mb-8 uppercase border-l-4 border-gold pl-4 max-w-max">
          Get In Touch
        </h2>
        <p className="max-w-3xl text-gray-400 mb-6">
          Whether you have a project idea, questions, or just want to say
          hello, we’re here to help. Reach out and let’s build something great
          together.
        </p>
        <form className="max-w-3xl">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 mb-4 rounded-lg bg-[#222] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 mb-4 rounded-lg bg-[#222] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <textarea
            placeholder="Your Message"
            rows="6"
            className="w-full p-4 mb-6 rounded-lg bg-[#222] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold"
          ></textarea>
          <button
            type="submit"
            className="px-10 py-4 bg-gold text-black font-semibold rounded-full shadow-xl hover:bg-yellow-600 hover:shadow-[0_0_15px_rgba(255,215,0,0.9)] transition-all duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default Homepage;
