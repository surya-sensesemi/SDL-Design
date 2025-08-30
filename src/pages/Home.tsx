import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Camera, Award, Users, Heart } from 'lucide-react';

const Home: React.FC = () => {
  const stats = [
    { icon: Camera, value: '500+', label: 'Photos Taken' },
    { icon: Heart, value: '150+', label: 'Happy Couples' },
    { icon: Award, value: '25+', label: 'Awards Won' },
    { icon: Users, value: '1000+', label: 'Events Covered' },
  ];

  const services = [
    {
      title: 'Wedding Photography',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
      description: 'Capturing your special day with elegance and emotion'
    },
    {
      title: 'Fashion Shoots',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg',
      description: 'Professional fashion and modeling photography'
    },
    {
      title: 'Corporate Events',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
      description: 'Professional corporate and business event coverage'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Capturing Moments,<br />
            <span className="text-gold">Creating Memories</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Professional photography services that tell your unique story with artistic vision and technical excellence.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/contact"
              className="bg-gold text-black px-8 py-4 rounded-md text-lg font-semibold hover:bg-gold/90 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
            >
              <span>Book a Shoot</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>View Portfolio</span>
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="text-gold font-semibold hover:text-gold/80 transition-colors duration-200 flex items-center space-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Years of experience capturing life's most precious moments
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-gold" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gold">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Ready to Capture Your Story?
          </h2>
          <p className="text-xl mb-8 text-black/80">
            Let's create something beautiful together. Get in touch to discuss your vision.
          </p>
          <Link
            to="/contact"
            className="bg-black text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-900 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;