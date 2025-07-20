import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Target, Rocket, Users, TrendingUp, Award, Sparkles } from 'lucide-react';

const FutureSection: React.FC = () => {
  const plans = [
    {
      icon: Target,
      title: "توسعه هوش مصنوعی",
      description: "پیاده‌سازی الگوریتم‌های هوش مصنوعی برای تشخیص بهتر بیماری‌ها",
      timeline: "ماه اول تا سوم"
    },
    {
      icon: Rocket,
      title: "اپلیکیشن موبایل",
      description: "راه‌اندازی اپلیکیشن موبایل برای دسترسی آسان‌تر بیماران",
      timeline: "ماه سوم تا چهارم"
    },
    {
      icon: Users,
      title: "شبکه پزشکان",
      description: "ایجاد شبکه‌ای از پزشکان متخصص برای مشاوره آنلاین",
      timeline: "ماه چهارم تا پنجم"
    },
    {
      icon: TrendingUp,
      title: "تحلیل داده‌ها",
      description: "سیستم پیشرفته تحلیل داده‌های سلامت و ارائه گزارشات",
      timeline: "ماه پنجم تا ششم"
    },
    {
      icon: Award,
      title: "استانداردسازی",
      description: "دریافت گواهینامه‌های بین‌المللی کیفیت و امنیت",
      timeline: "ماه ششم"
    }
  ];

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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } }
  };

  return (
    <section className="py-4 relative" style={{ marginTop: '15px' }}>
      <div className="blur-sheet rounded-3xl mx-4 sm:mx-6 lg:mx-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="container mx-auto px-6 sm:px-8 lg:px-12 py-8"
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <div className="inline-flex items-center space-x-2 space-x-reverse bg-white/20 backdrop-blur-xl border border-white/30 rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-gray-800 font-black">برنامه‌های آینده</span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-black mb-6 text-gray-800">
              نقشه راه نوآوری
            </h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto font-semibold">
              نگاهی به برنامه‌های توسعه و نوآوری ما در شش ماه آینده
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group"
              >
                <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-6 hover:bg-white/40 transition-all duration-200">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-2xl flex items-center justify-center"
                    >
                      <plan.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-black text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                        {plan.title}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed font-semibold">
                        {plan.description}
                      </p>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Calendar className="w-5 h-5 text-purple-500" />
                        <span className="text-purple-600 font-bold">
                          {plan.timeline}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 text-white px-8 py-4 rounded-2xl font-black text-base shadow-2xl transition-all duration-200"
            >
              جزئیات بیشتر
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureSection;