import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { authService, AdminUserResponse, LoginResult } from '../services/authService';
import { setUnauthorizedCallback } from '../services/apiClient';
import { AdminUser } from '../services/mockData';

interface AuthContextType {
  user: AdminUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password?: string) => Promise<LoginResult>;
  verifySecurityPin: (challengeToken: string, pin: string) => Promise<void>;
  setupSecurityPin: (challengeToken: string, pin: string, confirmPin: string) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<AdminUser>) => void;
  refreshUser: () => Promise<void>;
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

  const mapUserData = (userData: AdminUserResponse): AdminUser => ({
    id: userData._id || '1',
    name: userData.name || 'Admin User',
    email: userData.email || '',
    role: userData.role || 'Administrator',
    department: 'Tax & Corporate Advisory',
    avatar: userData.avatar || '/team/ami-sampat.jpg',
    lastLogin: new Date().toISOString().replace('T', ' ').substring(0, 19),
    securityPinEnabled: userData.securityPinEnabled ?? true,
    securityPinChangedAt: userData.securityPinChangedAt,
    securityPinRotationDays: userData.securityPinRotationDays ?? 90,
    isPinExpired: userData.isPinExpired ?? false,
  });

  const refreshUser = useCallback(async () => {
    const storedToken = authService.getToken();
    if (!storedToken) return;
    try {
      const userData: AdminUserResponse = await authService.getMe();
      setUser(mapUserData(userData));
    } catch (err) {
      // Ignore background refresh errors
    }
  }, []);

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
          setUser(mapUserData(userData));
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

  const login = async (email: string, password?: string): Promise<LoginResult> => {
    setError(null);
    setIsLoading(true);
    try {
      const result = await authService.login(email, password);

      if (result.requiresSecurityPin || result.requiresSecurityPinSetup) {
        return result;
      }

      if (result.token && result.user) {
        setToken(result.token);
        setUser(mapUserData(result.user));
      }

      return result;
    } catch (err: any) {
      setError(err.message || 'Login failed. Please check your credentials.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const verifySecurityPin = async (challengeToken: string, pin: string) => {
    setError(null);
    setIsLoading(true);
    try {
      const result = await authService.verifySecurityPin(challengeToken, pin);
      setToken(result.token);
      setUser(mapUserData(result.user));
    } catch (err: any) {
      setError(err.message || 'Security PIN verification failed.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const setupSecurityPin = async (challengeToken: string, pin: string, confirmPin: string) => {
    setError(null);
    setIsLoading(true);
    try {
      const result = await authService.setupSecurityPin(challengeToken, pin, confirmPin);
      setToken(result.token);
      setUser(mapUserData(result.user));
    } catch (err: any) {
      setError(err.message || 'Failed to set up Security PIN.');
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
        verifySecurityPin,
        setupSecurityPin,
        logout,
        updateProfile,
        refreshUser,
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
