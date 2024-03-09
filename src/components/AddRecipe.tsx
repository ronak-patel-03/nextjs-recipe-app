import React, { useState, ChangeEvent, FormEvent } from "react";

interface Recipe {
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

const AddRecipeForm: React.FC = () => {
  const initialRecipeState: Recipe = {
    name: "",
    url: "",
    ingredients: [],
    description: "",
    method: "",
    cuisine: "",
    Diet: "",
    serving: "",
    calories: "",
    imgURL: "",
    Reviews: [],
  };

  const [recipe, setRecipe] = useState<Recipe>(initialRecipeState);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe: Recipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/addRecipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recipe),
      });
      if (response.ok) {
        console.log('Recipe added successfully');
        setRecipe(initialRecipeState);
      } else {
        console.error('Error adding recipe');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl text-center font-semibold mb-6">Add Recipe</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            Name:
            <input
              type="text"
              name="name"
              value={recipe.name}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="block">
            URL:
            <input
              type="text"
              name="url"
              value={recipe.url}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="block">
            Ingredients (comma-separated):
            <input
              type="text"
              name="ingredients"
              value={recipe.ingredients.join(",")}
              onChange={(e) =>
                setRecipe((prevRecipe) => ({
                  ...prevRecipe,
                  ingredients: e.target.value.split(","),
                }))
              }
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="block">
            Description:
            <textarea
              name="description"
              value={recipe.description}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="block">
            Method:
            <textarea
              name="method"
              value={recipe.method}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="block">
            Cuisine:
            <input
              type="text"
              name="cuisine"
              value={recipe.cuisine}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="block">
            Diet:
            <input
              type="text"
              name="Diet"
              value={recipe.Diet}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="block">
            Serving:
            <input
              type="text"
              name="serving"
              value={recipe.serving}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="block">
            Calories:
            <input
              type="text"
              name="calories"
              value={recipe.calories}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </label>
          <label className="block">
            Image URL:
            <input
              type="text"
              name="imgURL"
              value={recipe.imgURL}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
