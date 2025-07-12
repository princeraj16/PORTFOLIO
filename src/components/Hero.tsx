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

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Python', 'Docker', 'Kubernetes',
    'AWS', 'Azure', 'GCP', 'Jenkins', 'Git', 'MySQL', 'MongoDB',
    'TensorFlow', 'Pandas', 'NumPy', 'Linux', 'Ansible', 'Terraform'
  ];

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden pt-20 text-white">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles with different animations */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-peach-beige rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-earthy-brown rounded-full animate-bounce opacity-40"></div>
        <div className="absolute top-60 left-1/4 w-3 h-3 bg-olive-cream rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-80 right-1/3 w-2 h-2 bg-peach-beige rounded-full animate-float opacity-50"></div>
        <div className="absolute top-32 left-1/2 w-1 h-1 bg-earthy-brown rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-96 left-1/3 w-2 h-2 bg-peach-beige rounded-full animate-glow opacity-40"></div>
        <div className="absolute top-48 right-1/4 w-1 h-1 bg-olive-cream rounded-full animate-float opacity-50"></div>
        
        {/* Animated lines with glow effect */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-peach-beige to-transparent opacity-30 animate-pulse"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-earthy-brown to-transparent opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-olive-cream to-transparent opacity-15 animate-pulse delay-500"></div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/3 left-1/6 w-4 h-4 border border-peach-beige/20 rotate-45 animate-float"></div>
        <div className="absolute top-2/3 right-1/6 w-6 h-6 border border-earthy-brown/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-olive-cream/20 rotate-45 animate-glow"></div>
      </div>

      <div className="container mx-auto px-6 min-h-screen flex flex-col justify-center items-center text-center relative z-10">
        {/* Main Content */}
        <div className="flex flex-col justify-center items-center gap-6 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="text-4xl md:text-5xl font-bold">Hello, I'm</span>
            <span className="text-5xl text-peach-beige font-bold animate-pulse">.</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="block w-16 h-1 bg-peach-beige rounded-full"></span>
            <span
              className="block text-5xl md:text-7xl font-extrabold font-dmserif bg-gradient-to-r from-peach-beige via-earthy-brown to-olive-cream bg-clip-text text-transparent drop-shadow-2xl transition-all duration-500 hover:drop-shadow-[0_0_50px_rgba(247,197,159,0.8)] hover:scale-110 hover:underline hover:underline-offset-8 hover:bg-gradient-to-r hover:from-olive-cream hover:via-peach-beige hover:to-earthy-brown"
              style={{
                textShadow: '0 4px 32px rgba(247,197,159,0.35)',
              }}
            >
              Prince Raj Sharma
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mt-2 mb-4 text-white">DevOps & Data Science Explorer</h2>
          
          {/* Enhanced Technology Banner */}
          <div className="w-full max-w-6xl mt-8 mb-8 overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of technologies */}
              <div className="flex gap-8 items-center">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-peach-beige/20 to-earthy-brown/20 backdrop-blur-sm border border-peach-beige/30 rounded-full text-peach-beige font-semibold transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-peach-beige/40 hover:to-earthy-brown/40 hover:shadow-lg hover:shadow-peach-beige/25 hover:border-peach-beige/60 cursor-pointer hover:animate-pulse"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-8 items-center">
                {technologies.map((tech, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-peach-beige/20 to-earthy-brown/20 backdrop-blur-sm border border-peach-beige/30 rounded-full text-peach-beige font-semibold transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-peach-beige/40 hover:to-earthy-brown/40 hover:shadow-lg hover:shadow-peach-beige/25 hover:border-peach-beige/60 cursor-pointer hover:animate-pulse"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 mt-8">
            <button 
              onClick={handleConnectClick}
              className="bg-peach-beige text-gray-900 px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-peach-beige/25 animate-float"
            >
              Got a project?
            </button>
            <button 
              onClick={handleDownloadResume}
              className="border-2 border-peach-beige text-peach-beige px-8 py-4 rounded-lg font-semibold hover:bg-peach-beige hover:text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-peach-beige/25 animate-float"
            >
              My resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;