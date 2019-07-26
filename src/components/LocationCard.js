import React, {useEffect, useState} from 'react';

import { Card, Icon, Image, Button } from 'semantic-ui-react';
import Axios from 'axios';



function LocationCard ({place}) {
  console.log("LocationCard Props", place);
  console.log("LocationCard Props.name", place.name);
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
          <Card.Header>Name: {place.name}</Card.Header>
          <Card.Meta>Dimension: {place.dimension}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
         <a>
          
          {place.residents.length} Residents
         </a>
          
        </Card.Content>
        
      </Card>
      )
    


}
  export default LocationCard;