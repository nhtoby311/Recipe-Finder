import {useEffect, useState} from "react"
import './App.css';
import Recipe from './components/Recipe'

function App() {

  
  //pls dont steal this :(
  const APP_ID = "c22b125c"                   
  const APP_KEY = "e908f59031d64f42a5c926642c7296a4"

  
  const[recipes, setRecipes] = useState([])
  const[search, setSearch] = useState("pizza")
  const[query, setQuery] = useState("pizza")

  useEffect(function()
  {
    console.log("run1st")
    getRecipes()
  },[query])

  const getRecipes = async function()
  {
    console.log(APP_ID + " and "+ APP_KEY )
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const updateSearch = function(e)
  {
    setSearch(e.target.value)
    console.log(search)
  } 

  const getSearch = function(e)
  {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <div className="App">
      <h1 className="App-name">Recipe Finder</h1>
      <form onSubmit={getSearch} className="search-form" >
        <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
        <button className="search-button" type="submit">
        Search
        </button>
      </form>
      <div className="recipe-cont">
        {recipes.map(function(recipe)
        { 
          return <Recipe 
          key={recipe.recipe.label}
          name={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredientLines}
          />
        })}
      </div>
    </div>
  );
}

export default App;
