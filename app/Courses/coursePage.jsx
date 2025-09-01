"use client";
import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Search,
  ExternalLink,
  Globe,
  FileText,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Import your course data
import { courses } from "./coursesData.json"; // Adjust path as needed

// Import all your images
import sigma from "./CoursesImage/sigma.png";
import babbar from "./CoursesImage/babbar.png";
import backend from "./CoursesImage/backend.jpg";
import apna from "./CoursesImage/apna.jpg";
import native from "./CoursesImage/native.jpg";
import kotlin from "./CoursesImage/kotlin.jpg";
import native2 from "./CoursesImage/native2.jpg";
import flutter from "./CoursesImage/flutter.jpg";
import figma from "./CoursesImage/figma.jpg";
import ui from "./CoursesImage/ui.jpg";
import design from "./CoursesImage/design.jpg";
import uiux from "./CoursesImage/uiux.jpg";
import graphic from "./CoursesImage/graphic.jpg";
import graphics from "./CoursesImage/graphics.jpg";
import logo from "./CoursesImage/logo.jpg";
import canva from "./CoursesImage/canva.jpg";
import js from "./CoursesImage/js.jpg";
import python from "./CoursesImage/python.jpg";
import java from "./CoursesImage/java.jpg";
import cpp from "./CoursesImage/cpp.jpg";
import c from "./CoursesImage/c.jpg";
import php from "./CoursesImage/php.jpg";
import blockchain from "./CoursesImage/blockchain.jpg";
import web3 from "./CoursesImage/web3.jpg";
import block from "./CoursesImage/block.jpg";
import dsajava from "./CoursesImage/dsajava.jpg";
import cppdsa from "./CoursesImage/cppdsa.jpg";
import dsapy from "./CoursesImage/dsapy.jpg";
import dsajs from "./CoursesImage/dsajs.jpg";
import dbms from "./CoursesImage/dbms.jpg";
import mongo from "./CoursesImage/mongo.jpg";
import sql from "./CoursesImage/sql.jpg";
import dataa from "./CoursesImage/dataa.jpg";
import dataaw from "./CoursesImage/dataaw.jpg";
import datas from "./CoursesImage/datas.jpg";
import system from "./CoursesImage/system.jpg";
import syse from "./CoursesImage/syse.jpg";
import sys from "./CoursesImage/sys.jpg";
import ai from "./CoursesImage/ai.jpg";
import ml from "./CoursesImage/ml.jpg";
import deep from "./CoursesImage/deep.jpg";
import git from "./CoursesImage/git.jpg";
import githube from "./CoursesImage/Githube.jpg";
import githubh from "./CoursesImage/githubh.jpg";
import os from "./CoursesImage/os.jpg";
import osa from "./CoursesImage/osa.jpg";
import osf from "./CoursesImage/osf.jpg";
import osb from "./CoursesImage/osb.jpg";
import networking from "./CoursesImage/networking.jpg";
import networkingk from "./CoursesImage/networkingk.jpg";
import networkingf from "./CoursesImage/networkingf.jpg";
import cybere from "./CoursesImage/cybere.jpg";
import cyberh from "./CoursesImage/cyberh.jpg";
import capcut from "./CoursesImage/capcut.jpg";
import premire from "./CoursesImage/premire.jpg";
import davanci from "./CoursesImage/davanci.jpg";
import video from "./CoursesImage/video.jpg"
import reactjs from "./CoursesImage/reactjs.jpg";
import next from "./CoursesImage/next.jpg";
import express from "./CoursesImage/express.jpg";
import springboot from "./CoursesImage/springboot.jpg";
import laravel from "./CoursesImage/laravel.jpg";
import django from "./CoursesImage/django.jpg";
import backendh from "./CoursesImage/backendh.jpg";
import ts from "./CoursesImage/ts.jpg";
import swift from "./CoursesImage/swift.jpg";
import gen from "./CoursesImage/gen.jpg";
import gene from "./CoursesImage/gene.jpg";
import iot from "./CoursesImage/iote.jpg";
import IOTh from "./CoursesImage/IOTh.jpg"
import post from "./CoursesImage/post.jpg"
import rust from "./CoursesImage/rust.jpg"
import go from "./CoursesImage/go.jpg"
import prompte from "./CoursesImage/prompte.jpg"
import prompth from "./CoursesImage/prompth.jpg"
import devops from "./CoursesImage/devops.jpg"
import kubernetes from "./CoursesImage/kubernetes.jpg"
import docker from "./CoursesImage/docker.jpg"
import aws from "./CoursesImage/aws.jpg"
import genaijs from "./CoursesImage/genaijs.jpg"
import electron from "./CoursesImage/electron.jpg"
import photoshop from "./CoursesImage/photoshop.jpg"
import appdesign from "./CoursesImage/appdesign.jpg"
import numpy from "./CoursesImage/numpy.jpg"
import pandas from "./CoursesImage/pandas.jpg"
import powerbi from "./CoursesImage/powerbi.jpg"
import pyspark from "./CoursesImage/pyspark.jpg"
import matplotlib from "./CoursesImage/matplotlib.jpg"
import redis from "./CoursesImage/redis.jpg"




