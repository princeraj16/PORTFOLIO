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
    <section id="hero" className="min-h-screen relative overflow-hidden pt-20 text-white" style={{ backgroundColor: '#5f0f40' }}>
      {/* Professional Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/40 to-purple-900/30"></div>
        
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 via-purple-600/10 to-pink-600/10 animate-pulse"></div>
        
        {/* Subtle Moving Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Professional Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left relative z-10">
        {/* Left Side - Name and Content */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start gap-6">
          <div className="flex items-center gap-2">
            <span className="text-4xl md:text-5xl font-bold">Hello, I'm</span>
            <span className="text-5xl text-pink-300 font-bold animate-pulse">.</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="block w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></span>
            <span
              className="block text-5xl md:text-7xl font-extrabold font-dmserif bg-gradient-to-r from-pink-300 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl transition-all duration-500 hover:drop-shadow-[0_0_50px_rgba(236,72,153,0.8)] hover:scale-110"
              style={{
                textShadow: '0 4px 32px rgba(236,72,153,0.35)',
              }}
            >
              Prince Raj Sharma
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mt-2 mb-4 text-white">DevOps & Data Science Explorer</h2>
          
          {/* Original Style Banner */}
          <div className="w-full max-w-4xl mt-8 mb-8">
            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-400/30 rounded-2xl p-6 shadow-xl">
              <div className="text-lg md:text-xl font-mono text-pink-200">
                {typedText}
                <span className="animate-pulse">|</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 mt-8">
            <button 
              onClick={handleConnectClick}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25"
            >
              Got a project?
            </button>
            <button 
              onClick={handleDownloadResume}
              className="border-2 border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-400/25"
            >
              My resume
            </button>
          </div>
        </div>

        {/* Right Side - Empty Space for Photo */}
        <div className="flex-1 flex justify-center items-center relative mt-12 md:mt-0 min-h-[32rem]">
          {/* Empty space for future photo */}
        </div>
      </div>
    </section>
  );
};

export default Hero;