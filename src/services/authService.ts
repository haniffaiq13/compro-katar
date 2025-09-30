import type { User, AuthState } from '../types';

const DUMMY_USER: User = {
  id: '1',
  email: 'admin@karangtaruna.local',
  name: 'Admin Karang Taruna',
  role: 'admin'
};

const DUMMY_PASSWORD = 'Kontrol123!';
const AUTH_KEY = 'kt_auth';

export const authService = {
  login: async (email: string, password: string): Promise<AuthState> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (email === DUMMY_USER.email && password === DUMMY_PASSWORD) {
      const token = btoa(JSON.stringify({ id: DUMMY_USER.id, exp: Date.now() + 24 * 60 * 60 * 1000 }));
      const authState: AuthState = {
        user: DUMMY_USER,
        token,
        isAuthenticated: true
      };
      
      localStorage.setItem(AUTH_KEY, JSON.stringify(authState));
      return authState;
    } else {
      throw new Error('Email atau password salah');
    }
  },

  logout: (): void => {
    localStorage.removeItem(AUTH_KEY);
  },

  getCurrentAuth: (): AuthState | null => {
    try {
      const stored = localStorage.getItem(AUTH_KEY);
      if (!stored) return null;
      
      const auth: AuthState = JSON.parse(stored);
      
      // Check if token is expired
      if (auth.token) {
        const tokenData = JSON.parse(atob(auth.token));
        if (tokenData.exp < Date.now()) {
          localStorage.removeItem(AUTH_KEY);
          return null;
        }
      }
      
      return auth;
    } catch {
      localStorage.removeItem(AUTH_KEY);
      return null;
    }
  },

  isAuthenticated: (): boolean => {
    return authService.getCurrentAuth()?.isAuthenticated ?? false;
  }
};