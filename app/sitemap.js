import fs from 'fs';
import path from 'path';

export default async function sitemap() {
  const baseUrl = "https://roadmapfinder.com";

  // Core pages
  const corePages = ["", "/RoadmapPage"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.9,
  }));

  try {
    // Read all roadmap directories dynamically
    const roadmapsDir = path.join(process.cwd(), 'app/Roadmaps');
    const roadmapFolders = fs.readdirSync(roadmapsDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory() && dirent.name !== 'roadmaps-icons')
      .map(dirent => dirent.name);

    // Depending on routing setup, if they are accessed at /Full-Stack or /Roadmaps/Full-Stack
    // I will generate /RoadmapName based on how layout.js canonical links are set up.
    const dynamicRoadmaps = roadmapFolders.map((route) => ({
      url: `${baseUrl}/${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    }));

    return [...corePages, ...dynamicRoadmaps];
  } catch (error) {
    console.error("Failed to read roadmaps directory for sitemap", error);
    return corePages; // Fallback to core pages only
  }
}
