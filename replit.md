# RoadmapFinder - Tech Learning Platform

## Overview

RoadmapFinder is a comprehensive technology learning platform built with Next.js that provides structured learning roadmaps, curated course collections, career guidance, and AI-powered tools for skill development. The platform serves as a one-stop solution for learners seeking to master various tech skills including web development, AI/ML, app development, database engineering, and more.

The application features an extensive collection of technology roadmaps with step-by-step learning paths, top YouTube course recommendations in both English and Hindi, AI-powered career guidance, project idea generation, and trending tech blogs. It aims to make tech skill learning more accessible and structured for learners at all levels.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 15.3.1 with React 19.0.0
- **Styling**: Tailwind CSS 4 with custom theming and responsive design
- **UI Components**: Custom components with Lucide React icons and React Icons
- **Animations**: Framer Motion for smooth transitions and interactive elements
- **Typography**: Sora font family with fallbacks for consistent branding
- **State Management**: React hooks (useState, useEffect, useCallback, useMemo) for local state
- **Routing**: Next.js App Router with file-based routing structure

### Design System
- **Component Architecture**: Modular component structure with reusable UI elements
- **Theme System**: CSS custom properties with light/dark mode support
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Icon System**: Lucide React and React Icons for consistent iconography

### Content Management
- **Roadmap Data**: JSON-based structured data for learning paths and course information
- **Blog System**: JSON-based blog content with categorization and filtering
- **Course Database**: Comprehensive course data with metadata including ratings, levels, and languages
- **PDF Generation**: HTML2Canvas and jsPDF for downloadable roadmap content

### Key Features Architecture
- **Roadmap System**: Interactive step-by-step learning paths with progress tracking
- **Course Discovery**: Advanced filtering and search functionality for course recommendations
- **AI Integration**: OpenAI integration for career guidance and project idea generation
- **Bookmark System**: Local storage-based bookmarking for courses and content
- **PDF Export**: Client-side PDF generation for offline roadmap access

### Performance Optimizations
- **Analytics**: Vercel Analytics and Speed Insights for performance monitoring
- **Image Optimization**: Next.js Image component for optimized asset delivery
- **Code Splitting**: Next.js automatic code splitting and lazy loading
- **Font Optimization**: Next.js font optimization with Google Fonts integration

## External Dependencies

### Core Framework & Runtime
- **Next.js 15.3.1**: React framework with App Router, server components, and built-in optimizations
- **React 19.0.0**: Frontend library for building user interfaces
- **Node.js**: Server-side JavaScript runtime for development and build processes

### Styling & UI
- **Tailwind CSS 4**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Modern icon library with consistent design system
- **React Icons**: Comprehensive icon library for additional icon needs
- **Framer Motion**: Animation library for smooth transitions and interactions

### Authentication & Backend Services
- **Firebase 11.6.1**: Authentication, Firestore database, and hosting services
- **Jose 6.0.11**: JWT token handling for secure authentication

### AI & API Integration
- **OpenAI 5.10.2**: AI-powered career guidance and project idea generation
- **Axios 1.10.0**: HTTP client for API requests and data fetching

### Utility Libraries
- **html2canvas 1.4.1**: Screenshot generation for PDF creation
- **jsPDF 3.0.1**: Client-side PDF generation for downloadable content

### Development & Analytics
- **Vercel Analytics 1.5.0**: Performance and user analytics
- **Vercel Speed Insights 1.2.0**: Core web vitals monitoring
- **ESLint**: Code linting and quality assurance
- **Git**: Version control for collaborative development

### Content & Data
- **JSON-based Content**: Structured data files for roadmaps, courses, and blogs
- **Local Storage**: Browser storage for user preferences and bookmarks
- **Static Assets**: Optimized images and resources for course thumbnails and branding