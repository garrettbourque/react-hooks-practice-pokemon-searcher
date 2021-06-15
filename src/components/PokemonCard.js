import React,{useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard(pokemon) {
  let [side, setSide]= useState(true)
  const switchSprite=()=>{
    setSide(!side)
  }

  return (
    <Card>
      <div>
        <div className="image" onClick={switchSprite}>
          <img src = {side ?pokemon.sprites.front:pokemon.sprites.back } alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
