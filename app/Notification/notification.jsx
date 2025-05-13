"use client"
import { useState, useEffect } from 'react';
import { BellRing, Bell, X, ChevronRight, BookOpen, Video, PenTool, Clock } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Mock authentication context - replace with your actual Firebase Auth implementation
const useAuth = () => {
  // For demo purposes - toggle this to see different states
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Simulate auth check
  useEffect(() => {
    // Mock Firebase auth state change
    const checkAuth = () => {
      // Get from local storage for demo purposes
      const savedAuthState = localStorage.getItem('authState');
      if (savedAuthState === 'loggedIn') {
        setIsLoggedIn(true);
        setUser({ 
          uid: 'user123', 
          email: 'user@example.com',
          displayName: 'Demo User' 
        });
      }
    };

    checkAuth();
  }, []);

  // Mock sign in/out functions
  const login = () => {
    setIsLoggedIn(true);
    setUser({ uid: 'user123', email: 'user@example.com', displayName: 'Demo User' });
    localStorage.setItem('authState', 'loggedIn');
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.setItem('authState', 'loggedOut');
  };

  return { isLoggedIn, user, login, logout };
};

// Sample notification data
const sampleNotifications = [
  {
    id: 'notif1',
    type: 'roadmap',
    title: 'New Roadmap: Advanced React Patterns',
    description: 'Learn component composition, render props, HOCs and more',
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    isRead: false,
    icon: 'BookOpen'
  },
  {
    id: 'notif2',
    type: 'course',
    title: 'New Course: Firebase Authentication',
    description: 'Master user authentication and session management',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3),
    isRead: true,
    icon: 'Video'
  },
  {
    id: 'notif3',
    type: 'tool',
    title: 'New Tool: Performance Profiler',
    description: 'Optimize your React applications with our new tool',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
    isRead: false,
    icon: 'Tool'
  }
];

