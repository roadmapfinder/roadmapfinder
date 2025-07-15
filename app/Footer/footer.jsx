// Footer.jsx
import Link from "next/link";
import { Twitter, Linkedin, Youtube } from "lucide-react";

// Custom Threads Icon Component
const ThreadsIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.001v-.002C1.5 8.584 2.35 5.73 3.995 3.681 5.851 1.376 8.604.195 12.186.17h.014c3.581.024 6.334 1.205 8.184 3.509C21.65 5.73 22.5 8.584 22.5 12.001v.002c0 3.417-.85 6.271-2.495 8.32-1.856 2.304-4.609 3.485-8.186 3.509h-.014zm.007-22.75h-.007c-3.176.022-5.668 1.075-7.318 3.088C3.329 6.297 2.5 8.944 2.5 12.001v.002c0 3.057.829 5.704 2.368 7.663 1.65 2.013 4.142 3.066 7.318 3.088h.007c3.176-.022 5.668-1.075 7.318-3.088 1.539-1.959 2.368-4.606 2.368-7.663v-.002c0-3.057-.829-5.704-2.368-7.663-1.65-2.013-4.142-3.066-7.318-3.088z"/>
    <path d="M16.999 9.5c0 2.5-1.5 3.5-3.5 3.5s-3.5-1-3.5-3.5S11.499 6 13.499 6s3.5 1.5 3.5 3.5zm-2 0c0-1.381-.672-2.5-1.5-2.5S12 8.119 12 9.5s.672 2.5 1.5 2.5 1.5-1.119 1.5-2.5z"/>
    <path d="M12 16c-2.5 0-4.5-1.5-4.5-4s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4-4.5 4zm0-7.5c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/30 rounded-3xl shadow-xl border border-gray-100/50 px-6 py-12 my-6 font-sora transition-all duration-300 lg:ml-74 lg:w-[calc(100%-16rem)] xl:ml-80 xl:w-[calc(100%-18rem)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Logo and Tagline Section */}
          <div className="flex flex-col space-y-6 lg:col-span-6">
            <Link href="/" className="flex items-center group">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <span className="text-white text-xl font-bold">RF</span>
              </div>
              <span className="text-gray-800 text-2xl font-bold ml-3 group-hover:text-blue-600 transition-colors">
                RoadmapFinder
              </span>
            </Link>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Navigate your learning journey with expertly curated roadmaps and resources designed for modern developers
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <Link
                href="https://x.com/kevinowns140058?t=4hcXrsQjo3AkTfOyuo5jEQ&s=09"
                className="bg-white p-3.5 rounded-xl shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-300 group border border-gray-100 hover:border-blue-200"
              >
                <Twitter size={20} className="text-gray-600 group-hover:text-blue-600" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sohel-khan-266498352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="bg-white p-3.5 rounded-xl shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-300 group border border-gray-100 hover:border-blue-200"
              >
                <Linkedin size={20} className="text-gray-600 group-hover:text-blue-600" />
              </Link>
              <Link
                href="https://www.threads.net/@roadmapfinder"
                className="bg-white p-3.5 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 group border border-gray-100 hover:border-gray-200"
              >
                <ThreadsIcon size={20} className="text-gray-600 group-hover:text-gray-800" />
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col space-y-6 lg:col-span-3">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full mr-3"></div>
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/RoadmapPage"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-1 flex items-center group"
              >
                <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-blue-600 transition-colors"></span>
                Roadmaps
              </Link>
              <Link
                href="/Courses"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-1 flex items-center group"
              >
                <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-blue-600 transition-colors"></span>
                Courses
              </Link>
              <Link
                href="/Docs"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-1 flex items-center group"
              >
                <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-blue-600 transition-colors"></span>
                Docs
              </Link>
              <Link
                href="/TOOLS"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-1 flex items-center group"
              >
                <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-blue-600 transition-colors"></span>
                Tools
              </Link>
              <Link
                href="/Login"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-1 flex items-center group"
              >
                <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-blue-600 transition-colors"></span>
                Login
              </Link>
            </nav>
          </div>

       
        </div>

        {/* Bottom Section with Copyright and Terms */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-200/70">
          <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6">
            <p className="text-gray-600 text-sm font-medium">
              © 2025 RoadmapFinder. All rights reserved.
            </p>
           
          </div>

          {/* Enhanced Theme Toggle */}
          <div className="flex items-center space-x-3 mt-4 lg:mt-0">
            <span className="text-gray-600 text-sm font-medium">Theme</span>
            <div className="relative">
              <div className="w-14 h-7 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center p-1 cursor-pointer hover:from-gray-300 hover:to-gray-400 transition-all duration-300 shadow-inner">
                <div className="bg-white w-5 h-5 rounded-full shadow-md transform translate-x-7 transition-transform duration-300 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center justify-center mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;