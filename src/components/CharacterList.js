import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
 const [chars, setChars] = useState([]);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then( res=>{
      console.log("Res", res);
      setChars(res.data.results)
    })
    .catch( err => {
      console.log("charsCatchErr", err);
    })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return <section className='character-list grid-view'>

      <h2>
        {chars.map(char => (
          <CharacterCard char = {char} name ={char.name}/>
        )
        
        )}
      </h2>
    </section>

}
