"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../Images/splash.png";
import { 
  Twitter, 
  Linkedin, 
  Instagram, 
  Send,
  ArrowRight,
  MessageCircle
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { name: "Roadmaps", href: "/RoadmapPage" },
      { name: "Courses", href: "/Courses" },
      { name: "Join Community", href: "https://chat.whatsapp.com/Jl8VQQ2r1hTJjBmWo2emtk", isExternal: true },
    ],
    social: [
      { name: "Twitter / X", href: "#", icon: <Twitter size={20} /> },
      { name: "LinkedIn", href: "#", icon: <Linkedin size={20} /> },
      { name: "Instagram", href: "#", icon: <Instagram size={20} /> },
      { name: "Threads", href: "#", icon: <Send size={20} /> },
    ]
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 font-['Sora']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src={logo} 
                  alt="RoadmapFinder Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                RoadmapFinder
              </span>
            </Link>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md mb-8">
              Empowering learners to navigate their tech journey with expertly curated roadmaps, 
              vibrant community support, and structured learning paths.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-6">Explore</h3>
            <ul className="space-y-4">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  {link.isExternal ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-6">Stay Connected</h3>
            <div className="bg-blue-50 p-6 rounded-2xl">
              <p className="text-blue-900 text-sm font-medium mb-4">
                Join our community of 5000+ developers!
              </p>
              <a
                href="https://chat.whatsapp.com/Jl8VQQ2r1hTJjBmWo2emtk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold hover:bg-blue-700 transition-colors shadow-md"
              >
                <MessageCircle size={18} />
                <span>Join Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} RoadmapFinder. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <Link href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
