import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeDetail from '../../components/RecipeDetail';
import Navigation from '../../components/Navigation';
import '../../styles/global.css';
import { useRouter } from 'next/router';

const RecipeDetailPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const response = await axios.get(`/api/recipes/${id}`);
                setRecipe(response.data);
            } catch (error) {
                console.error('Error fetching recipe details:', error);
            }
        };

        if (id) {
            fetchRecipeDetails();
        }
    }, [id]);

    return (
        <div>
            <Navigation />
            <div className="mt-10">
                {recipe ? (
                    <RecipeDetail recipe={recipe} />
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
};

export default RecipeDetailPage;
