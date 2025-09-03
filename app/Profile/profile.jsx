"use client";
import { useState, useEffect } from "react";
import { BookOpen, GraduationCap, Settings, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// Import a default placeholder image to use when no user image is available
import defaultUserImage from "../Images/user.jpg"; // Make sure this path is correct
import { auth } from "../lib/firebase";
import { onAuthStateChanged, updateProfile, updateEmail } from "firebase/auth";

export default function ProfilePage() {
  // Initialize state with null values to properly handle loading states
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    avatarUrl: null, // Start with null instead of assuming an image exists
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAvatar, setNewAvatar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  // Fetch user data from Firebase Auth when component mounts
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setProfileData({
          name: currentUser.displayName || "User",
          email: currentUser.email || "",
          avatarUrl: currentUser.photoURL || null, // Set to null if no photo URL
        });
        setNewName(currentUser.displayName || "User");
        setNewEmail(currentUser.email || "");
      } else {
        // Handle case when user is not logged in
        console.log("No user is signed in");
        // Set some default values when not logged in
        setProfileData({
          name: "Guest User",
          email: "Not logged in",
          avatarUrl: null,
        });
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Handle file selection for avatar change
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Create a local URL for preview only
      const imageUrl = URL.createObjectURL(file);
      setNewAvatar({
        file: file, // Store the actual file for later upload
        previewUrl: imageUrl, // URL for preview
      });
      setImageError(false); // Reset error state when new image is selected
    }
  };

  // Handle save button click
  const handleSave = async () => {
    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        // Update profile info in Firebase
        if (newName !== profileData.name) {
          await updateProfile(currentUser, {
            displayName: newName,
          });
        }

        if (newEmail !== profileData.email) {
          await updateEmail(currentUser, newEmail);
        }

        // For avatar update, you would need Firebase Storage
        // This is a simplified version just updating the state
        // In a real implementation, you would upload the image to Firebase Storage
        // and then update the photoURL property of the user profile

        // For now, we'll just update the local state
        setProfileData({
          ...profileData,
          name: newName,
          email: newEmail,
          ...(newAvatar && { avatarUrl: newAvatar.previewUrl }),
        });
      }
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      // You might want to show an error message to the user
      alert("Failed to update profile: " + error.message);
    }
  };

  // Handle cancel button click
  const handleCancel = () => {
    setNewName(profileData.name);
    setNewEmail(profileData.email);
    setNewAvatar(null);
    setIsEditing(false);
  };

  // Handle image loading error
  const handleImageError = () => {
    setImageError(true);
    console.error("Failed to load profile image");
  };

  // Display loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-bold text-gray-700">Loading...</div>
      </div>
    );
  }

  // Determine which image source to use, with fallback to default image if there's an error
  const displayImageSrc = imageError 
    ? defaultUserImage 
    : (isEditing && newAvatar 
        ? newAvatar.previewUrl 
        : profileData.avatarUrl || defaultUserImage);

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
          {/* Edit Button - Positioned outside the main container */}
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
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

          {/* Profile section */}
          <div className="mb-6 sm:mb-8 md:mb-10">
            {!isEditing ? (
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-sm transform -translate-x-1 -translate-y-1"></div>
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <Image
                      src={displayImageSrc}
                      alt={profileData.name}
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
                    {profileData.name}
                  </h2>
                  <div className="flex items-center justify-center text-gray-500">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm sm:text-base">
                      {profileData.email}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex flex-col space-y-4">
                  <div className="flex justify-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md group">
                      <Image
                        src={newAvatar ? newAvatar.previewUrl : displayImageSrc}
                        alt="Profile Preview"
                        fill
                        sizes="96px"
                        style={{ objectFit: "cover" }}
                        priority
                        onError={handleImageError}
                      />
                      <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity text-white text-sm font-medium">
                        Change Photo
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageChange}
                        />
                      </label>
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
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
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

          {/* Divider */}
          <div className="border-b-2 border-gray-100 my-4 sm:my-6"></div>

          {/* Menu Items */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <Link href="/RoadmapPage" className="block">
              <button className="flex items-center w-full text-lg sm:text-xl md:text-2xl font-bold text-gray-700 hover:text-blue-600 transition-colors group">
                <div className="bg-blue-50 p-2 sm:p-3 rounded-xl mr-3 sm:mr-5 group-hover:bg-blue-100 transition-colors">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <span>Roadmaps</span>
              </button>
            </Link>

            <button className="flex items-center w-full text-lg sm:text-xl md:text-2xl font-bold text-gray-700 hover:text-blue-600 transition-colors group">
              <div className="bg-blue-50 p-2 sm:p-3 rounded-xl mr-3 sm:mr-5 group-hover:bg-blue-100 transition-colors">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <span>Courses</span>
            </button>

            <Link href="/Logout" className="block">
              <button className="flex items-center w-full text-lg sm:text-xl md:text-2xl font-bold text-gray-700 hover:text-blue-600 transition-colors group">
                <div className="bg-blue-50 p-2 sm:p-3 rounded-xl mr-3 sm:mr-5 group-hover:bg-blue-100 transition-colors">
                  <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <span>Logout</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}