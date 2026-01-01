import React from 'react';
import { Camera, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = ({ darkMode, theme }) => {
  const navLinks = ['Home', 'Gallery', 'Services', 'About', 'Contact'];
  const services = ['Golf Tournaments', 'Sports Events', 'Real Estate', 'Landscape Photography', 'Commercial Projects'];

  return (
    <footer className={`${darkMode ? 'bg-gray-900' : 'bg-white'} ${theme.border} border-t relative z-10 transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Camera className="w-7 h-7 text-cyan-400" />
              <h3 className={`text-xl font-semibold transition-colors duration-500 ${darkMode ? 'text-white' : 'text-gray-900'}`}>SkyVision</h3>
            </div>
            <p className={`text-sm leading-relaxed transition-colors duration-500 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Professional drone photography specializing in sports events, aerial tours, and stunning landscapes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => {
                if (link === 'Gallery') {
                  return (
                    <li key={link}>
                      <Link
                        to="/gallery"
                        className={`text-sm transition-all duration-300 ${darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-500'}`}
                      >
                        {link}
                      </Link>
                    </li>
                  );
                }
                return (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className={`text-sm transition-all duration-300 ${darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-500'}`}
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li
                  key={service}
                  className={`transition-colors duration-300 cursor-pointer ${darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-500'}`}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact">
            <h4 className={`text-lg font-semibold mb-4 transition-colors duration-500 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@skyvision.com" className={`transition-colors duration-300 ${darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-500'}`}>
                  info@skyvision.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className={`transition-colors duration-300 ${darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-500'}`}>
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className={`transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Dagupan, Ilocos, Philippines</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className={`p-2 rounded-full transition-all duration-300 ${darkMode ? 'bg-gray-800 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500' : 'bg-gray-100 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500'} hover:scale-110`}
                >
                  <Icon className={`w-4 h-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-12 pt-8 border-t ${theme.border} flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0`}>
          <p className={`text-sm transition-colors duration-500 ${darkMode ? 'text-gray-400' : 'text-gray-600'} text-center sm:text-left`}>
            © 2026 SkyVision. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((policy) => (
              <a
                key={policy}
                href={`#${policy.toLowerCase().replace(/\s+/g, '-')}`}
                className={`transition-colors duration-300 ${darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-500'}`}
              >
                {policy}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
