"use client";
import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Recipes from "../components/Recipes";
import Home from "../components/Home";
import axios from "axios";
import { useSession, signIn } from "next-auth/react";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  const { data: session } = useSession();
  console.log(session?.user?.email);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("/api/recipes");
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <Navigation />
      <Home />
      <div style={{ marginBottom: "20px" }}></div>
      <Recipes recipes={recipes} />
    </div>
  );
};

export default HomePage;
