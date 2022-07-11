import React from 'react'
import Msg from './Msg';

const Person = (props) => {
const {name, img, tel}=props;
  return (
    <div>

    <h2>{name}</h2>

    <Msg nameMsg={name}/>

    <img src={img}/>
    <p>{tel}</p>
    
    </div>
  )
}

export default Person