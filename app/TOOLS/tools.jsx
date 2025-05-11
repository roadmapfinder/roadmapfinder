// File: pages/index.js
"use client"
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { 
  Pen, Terminal, Brain, Rocket, FileText, 
  Briefcase, Search, ExternalLink
} from 'lucide-react';

// Tool data organized by category
const toolsData = {
  design: [
    {
      name: "Figma",
      description: "Collaborative interface design tool for teams to create, test, and ship better designs",
      logo: "/icons/figma.svg",
      url: "https://figma.com"
    },
    {
      name: "Canva",
      description: "Design platform for creating graphics, presentations, and other visual content",
      logo: "/icons/canva.svg",
      url: "https://canva.com"
    },
    {
      name: "Spline",
      description: "Design and collaborate on 3D web experiences in your browser",
      logo: "/icons/spline.svg",
      url: "https://spline.design"
    },
    {
      name: "LottieFiles",
      description: "Platform for lightweight, scalable animations for websites and apps",
      logo: "/icons/lottiefiles.svg",
      url: "https://lottiefiles.com"
    },
    {
      name: "Coolors",
      description: "Color scheme generator that creates beautiful color combinations",
      logo: "/icons/coolors.svg",
      url: "https://coolors.co"
    }
  ],
  code: [
    {
      name: "Replit",
      description: "Collaborative browser IDE for coding in 50+ languages without setup",
      logo: "/icons/replit.svg",
      url: "https://replit.com"
    },
    {
      name: "CodePen",
      description: "Social development environment for front-end designers and developers",
      logo: "/icons/codepen.svg",
      url: "https://codepen.io"
    },
    {
      name: "CodeSandbox",
      description: "Online code editor and prototyping tool that accelerates creating web applications",
      logo: "/icons/codesandbox.svg",
      url: "https://codesandbox.io"
    },
    {
      name: "Postman",
      description: "API platform for building and using APIs with simplified steps for testing and collaboration",
      logo: "/icons/postman.svg",
      url: "https://postman.com"
    },
    {
      name: "GitPod",
      description: "Cloud development environment that spins up fresh, automated dev environments for each task",
      logo: "/icons/gitpod.svg",
      url: "https://gitpod.io"
    }
  ],
  ai: [
    {
      name: "GitHub Copilot",
      description: "AI pair programmer that helps you write code faster with less work",
      logo: "/icons/github-copilot.svg",
      url: "https://github.com/features/copilot"
    },
    {
      name: "ChatGPT",
      description: "AI model that can engage in conversational dialogue and assist with various tasks",
      logo: "/icons/chatgpt.svg",
      url: "https://chat.openai.com"
    },
    {
      name: "Midjourney",
      description: "AI text-to-image generator creating stunning visuals from text descriptions",
      logo: "/icons/midjourney.svg",
      url: "https://midjourney.com"
    },
    {
      name: "Jasper",
      description: "AI content platform that helps teams create high-quality content faster",
      logo: "/icons/jasper.svg",
      url: "https://jasper.ai"
    },
    {
      name: "RunwayML",
      description: "AI creative tools for editing video and generating content",
      logo: "/icons/runwayml.svg",
      url: "https://runwayml.com"
    }
  ],
  deployment: [
    {
      name: "Netlify",
      description: "All-in-one platform for automating modern web projects with continuous deployment",
      logo: "/icons/netlify.svg",
      url: "https://netlify.com"
    },
    {
      name: "Vercel",
      description: "Platform for frontend frameworks and static sites with serverless functions",
      logo: "/icons/vercel.svg",
      url: "https://vercel.com"
    },
    {
      name: "GitHub Pages",
      description: "Static site hosting directly from your GitHub repository",
      logo: "/icons/github-pages.svg",
      url: "https://pages.github.com"
    },
    {
      name: "Cloudflare Pages",
      description: "JAMstack platform for frontend developers to collaborate and deploy websites",
      logo: "/icons/cloudflare.svg",
      url: "https://pages.cloudflare.com"
    },
    {
      name: "Heroku",
      description: "Cloud platform that lets companies build, deliver, monitor and scale apps",
      logo: "/icons/heroku.svg",
      url: "https://heroku.com"
    }
  ],
  docs: [
    {
      name: "Notion",
      description: "All-in-one workspace for notes, documents, wikis, and project management",
      logo: "/icons/notion.svg",
      url: "https://notion.so"
    },
    {
      name: "Obsidian",
      description: "Powerful knowledge base that works on top of your local folder of plain text files",
      logo: "/icons/obsidian.svg",
      url: "https://obsidian.md"
    },
    {
      name: "Gitbook",
      description: "Modern documentation platform where teams can document everything",
      logo: "/icons/gitbook.svg",
      url: "https://gitbook.com"
    },
    {
      name: "Coda",
      description: "Doc that brings words, data, and teams together with the building blocks",
      logo: "/icons/coda.svg",
      url: "https://coda.io"
    },
    {
      name: "Confluence",
      description: "Team workspace where knowledge and collaboration meet",
      logo: "/icons/confluence.svg",
      url: "https://www.atlassian.com/software/confluence"
    }
  ],
  productivity: [
    {
      name: "Linear",
      description: "Issue tracking tool designed for high-performance teams",
      logo: "/icons/linear.svg",
      url: "https://linear.app"
    },
    {
      name: "Trello",
      description: "Visual tool for organizing your work and life with boards, lists, and cards",
      logo: "/icons/trello.svg",
      url: "https://trello.com"
    },
    {
      name: "Loom",
      description: "Video messaging tool that helps you get your message across through instantly shareable videos",
      logo: "/icons/loom.svg",
      url: "https://loom.com"
    },
    {
      name: "Miro",
      description: "Online collaborative whiteboard platform to bring teams together",
      logo: "/icons/miro.svg",
      url: "https://miro.com"
    },
    {
      name: "Calendly",
      description: "Scheduling automation platform for eliminating the back-and-forth emails",
      logo: "/icons/calendly.svg",
      url: "https://calendly.com"
    }
  ]
};

