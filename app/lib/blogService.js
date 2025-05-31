// lib/blogService.js
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  serverTimestamp,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot
} from 'firebase/firestore';
import { db } from './firebase';

const COLLECTION_NAME = 'techToolsBlogs';

// Helper function to add a new tech tool blog post
export const addTechToolBlog = async (blogData) => {
  try {
    // Validate required fields
    if (!blogData.title || !blogData.content || !blogData.toolUrl) {
      throw new Error('Missing required fields: title, content, or toolUrl');
    }

    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      title: blogData.title.trim(),
      thumbnailUrl: blogData.thumbnailUrl || getDefaultThumbnail(),
      content: blogData.content.trim(),
      toolUrl: blogData.toolUrl.trim(),
      tags: blogData.tags || [],
      category: blogData.category || 'General',
      isPublished: blogData.isPublished !== false, // Default to true
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });

    console.log('Blog post added with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding blog post:', error);
    throw new Error(`Failed to add blog post: ${error.message}`);
  }
};

// Function to get all blogs with real-time updates
export const subscribeToBlogUpdates = (callback, errorCallback) => {
  try {
    const blogsQuery = query(
      collection(db, COLLECTION_NAME), 
      orderBy('createdAt', 'desc')
    );

    return onSnapshot(
      blogsQuery,
      (querySnapshot) => {
        const blogs = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate() || new Date(),
          updatedAt: doc.data().updatedAt?.toDate() || new Date()
        }));
        callback(blogs);
      },
      (error) => {
        console.error('Error in blog subscription:', error);
        if (errorCallback) errorCallback(error);
      }
    );
  } catch (error) {
    console.error('Error setting up blog subscription:', error);
    if (errorCallback) errorCallback(error);
    return null;
  }
};

// Function to get all blogs (one-time fetch)
export const fetchAllBlogs = async () => {
  try {
    const blogsQuery = query(
      collection(db, COLLECTION_NAME), 
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(blogsQuery);

    const blogs = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date()
    }));

    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw new Error(`Failed to fetch blogs: ${error.message}`);
  }
};

// Function to update a blog post
export const updateTechToolBlog = async (blogId, updateData) => {
  try {
    if (!blogId) {
      throw new Error('Blog ID is required');
    }

    const blogRef = doc(db, COLLECTION_NAME, blogId);
    await updateDoc(blogRef, {
      ...updateData,
      updatedAt: serverTimestamp()
    });

    console.log('Blog post updated successfully');
    return true;
  } catch (error) {
    console.error('Error updating blog post:', error);
    throw new Error(`Failed to update blog post: ${error.message}`);
  }
};

// Function to delete a blog post
export const deleteTechToolBlog = async (blogId) => {
  try {
    if (!blogId) {
      throw new Error('Blog ID is required');
    }

    const blogRef = doc(db, COLLECTION_NAME, blogId);
    await deleteDoc(blogRef);

    console.log('Blog post deleted successfully');
    return true;
  } catch (error) {
    console.error('Error deleting blog post:', error);
    throw new Error(`Failed to delete blog post: ${error.message}`);
  }
};

// Get default thumbnail if none provided
const getDefaultThumbnail = () => {
  const defaultThumbnails = [
    "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=200&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=200&fit=crop"
  ];
  return defaultThumbnails[Math.floor(Math.random() * defaultThumbnails.length)];
};

