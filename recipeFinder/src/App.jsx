import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import RecipeList from "./Components/RecipeList";
import axios from "axios";

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      setRecipes(res.data.meals || []);
    } catch (err) {
      setError("Failed to fetch recipes.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">Recipe Finder 🍽️</h1>
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
