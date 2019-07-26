import React, {useEffect, useState} from 'react';

import { Card, Icon, Image, Button } from 'semantic-ui-react';
import Axios from 'axios';



function EpisodeCard ({episode}) {
  console.log("EpisodeCard Props", episode);
  console.log("EpisodeCard Props.name", episode.name);
 // const [img, setImg] = useState();

  // useEffect(()=> {
    
  //     Axios
  //     .get(`https://rickandmorty.fandom.com/api/v1/Search/List?query=${place.name}&type=images&limit=1&minArticleQuality=10&batch=1&namespaces=0%2C14`)
  //      .then(res => {
  //       console.log("img Response", res);
  //       setImg(res)
  //     })
      return (
        <Card>
      
        <Card.Content>
          <Card.Header>{episode.name}</Card.Header>
          <Card.Meta>{episode.episode}</Card.Meta>
          <Card.Meta>Aired on: {episode.air_date}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
         <a>
    
         </a>
          
        </Card.Content>
        
      </Card>
      )
    


}
  export default EpisodeCard;