// Image mapping object
const imageMap = {
  sigma, babbar, backend, apna, native, kotlin, native2, flutter,
  figma, ui, design, uiux, graphic, graphics, logo, canva,
  js, python, java, cpp, c, php, blockchain, web3, block,
  dsajava, cppdsa, dsapy, dsajs, dbms, mongo, sql,
  dataa, dataaw, datas, system, syse, sys, ai, ml, deep,
  git, githube, githubh, os, osa, osf, osb,
  networking, networkingk, networkingf, cybere, cyberh,
  capcut, premire, davanci, video, reactjs, next, express,
  springboot, laravel, django, backendh,ts,swift,post,gen,gene,iot,IOTh,rust,go,
  prompth,prompte, devops , aws, docker, kubernetes,genaijs, electron, photoshop, appdesign,numpy,pandas,powerbi,pyspark,matplotlib,redis
};

export default function CoursePage() {
  const [activeTab, setActiveTab] = useState("All");
  const [windowWidth, setWindowWidth] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const scrollContainerRefs = useRef({});

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSearchQuery("");
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setActiveTab("All");
  };

  const scrollLeft = useCallback((category) => {
    if (scrollContainerRefs.current[category]) {
      const container = scrollContainerRefs.current[category];
      const scrollAmount = windowWidth >= 768 ? -400 : -280;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }, [windowWidth]);

  const scrollRight = useCallback((category) => {
    if (scrollContainerRefs.current[category]) {
      const container = scrollContainerRefs.current[category];
      const scrollAmount = windowWidth >= 768 ? 400 : 280;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }, [windowWidth]);

  const redirectToYoutube = useCallback((videoLink) => {
    if (videoLink.includes("youtube.com") || videoLink.includes("youtu.be")) {
      window.open(videoLink, "_blank");
    } else {
      window.open(`https://www.youtube.com/watch?v=${videoLink}`, "_blank");
    }
  }, []);

  // Function to handle docs navigation
  const redirectToDocs = useCallback((docsPath) => {
    if (docsPath) {
      window.location.href = docsPath;
    }
  }, []);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        searchQuery === "" ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.language.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTab =
        activeTab === "All" ||
        (activeTab === "Popular" &&
          ["BESTSELLER", "POPULAR", "HOT", "TRENDING"].includes(course.badge)) ||
        (activeTab === "New" && course.badge === "NEW");

      return matchesSearch && matchesTab;
    });
  }, [searchQuery, activeTab]);

  const filteredCategories = useMemo(() => {
    return [...new Set(filteredCourses.map((course) => course.category))];
  }, [filteredCourses]);

  return (
    <div className="w-full mx-auto bg-gray-50 font-['Sora'] pb-12 relative">
      {/* Header Section */}
      <div className="px-4 pt-4 pb-2">
        <Link href="/">
          <div className="flex items-center text-blue-500 hover:text-blue-600 mb-1 mt-1">
            <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"></path>
            </svg>
            <span className="text-sm font-medium">Home</span>
          </div>
        </Link>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-6 px-4 text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Youtube Best Courses
        </h1>
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto px-4 mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search courses, skills, categories, or language..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center px-4 space-x-4 mb-6 overflow-x-auto scrollbar-hide py-1">
        {["All", "Popular", "New"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-4 py-1.5 text-sm rounded-full transition-all whitespace-nowrap ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* No results message */}
      {filteredCategories.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-600 text-lg">
            No courses found for "{searchQuery}"
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveTab("All");
            }}
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Clear Search
          </button>
        </div>
      )}

      {/* Course Categories */}
      {filteredCategories.map((category) => {
        const categoryCourses = filteredCourses.filter(
          (course) => course.category === category,
        );

        if (categoryCourses.length === 0) return null;

        return (
          <div key={category} className="mb-8 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Category Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg md:text-xl font-bold text-gray-800">
                  {category}
                </h2>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View All
                </a>
              </div>

              {/* Horizontal Scrollable Cards */}
              <div className="relative">
                {categoryCourses.length > 3 && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
                    <button
                      onClick={() => scrollLeft(category)}
                      className="p-2 bg-white rounded-full shadow-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
                      aria-label="Scroll left"
                    >
                      <ChevronLeft size={windowWidth < 640 ? 16 : 20} />
                    </button>
                  </div>
                )}

                <div
                  ref={(el) => (scrollContainerRefs.current[category] = el)}
                  className="flex overflow-x-auto scrollbar-hide py-2 space-x-4 snap-x"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {categoryCourses.map((course, index) => (
                    <div
                      key={`${course.id}-${index}`}
                      className="flex-shrink-0 w-64 sm:w-72 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow snap-start"
                    >
                      <div
                        className="relative w-full h-36 cursor-pointer"
                        onClick={() => redirectToYoutube(course.videoId)}
                      >
                        <Image
                          src={imageMap[course.image] || "/placeholder.jpg"}
                          alt={course.title}
                          fill={true}
                          sizes="(max-width: 768px) 100vw, 300px"
                          className="object-cover"
                          priority={course.id <= 6}
                        />

                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity">
                          <ExternalLink size={46} className="text-white" />
                        </div>

                        {/* Badge */}
                        {course.badge && (
                          <div className="absolute top-2 right-2">
                            <span
                              className={`text-xs font-bold px-2 py-1 rounded ${
                                course.badge === "HOT"
                                  ? "bg-red-500 text-white"
                                  : course.badge === "NEW"
                                    ? "bg-green-500 text-white"
                                    : course.badge === "BESTSELLER"
                                      ? "bg-yellow-500 text-black"
                                      : course.badge === "TRENDING"
                                        ? "bg-purple-500 text-white"
                                        : course.badge === "POPULAR"
                                          ? "bg-blue-500 text-white"
                                          : "bg-gray-700 text-white"
                              }`}
                            >
                              {course.badge}
                            </span>
                          </div>
                        )}

                        {/* Language badge */}
                        <div className="absolute bottom-2 left-2">
                          <span className="bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded flex items-center">
                            <Globe size={12} className="mr-1" />
                            {course.language}
                          </span>
                        </div>

                        {/* Documentation button */}
                        {course.docs && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              redirectToDocs(course.docs);
                            }}
                            className="absolute top-2 left-2 p-1.5 bg-white bg-opacity-90 rounded-full shadow hover:bg-opacity-100 transition-all group"
                            title="View Documentation"
                          >
                            <FileText size={16} className="text-gray-700 group-hover:text-blue-600" />
                          </button>
                        )}
                      </div>

                      <div className="p-3">
                        <h3 className="font-medium text-sm line-clamp-2 h-10 mb-2">
                          {course.title}
                        </h3>

                        <div className="flex justify-between items-center mb-3">
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {course.level}
                          </span>
                          <div className="flex items-center">
                            <Star size={14} className="text-yellow-400 fill-yellow-400 mr-1" />
                            <span className="text-xs font-medium">{course.rating}</span>
                          </div>
                        </div>

                        {/* Button container */}
                        <div className="flex space-x-2">
                          <button
                            onClick={() => redirectToYoutube(course.videoId)}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium p-2 rounded transition-colors flex items-center justify-center"
                          >
                            <span>Watch on YouTube</span>
                            <ExternalLink size={14} className="ml-1" />
                          </button>

                          {/* Documentation button in card footer */}
                          {course.docs && (
                            <button
                              onClick={() => redirectToDocs(course.docs)}
                              className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded transition-colors flex items-center justify-center"
                              title="View Documentation"
                            >
                              <FileText size={14} />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {categoryCourses.length > 3 && (
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
                    <button
                      onClick={() => scrollRight(category)}
                      className="p-2 bg-white rounded-full shadow-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
                      aria-label="Scroll right"
                    >
                      <ChevronRight size={windowWidth < 640 ? 16 : 20} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}