import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Card from '../components/card';
import { character } from '../types'
const GET_CHARACTERS = gql`
  query {
    characters{
      results {
        id
        name
        image
      }
    }
  }
`

export default function CharactersList() {
  const { error, loading, data } = useQuery(GET_CHARACTERS);
  // obj.error;
  // obj.loading; //boolean value, is it fetching the data? period of time when the application is loading the data, display spinner
  // obj.data;
  console.log({ error, loading, data });

  if(loading) return <div>spinner</div> 
  if(error) return <div>something went wrong</div> 
  
  return <div className="CharactersList">
    {data.characters.results.map((character: character ) => {
      return <Card name={character.name} image={character.image} />
    })}
  </div>
  
};
