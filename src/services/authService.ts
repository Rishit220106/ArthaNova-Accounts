import { apiRequest, setStoredToken, getStoredToken, removeStoredToken } from './apiClient';

export interface AdminUserResponse {
  _id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  createdAt?: string;
  lastLogin?: string;
  securityPinEnabled?: boolean;
  securityPinChangedAt?: string | null;
  securityPinRotationDays?: number;
  isPinExpired?: boolean;
}

export interface LoginResult {
  requiresSecurityPin?: boolean;
  requiresSecurityPinSetup?: boolean;
  challengeToken?: string;
  isPinExpired?: boolean;
  token?: string;
  user?: AdminUserResponse;
}

export const authService = {
  async login(email: string, password?: string): Promise<LoginResult> {
    const res = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });

    if (res.requiresSecurityPin || res.requiresSecurityPinSetup) {
      return {
        requiresSecurityPin: res.requiresSecurityPin,
        requiresSecurityPinSetup: res.requiresSecurityPinSetup,
        challengeToken: res.challengeToken,
        isPinExpired: res.isPinExpired,
      };
    }

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

  async verifySecurityPin(challengeToken: string, pin: string): Promise<{ token: string; user: AdminUserResponse; isPinExpired?: boolean }> {
    const res = await apiRequest('/auth/verify-security-pin', {
      method: 'POST',
      body: JSON.stringify({ challengeToken, pin })
    });

    if (res.token) {
      setStoredToken(res.token);
    }

    return {
      token: res.token,
      user: res.data,
      isPinExpired: res.isPinExpired
    };
  },

  async setupSecurityPin(challengeToken: string, pin: string, confirmPin: string): Promise<{ token: string; user: AdminUserResponse }> {
    const res = await apiRequest('/auth/setup-security-pin', {
      method: 'POST',
      body: JSON.stringify({ challengeToken, pin, confirmPin })
    });

    if (res.token) {
      setStoredToken(res.token);
    }

    return {
      token: res.token,
      user: res.data
    };
  },

  async updateSecurityPin(data: { currentPin: string; newPin: string; confirmNewPin: string }): Promise<{ success: boolean; message: string }> {
    return await apiRequest('/auth/update-security-pin', {
      method: 'PUT',
      body: JSON.stringify(data)
    });
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
