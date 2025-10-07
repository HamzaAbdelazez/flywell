import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About FlyWell
            </h1>
            <p className="text-lg text-gray-600">
              Your trusted partner for spiritual journeys to the holy lands
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Embark on your spiritual journey with ease and peace of mind. Our dedicated Umrah and Hajj travel services provide tailored packages, seamless planning, and reliable support — helping pilgrims focus on their faith while we handle the details.
            </p>
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h10M7 11h4m0 4h6m-6-4h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Hajj Packages</h3>
              <p className="text-gray-600">
                Complete Hajj packages with premium accommodation, expert guidance, and all necessary services for your pilgrimage.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Umrah Services</h3>
              <p className="text-gray-600">
                Flexible Umrah packages throughout the year with various durations and accommodation options to suit your needs.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Guided Tours</h3>
              <p className="text-gray-600">
                Expert religious guides to enhance your spiritual experience and provide historical context to the holy sites.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock assistance throughout your journey to ensure a worry-free and blessed pilgrimage experience.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Choose FlyWell?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">5+</div>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">1000+</div>
                <p className="text-gray-600">Happy Pilgrims</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">24/7</div>
                <p className="text-gray-600">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}