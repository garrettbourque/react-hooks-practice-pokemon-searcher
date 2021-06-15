import React, {useState, UseEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage(pokedex) {

  const [searchPoke, findPoke] = useState("");

  //filter poke for specific sets or all
  const pokeShow = pokedex.pokedex.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchPoke.toLowerCase())
  );

  //adding a new pokemon
  const addPoke= (newPoke)=>{
    pokedex.scanPoke([...pokedex, newPoke])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm wildHasAppeared={addPoke}/>
      <br />
      <Search searchPoke={searchPoke} findPoke={findPoke}/>
      <br />
      <PokemonCollection pokeShow={pokeShow}/>
    </Container>
  );
}

export default PokemonPage;
