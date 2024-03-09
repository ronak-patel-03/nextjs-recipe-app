import { NextApiRequest, NextApiResponse } from 'next';
import {connectDB } from '../../services/db';
import RecipeModel from '../../models/recipes';

function generateUniqueID(): string {
  const timestamp = new Date().getTime();
  const randomNumber = Math.floor(Math.random() * 1000000);
  return `${timestamp}-${randomNumber}`;
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Connect to MongoDB
      await connectDB();

      // Extract recipe data from request body
      const { name, url, ingredients, description, method, cuisine, Diet, serving, calories, imgURL, Reviews } = req.body;

      const id = generateUniqueID();
      console.log(id);

      // Create new recipe document
      const newRecipe = new RecipeModel({
        id,
        name,
        url,
        ingredients,
        description,
        method,
        cuisine,
        Diet,
        serving,
        calories,
        imgURL,
        Reviews,
      });

      console.log(newRecipe);
      console.log(newRecipe.id);
      // Save recipe to database
      await newRecipe.save();

      res.status(201).json({ message: 'Recipe added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
