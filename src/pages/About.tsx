import React from 'react';
import { motion } from 'framer-motion';
import { Award, Camera, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Lead Photographer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      bio: '10+ years of experience in wedding and fashion photography'
    },
    {
      name: 'Sarah Chen',
      role: 'Event Coordinator',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      bio: 'Ensures every event runs smoothly from start to finish'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Video Specialist',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      bio: 'Creates stunning cinematic videos and reels'
    }
  ];

  const values = [
    {
      icon: Camera,
      title: 'Artistic Vision',
      description: 'We see beauty in every moment and capture it with creativity and passion.'
    },
    {
      icon: Heart,
      title: 'Personal Connection',
      description: 'We build relationships with our clients to understand their unique story.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every shot, every edit, every delivery.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work as a team to ensure every project exceeds expectations.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Story,<br />
                <span className="text-gold">Your Memories</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Founded in 2015 with a simple mission: to capture life's most precious moments
                with artistic vision and technical excellence. What started as a passion project
                has grown into a trusted team of creative professionals.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-gold mb-1">500+</div>
                  <div className="text-gray-400">Events Captured</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold mb-1">8+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg"
                alt="About Us"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold rounded-lg flex items-center justify-center">
                <Camera className="w-12 h-12 text-black" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from the first consultation to the final delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Talented professionals who are passionate about creating exceptional photography experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h3>
                <p className="text-gold font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Behind the Scenes</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Get a glimpse into our creative process and the moments that happen between the shots.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg',
              'https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg',
              'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg',
              'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
              'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg',
              'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg'
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-lg"
              >
                <img
                  src={image}
                  alt={`Behind the scenes ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;