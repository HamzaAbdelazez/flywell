import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/images/flywell-logo.png" 
                alt="FlyWell Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">FlyWell</span>
            </div>
            <p className="text-gray-300 mb-4">
              Embark on your spiritual journey with ease and peace of mind. Our dedicated Umrah and Hajj travel services provide tailored packages, seamless planning, and reliable support.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a href="/book" className="text-gray-300 hover:text-white transition">Book Now</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-semibold">Email:</span> flywell2025@gmail.com
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Phone:</span> +201092007037
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 FlyWell. All rights reserved. Helping pilgrims focus on their faith while we handle the details.
          </p>
        </div>
      </div>
    </footer>
  );
}