"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from '../lib/auth';
import { auth } from '../lib/firebase';

export default function NotificationPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [authError, setAuthError] = useState(null);

  const router = useRouter();

  // Default notifications data - only shown to authenticated users
  const defaultNotifications = useMemo(() => [
    {
      id: 1,
      type: 'course',
      icon: '📘',
      title: 'Advanced React Patterns',
      message: 'New module available: "Custom Hooks for State Management"',
      timestamp: '2 hours ago',
      read: false,
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 2,
      type: 'roadmap',
      icon: '🧭',
      title: 'Full Stack Developer Roadmap',
      message: 'Your roadmap has been updated with new Backend technologies',
      timestamp: '1 day ago',
      read: false,
      createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
    },

    {
      id: 5,
      type: 'course',
      icon: '⚛️',
      title: 'Next.js Fundamentals',
      message: 'New chapter on App Router and Server Components',
      timestamp: '1 week ago',
      read: false,
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
    }
  ], []);

  // Tab configuration
  const tabs = useMemo(() => [
    { id: 'all', label: 'All', count: 0 },
    { id: 'courses', label: 'Courses', count: 0 },
    { id: 'roadmaps', label: 'Roadmaps', count: 0 },

  ], []);

  // Enhanced authentication state management
  useEffect(() => {
    let mounted = true;

    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        if (!mounted) return;

        console.log('Auth state changed:', currentUser ? 'User logged in' : 'User logged out');

        setUser(currentUser);
        setAuthChecked(true);
        setAuthError(null);

        // Load notifications only for authenticated users
        if (currentUser) {
          setNotifications(defaultNotifications);
          console.log('Notifications loaded for authenticated user');
        } else {
          setNotifications([]);
          console.log('Notifications cleared - user not authenticated');
        }

        setIsLoading(false);
      },
      (error) => {
        if (!mounted) return;

        console.error('Authentication error:', error);
        setAuthError(error.message);
        setUser(null);
        setNotifications([]);
        setAuthChecked(true);
        setIsLoading(false);
      }
    );

    // Cleanup function
    return () => {
      mounted = false;
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [defaultNotifications]);

  // Navigation handlers with error handling
  const handleSignup = useCallback(() => {
    try {
      router.push('/Signup');
    } catch (error) {
      console.error('Navigation error to signup:', error);
    }
  }, [router]);

  const handleLogin = useCallback(() => {
    try {
      router.push('/Login');
    } catch (error) {
      console.error('Navigation error to login:', error);
    }
  }, [router]);

  const handleHome = useCallback(() => {
    try {
      router.push('/Home');
    } catch (error) {
      console.error('Navigation error to home:', error);
    }
  }, [router]);

  // Enhanced notification click handler
  const handleNotificationClick = useCallback((notification) => {
    if (!user) {
      console.warn('Notification clicked but user not authenticated');
      return;
    }

    const routeMap = {
      course: '/Courses',
      roadmap: '/RoadmapPage',
      tool: '/TOOLS',
      doc: '/Docs'
    };

    try {
      // Mark notification as read
      setNotifications(prevNotifications => 
        prevNotifications.map(item => 
          item.id === notification.id ? { ...item, read: true } : item
        )
      );

      // Navigate to appropriate page
      const route = routeMap[notification.type];
      if (route) {
        router.push(route);
        console.log(`Navigating to ${route} for notification type: ${notification.type}`);
      } else {
        console.warn(`No route found for notification type: ${notification.type}`);
      }
    } catch (error) {
      console.error('Error handling notification click:', error);
    }
  }, [router, user]);

  // Mark all notifications as read
  const handleMarkAllAsRead = useCallback(() => {
    if (!user) return;

    setNotifications(prevNotifications => 
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
    console.log('All notifications marked as read');
  }, [user]);

  // Enhanced timestamp formatting
  const formatTimestamp = useCallback((dateStr) => {
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) {
        return 'Unknown time';
      }

      const now = new Date();
      const diffMs = now - date;
      const diffMinutes = Math.floor(diffMs / (1000 * 60));
      const diffHours = Math.floor(diffMinutes / 60);
      const diffDays = Math.floor(diffHours / 24);

      if (diffMinutes < 1) return 'Just now';
      if (diffMinutes < 60) return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
      if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
      if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
      return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? 's' : ''} ago`;
    } catch (error) {
      console.error('Error formatting timestamp:', error);
      return 'Unknown time';
    }
  }, []);

  // Filter notifications based on active tab
  const filteredNotifications = useMemo(() => {
    if (activeTab === 'all') return notifications;

    const typeMap = {
      'courses': 'course',
      'roadmaps': 'roadmap',
      'tools': 'tool',
      'docs': 'doc'
    };

    const targetType = typeMap[activeTab];
    return notifications.filter(notification => 
      notification.type === targetType
    );
  }, [notifications, activeTab]);

  // Calculate counts for tabs and unread notifications
  const { unreadCount, tabCounts } = useMemo(() => {
    const unread = notifications.filter(n => !n.read).length;
    const counts = {
      all: notifications.length,
      courses: notifications.filter(n => n.type === 'course').length,
      roadmaps: notifications.filter(n => n.type === 'roadmap').length,
      tools: notifications.filter(n => n.type === 'tool').length,
      docs: notifications.filter(n => n.type === 'doc').length,
    };

    return { unreadCount: unread, tabCounts: counts };
  }, [notifications]);

  // User authentication status check
  const isUserAuthenticated = useMemo(() => {
    return authChecked && user !== null;
  }, [authChecked, user]);

  const isUserNotAuthenticated = useMemo(() => {
    return authChecked && user === null;
  }, [authChecked, user]);

  // Loading state - show while checking authentication
  if (isLoading || !authChecked) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 border-3 border-indigo-600 rounded-full animate-spin border-t-transparent"></div>
            <span className="text-indigo-700 font-medium text-lg">Checking authentication...</span>
          </div>
          {authError && (
            <div className="text-red-600 text-sm text-center max-w-md">
              Authentication error: {authError}
            </div>
          )}
        </div>
      </div>
    );
  }

  // NOT AUTHENTICATED - Show signup/login prompt
  if (isUserNotAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="sticky top-0 z-10 bg-white shadow-sm">
            <div className="px-4 py-4 border-b flex justify-between items-center">
              <h1 className="text-xl font-bold text-gray-800">Notifications</h1>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={handleLogin}
                  className="px-4 py-2 text-sm text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-md transition-all duration-200"
                >
                  Sign In
                </button>
                <button 
                  onClick={handleSignup}
                  className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-sm"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </header>

          {/* Authentication Required Prompt */}
          <div className="flex flex-col items-center justify-center py-20 text-center px-4">
            <div className="text-6xl mb-6 animate-bounce">🔔</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay in the Loop!</h2>
            <p className="text-gray-600 text-lg mb-2 max-w-2xl leading-relaxed">
              Get instant notifications about new courses, roadmaps, tools, and documentation updates.
            </p>
            <p className="text-gray-500 text-base mb-8 max-w-md">
              Join our community to never miss important updates!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={handleSignup}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                🚀 Get Started - It's Free!
              </button>
              <button 
                onClick={handleLogin}
                className="px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transform hover:scale-105 transition-all duration-200 shadow-sm"
              >
                📱 Already Have Account?
              </button>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mt-12">
              <div className="text-center p-4">
                <div className="text-2xl mb-2">📚</div>
                <h3 className="font-semibold text-gray-800 mb-1">Course Updates</h3>
                <p className="text-sm text-gray-600">New modules and lessons</p>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl mb-2">🗺️</div>
                <h3 className="font-semibold text-gray-800 mb-1">Roadmap Changes</h3>
                <p className="text-sm text-gray-600">Updated learning paths</p>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl mb-2">🛠️</div>
                <h3 className="font-semibold text-gray-800 mb-1">New Tools</h3>
                <p className="text-sm text-gray-600">Latest development resources</p>
              </div>
            </div>
          </div>

          {/* Home Button */}
          <div className="fixed bottom-6 right-6">
            <button 
              onClick={handleHome}
              className="p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-110 transition-all duration-200 group"
              aria-label="Go to Home"
            >
              <svg className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // AUTHENTICATED - Show notifications interface
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto pb-20">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white shadow-sm">
          <div className="px-4 py-4 border-b flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-gray-800">Notifications</h1>
              <p className="text-sm text-gray-500">
                Welcome back, {user.displayName || user.email?.split('@')[0] || 'User'}! 👋
              </p>
            </div>
            <div className="flex items-center space-x-3">
              {unreadCount > 0 && (
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    {unreadCount} unread
                  </span>
                  <button
                    onClick={handleMarkAllAsRead}
                    className="text-xs text-indigo-600 hover:text-indigo-800 hover:underline transition-colors"
                  >
                    Mark all read
                  </button>
                </div>
              )}
              {unreadCount === 0 && (
                <span className="text-sm text-green-600 font-medium">✅ All caught up!</span>
              )}
            </div>
          </div>

          {/* Enhanced Tab Menu */}
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-fit px-4 py-3 text-sm font-medium transition-all duration-200 relative ${
                  activeTab === tab.id
                    ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{tab.label}</span>
                {tabCounts[tab.id] > 0 && (
                  <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-600 bg-indigo-100 rounded-full">
                    {tabCounts[tab.id]}
                  </span>
                )}
              </button>
            ))}
          </div>
        </header>

        {/* Notification List */}
        <div className="px-4 py-2">
          {filteredNotifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="text-5xl mb-6">📭</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                No {activeTab !== 'all' ? activeTab.toLowerCase() : ''} notifications
              </h2>
              <p className="text-gray-500 text-base max-w-md">
                {activeTab === 'all' 
                  ? "We'll notify you when there are new updates across all categories"
                  : `No ${activeTab.toLowerCase()} updates at the moment. Check back later!`
                }
              </p>
            </div>
          ) : (
            <div className="space-y-3 pt-4">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className="cursor-pointer group"
                  onClick={() => handleNotificationClick(notification)}
                >
                  <div 
                    className={`p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border-l-4 group-hover:scale-[1.02] ${
                      !notification.read 
                        ? 'border-indigo-500 bg-gradient-to-r from-indigo-50/50 to-white' 
                        : 'border-transparent hover:border-gray-200'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="text-3xl mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                        {notification.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-1 group-hover:text-indigo-700 transition-colors">
                          {notification.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                          {notification.message}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 font-medium">
                            {notification.timestamp || formatTimestamp(notification.createdAt)}
                          </span>
                          <span className="text-xs text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                            Click to view →
                          </span>
                        </div>
                      </div>
                      {!notification.read && (
                        <div className="flex-shrink-0 ml-3">
                          <span className="h-3 w-3 bg-indigo-500 rounded-full block animate-pulse"></span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Home Button */}
        <div className="fixed bottom-6 right-6">
          <button 
            onClick={handleHome}
            className="p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-110 transition-all duration-200 group"
            aria-label="Go to Home"
          >
            <svg className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}