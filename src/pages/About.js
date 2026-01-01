import React, { useState } from 'react';
import { Camera, Rocket, Star, Crown, Aperture, Film, Globe, Palette, Zap, TrendingUp, Users, CheckCircle } from 'lucide-react';

const About = ({ theme, darkMode, setShowRegistration }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const achievements = [
    { number: '500K+', label: 'Frames', icon: Camera, color: 'from-pink-500 to-red-500', emoji: '📸' },
    { number: '250+', label: 'Events', icon: Rocket, color: 'from-blue-500 to-purple-500', emoji: '🚀' },
    { number: '98%', label: 'Happy', icon: Star, color: 'from-amber-500 to-orange-500', emoji: '⭐' },
    { number: '24/7', label: 'Support', icon: Crown, color: 'from-emerald-500 to-cyan-500', emoji: '👑' }
  ];

  const services = [
    {
      icon: Aperture,
      title: 'Sports Coverage',
      description: 'Cinematic highlights that make athletes look legendary. Every game becomes a blockbuster.',
      tags: ['8K', 'Slow-Mo', 'Instant'],
      gradient: 'from-rose-500 to-fuchsia-500',
      emoji: '🎬'
    },
    {
      icon: Film,
      title: 'Event Documentation',
      description: 'Turn any event into unforgettable content. From galas to festivals—we capture the vibe.',
      tags: ['Multi-Cam', 'Live', 'Same-Day'],
      gradient: 'from-violet-500 to-indigo-500',
      emoji: '🎪'
    },
    {
      icon: Globe,
      title: 'Brand Content',
      description: 'Scroll-stopping videos that convert. Marketing content that actually drives results.',
      tags: ['Social First', 'Ad-Ready', 'ROI'],
      gradient: 'from-cyan-500 to-blue-500',
      emoji: '💎'
    },
    {
      icon: Palette,
      title: 'Aerial Perspectives',
      description: 'Drone shots that wow. Sky-high storytelling with perspectives ground cameras can\'t match.',
      tags: ['FAA Licensed', '4K Drones', 'FPV'],
      gradient: 'from-amber-500 to-red-500',
      emoji: '🎨'
    }
  ];

  const benefits = [
    { icon: Zap, title: 'Fast', desc: '48hr turnaround' },
    { icon: Crown, title: 'Premium', desc: 'Cinema-grade' },
    { icon: TrendingUp, title: 'Results', desc: 'Content converts' },
    { icon: Users, title: 'VIP', desc: 'White glove care' },
    { icon: CheckCircle, title: 'Guaranteed', desc: '100% satisfaction' }
  ];

  return (
    <div id='about' className="space-y-16 sm:space-y-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${darkMode ? 'from-violet-400 to-fuchsia-400' : 'from-purple-500 to-pink-500'} animate-pulse`}></div>
            <span className={`text-xs font-bold uppercase tracking-widest ${theme.accent}`}>
              Creating Excellence
            </span>
          </div>

          <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-black ${theme.text} leading-tight`}>
            We Create
            <span className="block mt-2 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Viral Content
            </span>
          </h1>

          <p className={`${theme.subtext} text-lg sm:text-xl max-w-3xl mx-auto`}>
            Visual content that stops thumbs mid-scroll and turns events into <span className={`font-bold ${theme.accent}`}>"you had to be there"</span> moments.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`${theme.cardBg} ${theme.border} border rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center group cursor-pointer transition-all duration-500 ${theme.buttonGlow} ${
                hoveredCard === index ? 'scale-110 z-10' : 'scale-100'
              }`}
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
              
              <div className="relative">
                <div className="text-4xl sm:text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {achievement.emoji}
                </div>
                <h3 className={`text-3xl sm:text-4xl font-black ${theme.text} mb-1`}>
                  {achievement.number}
                </h3>
                <p className={`${theme.subtext} text-sm font-medium`}>{achievement.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black ${theme.text} mb-3`}>
            What We <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Deliver</span>
          </h2>
          <p className={`${theme.subtext} text-base sm:text-lg`}>
            Premium content solutions for every need
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${theme.cardBg} ${theme.border} border rounded-2xl sm:rounded-3xl p-6 sm:p-8 group hover:scale-[1.02] transition-all duration-500 ${theme.buttonGlow} relative overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`}></div>
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <service.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {service.emoji}
                  </div>
                </div>
                
                <h3 className={`text-xl sm:text-2xl font-black ${theme.text} mb-3`}>{service.title}</h3>
                <p className={`${theme.subtext} mb-4 text-sm sm:text-base`}>{service.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className={`text-xs font-bold px-3 py-1 rounded-full ${darkMode ? 'bg-white/10' : 'bg-gray-900/10'} ${theme.text}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className={`${darkMode ? 'bg-white/5' : 'bg-gray-900/5'} py-12 sm:py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className={`text-3xl sm:text-4xl font-black ${theme.text}`}>
              Why <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Choose Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`${theme.cardBg} ${theme.border} border rounded-2xl p-4 sm:p-6 text-center group hover:scale-105 transition-all duration-300 ${theme.buttonGlow} cursor-pointer`}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${darkMode ? 'from-violet-500 to-fuchsia-500' : 'from-purple-500 to-pink-500'} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <h3 className={`${theme.text} font-black mb-1 text-sm sm:text-base`}>{benefit.title}</h3>
                <p className={`${theme.subtext} text-xs`}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-600"></div>
          
          <div className="relative p-8 sm:p-12 lg:p-16 text-center text-white">
            <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">🔥</div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
              Ready to Go Viral?
            </h2>
            
            <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
              Let's create content that stops scrolls and drives results
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button 
                onClick={() => setShowRegistration(true)}
                className="px-8 sm:px-10 py-4 bg-white text-fuchsia-600 rounded-full font-black text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Let's Talk ✨
              </button>
              
              <button className="px-8 sm:px-10 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-full font-black text-base sm:text-lg hover:scale-105 transition-all duration-300">
                View Work 👀
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;