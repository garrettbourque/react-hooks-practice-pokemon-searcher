import React,{useState} from "react";

function Search({searchPoke, findPoke}) {
  //const[pokemon, getPoke] = useState("")
  function handleChange(event) {
    findPoke(event.target.value);
  }

 
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchPoke} onChange={handleChange}  />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
