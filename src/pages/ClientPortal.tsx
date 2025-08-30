import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, Download, Eye, Calendar, CreditCard, Image, LogOut } from 'lucide-react';
import toast from 'react-hot-toast';
import type { Client, Album } from '../types';

const ClientPortal: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  // Mock client data
  const mockClient: Client = {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    albums: [
      {
        id: '1',
        title: 'Wedding Day Photos',
        isPrivate: true,
        downloadEnabled: true,
        photos: [
          {
            id: '1',
            url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
            category: 'ceremony',
            title: 'Exchange of Vows',
            likes: 0,
            timestamp: new Date('2024-01-15T14:30:00')
          },
          {
            id: '2',
            url: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg',
            category: 'portraits',
            title: 'Bridal Portrait',
            likes: 0,
            timestamp: new Date('2024-01-15T15:00:00')
          },
          {
            id: '3',
            url: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg',
            category: 'reception',
            title: 'First Dance',
            likes: 0,
            timestamp: new Date('2024-01-15T19:00:00')
          }
        ]
      },
      {
        id: '2',
        title: 'Engagement Session',
        isPrivate: false,
        downloadEnabled: true,
        photos: [
          {
            id: '4',
            url: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
            category: 'engagement',
            title: 'Romantic Moment',
            likes: 0,
            timestamp: new Date('2023-12-10T16:00:00')
          }
        ]
      }
    ],
    payments: [
      {
        id: '1',
        amount: 2500,
        date: '2024-01-01',
        description: 'Wedding Photography Package',
        status: 'paid'
      },
      {
        id: '2',
        amount: 500,
        date: '2023-12-01',
        description: 'Engagement Session',
        status: 'paid'
      }
    ]
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app, validate against backend
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
      toast.success('Welcome back!');
    } else {
      toast.error('Please enter valid credentials');
    }
  };

  const handleDownload = (photoUrl: string, photoTitle: string) => {
    const link = document.createElement('a');
    link.href = photoUrl;
    link.download = `${photoTitle}.jpg`;
    link.click();
    toast.success('Download started!');
  };

  const downloadAlbum = (album: Album) => {
    toast.success(`Preparing ${album.title} for download...`);
    // In a real app, this would create a zip file with all photos
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen pt-16 bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-gold" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Client Portal</h1>
            <p className="text-gray-600">Access your private photo galleries and account information</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={loginData.email}
                onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={loginData.password}
                onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-black px-6 py-3 rounded-md font-semibold hover:bg-gold/90 transition-colors duration-300"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>Demo credentials: any email and password</p>
          </div>
        </motion.div>
      </div>
    );
  }

  if (selectedAlbum) {
    return (
      <div className="min-h-screen pt-16 bg-gray-50">
        {/* Album Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <button
                  onClick={() => setSelectedAlbum(null)}
                  className="text-gold hover:text-gold/80 mb-2 text-sm font-medium"
                >
                  ← Back to Albums
                </button>
                <h1 className="text-2xl font-bold text-gray-900">{selectedAlbum.title}</h1>
                <p className="text-gray-600">{selectedAlbum.photos.length} photos</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => downloadAlbum(selectedAlbum)}
                  className="bg-gold text-black px-4 py-2 rounded-md hover:bg-gold/90 transition-colors duration-200 inline-flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download All</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Photos Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {selectedAlbum.photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleDownload(photo.url, photo.title)}
                        className="bg-white text-black p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1">{photo.title}</h3>
                  <p className="text-sm text-gray-500">
                    {photo.timestamp.toLocaleDateString()}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, {mockClient.name}</h1>
                <p className="text-gray-600">{mockClient.email}</p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsLoggedIn(false);
                setLoginData({ email: '', password: '' });
                toast.success('Signed out successfully');
              }}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Albums */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Your Albums</h2>
                <div className="text-sm text-gray-500">
                  {mockClient.albums.length} albums available
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockClient.albums.map((album) => (
                  <motion.div
                    key={album.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300 cursor-pointer group"
                    onClick={() => setSelectedAlbum(album)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900 group-hover:text-gold transition-colors duration-200">
                        {album.title}
                      </h3>
                      {album.isPrivate && <Lock className="w-4 h-4 text-gray-400" />}
                    </div>
                    
                    <div className="grid grid-cols-3 gap-1 mb-3">
                      {album.photos.slice(0, 3).map((photo) => (
                        <div key={photo.id} className="aspect-square">
                          <img
                            src={photo.url}
                            alt=""
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Image className="w-4 h-4" />
                        <span>{album.photos.length} photos</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        {album.downloadEnabled && <Download className="w-4 h-4" />}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Account Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Account Information</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-500">Name</label>
                  <p className="text-gray-900">{mockClient.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Email</label>
                  <p className="text-gray-900">{mockClient.email}</p>
                </div>
              </div>
            </div>

            {/* Payment History */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Payment History</h3>
              <div className="space-y-4">
                {mockClient.payments.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">${payment.amount}</p>
                      <p className="text-sm text-gray-500">{payment.description}</p>
                      <p className="text-xs text-gray-400">
                        {new Date(payment.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      payment.status === 'paid' 
                        ? 'bg-green-100 text-green-800' 
                        : payment.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-colors duration-200 flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download All Photos</span>
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-colors duration-200 flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Book Another Session</span>
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-colors duration-200 flex items-center space-x-2">
                  <CreditCard className="w-4 h-4" />
                  <span>View Invoices</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;