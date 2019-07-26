import React from 'react';

import { List } from 'semantic-ui-react';

function LocationCard ({place}) {

  return (<span>
    <List>
    
         <a href = {place.url} > <List.Item icon ='marker' content ={place.name} ></List.Item> </a>
    </List>
    </span>
  )
}

export default LocationCard;
