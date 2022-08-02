import AddBilgi from "../components/AddBilgi"
import BilgiList from "../components/BilgiList"
import {useState,useEffect} from "react";
 import axios from 'axios';

const Home = () => {
const[bilgiler,setBilgiler]=useState([])

   const url = 'https://tutorials-api-cw.herokuapp.com/api/tutorials';

  //! GET (Read)
  const getBilgiler=   async () =>{ 
  
 const {data} = await axios.get(url)
  setBilgiler(data)
  }

  //? Sadece Component mount oldugunda istek yapar
  useEffect(() => {getBilgiler()},[])
    
    
  console.log(bilgiler);
 

  //! POST (Create)
 const addBilgi= async (yeniVeri) =>{ 
  // console.log(z);
  await axios.post(url,yeniVeri)
}



  //! DELETE (delete)
 
  //! Update (PUT:tüm Update,PATCH :kısmen Update)
 
    
   
  return (
    <>
      <AddBilgi  addBilgi={addBilgi}/>
      <BilgiList />
    </>
  );
};

export default Home;