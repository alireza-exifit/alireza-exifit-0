import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowRight, X, Check, Star, Sparkles } from 'lucide-react';
import { products } from '../data/products';

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'مدیریت سلامت نقره‌ای';
  }, []);

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

  const selectedProductData = products.find(p => p.id === selectedProduct);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 pb-4" style={{ marginTop: '15px' }}>
        <div className="blur-sheet rounded-3xl mx-4 sm:mx-6 lg:mx-8 max-w-5xl w-full relative">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 text-center px-6 sm:px-8 lg:px-12 py-12 lg:py-16"
          >
            <div className="inline-flex items-center space-x-2 space-x-reverse bg-white/20 backdrop-blur-xl border border-white/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-gray-800 font-black">محصولات نوآورانه</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-6 leading-tight text-gray-800">
              محصولات ما
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-semibold">
              راه‌حل‌های نوآورانه برای صنعت سلامت
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-4" style={{ marginTop: '15px' }}>
        <div className="blur-sheet rounded-3xl mx-4 sm:mx-6 lg:mx-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="container mx-auto px-6 sm:px-8 lg:px-12 py-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group"
                >
                  <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 h-[440px] flex flex-col">
                    {/* Product Image */}
                    <div className="relative h-44 overflow-hidden flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-black">
                        محصول {product.id}
                      </div>
                    </div>

                    {/* Product Content */}
                    <div className="p-4 flex flex-col flex-grow min-h-0">
                      <h3 className="text-base font-black text-gray-800 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2 h-12 flex items-center">
                        {product.title}
                      </h3>
                      
                      <p className="text-gray-700 mb-3 leading-relaxed font-semibold text-sm line-clamp-2 h-10 flex items-start">
                        {product.description}
                      </p>

                      {/* Features Preview */}
                      <div className="mb-3 h-12 flex items-start flex-shrink-0">
                        <div className="flex flex-wrap gap-1">
                          {product.features.slice(0, 2).map((feature, index) => (
                            <span
                              key={index}
                              className="bg-gradient-to-r from-purple-100 to-emerald-100 text-gray-800 text-xs px-2 py-1 rounded-full font-bold whitespace-nowrap"
                            >
                              {feature}
                            </span>
                          ))}
                          {product.features.length > 2 && (
                            <span className="text-gray-700 text-xs px-2 py-1 font-bold whitespace-nowrap">
                              +{product.features.length - 2} ویژگی دیگر
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Learn More Button */}
                      <div className="mt-auto pt-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedProduct(product.id)}
                          className="w-full bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 text-white py-2.5 rounded-xl font-black text-sm flex items-center justify-center space-x-2 space-x-reverse transition-all duration-200"
                      >
                        <span>اطلاعات کامل</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && selectedProductData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white/90 backdrop-blur-md border border-white/40 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-6 left-6 z-10 w-12 h-12 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all duration-200"
                >
                  <X className="w-6 h-6" />
                </motion.button>

                {/* Product Image */}
                <div className="relative h-72 sm:h-96 overflow-hidden rounded-t-3xl">
                  <img
                    src={selectedProductData.image}
                    alt={selectedProductData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-8 right-8">
                    <div className="bg-gradient-to-r from-purple-500 to-emerald-500 text-white px-4 py-2 rounded-full font-black">
                      محصول {selectedProductData.id}
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-black text-gray-800 mb-4">
                        {selectedProductData.title}
                      </h2>
                      
                      <p className="text-gray-700 leading-relaxed mb-6 text-base font-semibold">
                        {selectedProductData.fullDescription}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center space-x-2 space-x-reverse mb-6">
                        <div className="flex space-x-1 space-x-reverse">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-gray-700 font-bold">(4.8 از 5)</span>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div>
                      <h3 className="text-xl font-black text-gray-800 mb-4">
                        ویژگی‌های کلیدی
                      </h3>
                      
                      <div className="space-y-3 mb-6">
                        {selectedProductData.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.03, duration: 0.2 }}
                            className="flex items-center space-x-3 space-x-reverse"
                          >
                            <div className="w-6 h-6 bg-gradient-to-r from-purple-100 to-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <Check className="w-4 h-4 text-purple-600" />
                            </div>
                            <span className="text-gray-700 font-semibold text-base">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 text-white py-3 rounded-2xl font-black text-base transition-all duration-200"
                        >
                          درخواست مشاوره
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-white/30 backdrop-blur-md border border-white/40 text-gray-700 hover:text-purple-600 py-3 rounded-2xl font-black text-base transition-all duration-200"
                        >
                          دانلود بروشور
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;