import React from 'react';
import { character } from '../../types';

export default function Card({ name, image }: character) {
  return(
    <div>
      <h2>{name}</h2>
      <img src={image} alt="character of Rick and Morty"/>
    </div>  
  )
}