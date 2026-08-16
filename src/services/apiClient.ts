const getApiBaseUrl = (): string => {
  const envUrl = import.meta.env.VITE_API_URL;
  if (envUrl) {
    const trimmed = envUrl.replace(/\/+$/, '');
    return trimmed.endsWith('/api') ? trimmed : `${trimmed}/api`;
  }
  if (import.meta.env.DEV) {
    return 'http://localhost:5000/api';
  }
  return 'https://api.arthanovaccounts.com/api';
};

const API_BASE_URL = getApiBaseUrl();
const TOKEN_KEY = 'arthanov_admin_jwt_token';

export const getStoredToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setStoredToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeStoredToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

// Event listener for 401 handling across the app
type UnauthorizedHandler = () => void;
let onUnauthorizedCallback: UnauthorizedHandler | null = null;

export const setUnauthorizedCallback = (cb: UnauthorizedHandler) => {
  onUnauthorizedCallback = cb;
};

export async function apiRequest<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getStoredToken();

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> || {})
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      ...options,
      headers
    });

    // Handle 401 Unauthorized
    if (response.status === 401) {
      removeStoredToken();
      if (onUnauthorizedCallback) {
        onUnauthorizedCallback();
      } else {
        if (window.location.pathname !== '/admin/login') {
          window.location.href = '/admin/login';
        }
      }
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Unauthorized access. Please log in again.');
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `Request failed with status ${response.status}`);
    }

    return data;
  } catch (error: any) {
    throw error;
  }
}
