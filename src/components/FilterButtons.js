import React from 'react';

const FilterButtons = ({ filter, setFilter, darkMode, theme }) => {
  const categories = ['all', 'landscape', 'urban', 'nature'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="flex justify-center">
        <div
          className={`${theme.cardBg} rounded-full p-1 flex flex-wrap gap-2 sm:gap-3 justify-center
            transition-colors duration-300`}
        >
          {categories.map((cat) => {
            const isActive = filter === cat;

            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`
                  px-3 sm:px-5 md:px-6 lg:px-8
                  py-2 sm:py-2.5 md:py-3
                  rounded-full
                  text-xs sm:text-sm md:text-base
                  tracking-widest uppercase font-light
                  transform-gpu
                  transition-all duration-500 ease-out
                  active:scale-95
                  ${isActive
                    ? `${theme.filterActive} text-white scale-105 shadow-md ${
                        darkMode
                          ? 'shadow-cyan-500/30'
                          : 'shadow-blue-500/30'
                      }`
                    : `${theme.filterInactive} ${theme.text}
                       hover:scale-105 hover:brightness-110`
                  }
                `}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterButtons;
