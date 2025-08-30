import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../types';

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Art of Wedding Photography: Capturing Emotions',
      excerpt: 'Learn the techniques and mindset behind capturing those precious emotional moments that make wedding photos truly memorable.',
      content: '',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
      date: '2024-01-10',
      category: 'Wedding Tips'
    },
    {
      id: '2',
      title: 'Behind the Scenes: Corporate Event Photography',
      excerpt: 'A look into the preparation, equipment, and strategies we use to capture professional corporate events.',
      content: '',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
      date: '2024-01-05',
      category: 'Behind the Scenes'
    },
    {
      id: '3',
      title: '5 Tips for Perfect Engagement Photos',
      excerpt: 'Essential tips for couples preparing for their engagement photoshoot to ensure stunning results.',
      content: '',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg',
      date: '2023-12-28',
      category: 'Couple Tips'
    },
    {
      id: '4',
      title: 'Fashion Photography: Working with Natural Light',
      excerpt: 'Discover how to make the most of natural light in fashion photography for stunning, professional results.',
      content: '',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg',
      date: '2023-12-20',
      category: 'Fashion'
    },
    {
      id: '5',
      title: 'The Evolution of Event Photography in 2024',
      excerpt: 'How technology and changing client expectations are reshaping the event photography landscape.',
      content: '',
      image: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg',
      date: '2023-12-15',
      category: 'Industry Trends'
    },
    {
      id: '6',
      title: 'Creating Memorable Bridal Portraits',
      excerpt: 'The secrets behind creating stunning bridal portraits that brides will treasure forever.',
      content: '',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      date: '2023-12-10',
      category: 'Wedding Tips'
    }
  ];

  const categories = ['All', 'Wedding Tips', 'Behind the Scenes', 'Couple Tips', 'Fashion', 'Industry Trends'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
            Our <span className="text-gold">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Photography insights, behind-the-scenes stories, and helpful tips for making your
            photo sessions unforgettable. Learn from our experiences and get inspired.
          </motion.p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gold text-black'
                    : 'bg-white text-gray-600 hover:text-black hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src={filteredPosts[0].image}
                  alt={filteredPosts[0].title}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-gold text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="text-gold text-sm font-semibold">{filteredPosts[0].category}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">
                  {filteredPosts[0].title}
                </h2>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {filteredPosts[0].excerpt}
                </p>
                
                <div className="flex items-center text-gray-500 mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{formatDate(filteredPosts[0].date)}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>5 min read</span>
                </div>
                
                <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900 transition-colors duration-300 inline-flex items-center space-x-2">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gold text-sm font-semibold">{post.category}</span>
                    <span className="text-gray-500 text-sm">{formatDate(post.date)}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight group-hover:text-gold transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>5 min read</span>
                    </div>
                    
                    <button className="text-gold font-semibold hover:text-gold/80 transition-colors duration-200 inline-flex items-center space-x-1">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest photography tips, behind-the-scenes content,
              and exclusive offers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
              />
              <button className="bg-gold text-black px-6 py-3 rounded-md font-semibold hover:bg-gold/90 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;