import React from 'react';
import { motion } from 'framer-motion';
import { Check, Camera, Heart, Briefcase, PartyPopper, Star } from 'lucide-react';
import type { Service } from '../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 'wedding',
      title: 'Wedding Photography',
      description: 'Capture your special day with elegance, emotion, and artistic vision.',
      icon: 'Heart',
      packages: [
        {
          name: 'Essential',
          price: '$2,500',
          features: [
            '6 hours coverage',
            '300+ edited photos',
            'Online gallery',
            'USB with all photos',
            'Engagement session'
          ]
        },
        {
          name: 'Premium',
          price: '$3,500',
          popular: true,
          features: [
            '8 hours coverage',
            '500+ edited photos',
            'Online gallery',
            'USB with all photos',
            'Engagement session',
            'Second photographer',
            'Wedding album'
          ]
        },
        {
          name: 'Luxury',
          price: '$5,000',
          features: [
            'Full day coverage',
            '800+ edited photos',
            'Online gallery',
            'USB with all photos',
            'Engagement session',
            'Second photographer',
            'Premium wedding album',
            'Canvas prints'
          ]
        }
      ],
      gallery: [
        'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
        'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg',
        'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg'
      ]
    },
    {
      id: 'fashion',
      title: 'Fashion & Modeling Shoots',
      description: 'Professional fashion photography for models, brands, and portfolios.',
      icon: 'Camera',
      packages: [
        {
          name: 'Portfolio',
          price: '$800',
          features: [
            '2 hours studio time',
            '50+ edited photos',
            'Multiple outfit changes',
            'Basic retouching',
            'Online gallery'
          ]
        },
        {
          name: 'Professional',
          price: '$1,200',
          popular: true,
          features: [
            '3 hours studio time',
            '100+ edited photos',
            'Multiple outfit changes',
            'Professional retouching',
            'Online gallery',
            'Makeup artist'
          ]
        },
        {
          name: 'Commercial',
          price: '$2,000',
          features: [
            '4 hours studio time',
            '150+ edited photos',
            'Multiple outfit changes',
            'Professional retouching',
            'Online gallery',
            'Makeup artist',
            'Hair stylist',
            'Commercial usage rights'
          ]
        }
      ],
      gallery: [
        'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg',
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
      ]
    },
    {
      id: 'corporate',
      title: 'Corporate & Branding',
      description: 'Professional corporate photography for businesses and brands.',
      icon: 'Briefcase',
      packages: [
        {
          name: 'Headshots',
          price: '$400',
          features: [
            '1 hour session',
            '25+ edited photos',
            'Multiple backgrounds',
            'Professional lighting',
            'Online gallery'
          ]
        },
        {
          name: 'Team Package',
          price: '$1,500',
          popular: true,
          features: [
            '3 hours session',
            'Up to 10 people',
            '100+ edited photos',
            'Multiple backgrounds',
            'Professional lighting',
            'Online gallery',
            'Group photos'
          ]
        },
        {
          name: 'Brand Story',
          price: '$2,500',
          features: [
            'Full day coverage',
            'Unlimited people',
            '200+ edited photos',
            'Office environment',
            'Product photography',
            'Online gallery',
            'Usage rights'
          ]
        }
      ],
      gallery: [
        'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
        'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg'
      ]
    },
    {
      id: 'events',
      title: 'Event Coverage',
      description: 'Comprehensive event photography for parties, celebrations, and gatherings.',
      icon: 'PartyPopper',
      packages: [
        {
          name: 'Basic',
          price: '$600',
          features: [
            '3 hours coverage',
            '150+ edited photos',
            'Online gallery',
            'USB with all photos'
          ]
        },
        {
          name: 'Extended',
          price: '$1,000',
          popular: true,
          features: [
            '5 hours coverage',
            '300+ edited photos',
            'Online gallery',
            'USB with all photos',
            'Live photo feed'
          ]
        },
        {
          name: 'Full Day',
          price: '$1,500',
          features: [
            '8 hours coverage',
            '500+ edited photos',
            'Online gallery',
            'USB with all photos',
            'Live photo feed',
            'Second photographer'
          ]
        }
      ],
      gallery: [
        'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg',
        'https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg',
        'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg'
      ]
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart':
        return Heart;
      case 'Camera':
        return Camera;
      case 'Briefcase':
        return Briefcase;
      case 'PartyPopper':
        return PartyPopper;
      default:
        return Camera;
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
            Our <span className="text-gold">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Professional photography services tailored to capture your unique story and vision.
            From intimate moments to grand celebrations, we bring artistry to every shot.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, serviceIndex) => (
        <section key={service.id} className={serviceIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center mb-4">
                  {React.createElement(getIcon(service.icon), {
                    className: "w-8 h-8 text-gold mr-3"
                  })}
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{service.title}</h2>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                
                <div className="grid grid-cols-3 gap-4">
                  {service.gallery.map((image, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`${service.title} ${index + 1}`}
                        className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-1 gap-6"
              >
                {service.packages.map((pkg, index) => (
                  <div
                    key={pkg.name}
                    className={`relative bg-white p-6 rounded-lg shadow-lg border-2 ${
                      pkg.popular ? 'border-gold' : 'border-gray-200'
                    } hover:shadow-xl transition-all duration-300`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-6">
                        <div className="bg-gold text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                      <div className="text-2xl font-bold text-gold">{pkg.price}</div>
                    </div>
                    
                    <ul className="space-y-2">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <Check className="w-5 h-5 text-gold mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full mt-6 bg-black text-white py-3 rounded-md hover:bg-gray-900 transition-colors duration-300 font-semibold">
                      Choose Package
                    </button>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-gold">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-black/80">
            Let's discuss your vision and create a custom package that fits your needs perfectly.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-900 transition-all duration-300">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;