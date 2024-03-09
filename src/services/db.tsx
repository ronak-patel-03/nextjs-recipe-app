//src/services/db.tsx
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

interface ProcessEnv {
    MONGO_URI?: string;
    DB_NAME?: string;
}

declare var process: {
    env: ProcessEnv;
    exit(code?: number): never;
};

const { MONGO_URI, DB_NAME } = process.env;

if (!MONGO_URI) {
    throw new Error('MongoDB URI is not provided in the environment variables.');
}

if (!DB_NAME) {
    throw new Error('Database name is not provided in the environment variables.');
}


const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(MONGO_URI, {
            dbName: DB_NAME,
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB Connection Error:', error);
        process.exit(1);
    }
};

export { connectDB };

// src/services/db.tsx
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// interface ProcessEnv {
//     MONGO_URI?: string;
//     DB_NAME?: string;
// }

// declare var process: {
//     env: ProcessEnv;
//     exit(code?: number): never;
// };

// const { MONGO_URI, DB_NAME } = process.env;

// if (!MONGO_URI) {
//     throw new Error('MongoDB URI is not provided in the environment variables.');
// }

// if (!DB_NAME) {
//     throw new Error('Database name is not provided in the environment variables.');
// }

// const connectDB = async (): Promise<void> => {
//     try {
//         await mongoose.connect(MONGO_URI, {
//             dbName: DB_NAME,
//         });
//         console.log('MongoDB Connected');
//     } catch (error) {
//         console.error('MongoDB Connection Error:', error);
//         process.exit(1);
//     }
// };

// // Define a Recipe interface if you haven't already
// interface Recipe {
//     _id: string;
//     name: string;
//     cuisine: string;
//     // Add other attributes as needed
// }

// // Define a model for your recipes collection
// const RecipeModel = mongoose.model<Recipe>('Recipe', new mongoose.Schema<Recipe>({
//     name: { type: String, required: true },
//     cuisine: { type: String, required: true },
//     // Define other fields here
// }));

// // Function to fetch recipes by cuisine
// const getCuisineRecipes = async (cuisine: string): Promise<Recipe[]> => {
//     try {
//         const recipes = await RecipeModel.find({ cuisine });
//         return recipes;
//     } catch (error) {
//         console.error('Error fetching recipes by cuisine:', error);
//         return [];
//     }
// };

// export { connectDB, getCuisineRecipes };
