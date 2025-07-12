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
    <section id="hero" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden pt-20 text-white">
      {/* Professional Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-indigo-900/20"></div>
        
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 animate-pulse"></div>
        
        {/* Subtle Moving Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Professional Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left relative z-10">
        {/* Left Side - Space for Photo */}
        <div className="flex-1 flex justify-center items-center relative mt-12 md:mt-0 min-h-[32rem]">
          {/* Placeholder for Photo */}
          <div className="w-96 h-96 rounded-full overflow-hidden flex items-center justify-center shadow-2xl border-4 border-gradient-to-r from-blue-400 to-purple-500 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm">
            <div className="text-center text-gray-400">
              <div className="text-6xl mb-4">📸</div>
              <p className="text-lg font-medium">Photo Coming Soon</p>
            </div>
          </div>
        </div>

        {/* Right Side - Name and Content */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start gap-6">
          <div className="flex items-center gap-2">
            <span className="text-4xl md:text-5xl font-bold">Hello, I'm</span>
            <span className="text-5xl text-blue-400 font-bold animate-pulse">.</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="block w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
            <span
              className="block text-5xl md:text-7xl font-extrabold font-dmserif bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-2xl transition-all duration-500 hover:drop-shadow-[0_0_50px_rgba(59,130,246,0.8)] hover:scale-110"
              style={{
                textShadow: '0 4px 32px rgba(59,130,246,0.35)',
              }}
            >
              Prince Raj Sharma
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mt-2 mb-4 text-white">DevOps & Data Science Explorer</h2>
          
          {/* Original Style Banner */}
          <div className="w-full max-w-4xl mt-8 mb-8">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 shadow-xl">
              <div className="text-lg md:text-xl font-mono text-blue-300">
                {typedText}
                <span className="animate-pulse">|</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 mt-8">
            <button 
              onClick={handleConnectClick}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
            >
              Got a project?
            </button>
            <button 
              onClick={handleDownloadResume}
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-400/25"
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