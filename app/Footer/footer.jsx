// Footer.jsx
import Link from "next/link";
import { Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white rounded-3xl shadow-sm px-6 py-8 my-6 font-sora transition-all duration-200 lg:ml-64 lg:w-[calc(100%-16rem)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Tagline Section */}
          <div className="flex flex-col space-y-6">
            <Link href="/" className="flex items-center">
              <span className="text-blue-600 text-2xl font-bold">
                RoadmapFinder
              </span>
            </Link>
            <p className="text-gray-700">Navigate your learning journey</p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Twitter size={20} className="text-gray-700" />
              </Link>
              <Link
                href="#"
                className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Linkedin size={20} className="text-gray-700" />
              </Link>
              <Link
                href="#"
                className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Youtube size={20} className="text-gray-700" />
              </Link>
              <Link
                href="#"
                className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Instagram size={20} className="text-gray-700" />
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Quick Links</h3>
            <nav className="flex flex-col space-y-4">
              <Link
                href="/Roadmap"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                Roadmaps
              </Link>
              <Link
                href="/Courses"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                Courses
              </Link>
              <Link
                href="/Docs"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
              Docs
              </Link>
              <Link
                href="/Tools"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
          Tools
              </Link>
              
              <Link
                href="/Login"
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                Login
              </Link>
            </nav>
          </div>

          {/* Stay Connected Section */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Stay Connected
            </h3>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500">
              Get updates on new roadmaps and learning resources
            </p>
          </div>
        </div>

        {/* Bottom Section with Copyright and Terms */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            © 2025 RoadmapFinder. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-500 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-500 text-sm transition-colors"
            >
              Terms
            </Link>
            <div className="w-12 h-6 bg-gray-200 rounded-full flex items-center p-1 cursor-pointer">
              <div className="bg-white w-4 h-4 rounded-full shadow-md transform translate-x-6"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
