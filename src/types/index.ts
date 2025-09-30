export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  thumbnail?: string;
  author: string;
  publishedAt: string;
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin';
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}