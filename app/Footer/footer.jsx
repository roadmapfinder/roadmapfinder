"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../Images/splash.png";
import { Twitter, Linkedin } from "lucide-react";

// Threads Icon
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
    <footer className="w-full bg-white/90 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-sm mt-8 font-sora">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-10 md:py-14 space-y-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Logo + Description */}
          <div className="md:col-span-6 space-y-6">
            <Link href="/" className="flex items-center group">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden shadow-md group-hover:scale-105 transition">
                <Image
                  src={Logo}
                  alt="RoadmapFinder Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="ml-3 text-2xl font-bold text-blue-700 group-hover:text-blue-800">
                RoadmapFinder
              </span>
            </Link>

            <p className="text-gray-600 text-base leading-relaxed max-w-lg">
              Navigate your learning journey with expertly curated roadmaps and
              AI-powered resources designed to help you go from beginner to
              industry-ready.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                {
                  icon: <Twitter size={18} />,
                  href: "https://x.com/kevinowns140058?t=4hcXrsQjo3AkTfOyuo5jEQ&s=09",
                },
                {
                  icon: <Linkedin size={18} />,
                  href: "https://www.linkedin.com/in/sohel-khan-266498352",
                },
                {
                  icon: <ThreadsIcon size={18} />,
                  href: "https://www.threads.net/@roadmapfinder",
                },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="p-3 bg-white border border-gray-200 rounded-xl shadow-md hover:bg-gray-50 hover:shadow-lg transition"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-5">
            <h3 className="text-xl font-semibold text-gray-800">Quick Links</h3>
            <nav className="space-y-3">
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
                  className="flex items-center text-gray-700 hover:text-blue-600 transition"
                >
                  <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t pt-6 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} RoadmapFinder. All rights reserved.</p>

          {/* Fake Theme Toggle UI */}
          <div className="flex items-center gap-3 mt-4 sm:mt-0">
            <span>Theme</span>
            <div className="w-14 h-7 bg-gray-300 rounded-full p-1 flex items-center cursor-pointer shadow-inner">
              <div className="w-5 h-5 bg-white rounded-full shadow translate-x-7"></div>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="flex items-center justify-center border-t pt-4 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
