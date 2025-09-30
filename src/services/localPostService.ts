import type { Post } from '../types';
import { seedPosts } from '../data/seedData';

const POSTS_KEY = 'kt_posts';

// Initialize with seed data if no posts exist
const initializePosts = (): Post[] => {
  const existingPosts = localStorage.getItem(POSTS_KEY);
  if (existingPosts) {
    return JSON.parse(existingPosts);
  }
  
  // Create posts with proper IDs and timestamps
  const posts: Post[] = seedPosts.map((post, index) => ({
    ...post,
    id: `post-${Date.now()}-${index}`,
    createdAt: new Date(Date.now() - (index * 24 * 60 * 60 * 1000)).toISOString(),
    updatedAt: new Date(Date.now() - (index * 24 * 60 * 60 * 1000)).toISOString(),
  }));
  
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
  return posts;
};

const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

export const postService = {
  // Get all posts with optional filtering
  getPosts: async (status?: 'published' | 'draft', page = 1, limit = 6): Promise<{ posts: Post[], total: number }> => {
    await new Promise(resolve => setTimeout(resolve, 200)); // Simulate API delay
    
    const allPosts = initializePosts();
    let filteredPosts = [...allPosts];
    
    if (status) {
      filteredPosts = filteredPosts.filter(post => post.status === status);
    }
    
    // Sort by publishedAt/createdAt desc
    filteredPosts.sort((a, b) => {
      const dateA = new Date(a.publishedAt || a.createdAt).getTime();
      const dateB = new Date(b.publishedAt || b.createdAt).getTime();
      return dateB - dateA;
    });
    
    const startIndex = (page - 1) * limit;
    const paginatedPosts = filteredPosts.slice(startIndex, startIndex + limit);
    
    return {
      posts: paginatedPosts,
      total: filteredPosts.length
    };
  },

  // Get published posts only (for public pages)
  getPublishedPosts: async (page = 1, limit = 6): Promise<{ posts: Post[], total: number }> => {
    return postService.getPosts('published', page, limit);
  },

  // Get post by slug
  getPostBySlug: async (slug: string): Promise<Post | null> => {
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const posts = initializePosts();
    return posts.find(post => post.slug === slug) || null;
  },

  // Get post by ID
  getPostById: async (id: string): Promise<Post | null> => {
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const posts = initializePosts();
    return posts.find(post => post.id === id) || null;
  },

  // Create new post
  createPost: async (postData: Omit<Post, 'id' | 'createdAt' | 'updatedAt' | 'slug'>): Promise<Post> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const posts = initializePosts();
    const now = new Date().toISOString();
    const slug = generateSlug(postData.title);
    
    const newPost: Post = {
      ...postData,
      id: `post-${Date.now()}`,
      slug,
      createdAt: now,
      updatedAt: now
    };
    
    posts.unshift(newPost);
    localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
    
    return newPost;
  },

  // Update existing post
  updatePost: async (id: string, updates: Partial<Omit<Post, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Post | null> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const posts = initializePosts();
    const postIndex = posts.findIndex(post => post.id === id);
    
    if (postIndex === -1) return null;
    
    const updatedPost = {
      ...posts[postIndex],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    // Generate new slug if title changed
    if (updates.title && updates.title !== posts[postIndex].title) {
      updatedPost.slug = generateSlug(updates.title);
    }
    
    posts[postIndex] = updatedPost;
    localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
    
    return updatedPost;
  },

  // Delete post
  deletePost: async (id: string): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const posts = initializePosts();
    const filteredPosts = posts.filter(post => post.id !== id);
    
    if (filteredPosts.length === posts.length) return false;
    
    localStorage.setItem(POSTS_KEY, JSON.stringify(filteredPosts));
    return true;
  },

  // Export all posts
  exportPosts: (): string => {
    const posts = initializePosts();
    return JSON.stringify(posts, null, 2);
  },

  // Import posts
  importPosts: (jsonData: string): void => {
    try {
      const posts = JSON.parse(jsonData);
      if (Array.isArray(posts)) {
        localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
      } else {
        throw new Error('Invalid JSON format');
      }
    } catch (error) {
      throw new Error('Failed to import posts: ' + (error as Error).message);
    }
  },

  // Reset to seed data
  resetToSeedData: (): void => {
    localStorage.removeItem(POSTS_KEY);
    initializePosts();
  }
};