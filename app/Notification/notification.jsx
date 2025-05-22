"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NotificationPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to true for demonstration
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);

  const router = useRouter();

  // Load notifications from JSON file
  useEffect(() => {
    async function loadNotifications() {
      try {
        setIsLoading(true);

        // Try to read the notifications file
        let notificationsData;

        try {
          // Try to read the existing file
          const response = await fetch('/data/notifications.json');

          if (response.ok) {
            notificationsData = await response.json();
          } else {
            // If file doesn't exist or can't be read, use default data
            notificationsData = getDefaultNotifications();
          }
        } catch (error) {
          console.error("Error fetching notifications:", error);
          notificationsData = getDefaultNotifications();
        }

        setNotifications(notificationsData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading notifications:", error);
        setNotifications(getDefaultNotifications());
        setIsLoading(false);
      }
    }

    loadNotifications();

    // Check notification permission popup
    try {
      const hasShownPopup = localStorage.getItem('notificationPopupShown');
      if (!hasShownPopup) {
        const timer = setTimeout(() => {
          setShowNotificationPopup(true);
        }, 1500);
        return () => clearTimeout(timer);
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, []);

  // Function to get default notifications data
  function getDefaultNotifications() {
    return [
      {
        id: 1,
        type: 'course',
        icon: '📘',
        title: 'Advanced React Patterns',
        message: 'New module available: "Custom Hooks for State Management"',
        timestamp: '2 hours ago',
        read: false,
        createdAt: '2025-05-21T08:30:00.000Z'
      },
      {
        id: 2,
        type: 'roadmap',
        icon: '🧭',
        title: 'Full Stack Developer Roadmap',
        message: 'Your roadmap has been updated with new Backend technologies',
        timestamp: '1 day ago',
        read: false,
        createdAt: '2025-05-20T10:15:00.000Z'
      },
      {
        id: 3,
        type: 'tool',
        icon: '🛠️',
        title: 'VS Code Extensions',
        message: 'New recommended extensions for React development added',
        timestamp: '3 days ago',
        read: true,
        createdAt: '2025-05-18T14:22:00.000Z'
      },
      {
        id: 4,
        type: 'doc',
        icon: '📄',
        title: 'TypeScript Documentation',
        message: 'Updated guides on Advanced Types and Generics',
        timestamp: '5 days ago',
        read: true,
        createdAt: '2025-05-16T09:45:00.000Z'
      }
    ];
  }

  // Format timestamp for display
  function formatTimestamp(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now - date;
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffWeeks = Math.floor(diffDays / 7);

    if (diffMinutes < 1) return 'Just now';
    if (diffMinutes < 60) return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    return `${diffWeeks} week${diffWeeks > 1 ? 's' : ''} ago`;
  }

  // Handle popup close
  const handleClosePopup = () => {
    setShowNotificationPopup(false);
    try {
      localStorage.setItem('notificationPopupShown', 'true');
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }
  };

  // Handle signup click
  const handleSignup = () => {
    router.push('/Signup');
    handleClosePopup();
  };

  // Handle notification click - mark as read and navigate to appropriate page
  const handleNotificationClick = (notification) => {
    // Mark as read
    const updatedNotifications = notifications.map(item => 
      item.id === notification.id ? { ...item, read: true } : item
    );
    setNotifications(updatedNotifications);

    // Store updated notifications in localStorage to persist read status
    try {
      localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }

    // Navigate to appropriate page based on notification type
    const type = notification.type.toLowerCase();
    switch (type) {
      case 'course':
        router.push('/Courses');
        break;
      case 'roadmap':
        router.push('/Roadmap');
        break;
      case 'tool':
        router.push('/TOOLS');
        break;
      case 'doc':
        router.push('/Docs');
        break;
      default:
        // No specific route, just mark as read
        break;
    }
  };

  // Filter notifications based on active tab
  const filteredNotifications = notifications.filter(notification => {
    if (activeTab === 'all') return true;

    // Convert plural tab names to singular to match notification types
    const type = activeTab.toLowerCase();
    const singularType = type.endsWith('s') ? type.slice(0, -1) : type;
    return notification.type === singularType;
  });

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-6 h-6 border-2 border-indigo-600 rounded-full animate-spin border-t-transparent"></div>
        <span className="ml-2 text-indigo-700">Loading notifications...</span>
      </div>
    );
  }

  // Not logged in state
  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gradient-to-br from-indigo-500 to-purple-600">
        <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Stay Updated!</h1>
          <p className="text-gray-600 mb-6">
            Subscribe for free to get updates on tech roadmaps, courses & tools.
          </p>
          <button 
            onClick={() => router.push('/auth')}
            className="w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Sign In or Create Account
          </button>
        </div>
      </div>
    );
  }

  // Tab options
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'courses', label: 'Courses' },
    { id: 'roadmaps', label: 'Roadmaps' },
    { id: 'tools', label: 'Tools' },
    { id: 'docs', label: 'Docs' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto pb-20">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white shadow-sm">
          <div className="px-4 py-4 border-b flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">Notifications</h1>
          </div>

          {/* Tab Menu */}
          <div className="flex overflow-x-auto hide-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-fit px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </header>

        {/* Notification List */}
        <div className="px-4 py-2">
          {filteredNotifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="text-4xl mb-4">🔔</div>
              <h2 className="text-lg font-medium text-gray-800 mb-2">No notifications yet</h2>
              <p className="text-gray-500 text-sm">
                We'll notify you when there are new updates on your selected topics
              </p>
            </div>
          ) : (
            <ul className="space-y-3 pt-2">
              {filteredNotifications.map((notification) => (
                <li
                  key={notification.id}
                  className="opacity-100 transform-none transition-opacity duration-300 cursor-pointer"
                  onClick={() => handleNotificationClick(notification)}
                >
                  <div 
                    className={`p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border-l-4 ${
                      !notification.read ? 'border-indigo-500' : 'border-transparent'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="text-2xl mr-3">
                        {notification.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 mb-1">{notification.title}</h3>
                        <p className="text-gray-600 text-sm mb-1">{notification.message}</p>
                        <span className="text-xs text-gray-500">
                          {notification.timestamp || formatTimestamp(notification.createdAt)}
                        </span>
                      </div>
                      {!notification.read && (
                        <span className="h-2 w-2 bg-indigo-500 rounded-full"></span>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Link to Home to view notifications */}
        <div className="fixed bottom-6 right-6">
          <Link href="/Home">
            <button className="p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* Notification Permission Popup */}
      {showNotificationPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div 
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 opacity-100 scale-100 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <span className="text-3xl mr-2">🔔</span>
                <h2 className="text-xl font-bold text-gray-800">Stay Updated!</h2>
              </div>
              <button 
                onClick={handleClosePopup}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-gray-600 mb-6">
              Never miss updates on new roadmaps, courses, tools and documentation. 
              Sign up to receive push notifications!
            </p>

            <div className="flex flex-col space-y-3">
              <button 
                onClick={handleSignup}
                className="w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Sign Up
              </button>
              <button 
                onClick={handleClosePopup}
                className="w-full py-3 px-6 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-all duration-300"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}