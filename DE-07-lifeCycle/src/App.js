import React from 'react'
import "./App.css"
import Clock from './component/Clock'
import OrnekUseEffect from './component/OrnekUseEffect'
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

  const [goster,setgoster]=useState(true)

  return (
    <div className='container text-center mt-4'>
    <button className='btn-lg btn-danger' onClick={()=>setgoster(!goster)}>
      GOSTER
    </button>
        
    <Clock/>
    <OrnekUseEffect/>
   
    </div>
    
  )
}

export default App