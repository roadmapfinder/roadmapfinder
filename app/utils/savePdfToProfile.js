
export const savePdfToProfile = (roadmapName, roadmapType, fileName, userId) => {
  if (!userId) {
    console.error('User ID is required to save PDF');
    return;
  }

  const pdfMetadata = {
    id: Date.now().toString(),
    userId,
    roadmapName,
    roadmapType,
    fileName,
    downloadedAt: new Date().toISOString(),
  };

  try {
    // Get existing roadmaps
    const existingRoadmaps = localStorage.getItem(`downloaded_roadmaps_${userId}`);
    const roadmaps = existingRoadmaps ? JSON.parse(existingRoadmaps) : [];
    
    // Add new roadmap
    roadmaps.unshift(pdfMetadata);
    
    // Keep only last 50 downloads
    if (roadmaps.length > 50) {
      roadmaps.pop();
    }
    
    // Save back to localStorage
    localStorage.setItem(`downloaded_roadmaps_${userId}`, JSON.stringify(roadmaps));
    
    return pdfMetadata;
  } catch (error) {
    console.error('Error saving PDF to profile:', error);
    return null;
  }
};