// Enhanced sample data with better structure
export const sampleTechToolsData = [
  {
    title: "Claude 4: The Next Generation AI Assistant",
    thumbnailUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
    content: "Anthropic has released Claude 4, featuring improved reasoning capabilities, better code generation, and enhanced safety measures. This new iteration offers significant improvements in mathematical problem-solving, creative writing, and complex analysis tasks. The model demonstrates remarkable performance across various domains while maintaining ethical AI principles. With advanced context understanding and nuanced responses, Claude 4 represents a major leap forward in conversational AI technology.",
    toolUrl: "https://claude.ai",
    category: "AI Tools",
    tags: ["AI", "Assistant", "Anthropic", "Conversational AI"]
  },
  {
    title: "Vercel v1.0: Revolutionary Deployment Platform",
    thumbnailUrl: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400&h=200&fit=crop",
    content: "Vercel has launched version 1.0 of their deployment platform, introducing edge functions, improved performance monitoring, and seamless integration with popular frameworks. The platform now offers zero-configuration deployments, automatic HTTPS, and global CDN distribution, making it easier than ever to deploy modern web applications. With built-in analytics and optimization tools, developers can ensure their applications perform at peak efficiency.",
    toolUrl: "https://vercel.com",
    category: "Development Tools",
    tags: ["Deployment", "CDN", "Web Development", "Performance"]
  },
  {
    title: "Supabase: The Firebase Alternative",
    thumbnailUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop",
    content: "Supabase continues to evolve as the open-source alternative to Firebase, now featuring real-time subscriptions, edge functions, and advanced authentication options. With PostgreSQL at its core, it provides developers with powerful relational database capabilities while maintaining the simplicity of modern backend-as-a-service platforms. The platform includes built-in APIs, authentication, and real-time functionality out of the box.",
    toolUrl: "https://supabase.com",
    category: "Backend Services",
    tags: ["Database", "PostgreSQL", "Open Source", "Backend"]
  },
  {
    title: "GitHub Copilot X: AI-Powered Development",
    thumbnailUrl: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=200&fit=crop",
    content: "GitHub has unveiled Copilot X, an enhanced AI coding assistant that goes beyond autocomplete. It now includes chat functionality, pull request assistance, and command line integration. The tool can explain code, generate tests, and even help with documentation, significantly boosting developer productivity. With context-aware suggestions and multi-language support, it's becoming an indispensable tool for modern development workflows.",
    toolUrl: "https://github.com/features/copilot",
    category: "AI Tools",
    tags: ["AI", "Code Generation", "GitHub", "Developer Tools"]
  },
  {
    title: "Figma Dev Mode: Design to Code Revolution",
    thumbnailUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=200&fit=crop",
    content: "Figma's new Dev Mode bridges the gap between design and development with automated code generation, improved inspect tools, and seamless handoff workflows. Developers can now extract CSS, generate React components, and access design tokens directly from Figma files, streamlining the design-to-code process. The integration includes version control and collaboration features that keep design and development teams in sync.",
    toolUrl: "https://figma.com",
    category: "Design Tools",
    tags: ["Design", "Code Generation", "Collaboration", "UI/UX"]
  },
  {
    title: "Astro 4.0: The Modern Web Framework",
    thumbnailUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop",
    content: "Astro 4.0 introduces View Transitions API, enhanced image optimization, and improved developer experience. This static site generator focuses on shipping less JavaScript while maintaining modern development patterns. The framework now supports server-side rendering, edge deployment, and hybrid static/dynamic pages. With its island architecture and framework-agnostic approach, Astro enables developers to build fast, SEO-friendly websites with their preferred tools.",
    toolUrl: "https://astro.build",
    category: "Web Frameworks",
    tags: ["Static Site Generator", "Performance", "JavaScript", "SSR"]
  }
];

// Function to populate Firestore with sample data
export const populateFirestoreWithSampleData = async () => {
  try {
    console.log('Starting to populate Firestore with sample data...');

    const promises = sampleTechToolsData.map((blog, index) => {
      // Add delay to avoid rate limiting
      return new Promise((resolve) => {
        setTimeout(async () => {
          try {
            const id = await addTechToolBlog(blog);
            console.log(`Added blog ${index + 1}/${sampleTechToolsData.length}: ${blog.title}`);
            resolve(id);
          } catch (error) {
            console.error(`Failed to add blog ${blog.title}:`, error);
            resolve(null);
          }
        }, index * 500); // 500ms delay between each addition
      });
    });

    const results = await Promise.all(promises);
    const successCount = results.filter(id => id !== null).length;

    console.log(`Successfully added ${successCount}/${sampleTechToolsData.length} blog posts!`);
    return { success: successCount, total: sampleTechToolsData.length };
  } catch (error) {
    console.error('Error populating Firestore:', error);
    throw new Error(`Failed to populate Firestore: ${error.message}`);
  }
};