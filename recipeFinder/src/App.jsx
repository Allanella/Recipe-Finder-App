import { useState } from 'react'
import SearchBar from './Components/SearchBar'
import RecipeList from './Components/RecipeList'


function App() {
  

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-6">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">Recipe Finder App</h1>
      <SearchBar/>
      <RecipeList/>
      
    </div>
  )
}

export default App
