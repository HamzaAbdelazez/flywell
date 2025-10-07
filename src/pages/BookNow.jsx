import React, { useState } from 'react';

export default function BookNow() {
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
    // Handle form submission here
    console.log('Booking form submitted:', formData);
    alert('Thank you for your booking request! We will contact you shortly to confirm your details.');
  };

  const packages = [
    {
      type: 'Umrah',
      duration: '7-14 days',
      price: 'Starting from $1,200',
      features: [
        'Round-trip flights',
        'Hotel accommodation in Makkah & Madinah',
        'Transportation between holy sites',
        'Guided tours',
        '24/7 support'
      ]
    },
    {
      type: 'Hajj',
      duration: '14-21 days',
      price: 'Starting from $3,500',
      features: [
        'Round-trip flights',
        'Premium accommodation',
        'All Hajj rituals guidance',
        'Transportation throughout',
        'Expert religious guidance',
        'Group leader support'
      ]
    },
    {
      type: 'Combined',
      duration: '21-30 days',
      price: 'Starting from $4,200',
      features: [
        'Extended stay packages',
        'Hajj & Umrah combined',
        'Premium services',
        'Flexible itinerary',
        'VIP assistance',
        'Complete spiritual journey'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Book Your Journey
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully crafted packages designed to provide you with a seamless and spiritually enriching experience.
            </p>
          </div>

          {/* Packages */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.type}</h3>
                  <p className="text-gray-600 mb-2">{pkg.duration}</p>
                  <p className="text-2xl font-bold text-yellow-600">{pkg.price}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Book Your Spiritual Journey
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="+1234567890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Trip Type *
                  </label>
                  <select
                    name="tripType"
                    required
                    value={formData.tripType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  >
                    <option value="umrah">Umrah</option>
                    <option value="hajj">Hajj</option>
                    <option value="combined">Combined (Hajj & Umrah)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Departure Date *
                  </label>
                  <input
                    type="date"
                    name="departureDate"
                    required
                    value={formData.departureDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Return Date *
                  </label>
                  <input
                    type="date"
                    name="returnDate"
                    required
                    value={formData.returnDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Travelers *
                  </label>
                  <select
                    name="travelers"
                    required
                    value={formData.travelers}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Accommodation Type
                  </label>
                  <select
                    name="accommodationType"
                    value={formData.accommodationType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  >
                    <option value="standard">Standard</option>
                    <option value="deluxe">Deluxe</option>
                    <option value="premium">Premium</option>
                    <option value="vip">VIP</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests or Requirements
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="Any special dietary requirements, accessibility needs, or other requests..."
                />
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">What happens next?</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• We'll review your booking request within 24 hours</li>
                  <li>• Our team will contact you to confirm details and pricing</li>
                  <li>• You'll receive a detailed itinerary and payment options</li>
                  <li>• We'll handle all visa and documentation assistance</li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-900 py-4 px-6 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition duration-200"
              >
                Submit Booking Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}