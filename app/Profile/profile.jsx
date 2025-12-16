"use client";
import { useState, useEffect } from "react";
import { BookOpen, GraduationCap, Mail, Download, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import defaultUserImage from "../Images/user.jpg";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const [imageError, setImageError] = useState(false);
  const [downloadedRoadmaps, setDownloadedRoadmaps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // User data state
  const [userData, setUserData] = useState({
    fullName: "User",
    email: "user@example.com",
    imageUrl: defaultUserImage
  });

  // Load user data from localStorage on mount
  useEffect(() => {
    const loadUserData = () => {
      try {
        const savedUserData = localStorage.getItem('user_profile');
        if (savedUserData) {
          const parsed = JSON.parse(savedUserData);
          setUserData(parsed);
        }
      } catch (e) {
        console.error('Error loading user data:', e);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, []);

  // Load downloaded roadmaps from localStorage
  useEffect(() => {
    const savedRoadmaps = localStorage.getItem('downloaded_roadmaps');
    if (savedRoadmaps) {
      try {
        setDownloadedRoadmaps(JSON.parse(savedRoadmaps));
      } catch (e) {
        console.error('Error loading roadmaps:', e);
      }
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    );
  }

  const userName = userData.fullName || "User";
  const userEmail = userData.email || "user@example.com";
  const userImage = userData.imageUrl || defaultUserImage;
  const displayName = isEditing ? newName : userName;

  const handleSave = () => {
    if (newName.trim()) {
      try {
        const updatedUserData = {
          ...userData,
          fullName: newName
        };
        setUserData(updatedUserData);
        localStorage.setItem('user_profile', JSON.stringify(updatedUserData));
        setIsEditing(false);
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    }
  };

  const handleCancel = () => {
    setNewName(userName);
    setIsEditing(false);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const displayImageSrc = imageError ? defaultUserImage : userImage;

  const deleteRoadmap = (roadmapId) => {
    const updatedRoadmaps = downloadedRoadmaps.filter(r => r.id !== roadmapId);
    setDownloadedRoadmaps(updatedRoadmaps);
    localStorage.setItem('downloaded_roadmaps', JSON.stringify(updatedRoadmaps));
  };

  return (
    <>
      <div className="flex justify-start mt-5 ml-5">
        <Link href="/">
          <div className="flex items-center text-blue-500 hover:text-blue-600">
            <svg
              className="w-5 h-5 mr-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7"></path>
            </svg>
            <span className="text-sm font-medium">Home</span>
          </div>
        </Link>
      </div>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 w-full max-w-md mx-auto shadow-lg font-sora relative">
          {!isEditing && (
            <button
              onClick={() => {
                setIsEditing(true);
                setNewName(userName);
              }}
              className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 z-10"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
          )}

          <div className="mb-6 sm:mb-8 md:mb-10">
            {!isEditing ? (
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-sm transform -translate-x-1 -translate-y-1"></div>
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <Image
                      src={displayImageSrc}
                      alt={displayName}
                      fill
                      sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                      style={{ objectFit: "cover" }}
                      priority
                      onError={handleImageError}
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
                    {displayName}
                  </h2>
                  <div className="flex items-center justify-center text-gray-500">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm sm:text-base">
                      {userEmail}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex flex-col space-y-4">
                  <div className="flex justify-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <Image
                        src={displayImageSrc}
                        alt="Profile Preview"
                        fill
                        sizes="96px"
                        style={{ objectFit: "cover" }}
                        priority
                        onError={handleImageError}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={userName}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={userEmail}
                      disabled
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
                    />
                    <p className="text-xs text-gray-500 mt-1">Email cannot be changed here</p>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <button
                      onClick={handleSave}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="border-b-2 border-gray-100 my-4 sm:my-6"></div>

          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Downloaded Roadmaps Section */}
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 p-2 sm:p-3 rounded-xl mr-3 sm:mr-5">
                  <Download className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700">Downloaded Roadmaps</h3>
              </div>

              {downloadedRoadmaps.length === 0 ? (
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <FileText className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">No roadmaps downloaded yet</p>
                  <Link href="/RoadmapPage" className="text-blue-600 text-sm mt-2 inline-block hover:underline">
                    Browse Roadmaps
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {downloadedRoadmaps.map((roadmap) => (
                    <div key={roadmap.id} className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
                      <div className="flex items-center flex-1">
                        <FileText className="w-8 h-8 text-blue-600 mr-3" />
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{roadmap.roadmapName}</h4>
                          <p className="text-xs text-gray-500">
                            Downloaded on {new Date(roadmap.downloadedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            // Re-download the same roadmap
                            window.location.href = `/Roadmaps/${roadmap.roadmapType}`;
                          }}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View Roadmap"
                        >
                          <BookOpen className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => deleteRoadmap(roadmap.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b-2 border-gray-100 my-4 sm:my-6"></div>

            <Link href="/RoadmapPage" className="block">
              <button className="flex items-center w-full text-lg sm:text-xl md:text-2xl font-bold text-gray-700 hover:text-blue-600 transition-colors group">
                <div className="bg-blue-50 p-2 sm:p-3 rounded-xl mr-3 sm:mr-5 group-hover:bg-blue-100 transition-colors">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <span>Roadmaps</span>
              </button>
            </Link>

            <Link href="/Courses" className="block">
              <button className="flex items-center w-full text-lg sm:text-xl md:text-2xl font-bold text-gray-700 hover:text-blue-600 transition-colors group">
                <div className="bg-blue-50 p-2 sm:p-3 rounded-xl mr-3 sm:mr-5 group-hover:bg-blue-100 transition-colors">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <span>Courses</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}