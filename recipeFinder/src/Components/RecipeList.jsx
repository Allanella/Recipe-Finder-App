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
    <div className="w-full max-w-6xl">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipe && recipe.length > 0 ? (
          recipe.map((item) => (
            <div
              key={item.idMeal}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
            >
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-center text-purple-700">{item.strMeal}</h3>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
