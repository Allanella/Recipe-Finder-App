import React from 'react'

const SearchBar = () => {
  return (
    <div >
       <input className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm 
       focus:outline-none focus:ring-2 focus:ring-purple-500" type='text' placeholder='search for recipe'/>
       <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">Search here</button>
    </div>
  )
}

export default SearchBar
