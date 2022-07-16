import moment from "moment";
import {useState} from "react"
//!!!!https://momentjs.com/

const Clock = () => {

 const[zaman,setZaman]=useState(moment())
// console.log(zaman);
  return (
    <div>
      <div>
        {zaman.format("HH")}
        {zaman.format("ss") % 2 === 0 ? ":" : " "}
        {zaman.format("mm")}
        {zaman.format("ss") % 2 === 0 ? ":" : " "}
        {zaman.format("ss")}
      </div>
    </div>
  );
}

export default Clock