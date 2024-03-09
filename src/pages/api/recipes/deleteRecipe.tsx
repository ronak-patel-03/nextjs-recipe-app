// pages/api/recipes/deleteRecipe.tsx

import type { NextApiRequest, NextApiResponse } from 'next';
import {connectDB} from '../../../services/db';
import Recipe from '../../../models/recipes';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;

  await connectDB();

  switch (method) {
    case 'DELETE':
      try {
        // Delete recipe from database
        await Recipe.findByIdAndDelete(id);
        res.status(204).end();
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete the recipe' });
      }
      break;
    default:
      res.setHeader('Allow', ['DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
