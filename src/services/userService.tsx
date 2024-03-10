import axios from 'axios';

export interface Credentials {
    username: string;
    password: string;
}

export const signIn = async (credentials: Credentials) => {
    try {
        const response = await axios.post('/api/login', credentials);
        return response.data;
    } catch (error) {
        throw new Error('Login Failed');
    }
};

export const fetchUserProfile = async () => {
    try {
        const response = await axios.get('/api/users/profile');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch user profile');
    }
};

export const signUp = async (userData: any) => {
    try {
        const response = await axios.post('/api/register', userData);
        return response.data;
    } catch (error) {
        throw new Error('Registration Failed');
    }
};
