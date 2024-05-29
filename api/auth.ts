import api from './index';

// Define the types of the responses if needed
interface AuthResponse {
    token: string;
}

// Function to login
export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/login', { email, password });
  return response.data;
};

// Function to register
export const register = async (name: string, email: string, password: string, gender: string, birthdate: string): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/register', { name, email, password, gender, birthdate });
  return response.data;
};

// Add other auth-related API calls here
