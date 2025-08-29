// App.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Homepage from './Components/Homepage/Homepage';
import Portfolio from './Pages/Portfolio';
import Blog from './Pages/Blog';
import Login from './Components/Login_page/Login';
import Signup from './Components/Login_page/Signup';
import Videos from './Pages/Videos/Videos';
import CategoryVideos from './Pages/Videos/CategoryVideos';
import ForgotPassword from './Components/Login_page/ForgotPassword';
import About from './Pages/About';
import Contacts from './Pages/Contacts';

import './App.css';

function App() {
  const location = useLocation();

  const hideNavAndFooter = ['/login', '/signup', '/forgot-password'].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {!hideNavAndFooter && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/videos/:category" element={<CategoryVideos />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>

      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

export default App;
