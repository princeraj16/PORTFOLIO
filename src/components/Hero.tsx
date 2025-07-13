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
    <section id="hero" className="min-h-screen relative overflow-hidden pt-20 text-white" style={{ backgroundColor: '#001524' }}>
      <div className="container mx-auto px-6 min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left relative z-10">
        {/* Left Side - Name and Content */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start gap-6">
          <div className="flex items-center gap-2">
            <span className="text-4xl md:text-5xl font-bold">Hello, I'm</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="block w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
            <span
              className="block text-5xl md:text-7xl font-extrabold font-dmserif bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl transition-all duration-500 hover:drop-shadow-[0_0_50px_rgba(34,211,238,0.8)] hover:scale-110"
              style={{
                textShadow: '0 4px 32px rgba(34,211,238,0.35)',
              }}
            >
              Prince Raj Sharma
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mt-2 mb-4 text-white">DevOps & Data Science Explorer</h2>
          
          {/* Original Style Banner */}
          <div className="w-full max-w-4xl mt-8 mb-8">
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6 shadow-xl">
              <div className="text-lg md:text-xl font-mono text-cyan-200">
                {typedText}
                <span className="animate-pulse">|</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 mt-8">
            <button 
              onClick={handleConnectClick}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25"
            >
              Got a project?
            </button>
            <a 
              href="/resume.pdf" 
              download
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25 flex items-center gap-2"
            >
              My resume
            </a>
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