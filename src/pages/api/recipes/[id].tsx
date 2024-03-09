import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '../../../services/db';
import Recipe from '../../../models/recipes';

connectDB();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { id },
        method,
    } = req;

    console.log('Request Method:', method);
    console.log('Recipe ID:', id);

    if (method === 'GET') {
        try {
            const recipe = await Recipe.findById(id);
            if (!recipe) {
                console.log('Recipe not found');
                return res.status(404).json({ error: 'Recipe not found' });
            }
            console.log('Found Recipe:', recipe);
            res.status(200).json(recipe);
        } catch (error) {
            console.error('Error fetching recipe:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).json({ error: `Method ${method} Not Allowed` });
    }
}
