import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, isArabic } = useLanguage();
  const t = translations[language];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className={`flex items-center justify-between ${isArabic ? 'flex-row-reverse' : ''}`}>
          <Link to="/" className={`flex items-center ${isArabic ? 'space-x-reverse space-x-2 flex-row-reverse' : 'space-x-2'}`}>
            <img 
              src="/images/flywell-logo.png" 
              alt="FlyWell Logo" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-gray-800">
              {isArabic ? 'فلاي ويل' : 'FlyWell'}
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className={`hidden md:flex ${isArabic ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
              {t.home}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">
              {t.about}
            </Link>
            <Link to="/book" className="text-gray-700 hover:text-blue-600 transition">
              {t.bookNow}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">
              {t.contactUs}
            </Link>
          </nav>
          
          {/* Desktop Buttons */}
          <div className={`hidden md:flex items-center ${isArabic ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center text-gray-700 hover:text-blue-600 transition ${isArabic ? 'space-x-reverse space-x-2 flex-row-reverse' : 'space-x-2'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span className="text-sm font-medium">
                {language === 'en' ? 'العربية' : 'English'}
              </span>
            </button>
            
            <Link 
              to="/book" 
              className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
            >
              {t.bookNow}
            </Link>
            <Link 
              to="/contact" 
              className="border border-gray-300 text-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-50 transition"
            >
              {t.contact}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className={`flex flex-col space-y-4 ${isArabic ? 'items-end text-right' : 'items-start'}`}>
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.home}
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.about}
              </Link>
              <Link 
                to="/book" 
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.bookNow}
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.contactUs}
              </Link>
              
              {/* Mobile Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`flex items-center text-gray-700 hover:text-blue-600 transition ${isArabic ? 'space-x-reverse space-x-2 flex-row-reverse self-end' : 'space-x-2 self-start'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span className="text-sm font-medium">
                  {language === 'en' ? 'العربية' : 'English'}
                </span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}