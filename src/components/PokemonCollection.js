import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection(pokeShow) {


  return (

    <Card.Group itemsPerRow={6}>
      <h1></h1>
      
      {pokeShow.pokeShow.map(pokemon =>( 
        <PokemonCard id={pokemon.id} name={pokemon.name} hp={pokemon.hp} sprites={pokemon.sprites}/>
     
      ))}
       
    </Card.Group>
  );
}

export default PokemonCollection;
