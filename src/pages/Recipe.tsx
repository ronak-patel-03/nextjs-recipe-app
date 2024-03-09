'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recipes, { Recipe }from "../components/Recipes"
import '../styles/global.css';

const RecipePage: React.FC = () => {
    const [recipes, setRecipes] = useState<any[]>([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('/api/recipes');
                setRecipes(response.data);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div>
            <h1>Recipes</h1>
            <Recipes recipes={recipes}/>
        </div>
    );
};

export default RecipePage;

