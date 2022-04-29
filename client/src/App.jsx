import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div className="App">
        {(typeof backendData.pokemons === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          backendData.pokemons.map((pokemon, i) => (
            <p key={i}>{pokemon}</p>
          ))
        )}
    </div>
  );
}

export default App;
