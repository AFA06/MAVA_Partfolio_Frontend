import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Bell } from "lucide-react";

function Vacancies() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-b-3xl shadow-lg">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold mb-4"
        >
          Join Our Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-lg md:text-xl max-w-2xl"
        >
          We’re always looking for passionate, talented individuals.  
          No vacancies are open right now, but stay tuned!
        </motion.p>
      </section>

      {/* No Vacancies Card */}
      <div className="flex-grow flex items-center justify-center p-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-xl rounded-2xl p-10 max-w-lg text-center border"
        >
          <Briefcase className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-2">No Vacancies Right Now</h2>
          <p className="text-gray-600">
            We don’t have any openings at the moment. Please check back later or subscribe to get notified when new opportunities arrive.
          </p>
        </motion.div>
      </div>

      {/* Subscribe Section */}
      <section className="bg-white py-12 px-6 shadow-inner border-t">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Bell className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">
              Stay Updated on Future Openings
            </h3>
            <p className="text-gray-600 mb-6">
              Drop your email below and we’ll notify you when new positions are available.
            </p>
            <form className="flex flex-col md:flex-row items-center gap-3 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-2/3 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md transition"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Vacancies;
