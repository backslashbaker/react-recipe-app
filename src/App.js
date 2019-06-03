import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = 'dca42702'
  const APP_KEY = '7a8f19931f731ffdf97b51f3587d5bbb'

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Effect has been run');
  });

  return(
    <div className="App">
      <form className="search-from">
        <input className="search-bar" type="text"  />
        <button className="search-button" type="submit">Search</button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  )

}

export default App;
