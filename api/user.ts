import api from './index';


interface UserResponse {
  id: number;
  name: string;
  email: string;
}

interface UserDetails {
  name: string;
  gender: string;
  birthdate: string;
  email: string;
}

export const getUserDetails = async (token: string): Promise<UserDetails> => {
  const response = await api.get<UserDetails>(`/user/profile`, {
    headers: {
        Authorization: `Bearer ${token}`
    }});
  return response.data;
};

// Function to get user data
export const getUser = async (userId: number): Promise<UserResponse> => {
    const response = await api.get<UserResponse>(`/user/${userId}`);
    return response.data;
};

// Function to update user data
export const updateUser = async (userId: number, data: Partial<UserResponse>): Promise<UserResponse> => {
  const response = await api.put<UserResponse>(`/user/${userId}`, data);
  return response.data;
};

// Add other user-related API calls here
