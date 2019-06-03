import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = 'dca42702'
  const APP_KEY = '7a8f19931f731ffdf97b51f3587d5bbb'

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
   GetRecipes();
  }, []);

  const GetRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  return(
    <div className="App">
      <form className="search-from">
        <input className="search-bar" type="text"  />
        <button className="search-button" type="submit">Search</button>
      </form>
      
    </div>
  )

}

export default App;
