import React from 'react';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              background: `radial-gradient(circle, ${
                i % 4 === 0 ? 'hsla(280, 80%, 60%, 0.6)' : 
                i % 4 === 1 ? 'hsla(200, 75%, 65%, 0.5)' : 
                i % 4 === 2 ? 'hsla(320, 85%, 70%, 0.4)' :
                'hsla(180, 70%, 65%, 0.5)'
              } 0%, transparent 70%)`,
              left: `${10 + (i * 15) + (Math.sin(scrollY * 0.002 + i) * 10)}%`,
              top: `${10 + (i * 12) + (Math.cos(scrollY * 0.002 + i) * 8)}%`,
              transform: `
                translateY(${scrollY * (0.1 + i * 0.05)}px) 
                rotate(${scrollY * 0.1 + mouseX * 0.02}deg)
                scale(${1 + Math.sin(scrollY * 0.003 + i) * 0.2})
              `,
              transition: 'transform 0.2s ease-out'
            }}
          />
        ))}
      </div>
      
      <Header />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;