// Format relative time
const formatRelativeTime = (date) => {
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  if (diffInSeconds < 60) {
    return 'Just now';
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
};

// NotificationCard Component
const NotificationCard = ({ notification, onMarkAsRead }) => {
  const IconComponent = {
    'BookOpen': BookOpen,
    'Video': Video,
    'Tool': PenTool
  }[notification.icon] || Bell;

  const iconColors = {
    'roadmap': 'text-blue-500',
    'course': 'text-purple-500',
    'tool': 'text-green-500'
  };

  const bgColors = {
    'roadmap': 'bg-blue-50',
    'course': 'bg-purple-50',
    'tool': 'bg-green-50'
  };

  return (
    <div 
      className={`p-4 mb-3 rounded-lg transition-all duration-300 hover:shadow-md ${notification.isRead ? 'bg-gray-50' : `${bgColors[notification.type]} border-l-4 border-${iconColors[notification.type].replace('text-', '')}`}`}
    >
      <div className="flex items-start">
        <div className={`p-2 rounded-full ${bgColors[notification.type]} mr-3`}>
          <IconComponent className={`${iconColors[notification.type]} h-5 w-5`} />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-gray-900">{notification.title}</h3>
            {!notification.isRead && (
              <span onClick={() => onMarkAsRead(notification.id)} className="text-gray-400 hover:text-gray-600 cursor-pointer">
                <X size={16} />
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 mt-1">{notification.description}</p>
          <div className="flex items-center mt-2 text-xs text-gray-500">
            <Clock size={12} className="mr-1" />
            <span>{formatRelativeTime(notification.timestamp)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Empty State Component
const EmptyNotifications = () => (
  <div className="flex flex-col items-center justify-center py-12 text-center">
    <div className="bg-gray-100 p-4 rounded-full mb-4">
      <BellRing className="h-10 w-10 text-gray-400" />
    </div>
    <h3 className="text-lg font-medium text-gray-900 mb-1">All caught up!</h3>
    <p className="text-gray-500 max-w-xs">You don't have any new notifications right now. Check back later.</p>
  </div>
);

// Login Prompt Component
const LoginPrompt = ({ onLogin }) => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push('/Signup');
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-sm">
      <div className="bg-white p-4 rounded-full mb-6 shadow-md">
        <BellRing className="h-10 w-10 text-blue-500" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Stay Updated</h2>
      <p className="text-gray-600 max-w-md mb-6 px-4">
        Subscribe to get the latest resources delivered directly to you. Never miss a new roadmap, course, or tool again.
      </p>
      <button 
        onClick={handleSignUp}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center"
      >
        Connect to Stay Updated
        <ChevronRight className="ml-1 h-5 w-5" />
      </button>
    </div>
  );
};

// Main Notification Panel Component
const NotificationPanel = () => {
  const [notifications, setNotifications] = useState(sampleNotifications);
  const [showAnimation, setShowAnimation] = useState(false);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, isRead: true } : notif
    ));
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  // Simulate new notification arrival
  useEffect(() => {
    const timer = setTimeout(() => {
      const newNotification = {
        id: `notif${Date.now()}`,
        type: 'roadmap',
        title: 'Just Added: Next.js Performance Tips',
        description: 'Learn how to optimize your Next.js applications',
        timestamp: new Date(),
        isRead: false,
        icon: 'BookOpen'
      };

      setNotifications(prev => [newNotification, ...prev]);
      setShowAnimation(true);

      setTimeout(() => {
        setShowAnimation(false);
      }, 3000);
    }, 5000); // Add a new notification after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Notifications</h2>
          {unreadCount > 0 && (
            <span className="bg-white text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
              {unreadCount} new
            </span>
          )}
        </div>
      </div>

      <div className="p-4 max-h-96 overflow-y-auto">
        {notifications.length > 0 ? (
          <div className={`${showAnimation ? 'animate-pulse' : ''}`}>
            {notifications.map((notification, index) => (
              <NotificationCard 
                key={notification.id} 
                notification={notification} 
                onMarkAsRead={markAsRead} 
                isNew={index === 0 && showAnimation}
              />
            ))}
          </div>
        ) : (
          <EmptyNotifications />
        )}
      </div>
    </div>
  );
};

// Main Notification Page Component
export default function NotificationPage() {
  const { isLoggedIn, login } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          RoadmapFinder Notifications
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {isLoggedIn ? <NotificationPanel /> : <LoginPrompt onLogin={login} />}
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Notification Settings</h2>

            {isLoggedIn ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">New roadmaps</span>
                  <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out bg-gray-200 rounded-full cursor-pointer">
                    <label className="absolute left-0 w-6 h-6 transition duration-100 ease-in-out transform bg-white border-2 rounded-full cursor-pointer peer-checked:translate-x-full peer-checked:border-blue-500" htmlFor="roadmap-toggle"></label>
                    <input type="checkbox" id="roadmap-toggle" className="peer sr-only" defaultChecked />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-700">New courses</span>
                  <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out bg-gray-200 rounded-full cursor-pointer">
                    <label className="absolute left-0 w-6 h-6 transition duration-100 ease-in-out transform bg-white border-2 rounded-full cursor-pointer peer-checked:translate-x-full peer-checked:border-blue-500" htmlFor="course-toggle"></label>
                    <input type="checkbox" id="course-toggle" className="peer sr-only" defaultChecked />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-700">New tools</span>
                  <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out bg-gray-200 rounded-full cursor-pointer">
                    <label className="absolute left-0 w-6 h-6 transition duration-100 ease-in-out transform bg-white border-2 rounded-full cursor-pointer peer-checked:translate-x-full peer-checked:border-blue-500" htmlFor="tools-toggle"></label>
                    <input type="checkbox" id="tools-toggle" className="peer sr-only" defaultChecked />
                  </div>
                </div>

                <button className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                  Save Preferences
                </button>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">Sign in to manage your notification preferences</p>
                <button 
                  onClick={login} 
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Demo Login
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <button onClick={login} className="text-blue-500 hover:underline">
            Toggle Login State (Demo)
          </button>
        </div>
      </div>
    </div>
  );
}