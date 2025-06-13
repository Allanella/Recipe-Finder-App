// RecipeList.jsx
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {recipes.length > 0 ? (
      recipes.map((recipe) => <RecipeCard key={recipe.idMeal} recipe={recipe} />)
    ) : (
      <p className="text-gray-500">No recipes found.</p>
    )}
  </div>
);

export default RecipeList;
