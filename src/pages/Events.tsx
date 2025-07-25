import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink, Users, Sparkles, X } from 'lucide-react';
import { events } from '../data/events';

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = React.useState<number | null>(null);

  useEffect(() => {
    document.title = 'مدیریت سلامت نقره‌ای';
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
  };

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
              <span className="text-gray-800 font-black">رویدادهای علمی</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-6 leading-tight text-gray-800">
              رویدادهای آینده
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-semibold">
              به برنامه‌های آموزشی و علمی ما بپیوندید
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-4" style={{ marginTop: '15px' }}>
        <div className="blur-sheet rounded-3xl mx-4 sm:mx-6 lg:mx-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="container mx-auto px-8 sm:px-12 lg:px-16 py-8"
          >
            <div className="space-y-8">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -8 }}
                  className="group"
                >
                  <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-200 min-h-[320px]">
                    <div className="lg:flex">
                      {/* Event Image */}
                      <div className="lg:w-1/3 h-64 lg:h-80 relative overflow-hidden flex-shrink-0">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-6 left-6 bg-gradient-to-r from-purple-500 to-emerald-500 text-white px-4 py-2 rounded-full font-black">
                          رویداد {index + 1}
                        </div>
                      </div>

                      {/* Event Content */}
                      <div className="lg:w-2/3 p-6 flex flex-col justify-between min-h-0">
                        <div className="flex-grow">
                          <h3 className="text-xl lg:text-2xl font-black text-gray-800 mb-4 group-hover:text-purple-600 transition-colors line-clamp-2">
                            {event.title}
                          </h3>
                        
                          <p className="text-gray-700 mb-6 leading-relaxed text-base font-semibold line-clamp-3">
                            {event.description}
                          </p>

                          {/* Event Details */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div className="flex items-center space-x-3 space-x-reverse">
                              <Calendar className="w-5 h-5 text-purple-500" />
                              <div>
                                <p className="font-black text-gray-800 text-sm">تاریخ</p>
                                <p className="text-gray-700 font-semibold text-sm">{event.date}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-3 space-x-reverse">
                              <Clock className="w-5 h-5 text-purple-500" />
                              <div>
                                <p className="font-black text-gray-800 text-sm">زمان</p>
                                <p className="text-gray-700 font-semibold text-sm">{event.time}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-3 space-x-reverse">
                              <MapPin className="w-5 h-5 text-purple-500" />
                              <div>
                                <p className="font-black text-gray-800 text-sm">مکان</p>
                                <p className="text-gray-700 font-semibold text-sm line-clamp-1">{event.location}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 sm:space-x-reverse flex-shrink-0">
                          <motion.a
                            href={event.registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 text-white px-5 py-2.5 rounded-2xl font-black text-sm transition-all duration-200 whitespace-nowrap"
                          >
                            <Users className="w-5 h-5" />
                            <span>ثبت‌نام در رویداد</span>
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                          
                          <motion.button
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedEvent(event.id)}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-white/30 backdrop-blur-md border border-white/40 text-gray-700 hover:text-purple-600 px-5 py-2.5 rounded-2xl font-black text-sm transition-all duration-200 whitespace-nowrap"
                          >
                            <span>اطلاعات کامل</span>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Future Events Note */}
            <motion.div
              variants={itemVariants}
              className="mt-16 text-center"
            >
              <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl p-6 max-w-2xl mx-auto">
                <h3 className="text-xl font-black text-gray-800 mb-4">
                  رویدادهای بیشتر در راه است
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed font-semibold text-base">
                  برای اطلاع از جدیدترین رویدادها و برنامه‌های آموزشی، در خبرنامه ما عضو شوید
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 text-white px-8 py-3 rounded-2xl font-black text-base transition-all duration-200"
                >
                  عضویت در خبرنامه
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white/90 backdrop-blur-md border border-white/40 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedEvent(null)}
                className="absolute top-6 left-6 z-10 w-12 h-12 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all duration-200"
              >
                <X className="w-6 h-6" />
              </motion.button>

              {(() => {
                const event = events.find(e => e.id === selectedEvent);
                if (!event) return null;

                return (
                  <>
                    {/* Event Image */}
                    <div className="relative h-72 sm:h-96 overflow-hidden rounded-t-3xl">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-8 right-8">
                        <div className="bg-gradient-to-r from-purple-500 to-emerald-500 text-white px-4 py-2 rounded-full font-black">
                          رویداد {event.id}
                        </div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="p-6 sm:p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div>
                          <h2 className="text-2xl sm:text-3xl font-black text-gray-800 mb-4">
                            {event.title}
                          </h2>
                          
                          <p className="text-gray-700 leading-relaxed mb-6 text-base font-semibold">
                            {event.description}
                          </p>

                          {/* Event Status */}
                          <div className="flex items-center space-x-2 space-x-reverse mb-6">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-green-600 font-bold">ثبت‌نام باز است</span>
                          </div>
                        </div>

                        {/* Right Column */}
                        <div>
                          <h3 className="text-xl font-black text-gray-800 mb-4">
                            جزئیات رویداد
                          </h3>
                          
                          <div className="space-y-4 mb-6">
                            <div className="flex items-center space-x-3 space-x-reverse p-4 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl">
                              <Calendar className="w-6 h-6 text-purple-500 flex-shrink-0" />
                              <div>
                                <p className="font-black text-gray-800 text-sm">تاریخ برگزاری</p>
                                <p className="text-gray-700 font-semibold">{event.date}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-3 space-x-reverse p-4 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl">
                              <Clock className="w-6 h-6 text-purple-500 flex-shrink-0" />
                              <div>
                                <p className="font-black text-gray-800 text-sm">زمان برگزاری</p>
                                <p className="text-gray-700 font-semibold">{event.time}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-3 space-x-reverse p-4 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl">
                              <MapPin className="w-6 h-6 text-purple-500 flex-shrink-0" />
                              <div>
                                <p className="font-black text-gray-800 text-sm">مکان برگزاری</p>
                                <p className="text-gray-700 font-semibold">{event.location}</p>
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="space-y-4">
                            <motion.a
                              href={event.registrationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="w-full bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 text-white py-3 rounded-2xl font-black text-base transition-all duration-200 flex items-center justify-center space-x-2 space-x-reverse"
                            >
                              <Users className="w-5 h-5" />
                              <span>ثبت‌نام در رویداد</span>
                              <ExternalLink className="w-4 h-4" />
                            </motion.a>
                            
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setSelectedEvent(null)}
                              className="w-full bg-white/30 backdrop-blur-md border border-white/40 text-gray-700 hover:text-purple-600 py-3 rounded-2xl font-black text-base transition-all duration-200"
                            >
                              بستن
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Events;