import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Camera className="w-8 h-8 text-gold" />
              <span className="text-xl font-bold">PhotoStudio</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Capturing life's most precious moments with artistic vision and professional excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/services" className="block text-gray-400 hover:text-gold transition-colors duration-200 text-sm">
                Services
              </Link>
              <Link to="/portfolio" className="block text-gray-400 hover:text-gold transition-colors duration-200 text-sm">
                Portfolio
              </Link>
              <Link to="/live-feed" className="block text-gray-400 hover:text-gold transition-colors duration-200 text-sm">
                Live Feed
              </Link>
              <Link to="/blog" className="block text-gray-400 hover:text-gold transition-colors duration-200 text-sm">
                Blog
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Wedding Photography</p>
              <p className="text-gray-400 text-sm">Fashion Shoots</p>
              <p className="text-gray-400 text-sm">Corporate Events</p>
              <p className="text-gray-400 text-sm">Live Event Coverage</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>hello@photostudio.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PhotoStudio. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors duration-200 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;