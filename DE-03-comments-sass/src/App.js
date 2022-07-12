import React from 'react'
import "./App.scss";
import Card from './components/card/Card';
import Header from './components/header/Header';
import datA from "./data"

const App = () => {
  return (
    <div>
    <Header/>
    <Card dataa={datA} />
   
    </div>
    
  )
}

export default App