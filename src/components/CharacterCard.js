import React from 'react';
import locations from './LocationsList';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

export default function CharacterCard ({char, key}, locations) {
  console.log("Card Props", char);
  console.log("Card Props Type", char.type);
  return (
    <Card>
    <Image src={char.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{char.name}</Card.Header>
      <Card.Meta>Species: {char.species}</Card.Meta>
      <Card.Meta>Status: {char.status}</Card.Meta>
      <Card.Meta>Origin: {char.origin.name}</Card.Meta>
      <Card.Meta>Location: <a href={char.location.url} >{char.location.name}</a> </Card.Meta>
      {/* <Card.Meta>Locations: {locations.map(name => {
        return (<p>{name}</p>)
      })}</Card.Meta> */}
            <Card.Description>
        {char.type}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
       {/* <Image src={char.location.url}></Image>
         */}
      </a>
      
    </Card.Content>
    
  </Card>
  );
}

