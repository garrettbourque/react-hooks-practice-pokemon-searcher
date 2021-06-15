import React,{useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({wildHasAppeared}) {
  const[pokeForm,setPokeForm]= useState({
    name:"",
    hp:0,
    front:"",
    back:""

  });



  function handleChange(event) {
    setPokeForm({
      ...pokeForm,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault()
    const newPokemon = {
      name: pokeForm.name,
      hp: pokeForm.hp,
      sprites: {
        front: pokeForm.front,
        back: pokeForm.back,
      },
    };

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then((r) => r.json())
      .then(wildHasAppeared);
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      
        <Form onSubmit={(e) =>handleSubmit(e)}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={pokeForm.name} onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={pokeForm.hp} onChange={handleChange} />
          <Form.Input fluid label="Front Image URL"
            placeholder="url"
            name="front"
            value={pokeForm.front} onChange={handleChange}
          />
          <Form.Input fluid label="Back Image URL"
            placeholder="url"
            name="back"
            value={pokeForm.back} onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
