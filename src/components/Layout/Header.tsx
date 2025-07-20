import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'خانه' },
    { path: '/products', label: 'محصولات' },
    { path: '/events', label: 'رویدادها' },
    { path: '/contact', label: 'تماس با ما' }
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed top-4 z-50 mb-4"
      style={{
        left: '30px',
        right: '30px',
        maxWidth: 'calc(100vw - 60px)'
      }}
    >
      <div className="blur-sheet rounded-2xl shadow-xl max-w-7xl mx-auto">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 lg:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 space-x-reverse flex-shrink-0 logo-link">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
                className="flex items-center space-x-2 space-x-reverse focus:outline-none"
              >
                <Heart className="w-6 h-6 text-purple-500" />
                <span className="text-base sm:text-lg lg:text-xl font-black bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent whitespace-nowrap">
                  مدیریت سلامت نقره‌ای
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2 space-x-reverse">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-sm font-black transition-all duration-300 whitespace-nowrap px-4 py-2 rounded-xl min-w-[80px] text-center ${
                    location.pathname === item.path
                      ? 'text-purple-600 bg-white/20 backdrop-blur-xl'
                      : 'text-gray-800 hover:text-purple-600 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
             className="md:hidden p-2 rounded-2xl bg-white/20 backdrop-blur-xl hover:bg-white/30 transition-all duration-200 flex-shrink-0 flex items-center justify-center"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden bg-white/15 backdrop-blur-md rounded-2xl mt-4 mb-2 mx-2 overflow-hidden shadow-2xl border border-white/20"
              >
                <div className="py-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03, duration: 0.2 }}
                      className="mx-3 mb-2 last:mb-0"
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-3 text-sm font-black transition-all duration-200 focus:outline-none rounded-xl text-center ${
                          location.pathname === item.path
                            ? 'text-purple-600 bg-white/20 backdrop-blur-xl'
                            : 'text-gray-800 hover:text-purple-600 hover:bg-white/10'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;