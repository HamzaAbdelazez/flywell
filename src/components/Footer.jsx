import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export default function Footer() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className={`grid md:grid-cols-3 gap-8 ${isArabic ? 'text-right' : ''}`}>
          <div>
            <div className={`flex items-center mb-4 ${isArabic ? 'flex-row-reverse space-x-reverse space-x-2 justify-end' : 'space-x-2'}`}>
              <img 
                src="/images/flywell-logo.png" 
                alt="FlyWell Logo" 
                className="h-8 w-auto"
              />
              <span className={`text-xl font-bold ${isArabic ? 'font-arabic' : ''}`}>
                {isArabic ? 'فلاي ويل' : 'FlyWell'}
              </span>
            </div>
            <p className={`text-gray-300 mb-4 ${isArabic ? 'font-arabic leading-relaxed' : ''}`}>
              {t.footerDesc}
            </p>
          </div>
          
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isArabic ? 'font-arabic' : ''}`}>
              {t.quickLinks}
            </h3>
            <ul className="space-y-2">
              <li><a href="/" className={`text-gray-300 hover:text-white transition ${isArabic ? 'font-arabic' : ''}`}>{t.home}</a></li>
              <li><a href="/about" className={`text-gray-300 hover:text-white transition ${isArabic ? 'font-arabic' : ''}`}>{t.about}</a></li>
              <li><a href="/book" className={`text-gray-300 hover:text-white transition ${isArabic ? 'font-arabic' : ''}`}>{t.bookNow}</a></li>
              <li><a href="/contact" className={`text-gray-300 hover:text-white transition ${isArabic ? 'font-arabic' : ''}`}>{t.contactUs}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isArabic ? 'font-arabic' : ''}`}>
              {t.contactInfo}
            </h3>
            <div className="space-y-2">
              <p className={`text-gray-300 ${isArabic ? 'font-arabic' : ''}`}>
                <span className="font-semibold">{t.email}:</span> flywell2025@gmail.com
              </p>
              <p className={`text-gray-300 ${isArabic ? 'font-arabic' : ''}`}>
                <span className="font-semibold">{t.phone}:</span> +201092007037
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className={`text-gray-400 ${isArabic ? 'font-arabic leading-relaxed' : ''}`}>
            {t.footerCopyright}
          </p>
        </div>
      </div>
    </footer>
  );
}