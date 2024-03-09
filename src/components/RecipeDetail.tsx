import React from 'react';
import { RecipeModel } from '../models/recipes';
import Image from 'next/image';

interface RecipeDetailProps {
    recipe: RecipeModel;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe }) => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="max-w-5xl mx-auto py-8 px-4">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="relative">
                        <Image
                            src={recipe.imgURL}
                            alt={recipe.name}
                            width={1920}
                            height={800}
                            layout="responsive"
                            className="w-full h-96 object-cover object-center"
                        />
                        <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
                            <h1 className="text-4xl font-semibold">{recipe.name}</h1>
                            <p className="text-lg">{recipe.cuisine}</p>
                        </div>
                    </div>
                    <div className="p-8">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Description</h2>
                        <p className="text-base text-gray-700 mb-6">{recipe.description}</p>
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ingredients</h2>
                            <ul className="list-disc list-inside text-base text-gray-800">
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Instructions</h2>
                            <div className="list-decimal list-inside text-base text-gray-800">
                                {recipe.method.split('\n').map((step, index) => (
                                    <p key={index}>{step}</p>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-base text-gray-800 mb-6">
                            <div className="border p-4 rounded-lg">
                                <p className="font-semibold">Diet</p>
                                <p>{recipe.Diet}</p>
                            </div>
                            <div className="border p-4 rounded-lg">
                                <p className="font-semibold">Serving Size</p>
                                <p>{recipe.serving}</p>
                            </div>
                            <div className="border p-4 rounded-lg">
                                <p className="font-semibold">Calories</p>
                                <p>{recipe.calories}</p>
                            </div>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Recipe Source</h2>
                            <p className="text-base text-gray-800">
                                <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{recipe.url}</a>
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Reviews</h2>
                            {recipe.Reviews.map((review, index) => (
                                <div key={index} className="bg-gray-200 p-4 rounded-lg mb-4">
                                    <p className="font-semibold text-gray-800">Username: {review.username}</p>
                                    <p className="text-gray-700">{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetail;
