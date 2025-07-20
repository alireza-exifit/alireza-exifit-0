import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
  };

  return (
    <footer className="relative mb-4 mx-4 sm:mx-6 lg:mx-8" style={{ marginTop: '15px' }}>
      <div className="blur-sheet rounded-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="container mx-auto px-8 sm:px-12 lg:px-16 py-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="flex items-center space-x-2 space-x-reverse mb-6">
                <Heart className="w-8 h-8 text-purple-500" />
                <span className="text-xl font-black bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
                  مدیریت سلامت نقره‌ای
                </span>
              </div>
              <p className="text-gray-800 mb-8 leading-relaxed font-semibold text-lg">
                ما متعهد به ارائه بهترین خدمات فناوری اطلاعات در حوزه سلامت هستیم. 
                با تیمی متخصص و تجربه چندین ساله، راه‌حل‌های نوآورانه و کارآمد برای صنعت سلامت ارائه می‌دهیم.
              </p>
              <div className="flex space-x-4 space-x-reverse">
                {[
                  { Icon: Facebook, href: 'https://facebook.com/silverhealth' },
                  { Icon: Twitter, href: 'https://twitter.com/silverhealth' },
                  { Icon: Instagram, href: 'https://instagram.com/silverhealth' },
                  { Icon: Linkedin, href: 'https://linkedin.com/company/silverhealth' }
                ].map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl flex items-center justify-center text-gray-700 hover:text-purple-600 hover:bg-white/40 transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-black mb-6 text-purple-600">دسترسی سریع</h3>
              <ul className="space-y-3">
                {[
                  { label: 'خانه', href: '/' },
                  { label: 'محصولات', href: '/products' },
                  { label: 'رویدادها', href: '/events' },
                  { label: 'تماس با ما', href: '/contact' }
                ].map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-800 hover:text-purple-600 transition-colors duration-200 font-semibold"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-black mb-6 text-purple-600">اطلاعات تماس</h3>
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 space-x-reverse text-gray-800"
                >
                  <MapPin className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span className="text-sm font-semibold">تهران، خیابان ولیعصر، پلاک ۱۲۳</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 space-x-reverse text-gray-800"
                >
                  <Phone className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span className="text-sm font-semibold" dir="ltr">+98 21 1234 5678</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 space-x-reverse text-gray-800"
                >
                  <Mail className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span className="text-sm font-semibold" dir="ltr">info@silverhealth.com</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            variants={itemVariants}
            className="border-t border-gray-300/50 mt-12 pt-8 text-center"
          >
            <p className="text-gray-700 text-sm font-semibold">
              © {currentYear} مدیریت سلامت نقره‌ای. تمامی حقوق محفوظ است.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;