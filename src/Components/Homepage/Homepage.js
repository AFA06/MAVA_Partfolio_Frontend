import React from 'react';
import { useTranslation } from 'react-i18next';
import Reviews from '../Reviews/Reviews'; // ✅ Use dynamic reviews here

const Homepage = () => {
  const { t } = useTranslation();

  const images = [
    { url: '/Assets/column_17472345.png', label: t('gallery.project1') },
    { url: '/Assets/rustic_13139121.png', label: t('gallery.project2') },
    { url: '/Assets/thin_12739644.png', label: t('gallery.project3') },
    { url: '/Assets/industry_17601162.png', label: t('gallery.project4') },
    { url: '/Assets/deadline_11350713.png', label: t('gallery.project5') },
    { url: '/Assets/discounts_791887.png', label: t('gallery.project6') },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">{t('hero.title')}</h1>
          <p className="text-xl mb-8">{t('hero.subtitle')}</p>
          <button className="bg-custom-yellow text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition duration-300">
            {t('hero.button')}
          </button>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-[#111] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: '352', label: 'Projects Completed' },
              { value: '567', label: 'Satisfied Clients' },
              { value: '656M', label: 'Monthly Revenue' },
              { value: '17', label: 'Awards Won' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a] p-6 rounded-lg shadow-md flex flex-col items-start justify-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl font-bold text-[#D1AA7E] mb-2">{item.value}</div>
                <div className="uppercase text-sm tracking-widest text-white/80">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <h2 className="text-4xl font-bold text-[#D1AA7E] mb-6 border-l-4 pl-4 border-[#D1AA7E] uppercase">
              About Us
            </h2>
            <p className="text-lg text-white/80 mb-4 leading-relaxed">
              Nex Architecture is a team of visionary designers and engineers, redefining the urban landscape through precision and innovation. With a legacy of over a decade, we have delivered exceptional structures that stand as symbols of sustainability and elegance.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Every project we touch is guided by a philosophy: form follows function — with an artistic soul. From corporate towers to boutique residential builds, our mission is simple: craft meaningful, enduring architecture that enhances lives.
            </p>
          </div>
        </div>
      </section>

      {/* Our Advantages */}
      <section className="py-20 bg-[#F9F9F9] text-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 uppercase">Our Advantages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {images.map((img, index) => (
              <div key={index}>
                <img
                  src={img.url}
                  alt={img.label}
                  className="mx-auto h-12 mb-4 object-cover rounded-md"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/100'; }}
                />
                <p className="text-sm whitespace-pre-line">{img.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-12">{t('gallery.title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <div key={index} className="relative cursor-pointer group">
                <img
                  src={img.url}
                  alt={img.label}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/300x200'; }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                  <span className="text-white text-xl font-semibold">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 Dynamic Reviews Section */}
      <Reviews />

      {/* Contact / Find Us */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">{t('contact.title')}</h2>
          <p className="text-lg mb-6">{t('contact.address')}</p>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!..."
            width="100%"
            height="400"
            className="rounded-xl border-none shadow-lg"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
