// src/app/components/Recipes.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from  'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {  faStar } from '@fortawesome/free-solid-svg-icons';


 export interface Recipe {
  _id: string;
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

interface RecipesProps {
  recipes: Recipe[];
}


const Recipes: React.FC<RecipesProps> = ({ recipes }) => {
  const [deletedRecipes, setDeletedRecipes] = useState<string[]>([]); 

  const handleDelete = async (recipeId: string) => {
    try {
      await axios.delete(`/api/recipes/deleteRecipe?id=${recipeId}`);
      setDeletedRecipes([...deletedRecipes, recipeId]);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

return (
  <div className="container mx-auto px-4">
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {recipes.map(recipe => (
        !deletedRecipes.includes(recipe._id) && (
          <div key={recipe._id} className="relative">
            <Link href={`/recipes/${recipe._id}`} key={recipe._id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={recipe.imgURL} alt={recipe.name} width={200} height={200} className="w-full h-40 object-cover" />
                <div className="p-6 relative">
                  <h3 className="text-2xl font-semibold text-black mb-2">{recipe.name}</h3>
                  {/* Delete button */}
                  <button
                    onClick={() => handleDelete(recipe._id)}
                    className="absolute top-10 right-6 bg-white text-red-500 rounded-full p-2 hover:bg-red-500 hover:text-white focus:outline-none focus:bg-red-500 focus:text-white flex items-center"
                    style={{ transform: 'translate(50%, -50%)', borderRadius: '50%' }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                    <span className="sr-only">Delete</span>
                  </button>
                  {/* Star icon */}
                  <div className="absolute bottom-6 right-2 mb-2 mr-2">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                  </div>
                  <p className="text-gray-700 mb-2"><span className="font-semibold">Cuisine:</span> {recipe.cuisine}</p>
                </div>
              </div>
            </Link>
          </div>
        )
      ))}
    </div>
  </div>
);

};

export default Recipes;
