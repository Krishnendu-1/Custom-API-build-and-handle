import React, { useEffect, useState } from 'react'
import axios from 'axios';
function App() {
  const [names,setNames]=useState([]);
  useEffect(()=>{
    (async()=>{
      try{
        const res=await axios.get('/api/desc');
        console.log(res.data);//by giving [] in dependency array , it is not re-run to infinity loop and updated only once when all data mounted and fetched form backend.
        setNames(res.data);
      }
      catch(error){
        console.log(error);

      }


    })()
  },[])
  return (

    <div style={{display:"flex",justifyContent:"center",alignContent:"center",gap:"1.2rem",border:"solid 0.1rem black"}}>
      <h1 >Hello!!</h1>
      <h1>Length:{names.length}</h1>
      <div style={{border:"solid 0.1rem black",paddingLeft:"0.5rem"}}>{names.map((item,index)=>(
          <div key={item.id}>
          <h3 >Name:{item.name}</h3>
          <h4 >Favourite language:{item.language}</h4>
          <h4 >Bio:{item.bio}</h4>
          </div>
        ))}</div>
    </div>
  )
}

export default App
