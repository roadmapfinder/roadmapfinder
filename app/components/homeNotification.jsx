"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomeNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [newNotifications, setNewNotifications] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(null);
  const router = useRouter();

  // Function to load notifications
  const loadNotifications = async () => {
    try {
      // Get notifications from JSON file
      const response = await fetch('/data/notifications.json');
      if (!response.ok) {
        throw new Error('Failed to fetch notifications');
      }

      const fetchedNotifications = await response.json();

      // Get last check timestamp from localStorage
      const lastCheckTimestamp = localStorage.getItem('lastNotificationCheck') || '0';

      // Find notifications that are newer than the last check
      const recentNotifications = fetchedNotifications.filter(notification => {
        const createdAt = new Date(notification.createdAt).getTime();
        return createdAt > parseInt(lastCheckTimestamp);
      });

      // Update states
      setNotifications(fetchedNotifications);
      setNewNotifications(recentNotifications);

      // If there are new notifications, show popup
      if (recentNotifications.length > 0) {
        // Set first notification as current
        setCurrentNotification(recentNotifications[0]);
        setShowPopup(true);
      }

      // Update last check timestamp
      localStorage.setItem('lastNotificationCheck', Date.now().toString());
    } catch (error) {
      console.error('Error loading notifications:', error);
    }
  };

  // Load notifications on component mount
  useEffect(() => {
    loadNotifications();

    // Set up polling for notifications (every 5 minutes)
    const intervalId = setInterval(loadNotifications, 5 * 60 * 1000);

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  // Handle notification click
  const handleNotificationClick = (notification) => {
    // Mark notification as read
    const updatedNotifications = notifications.map(item => 
      item.id === notification.id ? { ...item, read: true } : item
    );

    // Update local state
    setNotifications(updatedNotifications);

    // Store updated notifications in localStorage
    try {
      localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }

    // Close popup
    setShowPopup(false);

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
        // No specific route, just close popup
        break;
    }
  };

  // Move to next notification in popup
  const handleNextNotification = () => {
    const currentIndex = newNotifications.findIndex(
      notification => notification.id === currentNotification.id
    );

    if (currentIndex < newNotifications.length - 1) {
      setCurrentNotification(newNotifications[currentIndex + 1]);
    } else {
      // If we're at the last notification, close the popup
      setShowPopup(false);
    }
  };

  // Handle dismiss all
  const handleDismissAll = () => {
    setShowPopup(false);
  };

  // Get text based on notification type
  const getTypeText = (type) => {
    switch (type) {
      case 'course':
        return 'New Course Available';
      case 'roadmap':
        return 'Roadmap Updated';
      case 'tool':
        return 'New Tool Added';
      case 'doc':
        return 'Documentation Updated';
      default:
        return 'New Notification';
    }
  };

  // If there are no new notifications or popup is closed, don't render anything
  if (!showPopup || !currentNotification) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm w-full animate-fade-in">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-600 px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl mr-2">{currentNotification.icon}</span>
            <span className="text-white font-medium">{getTypeText(currentNotification.type)}</span>
          </div>
          <button 
            onClick={handleDismissAll}
            className="text-white hover:text-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 cursor-pointer" onClick={() => handleNotificationClick(currentNotification)}>
          <h3 className="font-bold text-gray-800 mb-1">{currentNotification.title}</h3>
          <p className="text-gray-600 text-sm">{currentNotification.message}</p>
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-gray-50 flex justify-between items-center">
          <span className="text-xs text-gray-500">
            {newNotifications.length > 1 
              ? `${newNotifications.indexOf(currentNotification) + 1} of ${newNotifications.length} new notifications` 
              : 'Click to view'}
          </span>
          <div className="flex space-x-2">
            {newNotifications.length > 1 && (
              <button 
                onClick={handleNextNotification}
                className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
              >
                Next
              </button>
            )}
            <button 
              onClick={() => router.push('/Notification')}
              className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}