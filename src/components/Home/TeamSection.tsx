import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Heart, Brain, ChevronDown, ChevronUp } from 'lucide-react';

const TeamSection: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

  const departments = [
    {
      id: 'development',
      name: 'توسعه نرم‌افزار',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      members: [
        { name: 'مهندس علی کریمی', position: 'توسعه‌دهنده ارشد فول‌استک' },
        { name: 'مهندس سارا احمدی', position: 'توسعه‌دهنده فرانت‌اند' },
        { name: 'مهندس محمد رضایی', position: 'توسعه‌دهنده بک‌اند' },
        { name: 'مهندس فاطمه نوری', position: 'متخصص DevOps' }
      ]
    },
    {
      id: 'medical',
      name: 'تیم پزشکی',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      members: [
        { name: 'دکتر محمد احمدی', position: 'متخصص IT سلامت' },
        { name: 'دکتر فاطمه رضایی', position: 'متخصص طراحی سیستم‌های پزشکی' },
        { name: 'دکتر علی حسینی', position: 'مشاور پزشکی ارشد' },
        { name: 'دکتر مریم کریمی', position: 'متخصص تله‌طب' }
      ]
    },
    {
      id: 'ai',
      name: 'هوش مصنوعی',
      icon: Brain,
      color: 'from-purple-500 to-indigo-500',
      members: [
        { name: 'دکتر امیر صادقی', position: 'متخصص هوش مصنوعی پزشکی' },
        { name: 'مهندس زهرا محمدی', position: 'متخصص یادگیری ماشین' },
        { name: 'مهندس حسن علوی', position: 'متخصص پردازش تصویر پزشکی' },
        { name: 'مهندس نرگس فرهادی', position: 'متخصص تحلیل داده‌های سلامت' }
      ]
    }
  ];

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

  const toggleDepartment = (departmentId: string) => {
    setSelectedDepartment(selectedDepartment === departmentId ? null : departmentId);
  };

  return (
    <section className="py-4 relative" style={{ marginTop: '15px' }}>
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <div className="blur-sheet rounded-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="container mx-auto px-6 sm:px-8 lg:px-12 py-8"
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 space-x-reverse bg-white/20 backdrop-blur-xl border border-white/30 rounded-full px-4 py-2 mb-4">
                <Users className="w-4 h-4 text-purple-600" />
                <span className="text-gray-800 font-bold text-sm">تیم متخصص ما</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-black mb-4 text-gray-800">
                بخش‌های تخصصی
              </h2>
              <p className="text-base text-gray-700 max-w-2xl mx-auto font-bold">
                تیمی از بهترین متخصصان در سه بخش کلیدی
              </p>
            </motion.div>

            {/* Departments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {departments.map((department) => (
                <motion.div
                  key={department.id}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group cursor-pointer"
                  onClick={() => toggleDepartment(department.id)}
                >
                  <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-6 hover:shadow-lg transition-all duration-200 text-center">
                    {/* Department Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 bg-gradient-to-r ${department.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <department.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    {/* Department Name */}
                    <h3 className="text-lg font-black text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                      {department.name}
                    </h3>
                    
                    {/* Member Count */}
                    <p className="text-gray-700 font-semibold text-sm mb-4">
                      {department.members.length} متخصص
                    </p>

                    {/* Expand Indicator */}
                    <div className="flex items-center justify-center">
                      {selectedDepartment === department.id ? (
                        <ChevronUp className="w-5 h-5 text-purple-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-purple-500" />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Department Members */}
            {selectedDepartment && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-6 overflow-hidden"
              >
                {(() => {
                  const department = departments.find(d => d.id === selectedDepartment);
                  if (!department) return null;

                  return (
                    <div>
                      <h3 className="text-xl font-black text-gray-800 mb-6 text-center">
                        اعضای تیم {department.name}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {department.members.map((member, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.2 }}
                            className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4"
                          >
                            <h4 className="text-base font-black text-gray-800 mb-2">
                              {member.name}
                            </h4>
                            <p className="text-gray-700 font-semibold text-sm">
                              {member.position}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;