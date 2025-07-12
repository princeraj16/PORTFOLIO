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
      {/* Professional Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/30 to-blue-900/20 animate-pulse"></div>
        
        {/* Dynamic Moving Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-cyan-600/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-800/5 via-transparent to-cyan-800/5 animate-pulse delay-1000"></div>
        
        {/* Floating Animated Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-cyan-400/3 to-blue-400/3 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Animated Geometric Shapes */}
        <div className="absolute top-20 left-20 w-8 h-8 border border-cyan-400/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-32 w-6 h-6 border border-blue-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-cyan-400/10 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border border-blue-400/15 rotate-45 animate-spin-slow"></div>
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-300/15 to-transparent animate-pulse delay-500"></div>
        </div>

        {/* Animated Particles */}
        <div className="absolute top-16 left-16 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-32 right-24 w-1 h-1 bg-blue-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute top-48 left-1/3 w-3 h-3 bg-cyan-300 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-64 right-1/3 w-2 h-2 bg-blue-300 rounded-full animate-float opacity-50"></div>
        <div className="absolute top-80 left-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-96 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-glow opacity-40"></div>
        
        {/* Professional Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34,211,238,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Animated Wave Effect */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent animate-pulse"></div>
        
        {/* Floating Tech Icons */}
        <div className="absolute top-1/4 right-1/4 text-cyan-400/20 text-4xl animate-float">⚡</div>
        <div className="absolute bottom-1/3 left-1/4 text-blue-400/20 text-3xl animate-bounce">🔧</div>
        <div className="absolute top-2/3 right-1/3 text-cyan-300/20 text-2xl animate-pulse">🚀</div>
      </div>

      <div className="container mx-auto px-6 min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left relative z-10">
        {/* Left Side - Name and Content */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start gap-6">
          <div className="flex items-center gap-2">
            <span className="text-4xl md:text-5xl font-bold">Hello, I'm</span>
            <span className="text-5xl text-cyan-300 font-bold animate-pulse">.</span>
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
            <button 
              onClick={handleDownloadResume}
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25"
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