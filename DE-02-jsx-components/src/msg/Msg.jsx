import React from 'react'
import Clock from '../clock/Clock'
import img from '../img/voltran2.jpg'
import "./Msg.css" //Evternal style

//internal style
const stylesA = {
    color:"green",
    fontFamily:"Tahoma",
    border:"1px solid red"
}


const Msg = () => {
  return (
    <div>

    <h2 style={{color:"red"}}>Hoşgeldin React!</h2> {/*Burda ise inline style kullandik.*/}

    <p style={stylesA}>Burasi JSX alanidir.</p> {/*Burda internal style kullandik*/}

    <img className="msg-img" src={img}/>
    <img className="msg-img"
    width="400px" src="https://cdn.pixabay.com/photo/2022/07/05/11/06/mountains-7302806__340.jpg"/>

    <Clock/>



    </div>
  )
}

export default Msg