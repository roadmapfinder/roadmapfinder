"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Mock auth function for demonstration - replace with your actual auth import
const mockOnAuthStateChanged = (callback) => {
  // Simulate authentication check
  setTimeout(() => {
    // For demo purposes, randomly simulate logged in/out state
    const isLoggedIn = Math.random() > 0.5;
    if (isLoggedIn) {
      callback({
        uid: 'user123',
        email: 'user@example.com',
        displayName: 'John Doe'
      });
    } else {
      callback(null);
    }
  }, 1000);

  // Return unsubscribe function
  return () => {};
};

export default function NotificationPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [authInitialized, setAuthInitialized] = useState(false);

  const router = useRouter();

  // Default notifications data
  const defaultNotifications = useMemo(() => [
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
  ], []);

  // Tab options
  const tabs = useMemo(() => [
    { id: 'all', label: 'All' },
    { id: 'courses', label: 'Courses' },
    { id: 'roadmaps', label: 'Roadmaps' },
    { id: 'tools', label: 'Tools' },
    { id: 'docs', label: 'Docs' }
  ], []);

  // Load notifications - using in-memory storage instead of localStorage
  const loadNotifications = useCallback((userId) => {
    try {
      // In a real app, you'd fetch from your backend API
      // For now, we'll use the default notifications
      setNotifications(defaultNotifications);
    } catch (error) {
      console.error("Error loading notifications:", error);
      setNotifications(defaultNotifications);
    }
  }, [defaultNotifications]);

  // Save notifications - placeholder for API call
  const saveNotifications = useCallback((userId, notificationsData) => {
    try {
      // In a real app, you'd save to your backend API
      console.log("Saving notifications for user:", userId, notificationsData);
    } catch (error) {
      console.error("Error saving notifications:", error);
    }
  }, []);

  // Initialize authentication with proper error handling
  useEffect(() => {
    let unsubscribe = null;
    let mounted = true;
    let timeoutId = null;

    const initAuth = async () => {
      try {
        // Ensure we're in the browser environment
        if (typeof window === 'undefined') {
          return;
        }

        setIsLoading(true);
        setAuthError(null);

        // Timeout for auth initialization
        timeoutId = setTimeout(() => {
          if (mounted && !authInitialized) {
            console.warn("Auth initialization timeout - falling back to guest mode");
            setAuthError(new Error("Authentication service timeout"));
            setIsLoading(false);
            setAuthInitialized(true);
          }
        }, 5000);

        // Try to set up auth state listener with error handling
        try {
          // Replace mockOnAuthStateChanged with your actual onAuthStateChanged import
          // import { onAuthStateChanged } from '../lib/auth';
          unsubscribe = mockOnAuthStateChanged((user) => {
            if (!mounted) return;

            clearTimeout(timeoutId);
            setAuthInitialized(true);

            if (user) {
              // User is signed in
              setUser(user);
              setIsLoggedIn(true);
              loadNotifications(user.uid);
              setShowSignupPopup(false);
              console.log("User authenticated:", user.email);
            } else {
              // User is signed out
              setUser(null);
              setIsLoggedIn(false);
              setNotifications([]);

              // Show signup popup after a delay for non-logged-in users
              const popupTimer = setTimeout(() => {
                if (mounted && !isLoggedIn) {
                  setShowSignupPopup(true);
                }
              }, 2000);

              // Store cleanup function for popup timer
              return () => clearTimeout(popupTimer);
            }

            setIsLoading(false);
          });

        } catch (authSetupError) {
          console.error("Auth setup error:", authSetupError);
          throw new Error(`Authentication setup failed: ${authSetupError.message}`);
        }

      } catch (error) {
        console.error("Auth initialization error:", error);
        if (mounted) {
          setAuthError(error);
          setIsLoading(false);
          setAuthInitialized(true);

          // Fallback to non-authenticated state
          setUser(null);
          setIsLoggedIn(false);
          setNotifications([]);
        }
      }
    };

    initAuth();

    // Cleanup function
    return () => {
      mounted = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (unsubscribe && typeof unsubscribe === 'function') {
        try {
          unsubscribe();
        } catch (error) {
          console.error("Error unsubscribing from auth:", error);
        }
      }
    };
  }, [loadNotifications, isLoggedIn]);

  // Format timestamp for display
  const formatTimestamp = useCallback((dateStr) => {
    try {
      const date = new Date(dateStr);
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
      console.error("Error formatting timestamp:", error);
      return 'Unknown time';
    }
  }, []);

  // Handle navigation with error handling
  const handleSignup = useCallback(() => {
    try {
      router.push('/Signup');
      setShowSignupPopup(false);
    } catch (error) {
      console.error("Navigation error:", error);
      // Fallback: try window.location
      window.location.href = '/Signup';
    }
  }, [router]);

  const handleLogin = useCallback(() => {
    try {
      router.push('/Login');
      setShowSignupPopup(false);
    } catch (error) {
      console.error("Navigation error:", error);
      // Fallback: try window.location
      window.location.href = '/Login';
    }
  }, [router]);

  const handleClosePopup = useCallback(() => {
    setShowSignupPopup(false);
  }, []);

  // Handle notification click with error handling
  const handleNotificationClick = useCallback((notification) => {
    try {
      if (!user) {
        console.warn("User not logged in, cannot mark notification as read");
        return;
      }

      // Mark as read
      const updatedNotifications = notifications.map(item => 
        item.id === notification.id ? { ...item, read: true } : item
      );
      setNotifications(updatedNotifications);

      // Save updated notifications
      saveNotifications(user.uid, updatedNotifications);

      // Navigate based on notification type
      const routeMap = {
        course: '/Courses',
        roadmap: '/Roadmap',
        tool: '/TOOLS',
        doc: '/Docs'
      };

      const route = routeMap[notification.type];
      if (route) {
        try {
          router.push(route);
        } catch (navError) {
          console.error("Navigation error:", navError);
          // Fallback: try window.location
          window.location.href = route;
        }
      }
    } catch (error) {
      console.error("Error handling notification click:", error);
    }
  }, [notifications, user, router, saveNotifications]);

  // Filter notifications based on active tab
  const filteredNotifications = useMemo(() => {
    try {
      if (activeTab === 'all') return notifications;

      const singularType = activeTab.endsWith('s') ? activeTab.slice(0, -1) : activeTab;
      return notifications.filter(notification => 
        notification.type === singularType.toLowerCase()
      );
    } catch (error) {
      console.error("Error filtering notifications:", error);
      return notifications;
    }
  }, [notifications, activeTab]);

  // Retry auth initialization
  const retryAuth = useCallback(() => {
    setAuthError(null);
    setIsLoading(true);
    setAuthInitialized(false);
    window.location.reload();
  }, []);

  // Error state with retry option
  if (authError) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-4xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Connection Issue</h2>
          <p className="text-gray-600 mb-4 text-sm">
            {authError.message || "There was a problem connecting to the authentication service."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
              onClick={retryAuth}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Retry Connection
            </button>
            <button 
              onClick={() => {
                setAuthError(null);
                setIsLoading(false);
                setIsLoggedIn(false);
                setUser(null);
              }}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Continue as Guest
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 border-2 border-indigo-600 rounded-full animate-spin border-t-transparent"></div>
          <span className="text-indigo-700 font-medium">Loading notifications...</span>
        </div>
      </div>
    );
  }

  // Not logged in state - show main content with popup
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="sticky top-0 z-10 bg-white shadow-sm">
            <div className="px-4 py-4 border-b flex justify-between items-center">
              <h1 className="text-xl font-bold text-gray-800">Notifications</h1>
            </div>
          </header>

          {/* Empty state for non-logged users */}
          <div className="flex flex-col items-center justify-center py-20 text-center px-4">
            <div className="text-6xl mb-6">🔔</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Stay in the Loop!</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-md">
              Get notified about new courses, roadmaps, tools, and documentation updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleLogin}
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                Sign In
              </button>
              <button 
                onClick={handleSignup}
                className="px-6 py-3 bg-white text-indigo-600 border-2 border-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors duration-200"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>

        {/* Signup Popup */}
        {showSignupPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 transform transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">🔔</span>
                  <h2 className="text-xl font-bold text-gray-800">Never Miss an Update!</h2>
                </div>
                <button 
                  onClick={handleClosePopup}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p className="text-gray-600 mb-6">
                Join thousands of developers getting updates on the latest tech roadmaps, courses, and tools.
              </p>

              <div className="flex flex-col space-y-3">
                <button 
                  onClick={handleSignup}
                  className="w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Create Free Account
                </button>
                <button 
                  onClick={handleLogin}
                  className="w-full py-3 px-6 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-all duration-300"
                >
                  I Already Have an Account
                </button>
                <button 
                  onClick={handleClosePopup}
                  className="w-full py-2 text-gray-500 text-sm hover:text-gray-700 transition-colors"
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

  // Logged in state - show full notifications
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto pb-20">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white shadow-sm">
          <div className="px-4 py-4 border-b flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-gray-800">Notifications</h1>
              {user && (
                <p className="text-sm text-gray-500">Welcome back, {user.displayName || user.email}</p>
              )}
            </div>
            <span className="text-sm text-gray-500">
              {notifications.filter(n => !n.read).length} unread
            </span>
          </div>

          {/* Tab Menu */}
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-fit px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
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
              <div className="text-4xl mb-4">📭</div>
              <h2 className="text-lg font-medium text-gray-800 mb-2">
                No {activeTab !== 'all' ? activeTab.toLowerCase() : ''} notifications
              </h2>
              <p className="text-gray-500 text-sm">
                {activeTab === 'all' 
                  ? "We'll notify you when there are new updates"
                  : `No ${activeTab.toLowerCase()} updates at the moment`
                }
              </p>
            </div>
          ) : (
            <div className="space-y-3 pt-2">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className="cursor-pointer group"
                  onClick={() => handleNotificationClick(notification)}
                >
                  <div 
                    className={`p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border-l-4 group-hover:scale-[1.01] ${
                      !notification.read 
                        ? 'border-indigo-500 bg-indigo-50/30' 
                        : 'border-transparent'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className="text-2xl mr-3 flex-shrink-0">
                        {notification.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-800 mb-1 line-clamp-1">
                          {notification.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                          {notification.message}
                        </p>
                        <span className="text-xs text-gray-500">
                          {notification.timestamp || formatTimestamp(notification.createdAt)}
                        </span>
                      </div>
                      {!notification.read && (
                        <div className="flex-shrink-0 ml-2">
                          <span className="h-2 w-2 bg-indigo-500 rounded-full block"></span>
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
          <Link href="/Home">
            <button className="p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 hover:scale-110 transition-all duration-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}