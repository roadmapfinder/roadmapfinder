"use client";
import { useState, useCallback } from "react";

const useChatManager = () => {
  const [currentChatId, setCurrentChatId] = useState(() => 
    `chat-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  );

  const generateNewChatId = useCallback(() => {
    const newId = `chat-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    setCurrentChatId(newId);
    return newId;
  }, []);

  const handleNewChat = useCallback(() => {
    generateNewChatId();
    return {
      projectIdea: "",
      result: null,
      isLoading: false,
      error: "",
      activeTab: "overview",
    };
  }, [generateNewChatId]);

  const handleChatSelect = useCallback((chat) => {
    setCurrentChatId(chat.id);
    return {
      projectIdea: chat.projectIdea || "",
      result: chat.result || null,
      isLoading: false,
      error: "",
      activeTab: "overview",
    };
  }, []);

  return {
    currentChatId,
    generateNewChatId,
    handleNewChat,
    handleChatSelect,
  };
};

export default useChatManager;