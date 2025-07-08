import React, { useState, useEffect } from 'react';
import { Download, MessageCircle, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const skills = 'Git · Docker · Python · AWS · Jenkins · ReactJS · Kubernetes · Linux · TypeScript · Node.js · MySQL · Pandas · NumPy · TensorFlow · Azure · GCP';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < skills.length) {
        setTypedText(skills.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const handleDownloadResume = () => {
    // This would typically link to a resume file
    window.open('#', '_blank');
  };

  const handleConnectClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden pt-20 text-white">
      <div className="container mx-auto px-6 min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left relative z-10">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start gap-6">
          <div className="flex items-center gap-2">
            <span className="text-4xl md:text-5xl font-bold">Hello</span>
            <span className="text-5xl text-peach-beige font-bold">.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="block w-16 h-1 bg-peach-beige rounded-full md:ml-0 ml-auto"></span>
            <span className="text-2xl md:text-3xl font-light">Hello, I'm</span>
            <span
              className="block text-5xl md:text-7xl font-extrabold font-playfair bg-gradient-to-r from-peach-beige via-earthy-brown to-olive-cream bg-clip-text text-transparent drop-shadow-2xl transition-all duration-500 hover:drop-shadow-[0_0_50px_rgba(247,197,159,0.8)] hover:scale-110 hover:underline hover:underline-offset-8 hover:bg-gradient-to-r hover:from-olive-cream hover:via-peach-beige hover:to-earthy-brown"
              style={{
                textShadow: '0 4px 32px rgba(247,197,159,0.35)',
              }}
            >
              Prince Raj Sharma
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mt-2 mb-4 text-white">DevOps & Data Science Explorer</h2>
          <div className="flex gap-4 mt-4">
            <button className="bg-peach-beige text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-opacity-90 transition-all duration-300">Got a project?</button>
            <button className="border-2 border-peach-beige text-peach-beige px-6 py-3 rounded-lg font-semibold hover:bg-peach-beige hover:text-gray-900 transition-all duration-300">My resume</button>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex justify-center items-center relative mt-12 md:mt-0">
          {/* Glowing Ring and Arrows */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="160" stroke="#F7C59F" strokeWidth="16" fill="none" opacity="0.3" />
              <circle cx="200" cy="200" r="130" stroke="#F7C59F" strokeWidth="4" fill="none" opacity="0.2" />
            </svg>
            {/* Left Arrow */}
            <svg className="absolute left-0 top-1/2 -translate-y-1/2" width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M15 19l-7-7 7-7" stroke="#F7C59F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {/* Right Arrow */}
            <svg className="absolute right-0 top-1/2 -translate-y-1/2" width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="#F7C59F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          {/* Profile Photo */}
          <div className="relative z-10 w-64 h-64 rounded-full overflow-hidden flex items-center justify-center shadow-2xl border-4 border-peach-beige bg-gradient-to-br from-peach-beige/30 to-transparent transition-transform duration-700 hover:scale-110 hover:shadow-[0_0_60px_20px_rgba(247,197,159,0.5)]">
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Prince Raj Sharma" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;