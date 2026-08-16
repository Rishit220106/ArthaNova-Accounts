import { apiRequest, setStoredToken, getStoredToken, removeStoredToken } from './apiClient';

export interface AdminUserResponse {
  _id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  createdAt?: string;
  lastLogin?: string;
}

export const authService = {
  async login(email: string, password?: string): Promise<{ token: string; user: AdminUserResponse }> {
    const res = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });

    if (res.token) {
      setStoredToken(res.token);
    }

    const userData: AdminUserResponse = res.data || {
      _id: '1',
      name: 'Admin User',
      email,
      role: 'Administrator'
    };

    return {
      token: res.token,
      user: userData
    };
  },

  async getMe(): Promise<AdminUserResponse> {
    const res = await apiRequest('/auth/me', {
      method: 'GET'
    });

    return res.data;
  },

  async updatePassword(data: { currentPassword: string; newPassword: string; confirmPassword: string }): Promise<{ success: boolean; message: string }> {
    return await apiRequest('/auth/update-password', {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },

  logout(): void {
    removeStoredToken();
  },

  getToken(): string | null {
    return getStoredToken();
  },

  isAuthenticated(): boolean {
    return !!getStoredToken();
  }
};
