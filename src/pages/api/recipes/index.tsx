// pages/api/recipes/index.tsx

import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '../../../services/db';
import Recipe from '../../../models/recipes';

connectDB();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const recipes = await Recipe.find({}).lean();
            const recipesStringIds = recipes.map(recipe => {
                return { ...recipe, _id: recipe._id.toString() };
            });
            res.status(200).json(recipesStringIds);
        } catch (error) {
            console.error('Error fetching recipes:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
