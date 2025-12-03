import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Components/Homepage/Homepage";
import Portfolio from "./Pages/Portfolio";
import Videos from "./Pages/Videos/Videos";
import CategoryVideos from "./Pages/Videos/CategoryVideos";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";

import "./App.css";

function App() {
  const location = useLocation();

  // Hide Footer only on homepage (optional — adjust if you want always visible)
  const hideFooter = ["/"].includes(location.pathname);

  return (
    <>
      {/* Navbar (always visible now) */}
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/videos/:category" element={<CategoryVideos />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>

      {/* Footer */}
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;
