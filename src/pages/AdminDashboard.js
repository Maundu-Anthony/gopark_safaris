import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import PackageManager from '../components/admin/PackageManager';
import ServiceManager from '../components/admin/ServiceManager';
import GalleryManager from '../components/admin/GalleryManager';
import TestimonialManager from '../components/admin/TestimonialManager';

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('packages');

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const tabs = [
    { id: 'packages', label: 'Packages', icon: '📦' },
    { id: 'services', label: 'Services', icon: '🛎️' },
    { id: 'gallery', label: 'Gallery', icon: '🖼️' },
    { id: 'testimonials', label: 'Testimonials', icon: '💬' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-safari-olive text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">GoPark Safaris Admin</h1>
              <p className="text-sm opacity-90">Welcome, {user?.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sunset-orange px-4 py-2 rounded-lg hover:bg-sunset-orange/90 transition"
              >
                View Website
              </a>
              <button
                onClick={handleLogout}
                className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition ${
                  activeTab === tab.id
                    ? 'border-sunset-orange text-sunset-orange'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'packages' && <PackageManager />}
        {activeTab === 'services' && <ServiceManager />}
        {activeTab === 'gallery' && <GalleryManager />}
        {activeTab === 'testimonials' && <TestimonialManager />}
      </main>
    </div>
  );
};

export default AdminDashboard;
