import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Plus, Eye, Download, Heart, Share2, Lock, Calendar } from 'lucide-react';
import QRCode from 'qrcode';
import toast from 'react-hot-toast';
import type { LiveEvent, Photo } from '../types';

const LiveFeed: React.FC = () => {
  const [events, setEvents] = useState<LiveEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<LiveEvent | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  // Mock data for demonstration
  useEffect(() => {
    const mockEvents: LiveEvent[] = [
      {
        id: '1',
        title: 'Sarah & Mike Wedding',
        date: '2024-01-15',
        qrCode: '',
        isActive: true,
        password: 'wedding2024',
        photos: [
          {
            id: '1',
            url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
            category: 'ceremony',
            title: 'Exchange of Vows',
            likes: 24,
            timestamp: new Date('2024-01-15T14:30:00')
          },
          {
            id: '2',
            url: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg',
            category: 'portraits',
            title: 'Bridal Portrait',
            likes: 18,
            timestamp: new Date('2024-01-15T15:00:00')
          },
          {
            id: '3',
            url: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg',
            category: 'reception',
            title: 'First Dance',
            likes: 32,
            timestamp: new Date('2024-01-15T19:00:00')
          }
        ]
      },
      {
        id: '2',
        title: 'Corporate Annual Gala',
        date: '2024-01-10',
        qrCode: '',
        isActive: false,
        photos: [
          {
            id: '4',
            url: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
            category: 'event',
            title: 'Opening Speech',
            likes: 15,
            timestamp: new Date('2024-01-10T18:00:00')
          },
          {
            id: '5',
            url: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg',
            category: 'event',
            title: 'Networking Session',
            likes: 12,
            timestamp: new Date('2024-01-10T19:30:00')
          }
        ]
      }
    ];

    setEvents(mockEvents);
  }, []);

  const generateQRCode = async (eventId: string) => {
    try {
      const url = `${window.location.origin}/live-event/${eventId}`;
      const qrCodeDataUrl = await QRCode.toDataURL(url);
      setQrCodeUrl(qrCodeDataUrl);
      return qrCodeDataUrl;
    } catch (error) {
      toast.error('Failed to generate QR code');
      return '';
    }
  };

  const createEvent = async (eventData: Partial<LiveEvent>) => {
    const newEvent: LiveEvent = {
      id: Date.now().toString(),
      title: eventData.title || '',
      date: eventData.date || '',
      qrCode: '',
      isActive: true,
      password: eventData.password,
      photos: []
    };

    const qrCode = await generateQRCode(newEvent.id);
    newEvent.qrCode = qrCode;

    setEvents(prev => [newEvent, ...prev]);
    setShowCreateForm(false);
    toast.success('Event created successfully!');
  };

  const handleLike = (eventId: string, photoId: string) => {
    setEvents(prev =>
      prev.map(event =>
        event.id === eventId
          ? {
              ...event,
              photos: event.photos.map(photo =>
                photo.id === photoId
                  ? { ...photo, likes: photo.likes + 1 }
                  : photo
              )
            }
          : event
      )
    );
    toast.success('Photo liked!');
  };

  const downloadPhoto = (photoUrl: string, photoTitle: string) => {
    const link = document.createElement('a');
    link.href = photoUrl;
    link.download = `${photoTitle}.jpg`;
    link.click();
    toast.success('Download started!');
  };

  const sharePhoto = (photoUrl: string, photoTitle: string) => {
    if (navigator.share) {
      navigator.share({
        title: photoTitle,
        url: photoUrl
      });
    } else {
      navigator.clipboard.writeText(photoUrl);
      toast.success('Photo URL copied to clipboard!');
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
            Live Photo <span className="text-gold">Feed</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Experience real-time photo sharing at your events. Guests can instantly view, like, and download
            photos as they're captured, making every moment shareable in real-time.
          </motion.p>
          
          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-gold text-black px-8 py-4 rounded-md text-lg font-semibold hover:bg-gold/90 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Create New Event</span>
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to set up live photo sharing for your event
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Create Event',
                description: 'Set up a new event with title, date, and optional password protection'
              },
              {
                step: '2',
                title: 'Generate QR Code',
                description: 'Get a unique QR code that links directly to your event gallery'
              },
              {
                step: '3',
                title: 'Share with Guests',
                description: 'Display the QR code at your venue for guests to scan easily'
              },
              {
                step: '4',
                title: 'Live Updates',
                description: 'Photos appear in real-time as they\'re captured and uploaded'
              }
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: parseInt(item.step) * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold text-black rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Your Events</h2>
            <div className="text-sm text-gray-500">
              {events.filter(e => e.isActive).length} active events
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      event.isActive 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {event.isActive ? 'Active' : 'Ended'}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{event.photos.length} photos</span>
                    {event.password && <Lock className="w-4 h-4" />}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="flex-1 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors duration-200 flex items-center justify-center space-x-1"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View</span>
                    </button>
                    <button
                      onClick={() => generateQRCode(event.id)}
                      className="bg-gold text-black px-4 py-2 rounded-md hover:bg-gold/90 transition-colors duration-200 flex items-center justify-center"
                    >
                      <QrCode className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Create Event Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900">Create New Event</h3>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              createEvent({
                title: formData.get('title') as string,
                date: formData.get('date') as string,
                password: formData.get('password') as string || undefined
              });
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Event Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Enter event title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password (Optional)
                  </label>
                  <input
                    type="text"
                    name="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Set access password"
                  />
                </div>
              </div>
              
              <div className="flex space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowCreateForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-gold text-black rounded-md hover:bg-gold/90 transition-colors duration-200"
                >
                  Create Event
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">{selectedEvent.title}</h3>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedEvent.photos.map((photo) => (
                  <div key={photo.id} className="bg-gray-50 rounded-lg overflow-hidden">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{photo.title}</h4>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() => handleLike(selectedEvent.id, photo.id)}
                            className="flex items-center space-x-1 text-gray-600 hover:text-red-500 transition-colors duration-200"
                          >
                            <Heart className="w-4 h-4" />
                            <span>{photo.likes}</span>
                          </button>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => sharePhoto(photo.url, photo.title)}
                            className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
                          >
                            <Share2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => downloadPhoto(photo.url, photo.title)}
                            className="text-gray-600 hover:text-green-500 transition-colors duration-200"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* QR Code Modal */}
      {qrCodeUrl && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-center"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900">Event QR Code</h3>
            <img src={qrCodeUrl} alt="QR Code" className="w-48 h-48 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">
              Share this QR code with your guests so they can access the live photo feed
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setQrCodeUrl('')}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = qrCodeUrl;
                  link.download = 'event-qr-code.png';
                  link.click();
                  toast.success('QR code downloaded!');
                }}
                className="flex-1 px-4 py-2 bg-gold text-black rounded-md hover:bg-gold/90 transition-colors duration-200"
              >
                Download
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LiveFeed;