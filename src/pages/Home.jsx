import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
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
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide mb-4">
            FlyWell
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Book your trip now with the best offers for Hajj & Umrah. Embark on your spiritual journey with ease and peace of mind.
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              to="/book"
              className="bg-yellow-400 text-gray-900 px-7 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
            >
              Book Now
            </Link>
            <Link
              to="/contact"
              className="border border-white/70 text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Your Spiritual Journey Starts Here
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our dedicated Umrah and Hajj travel services provide tailored packages, seamless planning, and reliable support — helping pilgrims focus on their faith while we handle the details.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Tailored Packages</h3>
                <p className="text-gray-600">Customized travel packages to meet your specific needs and budget</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Seamless Planning</h3>
                <p className="text-gray-600">Complete trip planning from flights to accommodation and transportation</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a.75.75 0 000 1.5.75.75 0 000-1.5zM12 20.25a.75.75 0 000 1.5.75.75 0 000-1.5zM2.25 12a.75.75 0 001.5 0 .75.75 0 00-1.5 0zM20.25 12a.75.75 0 001.5 0 .75.75 0 00-1.5 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Reliable Support</h3>
                <p className="text-gray-600">24/7 support throughout your journey for peace of mind</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}