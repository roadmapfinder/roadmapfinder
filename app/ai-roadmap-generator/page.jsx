"use client"
import React, { useState } from 'react';
import ChatInterface from './chat';
import RoadmapDisplay from './roadmap';

const AIRoadmapGeneratorPage = () => {
  const [currentView, setCurrentView] = useState('chat'); // 'chat' or 'roadmap'
  const [roadmapData, setRoadmapData] = useState(null);

  const handleRoadmapGenerated = (data) => {
    setRoadmapData(data);
    setCurrentView('roadmap');
  };

  const handleBackToChat = () => {
    setCurrentView('chat');
  };

  const handleNewRoadmap = () => {
    setRoadmapData(null);
    setCurrentView('chat');
  };

  return (
    <>
      {currentView === 'chat' ? (
        <ChatInterface 
          onRoadmapGenerated={handleRoadmapGenerated}
          onBack={null} // Set to a function if you have a home page to go back to
        />
      ) : (
        <RoadmapDisplay 
          roadmapData={roadmapData}
          onBack={handleBackToChat}
          onNewRoadmap={handleNewRoadmap}
        />
      )}
    </>
  );
};

export default AIRoadmapGeneratorPage;