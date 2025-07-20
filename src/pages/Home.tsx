import React, { useEffect } from 'react';
import Hero from '../components/Home/Hero';
import TeamSection from '../components/Home/TeamSection';
import FutureSection from '../components/Home/FutureSection';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'مدیریت سلامت نقره‌ای';
  }, []);

  return (
    <div>
      <Hero />
      <TeamSection />
      <FutureSection />
    </div>
  );
};

export default Home;