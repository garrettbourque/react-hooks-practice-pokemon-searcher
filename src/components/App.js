import React, {useState, useEffect } from "react";
import PokemonPage from "./PokemonPage";
const API ="http://localhost:3001/pokemon"

function App() {

  const [pokedex, scanPoke] = useState([])

  useEffect(() =>{

    fetch(API)
    .then(resp => resp.json())
    .then(data =>scanPoke(data))
  },[])

  return (
    <div className="App">
      <PokemonPage pokedex={pokedex} scanPoke={scanPoke}/>
    </div>
  );
}

export default App;
