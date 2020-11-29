import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  //***** state values *****/
  const [games, setGames] = useState('')

  // ***** initial fetch *****/
  useEffect(() => {
    fetchData();
    
  }, [])


  function fetchData() {
    fetch('https://api.collegefootballdata.com/games?year=2020&seasonType=regular')
    .then(r => r.json())
    .then(data => setGames(data))
    
  }
  return (
    <div>
      Data Will Be Here SOON!
    </div>
  );
}

export default App;
