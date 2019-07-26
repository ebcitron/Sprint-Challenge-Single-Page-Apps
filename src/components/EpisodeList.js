import React, { useEffect, useState } from 'react';
import EpisodeCard from './EpisodeCard';
import axios from 'axios';

function EpisodeList() {
  // TODO: Add useState to track data from useEffect
 const [Episodes, setEpisodes] = useState([]);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    
    axios
    .get("https://rickandmortyapi.com/api/episode/")
    .then( res=>{
      console.log("Res", res);
      setEpisodes(res.data.results)
    })
    .catch( err => {
      console.log("EpisodesCatchErr", err);
    })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return( <section className='location-list grid-view'>

      <h2>
        {Episodes.map((episode, index) => (
          <EpisodeCard episode = {episode} key ={index}/>
        )
        
        )}
      </h2>
    </section>
  )
}

export default EpisodeList;