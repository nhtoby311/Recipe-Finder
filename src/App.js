import {useEffect, useState} from "react"
import './App.css';
import Recipe from './components/Recipe'


function App() {

  
  const APP_ID = process.env.REACT_APP_APP_ID              
  const APP_KEY = process.env.REACT_APP_APP_KEY


  const[recipes, setRecipes] = useState([])
  const[search, setSearch] = useState("pizza")
  const[query, setQuery] = useState("pizza")

  useEffect(function()
  {
    const getRecipes = async function()
  {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`)
    const data = await response.json()
    
    setRecipes(data.hits)
    console.log(data.hits)
  }
  getRecipes()
  },[query])

  

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
        {recipes.map(function(recipe,index)
        { 
          console.log(recipe)
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
