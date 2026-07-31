import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { authService, AdminUserResponse } from '../services/authService';
import { setUnauthorizedCallback } from '../services/apiClient';
import { AdminUser } from '../services/mockData';

interface AuthContextType {
  user: AdminUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password?: string) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<AdminUser>) => void;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [token, setToken] = useState<string | null>(authService.getToken());
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const logout = useCallback(() => {
    authService.logout();
    setToken(null);
    setUser(null);
  }, []);

  // Register 401 callback to automatically clear state and handle redirect
  useEffect(() => {
    setUnauthorizedCallback(() => {
      logout();
    });
  }, [logout]);

  // Check current session on mount via GET /auth/me
  useEffect(() => {
    let isMounted = true;
    const verifyAuth = async () => {
      const storedToken = authService.getToken();
      if (!storedToken) {
        if (isMounted) {
          setIsLoading(false);
        }
        return;
      }

      try {
        const userData: AdminUserResponse = await authService.getMe();
        if (isMounted) {
          setUser({
            id: userData._id || '1',
            name: userData.name || 'Admin User',
            email: userData.email || '',
            role: userData.role || 'Administrator',
            department: 'Tax & Corporate Advisory',
            avatar: userData.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256',
            lastLogin: new Date().toISOString().replace('T', ' ').substring(0, 19)
          });
          setToken(storedToken);
        }
      } catch (err: any) {
        // Token invalid or expired
        if (isMounted) {
          logout();
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    verifyAuth();

    return () => {
      isMounted = false;
    };
  }, [logout]);

  const login = async (email: string, password?: string) => {
    setError(null);
    setIsLoading(true);
    try {
      const result = await authService.login(email, password);
      setToken(result.token);
      setUser({
        id: result.user._id || '1',
        name: result.user.name || 'Admin User',
        email: result.user.email || email,
        role: result.user.role || 'Administrator',
        department: 'Tax & Corporate Advisory',
        avatar: result.user.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256',
        lastLogin: new Date().toISOString().replace('T', ' ').substring(0, 19)
      });
    } catch (err: any) {
      setError(err.message || 'Login failed. Please check your credentials.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = (data: Partial<AdminUser>) => {
    if (!user) return;
    setUser({ ...user, ...data });
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token && !!user,
        isLoading,
        error,
        login,
        logout,
        updateProfile,
        clearError
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
