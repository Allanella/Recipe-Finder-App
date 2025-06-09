import React, { useState, useEffect } from "react";
import axios from "axios";

const RecipeList = () => {
  const [recipe, setRecipe] = useState([]);

  const GetRecipe = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      const MyRecipe = response.data;
      console.log(MyRecipe);
      setRecipe(MyRecipe.meals);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    GetRecipe();
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipe && recipe.length > 0 ? (
          recipe.map((item) => (
            <li key={item.idMeal}>
              <h3>{item.strMeal}</h3>
              <img src={item.strMealThumb} alt={item.strMeal} width="200" />
            </li>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </ul>
    </div>
  );
};

export default RecipeList;
