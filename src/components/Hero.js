import React, { useState, useEffect } from 'react';
import { Trophy, Camera, Zap, ArrowRight, Play } from 'lucide-react';

const Hero = ({ theme, setShowRegistration }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  
  const rotatingWords = ['Victory', 'Glory', 'Triumph', 'Excellence'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section 
      id='home' 
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient orb that follows mouse */}
      <div 
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none transition-all duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(236,72,153,0.2) 50%, transparent 70%)',
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-6 sm:mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className={`${theme.cardBg} ${theme.border} border rounded-full px-4 sm:px-6 py-2 flex items-center gap-2 ${theme.buttonGlow}`}>
            <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className={`text-xs sm:text-sm font-medium ${theme.text}`}>
              Professional Sports Photography
            </span>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 animate-pulse"></div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center space-y-6 sm:space-y-8 mb-8 sm:mb-12">
          <h1 className={`text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold ${theme.text} leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000`}>
            Capture Every
            <span className="block mt-2 sm:mt-3 relative">
              <span className="inline-block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent animate-in fade-in zoom-in duration-700" 
                    style={{ animationDelay: '200ms' }}>
                Moment of
              </span>
            </span>
            <span className="block mt-2 sm:mt-3 relative h-[1.2em] overflow-hidden">
              <span 
                className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent transition-all duration-700"
                style={{
                  opacity: 1,
                  transform: `translateY(${currentWord * -100}%)`,
                }}
              >
                {rotatingWords.map((word, index) => (
                  <span key={word} className="block" style={{ height: '1.2em' }}>
                    {word}
                  </span>
                ))}
              </span>
            </span>
          </h1>

          <p className={`${theme.subtext} text-base sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light animate-in fade-in slide-in-from-bottom-4 duration-1000`}
             style={{ animationDelay: '400ms' }}>
            From the intensity of competition to the joy of victory, we freeze time and create 
            <span className={`font-semibold ${theme.accent}`}> unforgettable visual stories</span> that last forever
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000"
             style={{ animationDelay: '600ms' }}>
          <button
            onClick={() => setShowRegistration(true)}
            className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-white rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-fuchsia-500/50 overflow-hidden w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center justify-center gap-2">
              <Trophy className="w-5 h-5" />
              Book Tournament Coverage
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>

          <button
            className={`group px-8 sm:px-10 py-4 sm:py-5 ${theme.cardBg} ${theme.text} ${theme.border} border rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 ${theme.buttonGlow} w-full sm:w-auto`}
          >
            <span className="flex items-center justify-center gap-2">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Showreel
            </span>
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 lg:mt-20">
          {[
            { icon: Camera, title: '4K Quality', desc: 'Crystal clear shots' },
            { icon: Zap, title: 'Fast Delivery', desc: 'Same day processing' },
            { icon: Trophy, title: 'Award Winning', desc: 'Recognized excellence' }
          ].map((feature, index) => (
            <div 
              key={feature.title}
              className={`${theme.cardBg} ${theme.border} border rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300 ${theme.buttonGlow} cursor-pointer animate-in fade-in slide-in-from-bottom-4`}
              style={{ animationDelay: `${800 + index * 100}ms` }}
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className={`${theme.text} font-semibold text-lg mb-2`}>{feature.title}</h3>
              <p className={`${theme.subtext} text-sm`}>{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 max-w-3xl mx-auto">
          {[
            { number: '500+', label: 'Events Covered' },
            { number: '50K+', label: 'Photos Captured' },
            { number: '100%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-in fade-in zoom-in duration-700"
              style={{ animationDelay: `${1100 + index * 100}ms` }}
            >
              <div className={`text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className={`${theme.subtext} text-xs sm:text-sm font-medium`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;