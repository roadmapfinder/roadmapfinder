"use client"
import { useEffect, useState } from "react";
import {
  BookOpen,
  Map,
  Wrench,
  GraduationCap,
  Check,
  ChevronRight,
} from "lucide-react";

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New course",
      description: "A TypeScript course has been added",
      time: "2h ago",
      isNew: true,
      icon: <GraduationCap className="text-blue-500" size={24} />,
      category: "today",
      read: false,
    },
    {
      id: 2,
      title: "New docs",
      description: "Concurrency documentations are now available",
      time: "6h ago",
      isNew: false,
      icon: <BookOpen className="text-teal-500" size={24} />,
      category: "today",
      read: false,
    },
    {
      id: 3,
      title: "New tools",
      description: "We added a few new tools to our collection",
      time: "23h ago",
      isNew: false,
      icon: <Wrench className="text-red-400" size={24} />,
      category: "yesterday",
      read: true,
    },
    {
      id: 4,
      title: "New roadmap",
      description: "An iOS developer roadmap is now live",
      time: "1d ago",
      isNew: false,
      icon: <Map className="text-yellow-400" size={24} />,
      category: "yesterday",
      read: false,
    },
  ]);

  const [unreadCount, setUnreadCount] = useState(0);
  const [activeTab, setActiveTab] = useState("all");
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  // Calculate unread count
  useEffect(() => {
    setUnreadCount(notifications.filter((n) => !n.read).length);
  }, [notifications]);

  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Clear all notifications
  const clearAllNotifications = () => {
    setNotifications([]);
    setShowClearConfirm(false);
  };

  // Filter notifications based on active tab
  const filteredNotifications = notifications.filter((notification) => {
    if (activeTab === "all") return true;
    if (activeTab === "unread") return !notification.read;
    return notification.category === activeTab;
  });

  // Group notifications by category
  const groupedNotifications = filteredNotifications.reduce(
    (acc, notification) => {
      if (!acc[notification.category]) {
        acc[notification.category] = [];
      }
      acc[notification.category].push(notification);
      return acc;
    },
    {}
  );

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 min-h-screen p-4 md:p-6">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header with tabs */}
        <header className="px-4 py-5 bg-white border-b border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Notifications
            </h1>
            <div className="flex items-center">
              {unreadCount > 0 && (
                <span className="bg-red-500 text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center mr-2">
                  {unreadCount}
                </span>
              )}
              <button
                onClick={() => setShowClearConfirm(true)}
                className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors duration-200"
              >
                Clear all
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
            {["all", "unread", "today", "yesterday"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </header>

        {/* Empty state */}
        {Object.keys(groupedNotifications).length === 0 && (
          <div className="p-8 text-center">
            <div className="bg-gray-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <Check className="text-gray-400" size={32} />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">
              All caught up!
            </h3>
            <p className="text-gray-500">
              You have no {activeTab !== "all" ? activeTab : ""} notifications.
            </p>
          </div>
        )}

        {/* Notifications list */}
        <div className="max-h-[70vh] overflow-y-auto">
          {Object.keys(groupedNotifications).map((category) => (
            <div key={category} className="mb-2 last:mb-0">
              <h2 className="text-xs font-medium uppercase text-gray-500 px-4 py-2 sticky top-0 bg-gray-50">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h2>
              <div className="space-y-1">
                {groupedNotifications[category].map((notification) => (
                  <div
                    key={notification.id}
                    className={`px-4 py-3 hover:bg-gray-50 transition-colors duration-200 cursor-pointer border-l-4 ${
                      notification.read
                        ? "border-transparent"
                        : "border-blue-500"
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex items-start">
                      <div
                        className={`mr-3 p-2 rounded-lg ${
                          notification.read ? "bg-gray-100" : "bg-blue-50"
                        }`}
                      >
                        {notification.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <h3
                              className={`font-medium text-base ${
                                notification.read
                                  ? "text-gray-700"
                                  : "text-gray-900"
                              }`}
                            >
                              {notification.title}
                            </h3>
                            {notification.isNew && (
                              <span className="ml-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                                New
                              </span>
                            )}
                          </div>
                          <span className="text-gray-400 text-xs">
                            {notification.time}
                          </span>
                        </div>
                        <p
                          className={`text-sm mt-0.5 ${
                            notification.read
                              ? "text-gray-500"
                              : "text-gray-600"
                          }`}
                        >
                          {notification.description}
                        </p>
                        <div className="flex items-center justify-end mt-1">
                          <button className="flex items-center text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors">
                            View details{" "}
                            <ChevronRight size={14} className="ml-0.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 text-center text-xs text-gray-500 border-t border-gray-100">
          <p>You're all caught up with your notifications.</p>
          <button className="text-blue-600 hover:text-blue-800 font-medium mt-1 transition-colors">
            Manage notification settings
          </button>
        </div>
      </div>

      {/* Clear confirmation modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-xl animate-fade-in">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Clear all notifications?
            </h3>
            <p className="text-gray-500 mb-6">This action cannot be undone.</p>
            <div className="flex space-x-3 justify-end">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={clearAllNotifications}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Clear all
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
