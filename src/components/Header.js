import React from 'react';
import { Camera, Sun, Moon, Menu, X, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ darkMode, setDarkMode, mobileMenuOpen, setMobileMenuOpen, theme }) => {
  const navLinks = ['Home', 'Gallery', 'Services', 'About', 'Contact'];

  return (
    <>
      <header className={`${theme.headerBg} ${theme.border} border-b fixed top-0 left-0 right-0 z-50 transition-all duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo - More Dynamic */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-violet-500 to-fuchsia-500' : 'bg-gradient-to-br from-purple-500 to-pink-500'} rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className={`relative ${darkMode ? 'bg-gradient-to-br from-violet-600 to-fuchsia-600' : 'bg-gradient-to-br from-purple-600 to-pink-600'} p-2 rounded-xl transform group-hover:scale-110 transition-transform duration-300`}>
                  <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2} />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className={`text-xl sm:text-2xl font-semibold bg-gradient-to-r ${darkMode ? 'from-violet-400 via-fuchsia-400 to-purple-400' : 'from-purple-600 via-fuchsia-600 to-pink-600'} bg-clip-text text-transparent`}>
                    SkyVision
                  </h1>
                  <Sparkles className={`w-4 h-4 ${theme.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
                <p className={`text-[10px] sm:text-xs ${theme.subtext} tracking-widest uppercase hidden sm:block font-medium`}>
                  Aerial Excellence
                </p>
              </div>
            </Link>

            {/* Desktop Navigation - Pill Style */}
            <nav className="hidden lg:flex items-center">
              <div className={`${theme.cardBg} rounded-full px-2 py-2 flex items-center gap-1`}>
                {navLinks.map(link => {
                  if(link === 'Gallery'){
                    return (
                      <Link
                        key={link}
                        to="/gallery"
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${theme.text} hover:bg-gradient-to-r ${darkMode ? 'hover:from-violet-500 hover:to-fuchsia-500' : 'hover:from-purple-500 hover:to-pink-500'} hover:text-white hover:shadow-lg ${darkMode ? 'hover:shadow-violet-500/50' : 'hover:shadow-purple-500/50'} transform hover:scale-105`}
                      >
                        {link}
                      </Link>
                    );
                  }
                  return (
                    <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${theme.text} hover:bg-gradient-to-r ${darkMode ? 'hover:from-violet-500 hover:to-fuchsia-500' : 'hover:from-purple-500 hover:to-pink-500'} hover:text-white hover:shadow-lg ${darkMode ? 'hover:shadow-violet-500/50' : 'hover:shadow-purple-500/50'} transform hover:scale-105`}
                    >
                      {link}
                    </a>
                  );
                })}
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Theme Toggle - Enhanced */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative p-2.5 sm:p-3 rounded-full ${theme.cardBg} ${theme.border} border transition-all duration-500 hover:scale-110 group overflow-hidden`}
                aria-label="Toggle theme"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${darkMode ? 'from-yellow-400 to-orange-400' : 'from-indigo-500 to-purple-500'} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="relative">
                  {darkMode ? (
                    <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 transition-transform duration-500 rotate-0 group-hover:rotate-180" />
                  ) : (
                    <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 transition-transform duration-500 rotate-0 group-hover:-rotate-12" />
                  )}
                </div>
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2.5 sm:p-3 rounded-full ${theme.cardBg} ${theme.border} border transition-all duration-300 hover:scale-110 relative overflow-hidden group`}
                aria-label="Toggle menu"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${darkMode ? 'from-violet-500 to-fuchsia-500' : 'from-purple-500 to-pink-500'} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="relative">
                  {mobileMenuOpen ? (
                    <X className={`w-4 h-4 sm:w-5 sm:h-5 ${theme.text}`} />
                  ) : (
                    <Menu className={`w-4 h-4 sm:w-5 sm:h-5 ${theme.text}`} />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
        mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 ${theme.overlay} transition-opacity duration-500`}
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        
        {/* Menu Content */}
        <div className={`absolute top-20 left-4 right-4 ${theme.cardBg} ${theme.border} border rounded-3xl overflow-hidden transform transition-all duration-500 ${
          mobileMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'
        }`}>
          <nav className="p-6">
            <div className="space-y-2">
              {navLinks.map((link, index) => {
                const content = (
                  <div className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${theme.cardBg} hover:bg-gradient-to-r ${darkMode ? 'hover:from-violet-500 hover:to-fuchsia-500' : 'hover:from-purple-500 hover:to-pink-500'} hover:text-white group ${theme.border} border`}
                    style={{ 
                      transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms',
                      opacity: mobileMenuOpen ? 1 : 0,
                      transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                    }}
                  >
                    <span className="text-base font-medium">{link}</span>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${darkMode ? 'from-violet-400 to-fuchsia-400' : 'from-purple-400 to-pink-400'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                );

                if(link === 'Gallery'){
                  return (
                    <Link
                      key={link}
                      to="/gallery"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block"
                    >
                      {content}
                    </Link>
                  );
                }
                return (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block"
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </nav>

          {/* Footer in Mobile Menu */}
          <div className={`px-6 py-4 ${theme.border} border-t ${darkMode ? 'bg-white/5' : 'bg-gray-900/5'}`}>
            <p className={`text-center text-xs ${theme.subtext} tracking-wide`}>
              Capturing the world from above
            </p>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
};

export default Header;