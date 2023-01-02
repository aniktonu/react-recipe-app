import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';
import Recipe from './components/Recipe';




function App() {

  const APP_ID = "677bfc82";
  const APP_KEY = "ecd4c3cd2d86a3132717bfc9d4d1c85f";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');






  useEffect(() => {
    getRecipes();
  }, [query]);


  const getRecipes = async () => {
    // const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }


  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }



  return (
    <div className='App'>
      <form className='search-form' onSubmit={getSearch}>
        <input className='search-bar' type="text" value={search} onChange={updateSearch} />
        <button className='search-button' type="submit"> Search </button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            recipe={recipe.recipe}
          />
        ))}
      </div>

    </div>
  );
}

export default App;