// Category mappings for icons and colors
const categoryConfig = {
  design: { icon: Pen, color: 'bg-pink-100 text-pink-600', label: 'Design' },
  code: { icon: Terminal, color: 'bg-indigo-100 text-indigo-600', label: 'Code' },
  ai: { icon: Brain, color: 'bg-purple-100 text-purple-600', label: 'AI' },
  deployment: { icon: Rocket, color: 'bg-blue-100 text-blue-600', label: 'Deployment' },
  docs: { icon: FileText, color: 'bg-yellow-100 text-yellow-600', label: 'Docs' },
  productivity: { icon: Briefcase, color: 'bg-green-100 text-green-600', label: 'Productivity' }
};

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for sticky navbar effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter tools based on active category and search query
  const getFilteredTools = () => {
    const allTools = Object.entries(toolsData).flatMap(([category, tools]) => {
      return tools.map(tool => ({ ...tool, category }));
    });

    let filtered = allTools;
    
    // Apply category filter if not "all"
    if (activeFilter !== 'all') {
      filtered = filtered.filter(tool => tool.category === activeFilter);
    }
    
    // Apply search filter if there's a query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(tool => 
        tool.name.toLowerCase().includes(query) || 
        tool.description.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  };

  // Group tools by category for display when no filter is active
  const renderToolsByCategory = () => {
    return Object.entries(toolsData).map(([category, tools]) => {
      if (activeFilter !== 'all' && activeFilter !== category) return null;
      
      const CategoryIcon = categoryConfig[category].icon;
      
      // Filter tools by search query if present
      const filteredTools = searchQuery 
        ? tools.filter(tool => 
            tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
            tool.description.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : tools;
      
      if (filteredTools.length === 0) return null;
      
      return (
        <section key={category} className="mb-12" id={category}>
          <div className="flex items-center mb-6">
            <CategoryIcon className="w-6 h-6 mr-2 text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">{categoryConfig[category].label} Tools</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool, index) => (
              <ToolCard key={`${category}-${index}`} tool={tool} category={category} />
            ))}
          </div>
        </section>
      );
    });
  };

  // Render all tools in a single grid when filtered
  const renderFilteredTools = () => {
    const filteredTools = getFilteredTools();
    
    if (filteredTools.length === 0) {
      return (
        <div className="text-center py-16">
          <h3 className="text-xl text-gray-600">No tools found matching your criteria</h3>
          <p className="mt-2 text-gray-500">Try adjusting your search or filter</p>
        </div>
      );
    }
    
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTools.map((tool, index) => (
          <ToolCard key={`filtered-${index}`} tool={tool} category={tool.category} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>RoadmapFinder | Tool Hub</title>
        <meta name="description" content="Discover the best tools for developers and designers" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Sticky Navigation Bar */}
      <header 
        className={`sticky top-0 z-50 bg-white ${
          isScrolled ? 'shadow-md' : ''
        } transition-all duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-blue-600">RoadmapFinder</h1>
                <span className="ml-2 text-sm font-medium bg-blue-100 text-blue-600 px-2 py-1 rounded">Tool Hub</span>
              </div>
              
              {/* Mobile filter toggle could go here */}
            </div>
            
            {/* Search Bar */}
            <div className="mt-4 md:mt-0 relative">
              <input
                type="text"
                placeholder="Search tools..."
                className="w-full md:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Filter Chips */}
          <div className="pb-4 overflow-x-auto whitespace-nowrap flex gap-2">
            <FilterChip 
              active={activeFilter === 'all'} 
              onClick={() => setActiveFilter('all')}
              label="All"
            />
            {Object.entries(categoryConfig).map(([key, config]) => (
              <FilterChip 
                key={key}
                active={activeFilter === key}
                onClick={() => setActiveFilter(key)}
                label={config.label}
                icon={config.icon}
                color={config.color}
              />
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Heading */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Developer & Designer Tool Hub</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A curated collection of the best web-based tools to streamline your workflow,
              enhance creativity, and boost productivity.
            </p>
          </div>

          {/* Tool Sections */}
          {activeFilter === 'all' && !searchQuery ? renderToolsByCategory() : renderFilteredTools()}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© 2025 RoadmapFinder. All tools are property of their respective owners.</p>
        </div>
      </footer>
    </div>
  );
}

// Tool Card Component
function ToolCard({ tool, category }) {
  const [isHovered, setIsHovered] = useState(false);
  const categoryInfo = categoryConfig[category];
  
  return (
    <div 
      className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 ${
        isHovered ? 'transform -translate-y-1' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            {/* Placeholder for logo - in a real app you'd use next/image */}
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
              {/* This would be replaced with actual logos */}
              <span className="text-lg font-bold text-gray-500">{tool.name.charAt(0)}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{tool.name}</h3>
          </div>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${categoryInfo.color}`}>
            {categoryInfo.label}
          </span>
        </div>
        
        <p className="text-gray-600 mb-6 h-12 line-clamp-2">{tool.description}</p>
        
        <a 
          href={tool.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`flex items-center justify-center w-full py-2 px-4 rounded-lg bg-blue-50 text-blue-600 font-medium hover:bg-blue-100 transition-colors duration-300 ${
            isHovered ? 'bg-blue-100' : ''
          }`}
        >
          Visit Tool <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

// Filter Chip Component
function FilterChip({ active, onClick, label, icon: Icon, color }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
        active 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {Icon && <Icon className="w-4 h-4 mr-1" />}
      {label}
    </button>
  );
}