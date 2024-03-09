import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Recipes, { Recipe } from "../components/Recipes";
import Navigation from "../components/Navigation";
import axios from "axios";
import { FaSearch } from "react-icons/fa"; 

const SearchPage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("/api/recipes");
        setRecipes(response.data);
        setFilteredRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  const handleSearch = (query: string, cuisine: string) => {
    const lowerCaseQuery = query.toLowerCase();

    const filtered = recipes.filter(
      (recipe) =>
        (recipe.name.toLowerCase().includes(lowerCaseQuery) ||
          recipe.cuisine.toLowerCase().includes(lowerCaseQuery)) &&
        (!cuisine || recipe.cuisine.toLowerCase() === cuisine.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  return (
    <div>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="mx-5 mb-8">
          <h1 className="text-3xl font-bold mb-5 text-black flex items-center">
            <FaSearch className="mr-2" /> Search Recipes
          </h1>
          <SearchBar onSearch={handleSearch} />
        </div>
        <Recipes recipes={filteredRecipes} />
      </div>
    </div>
  );
};

export default SearchPage;
