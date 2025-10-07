import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export default function BookNow() {
  const { language, isArabic } = useLanguage();
  const t = translations[language];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tripType: 'umrah',
    departureDate: '',
    returnDate: '',
    travelers: '1',
    accommodationType: 'standard',
    specialRequests: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking form submitted:', formData);
    alert(t.bookingSuccessMessage);
  };

  const packages = [
    {
      type: t.umrah,
      duration: t.umrahDuration,
      features: t.umrahFeatures
    },
    {
      type: t.hajj,
      duration: t.hajjDuration,
      features: t.hajjFeatures
    },
    {
      type: t.combined,
      duration: t.combinedDuration,
      features: t.combinedFeatures
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-12 ${isArabic ? 'font-arabic' : ''}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t.bookYourJourney}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.bookJourneyDesc}
            </p>
          </div>

          {/* Packages */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className={`text-center mb-6 ${isArabic ? 'font-arabic' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.type}</h3>
                  <p className="text-gray-600 mb-2">{pkg.duration}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center text-gray-600 ${isArabic ? 'flex-row-reverse text-right font-arabic' : ''}`}>
                      <svg className={`w-5 h-5 text-green-500 ${isArabic ? 'ml-3' : 'mr-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className={`text-2xl font-bold text-gray-800 mb-6 text-center ${isArabic ? 'font-arabic' : ''}`}>
              {t.bookSpiritualJourney}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${isArabic ? 'font-arabic text-right' : ''}`}>
                    {t.fullName} {t.required}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${isArabic ? 'text-right font-arabic' : ''}`}
                    placeholder={t.yourFullName}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${isArabic ? 'font-arabic text-right' : ''}`}>
                    {t.emailAddress} {t.required}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${isArabic ? 'text-right' : ''}`}
                    placeholder={t.yourEmail}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${isArabic ? 'font-arabic text-right' : ''}`}>
                    {t.phoneNumber} {t.required}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${isArabic ? 'text-right' : ''}`}
                    placeholder={t.phoneNumberPlaceholder}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${isArabic ? 'font-arabic text-right' : ''}`}>
                    {t.tripType} {t.required}
                  </label>
                  <select
                    name="tripType"
                    required
                    value={formData.tripType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${isArabic ? 'text-right font-arabic' : ''}`}
                  >
                    <option value="umrah">{t.umrah}</option>
                    <option value="hajj">{t.hajj}</option>
                    <option value="combined">{t.combined} ({t.hajj} & {t.umrah})</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${isArabic ? 'font-arabic text-right' : ''}`}>
                    {t.departureDate} {t.required}
                  </label>
                  <input
                    type="date"
                    name="departureDate"
                    required
                    value={formData.departureDate}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${isArabic ? 'text-right' : ''}`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${isArabic ? 'font-arabic text-right' : ''}`}>
                    {t.returnDate} {t.required}
                  </label>
                  <input
                    type="date"
                    name="returnDate"
                    required
                    value={formData.returnDate}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${isArabic ? 'text-right' : ''}`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${isArabic ? 'font-arabic text-right' : ''}`}>
                    {t.numberOfTravelers} {t.required}
                  </label>
                  <select
                    name="travelers"
                    required
                    value={formData.travelers}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${isArabic ? 'text-right font-arabic' : ''}`}
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? t.person : t.people}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-700 mb-2 ${isArabic ? 'font-arabic text-right' : ''}`}>
                    {t.accommodationType}
                  </label>
                  <select
                    name="accommodationType"
                    value={formData.accommodationType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${isArabic ? 'text-right font-arabic' : ''}`}
                  >
                    <option value="standard">{t.standard}</option>
                    <option value="deluxe">{t.deluxe}</option>
                    <option value="premium">{t.premium}</option>
                    <option value="vip">{t.vip}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium text-gray-700 mb-2 ${isArabic ? 'font-arabic text-right' : ''}`}>
                  {t.specialRequests}
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${isArabic ? 'text-right font-arabic' : ''}`}
                  placeholder={t.specialRequestsPlaceholder}
                />
              </div>

              <div className={`bg-yellow-50 p-6 rounded-lg ${isArabic ? 'text-right' : ''}`}>
                <h3 className={`font-semibold text-gray-800 mb-2 ${isArabic ? 'font-arabic' : ''}`}>
                  {t.whatHappensNext}
                </h3>
                <ul className={`text-sm text-gray-600 space-y-1 ${isArabic ? 'font-arabic' : ''}`}>
                  {t.nextSteps.map((step, index) => (
                    <li key={index}>• {step}</li>
                  ))}
                </ul>
              </div>

              <button
                type="submit"
                className={`w-full bg-yellow-400 text-gray-900 py-4 px-6 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition duration-200 ${isArabic ? 'font-arabic' : ''}`}
              >
                {t.submitBookingRequest}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}