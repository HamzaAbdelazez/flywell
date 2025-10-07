import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export default function Home() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/kaaba-bg.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className={`text-5xl md:text-6xl font-extrabold tracking-wide mb-4 ${isArabic ? 'font-arabic' : ''}`}>
            {t.heroTitle}
          </h1>
          <p className={`text-lg md:text-xl mb-6 max-w-2xl mx-auto ${isArabic ? 'font-arabic leading-relaxed' : ''}`}>
            {t.heroSubtitle}
          </p>
          <div className={`flex gap-3 justify-center ${isArabic ? 'flex-row-reverse' : ''}`}>
            <Link
              to="/book"
              className="bg-yellow-400 text-gray-900 px-7 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
            >
              {t.bookNow}
            </Link>
            <Link
              to="/contact"
              className="border border-white/70 text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition"
            >
              {t.contactUs}
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 mb-8 ${isArabic ? 'font-arabic' : ''}`}>
              {t.spiritualJourneyTitle}
            </h2>
            <p className={`text-lg text-gray-600 mb-8 leading-relaxed ${isArabic ? 'font-arabic' : ''}`}>
              {t.spiritualJourneyDesc}
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className={`text-center ${isArabic ? 'text-right' : ''}`}>
                <div className={`bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-4 ${isArabic ? 'ml-auto mr-0' : 'mx-auto'}`}>
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-semibold text-gray-800 mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                  {t.tailoredPackages}
                </h3>
                <p className={`text-gray-600 ${isArabic ? 'font-arabic' : ''}`}>
                  {t.tailoredPackagesDesc}
                </p>
              </div>
              <div className={`text-center ${isArabic ? 'text-right' : ''}`}>
                <div className={`bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-4 ${isArabic ? 'ml-auto mr-0' : 'mx-auto'}`}>
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-semibold text-gray-800 mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                  {t.seamlessPlanning}
                </h3>
                <p className={`text-gray-600 ${isArabic ? 'font-arabic' : ''}`}>
                  {t.seamlessPlanningDesc}
                </p>
              </div>
              <div className={`text-center ${isArabic ? 'text-right' : ''}`}>
                <div className={`bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mb-4 ${isArabic ? 'ml-auto mr-0' : 'mx-auto'}`}>
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a.75.75 0 000 1.5.75.75 0 000-1.5zM12 20.25a.75.75 0 000 1.5.75.75 0 000-1.5zM2.25 12a.75.75 0 001.5 0 .75.75 0 00-1.5 0zM20.25 12a.75.75 0 001.5 0 .75.75 0 00-1.5 0z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-semibold text-gray-800 mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                  {t.reliableSupport}
                </h3>
                <p className={`text-gray-600 ${isArabic ? 'font-arabic' : ''}`}>
                  {t.reliableSupportDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}