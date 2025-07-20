import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, ChevronDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-4" style={{ marginTop: '15px' }}>
      {/* Hero Content */}
      <div className="blur-sheet rounded-3xl mx-4 sm:mx-6 lg:mx-8 max-w-5xl w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="relative z-10 text-center px-6 sm:px-8 lg:px-12 py-12 lg:py-16 pb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="inline-flex items-center space-x-2 space-x-reverse bg-white/20 backdrop-blur-xl border border-white/30 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-gray-800 font-black">نوآوری در سلامت دیجیتال</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-black mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-600 via-gray-800 to-emerald-600 bg-clip-text text-transparent">
              مدیریت سلامت
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 via-gray-800 to-purple-600 bg-clip-text text-transparent">
              نقره‌ای
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="mb-8"
          >
            <p className="text-xl sm:text-2xl lg:text-3xl font-black text-emerald-600 mb-4">
              تیم حرفه‌ای، خدمات حرفه‌ای
            </p>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-semibold">
              ما با بهره‌گیری از جدیدترین فناوری‌ها و تیمی متخصص، 
              راه‌حل‌های نوآورانه در حوزه فناوری اطلاعات سلامت ارائه می‌دهیم
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 sm:space-x-reverse"
          >
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 text-white px-8 py-4 rounded-2xl font-black text-base shadow-2xl transition-all duration-200 flex items-center space-x-3 space-x-reverse"
              >
                <span>مشاهده محصولات</span>
                <Play className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-xl border border-white/30 text-gray-800 px-8 py-4 rounded-2xl font-black text-base hover:bg-white/30 transition-all duration-200"
              >
                تماس با ما
              </motion.button>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;