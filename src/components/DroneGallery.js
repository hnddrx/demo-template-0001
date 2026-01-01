import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import FilterButtons from './FilterButtons';
import GalleryGrid from './GalleryGrid';
import Footer from './Footer';
import Lightbox from './Lightbox';
import Chatbot from './Chatbot';
import TournamentRegistration from './TournamentRegistration';
import About from '../pages/About';
import imagesData from '../data/images.json';



const DroneGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const images = imagesData.images;

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);
  
  const goToNext = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };
  
  const goToPrev = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const theme = {
    dark: {
      bg: 'bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950',
      headerBg: 'bg-slate-900/40 backdrop-blur-xl border-b border-white/10',
      text: 'text-white',
      subtext: 'text-slate-300',
      cardBg: 'bg-white/5 backdrop-blur-lg border border-white/10',
      cardHover: 'hover:bg-white/10 hover:border-white/20',
      filterActive: 'bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 shadow-lg shadow-purple-500/50',
      filterInactive: 'bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10',
      accent: 'text-violet-400',
      accentGradient: 'bg-gradient-to-r from-violet-400 to-fuchsia-400',
      border: 'border-white/10',
      footerBg: 'bg-slate-950/90 backdrop-blur-xl border-t border-white/10',
      linkHover: 'hover:text-violet-400',
      buttonGlow: 'shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50',
      overlay: 'bg-slate-950/80 backdrop-blur-sm'
    },
    light: {
      bg: 'bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50',
      headerBg: 'bg-white/70 backdrop-blur-xl border-b border-gray-200/50',
      text: 'text-gray-900',
      subtext: 'text-gray-600',
      cardBg: 'bg-white/80 backdrop-blur-lg border border-gray-200/50',
      cardHover: 'hover:bg-white hover:border-purple-200',
      filterActive: 'bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 shadow-lg shadow-purple-500/30',
      filterInactive: 'bg-white/60 hover:bg-white backdrop-blur-sm border border-gray-200/50',
      accent: 'text-purple-600',
      accentGradient: 'bg-gradient-to-r from-purple-600 to-fuchsia-600',
      border: 'border-gray-200/50',
      footerBg: 'bg-slate-900/95 backdrop-blur-xl border-t border-white/10',
      linkHover: 'hover:text-purple-500',
      buttonGlow: 'shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40',
      overlay: 'bg-white/80 backdrop-blur-sm'
    }
  };

  const t = darkMode ? theme.dark : theme.light;

  return (
    <div className={`min-h-screen ${t.bg} transition-all duration-700 relative overflow-hidden`}>
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-20 left-10 w-96 h-96 ${darkMode ? 'bg-violet-500/10' : 'bg-purple-300/20'} rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-20 right-10 w-96 h-96 ${darkMode ? 'bg-fuchsia-500/10' : 'bg-pink-300/20'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute top-1/2 left-1/2 w-96 h-96 ${darkMode ? 'bg-purple-500/5' : 'bg-violet-200/20'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        <Header 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          theme={t}
        />
        
        <Hero 
          theme={t}
          setShowRegistration={setShowRegistration}
        />
        
        <FilterButtons 
          filter={filter}
          setFilter={setFilter}
          darkMode={darkMode}
          theme={t}
        />
        
        <GalleryGrid 
          filteredImages={filteredImages}
          openLightbox={openLightbox}
          darkMode={darkMode}
          theme={t}
        />
        
        <About darkMode={darkMode} theme={t} setShowRegistration={setShowRegistration} />

        <Footer theme={t} darkMode={darkMode} />
        
        <Lightbox 
          selectedImage={selectedImage}
          closeLightbox={closeLightbox}
          goToPrev={goToPrev}
          goToNext={goToNext}
          darkMode={darkMode}
          theme={t}
        />
        
        <Chatbot darkMode={darkMode} theme={t} />
        
        {showRegistration && (
          <TournamentRegistration 
            darkMode={darkMode} 
            theme={t}
            onClose={() => setShowRegistration(false)} 
          />
        )}
      </div>

    
    </div>
  );
};

export default DroneGallery;