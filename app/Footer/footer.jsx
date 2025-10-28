"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Images/splash.png";
import { Twitter, Linkedin } from "lucide-react";

// Custom Threads Icon
const ThreadsIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.001v-.002C1.5 8.584 2.35 5.73 3.995 3.681 5.851 1.376 8.604.195 12.186.17h.014c3.581.024 6.334 1.205 8.184 3.509C21.65 5.73 22.5 8.584 22.5 12.001v.002c0 3.417-.85 6.271-2.495 8.32-1.856 2.304-4.609 3.485-8.186 3.509h-.014z" />
    <path d="M16.999 9.5c0 2.5-1.5 3.5-3.5 3.5s-3.5-1-3.5-3.5S11.499 6 13.499 6s3.5 1.5 3.5 3.5zm-2 0c0-1.381-.672-2.5-1.5-2.5S12 8.119 12 9.5s.672 2.5 1.5 2.5 1.5-1.119 1.5-2.5z" />
    <path d="M12 16c-2.5 0-4.5-1.5-4.5-4s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4-4.5 4zm0-7.5c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5z" />
  </svg>
);

const Footer = () => {
  return (
    <footer
      className="w-full bg-gradient-to-br from-white via-white to-blue-50 rounded-3xl shadow-xl border border-gray-100/50 
      px-6 py-10 sm:py-12 my-6 font-sora transition-all duration-300 
      lg:ml-[16rem] xl:ml-[18rem] lg:w-[calc(100%-16rem)] xl:w-[calc(100%-18rem)]"
    >
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Logo + Description */}
          <div className="flex flex-col space-y-6 lg:col-span-6">
            <Link href="/" className="flex items-center group">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <Image
                  src={Logo}
                  alt="RoadmapFinder Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-blue-600 text-2xl font-bold ml-3 group-hover:text-blue-700 transition-colors">
                RoadmapFinder
              </span>
            </Link>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md">
              Navigate your learning journey with expertly curated roadmaps and
              AI-powered resources designed for modern developers — helping you
              go from beginner to industry ready.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://x.com/kevinowns140058?t=4hcXrsQjo3AkTfOyuo5jEQ&s=09"
                className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg hover:bg-blue-50 border border-gray-100 hover:border-blue-200 transition-all duration-300"
              >
                <Twitter
                  size={20}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sohel-khan-266498352"
                className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg hover:bg-blue-50 border border-gray-100 hover:border-blue-200 transition-all duration-300"
              >
                <Linkedin
                  size={20}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                />
              </Link>
              <Link
                href="https://www.threads.net/@roadmapfinder"
                className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-50 border border-gray-100 hover:border-gray-200 transition-all duration-300"
              >
                <ThreadsIcon
                  size={20}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-6 lg:col-span-3">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full mr-3"></div>
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3">
              {[
                { name: "Roadmaps", href: "/RoadmapPage" },
                { name: "Courses", href: "/Courses" },
                { name: "About Us", href: "/AboutUs" },
                { name: "Privacy Policy", href: "/Privacy_Policy" },
                { name: "Contact Us", href: "/ContactUs" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-1 flex items-center group"
                >
                  <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-blue-600 transition-colors"></span>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-6 border-t border-gray-200/70">
          <p className="text-gray-600 text-sm font-medium text-center sm:text-left">
            © {new Date().getFullYear()} RoadmapFinder. All rights reserved.
          </p>

          {/* Visual Theme Toggle */}
          <div className="flex items-center space-x-3">
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

        {/* System Status */}
        <div className="flex items-center justify-center pt-4 border-t border-gray-100">
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
