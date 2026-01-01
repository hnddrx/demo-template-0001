import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Grid, Maximize2 } from 'lucide-react';

const GalleryGrid = ({ filteredImages, openLightbox, theme, darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState('slider');
  const [direction, setDirection] = useState('right'); // slide direction

  const goToNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const goToPrevious = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const currentImage = filteredImages[currentIndex];

  if (!filteredImages || filteredImages.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className={`${theme.cardBg} rounded-3xl p-10 sm:p-16 text-center ${theme.text}`}>
          <p className="text-lg sm:text-xl">No images found in this category</p>
        </div>
      </div>
    );
  }

  return (
    <div id="gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      {/* View Toggle */}
      <div className="flex justify-center sm:justify-end mb-6">
        <div className={`${theme.cardBg} rounded-full p-1 flex gap-1`}>
          {['slider', 'folder'].map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base transition ${
                viewMode === mode
                  ? `${theme.filterActive} text-white`
                  : `${theme.filterInactive} ${theme.text}`
              }`}
            >
              {mode === 'folder' ? (
                <span className="flex items-center gap-2">
                  <Grid size={16} /> Folder
                </span>
              ) : (
                'Slider'
              )}
            </button>
          ))}
        </div>
      </div>

      {viewMode === 'slider' ? (
        /* SLIDER VIEW */
        <div className="relative flex justify-center">
          <div className="w-full max-w-4xl lg:max-w-5xl">
            <div className={`${theme.cardBg} rounded-3xl overflow-hidden shadow-2xl group relative`}>
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                <img
                  key={currentImage.src}
                  src={currentImage.src}
                  alt={currentImage.title}
                  className={`
                    absolute inset-0 w-full h-full object-cover
                    transition-all duration-500 ease-out
                    ${direction === 'right'
                      ? 'animate-slide-left'
                      : 'animate-slide-right'}
                  `}
                />

                {/* Expand */}
                <button
                  onClick={() => openLightbox(currentImage)}
                  className={`absolute top-3 right-3 ${theme.cardBg}
                    p-2 rounded-full ${theme.text}
                    opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition`}
                >
                  <Maximize2 size={16} />
                </button>
              </div>

              {/* Nav Buttons */}
              <button
                onClick={goToPrevious}
                className={`absolute left-3 top-1/2 -translate-y-1/2
                  ${theme.cardBg} p-2 rounded-full ${theme.text}`}
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={goToNext}
                className={`absolute right-3 top-1/2 -translate-y-1/2
                  ${theme.cardBg} p-2 rounded-full ${theme.text}`}
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Counter */}
            <div className={`mt-4 text-center ${theme.text}`}>
              <span className={theme.accent}>{currentIndex + 1}</span> / {filteredImages.length}
            </div>
          </div>
        </div>
      ) : (
        /* FOLDER VIEW */
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => openLightbox(image)}
              className={`${theme.cardBg} rounded-2xl overflow-hidden cursor-pointer
                transition hover:scale-[1.01]`}
            >
              <div className="flex flex-col sm:flex-row h-full">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full sm:w-1/3 h-48 sm:h-full object-cover"
                />

                <div className="flex-1 p-5 sm:p-6 flex flex-col justify-center">
                  <h3 className={`${theme.text} text-lg sm:text-2xl mb-1`}>
                    {image.title}
                  </h3>
                  <p className={`${theme.subtext} text-sm sm:text-base`}>
                    {image.category}
                  </p>
                </div>

                <div className="hidden sm:flex items-center pr-6">
                  <ChevronRight size={26} className={theme.accent} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
