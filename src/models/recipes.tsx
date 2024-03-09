// models/recipes.tsx

import mongoose, { Document, Model, Schema, model } from 'mongoose';

export interface RecipeModel extends Document {
    id: string;
    name: string;
    url: string;
    ingredients: string[];
    description: string;
    method: string;
    cuisine: string;
    Diet: string;
    serving: string;
    calories: string;
    imgURL: string;
    Reviews: { username: string; comment: string }[];
}

const recipeSchema = new Schema<RecipeModel>({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    url: { type: String, required: true },
    ingredients: { type: [String], required: true },
    description: { type: String, required: true },
    method: { type: String, required: true },
    cuisine: { type: String, required: true },
    Diet: { type: String, required: true },
    serving: { type: String, required: true },
    calories: { type: String, required: true },
    imgURL: { type: String, required: true },
    Reviews: [{ username: String, comment: String }]
});

const Recipe: Model<RecipeModel> = mongoose.models.Recipe || mongoose.model<RecipeModel>('Recipe', recipeSchema);

export default Recipe;
