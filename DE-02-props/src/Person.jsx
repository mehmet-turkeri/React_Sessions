import React from 'react'

const Person = (props) => {
    console.log(props);
  return (
    <div>

    <h2>{props.name}</h2>
    <img src={props.img}/>
    <p>{props.tel}</p>
    
    </div>
  )
}

export default Person