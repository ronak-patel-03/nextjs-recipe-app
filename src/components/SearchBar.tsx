import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Recipe {
  _id: string;
  cuisine: string;
}

interface SearchBarProps {
  onSearch: (query: string, cuisine: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [cuisineOptions, setCuisineOptions] = useState<string[]>([]);
  const [selectedCuisine, setSelectedCuisine] = useState<string>('');

  useEffect(() => {
    const fetchCuisineOptions = async () => {
      try {
        const response = await axios.get('/api/recipes');
        const recipes: Recipe[] = response.data; 
        const uniqueCuisines = Array.from(new Set(recipes.map(recipe => recipe.cuisine)));
        setCuisineOptions(uniqueCuisines);
      } catch (error) {
        console.error('Error fetching cuisine options:', error);
      }
    };

    fetchCuisineOptions();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery, selectedCuisine);
  };

  const handleCuisineSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCuisine = e.target.value;
    setSelectedCuisine(selectedCuisine);
    onSearch(query, selectedCuisine);
  };

  const handleClearSearch = () => {
    setQuery('');
    setSelectedCuisine('');
    onSearch('', '');
  };

  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        placeholder="Search recipes by name..."
        value={query}
        onChange={handleChange}
        className="px-4 py-2 border border-gray-800 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-80"
      />
     
      {query && (
        <button
          onClick={handleClearSearch}
          className="ml-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
        >
          Clear
        </button>
      )}
       <select
        value={selectedCuisine}
        onChange={handleCuisineSelect}
        className="ml-2 px-4 py-2 border  border-gray-800 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      >
        <option value="">Select Cuisine</option>
        {cuisineOptions.map((cuisine, index) => (
          <option key={index} value={cuisine}>{cuisine}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
