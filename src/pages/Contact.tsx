import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    document.title = 'مدیریت سلامت نقره‌ای';
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

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
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "تلفن تماس",
      content: "+98 21 1234 5678",
      subtitle: "پاسخگویی ۲۴ ساعته"
    },
    {
      icon: Mail,
      title: "ایمیل",
      content: "info@silverhealth.com",
      subtitle: "پاسخ در کمتر از ۲۴ ساعت"
    },
    {
      icon: MapPin,
      title: "آدرس",
      content: "تهران، خیابان ولیعصر، پلاک ۱۲۳",
      subtitle: "ساختمان تجاری نقره‌ای، طبقه ۸"
    },
    {
      icon: Clock,
      title: "ساعات کاری",
      content: "شنبه تا چهارشنبه: ۸ الی ۱۷",
      subtitle: "پنج‌شنبه: ۸ الی ۱۳"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 pb-4" style={{ marginTop: '15px' }}>
        <div className="blur-sheet rounded-3xl mx-4 sm:mx-6 lg:mx-8 max-w-5xl w-full relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 text-center px-6 sm:px-8 lg:px-12 py-12 lg:py-16"
          >
            <div className="inline-flex items-center space-x-2 space-x-reverse bg-white/20 backdrop-blur-xl border border-white/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-gray-800 font-black">ارتباط با ما</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-6 leading-tight text-gray-800">
              تماس با ما
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-semibold">
              آماده پاسخگویی به سوالات و ارائه مشاوره تخصصی هستیم
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-4" style={{ marginTop: '15px' }}>
        <div className="blur-sheet rounded-3xl mx-4 sm:mx-6 lg:mx-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="container mx-auto px-6 sm:px-8 lg:px-12 py-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-black text-gray-800 mb-6">
                  اطلاعات تماس
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.03, x: 8 }}
                      className="group"
                    >
                      <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl p-6 hover:shadow-2xl transition-all duration-200">
                        <div className="flex items-start space-x-4 space-x-reverse">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-2xl flex items-center justify-center"
                          >
                            <info.icon className="w-6 h-6 text-white" />
                          </motion.div>
                          <div>
                            <h3 className="text-lg font-black text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                              {info.title}
                            </h3>
                            <p className="text-gray-700 font-bold mb-2 text-base">
                              {info.content}
                            </p>
                            <p className="text-gray-600 font-semibold text-sm">
                              {info.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <motion.div
                  variants={itemVariants}
                  className="mt-6 bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl p-6"
                >
                  <h3 className="text-lg font-black text-gray-800 mb-4">
                    موقعیت ما
                  </h3>
                  <div className="h-48 bg-gradient-to-br from-purple-100 to-emerald-100 rounded-2xl flex items-center justify-center">
                    <p className="text-gray-700 font-bold text-base">نقشه موقعیت مکانی</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl p-6">
                  <h2 className="text-2xl font-black text-gray-800 mb-6">
                    فرم تماس
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        whileFocus={{ scale: 1.01 }}
                        className="group"
                      >
                        <label className="flex items-center space-x-2 space-x-reverse text-gray-800 font-black mb-2 text-sm">
                          <User className="w-5 h-5 text-purple-500" />
                          <span>نام و نام خانوادگی</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 font-semibold text-sm"
                          required
                        />
                      </motion.div>

                      <motion.div
                        whileFocus={{ scale: 1.01 }}
                        className="group"
                      >
                        <label className="flex items-center space-x-2 space-x-reverse text-gray-800 font-black mb-2 text-sm">
                          <Mail className="w-5 h-5 text-purple-500" />
                          <span>ایمیل</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 font-semibold text-sm"
                          required
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        whileFocus={{ scale: 1.01 }}
                        className="group"
                      >
                        <label className="flex items-center space-x-2 space-x-reverse text-gray-800 font-black mb-2 text-sm">
                          <Phone className="w-5 h-5 text-purple-500" />
                          <span>شماره تماس</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 font-semibold text-sm"
                        />
                      </motion.div>

                      <motion.div
                        whileFocus={{ scale: 1.01 }}
                        className="group"
                      >
                        <label className="text-gray-800 font-black mb-2 block text-sm">
                          موضوع
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 font-semibold text-sm"
                          required
                        >
                          <option value="">انتخاب موضوع</option>
                          <option value="consultation">مشاوره محصولات</option>
                          <option value="support">پشتیبانی فنی</option>
                          <option value="partnership">همکاری</option>
                          <option value="other">سایر</option>
                        </select>
                      </motion.div>
                    </div>

                    <motion.div
                      whileFocus={{ scale: 1.01 }}
                      className="group"
                    >
                      <label className="text-gray-800 font-black mb-2 block text-sm">
                        پیام شما
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 resize-none font-semibold text-sm"
                        placeholder="پیام خود را بنویسید..."
                        required
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 text-white py-3 rounded-2xl font-black text-base flex items-center justify-center space-x-2 space-x-reverse transition-all duration-200"
                    >
                      <Send className="w-6 h-6" />
                      <span>ارسال پیام</span>
                    </motion.button>
                  </form>
                </div>

                {/* Newsletter Signup */}
                <motion.div
                  variants={itemVariants}
                  className="mt-6 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-3xl p-6 text-white"
                >
                  <h3 className="text-xl font-black mb-4">
                    عضویت در خبرنامه
                  </h3>
                  <p className="mb-6 text-purple-100 font-semibold text-base">
                    از آخرین اخبار و رویدادها مطلع شوید
                  </p>
                  <div className="flex space-x-4 space-x-reverse">
                    <input
                      type="email"
                      placeholder="آدرس ایمیل شما"
                      className="flex-1 px-4 py-3 bg-white/20 border border-white/20 rounded-2xl text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 font-semibold text-sm"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-purple-600 px-6 py-3 rounded-2xl font-black text-sm hover:bg-gray-100 transition-colors"
                    >
                      عضویت
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;