import React, { useEffect, useState } from 'react';
import LocationCard from './LocationCard';
import axios from 'axios';

export default function LocationList() {
  // TODO: Add useState to track data from useEffect
 const [places, setPlaces] = useState([]);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    
    axios
    .get("https://rickandmortyapi.com/api/location/")
    .then( res=>{
      console.log("Res", res);
      setPlaces(res.data.results)
    })
    .catch( err => {
      console.log("LocationsCatchErr", err);
    })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return <section className='location-list grid-view'>

      <h2>
        {places.map((place, index) => (
          <LocationCard place = {place} key ={index}/>
        )
        
        )}
      </h2>
    </section>

}