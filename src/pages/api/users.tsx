// pages/api/users.ts
import { NextApiRequest, NextApiResponse } from 'next';
import {connectDB} from '../../services/db'; // Adjust the path as per your project structure
import User from '../../models/users'; // Adjust the path as per your project structure

// Ensure MongoDB connection
connectDB();

// Handler for the /api/users endpoint
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            // Fetch all users from the database
            const users = await User.find();

            // Return the list of users
            res.status(200).json(users);
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        // Handle unsupported HTTP methods
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
