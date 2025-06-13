import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold text-purple-700 mb-2">
          {recipe.strMeal}
        </h2>

        <p className="text-gray-600 mb-1">
          <strong>Category:</strong> {recipe.strCategory}
        </p>

        <p className="text-gray-600 mb-3">
          <strong>Area:</strong> {recipe.strArea}
        </p>

        {recipe.strYoutube && (
          <a
            href={recipe.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors"
          >
            ▶️ Watch Recipe
          </a>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
