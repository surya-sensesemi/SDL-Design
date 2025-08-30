import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'events', label: 'Events' },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Elegant Wedding Ceremony',
      category: 'wedding',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
      description: 'A beautiful outdoor ceremony captured in golden hour light'
    },
    {
      id: 2,
      title: 'Fashion Editorial Shoot',
      category: 'fashion',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg',
      description: 'High-fashion editorial with dramatic lighting'
    },
    {
      id: 3,
      title: 'Corporate Team Portrait',
      category: 'corporate',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
      description: 'Professional team portraits for tech startup'
    },
    {
      id: 4,
      title: 'Anniversary Celebration',
      category: 'events',
      image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg',
      description: 'Intimate anniversary celebration with family and friends'
    },
    {
      id: 5,
      title: 'Bridal Portraits',
      category: 'wedding',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg',
      description: 'Stunning bridal portraits in natural light'
    },
    {
      id: 6,
      title: 'Model Portfolio Session',
      category: 'fashion',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      description: 'Portfolio building session for aspiring model'
    },
    {
      id: 7,
      title: 'Executive Headshots',
      category: 'corporate',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      description: 'Professional headshots for C-suite executives'
    },
    {
      id: 8,
      title: 'Birthday Party Coverage',
      category: 'events',
      image: 'https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg',
      description: 'Joyful moments captured at milestone birthday celebration'
    },
    {
      id: 9,
      title: 'Reception Dancing',
      category: 'wedding',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg',
      description: 'Candid moments from the dance floor'
    },
    {
      id: 10,
      title: 'Studio Fashion Shoot',
      category: 'fashion',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      description: 'Studio session with dramatic lighting setup'
    },
    {
      id: 11,
      title: 'Corporate Event',
      category: 'corporate',
      image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
      description: 'Annual company conference and networking event'
    },
    {
      id: 12,
      title: 'Engagement Session',
      category: 'wedding',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg',
      description: 'Romantic engagement session in urban setting'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our <span className="text-gold">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our collection of captured moments, each telling a unique story through our lens.
            From intimate ceremonies to grand celebrations, every image represents our commitment to excellence.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-1 bg-white rounded-lg p-1 shadow-md">
              <Filter className="w-5 h-5 text-gray-500 ml-3" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gold text-black'
                      : 'text-gray-600 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white p-4">
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-200">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gold transition-colors duration-200 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold transition-colors duration-200 z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold transition-colors duration-200 z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
              
              <img
                src={filteredItems[selectedImage].image}
                alt={filteredItems[selectedImage].title}
                className="w-full h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4 rounded-b-lg">
                <h3 className="text-lg font-bold mb-1">{filteredItems[selectedImage].title}</h3>
                <p className="text-gray-300">{filteredItems[selectedImage].description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-16 bg-gold">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Love What You See?
          </h2>
          <p className="text-xl mb-8 text-black/80">
            Let's create something beautiful together. Book your session today.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-900 transition-all duration-300">
            Book Your Session
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;