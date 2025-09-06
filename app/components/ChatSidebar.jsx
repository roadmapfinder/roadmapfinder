"use client";
import React, { useState, useEffect } from "react";
import {
  MessageSquare,
  Plus,
  Search,
  Trash2,
  Edit2,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  Hash,
  MoreHorizontal,
} from "lucide-react";
import ChatHistoryItem from "./ChatHistoryItem";

const ChatSidebar = ({ 
  isOpen, 
  isDesktopOpen = true,
  onToggle, 
  currentChatId, 
  onChatSelect, 
  onNewChat,
  currentProjectIdea = "",
  currentResult = null 
}) => {
  const [chatHistory, setChatHistory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  // Load chat history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem("project-chat-history");
    if (savedHistory) {
      try {
        setChatHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error("Error loading chat history:", error);
      }
    }
  }, []);

  // Save chat history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("project-chat-history", JSON.stringify(chatHistory));
  }, [chatHistory]);

  // Save current chat when project idea or result changes
  useEffect(() => {
    if (currentProjectIdea.trim() || currentResult) {
      saveChatSession({
        id: currentChatId,
        projectIdea: currentProjectIdea,
        result: currentResult,
        timestamp: new Date().toISOString(),
      });
    }
  }, [currentProjectIdea, currentResult, currentChatId]);

  const saveChatSession = (sessionData) => {
    setChatHistory(prev => {
      const existingIndex = prev.findIndex(chat => chat.id === sessionData.id);
      const title = generateChatTitle(sessionData.projectIdea);
      
      const updatedSession = {
        ...sessionData,
        title,
        updatedAt: new Date().toISOString(),
      };

      if (existingIndex !== -1) {
        // Update existing chat
        const updated = [...prev];
        updated[existingIndex] = updatedSession;
        return updated.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
      } else {
        // Add new chat
        return [updatedSession, ...prev];
      }
    });
  };

  const generateChatTitle = (projectIdea) => {
    if (!projectIdea?.trim()) return "New Project";
    
    const words = projectIdea.trim().split(" ");
    if (words.length <= 6) return projectIdea;
    
    return words.slice(0, 6).join(" ") + "...";
  };

  const handleDeleteChat = (chatId, e) => {
    e?.stopPropagation();
    setChatHistory(prev => prev.filter(chat => chat.id !== chatId));
  };

  const handleEditChat = (chatId, e) => {
    e?.stopPropagation();
    const chat = chatHistory.find(c => c.id === chatId);
    if (chat) {
      setEditingId(chatId);
      setEditingTitle(chat.title);
    }
  };

  const handleSaveEdit = (chatId) => {
    setChatHistory(prev =>
      prev.map(chat =>
        chat.id === chatId ? { ...chat, title: editingTitle } : chat
      )
    );
    setEditingId(null);
    setEditingTitle("");
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingTitle("");
  };

  const filteredChats = chatHistory.filter(chat =>
    chat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.projectIdea.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedChats = groupChatsByDate(filteredChats);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${
          isDesktopOpen ? "lg:translate-x-0" : "lg:-translate-x-full"
        } w-80 lg:w-64 xl:w-72 flex flex-col lg:relative lg:z-auto`}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              <h2 className="font-semibold text-gray-900">Chat History</h2>
            </div>
            <button
              onClick={onToggle}
              className="p-1 rounded-md hover:bg-gray-100 transition-colors"
              title={isDesktopOpen ? "Close sidebar" : "Open sidebar"}
            >
              <ChevronLeft className="w-5 h-5 text-gray-500 lg:hidden" />
              <ChevronLeft className="w-5 h-5 text-gray-500 hidden lg:block" />
            </button>
          </div>

          {/* New Chat Button */}
          <button
            onClick={onNewChat}
            className="w-full flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Project Chat
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search chats..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {filteredChats.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-sm">
                {searchQuery ? "No chats found" : "No chat history yet"}
              </p>
              <p className="text-xs mt-1 text-gray-400">
                {searchQuery ? "Try a different search term" : "Start a new project to begin"}
              </p>
            </div>
          ) : (
            <div className="p-2">
              {Object.entries(groupedChats).map(([dateGroup, chats]) => (
                <div key={dateGroup} className="mb-4">
                  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide px-2 py-1 sticky top-0 bg-white">
                    {dateGroup}
                  </h3>
                  <div className="space-y-1">
                    {chats.map((chat) => (
                      <ChatHistoryItem
                        key={chat.id}
                        chat={chat}
                        isActive={currentChatId === chat.id}
                        isEditing={editingId === chat.id}
                        editingTitle={editingTitle}
                        onSelect={() => onChatSelect(chat)}
                        onDelete={(e) => handleDeleteChat(chat.id, e)}
                        onEdit={(e) => handleEditChat(chat.id, e)}
                        onSaveEdit={() => handleSaveEdit(chat.id)}
                        onCancelEdit={handleCancelEdit}
                        onEditTitleChange={setEditingTitle}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Stats */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Hash className="w-3 h-3" />
              <span>{chatHistory.length} chats</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>Auto-saved</span>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Button (when sidebar is closed) */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="fixed top-4 left-4 z-40 p-2 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow lg:hidden"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      )}

      {/* Desktop Toggle Button (when sidebar is closed) */}
      {!isDesktopOpen && (
        <button
          onClick={onToggle}
          className="fixed top-4 left-4 z-40 p-2 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow hidden lg:block"
          title="Open chat history"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      )}
    </>
  );
};

// Helper function to group chats by date
const groupChatsByDate = (chats) => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
  const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

  return chats.reduce((groups, chat) => {
    const chatDate = new Date(chat.updatedAt || chat.timestamp);
    const chatDateOnly = new Date(chatDate.getFullYear(), chatDate.getMonth(), chatDate.getDate());

    let group;
    if (chatDateOnly.getTime() === today.getTime()) {
      group = "Today";
    } else if (chatDateOnly.getTime() === yesterday.getTime()) {
      group = "Yesterday";
    } else if (chatDateOnly.getTime() > weekAgo.getTime()) {
      group = "This Week";
    } else {
      group = chatDate.toLocaleDateString("en-US", { 
        month: "short", 
        year: chatDate.getFullYear() !== now.getFullYear() ? "numeric" : undefined 
      });
    }

    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(chat);
    return groups;
  }, {});
};

export default ChatSidebar;