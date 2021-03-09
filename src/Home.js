import React,{useEffect,useState} from 'react'

function Home(){
    const [names,setNames]=useState("anil")
    const [age,setAge]=useState(27)

   useEffect(()=>{
       console.warn("hello from hooks")
    //   alert('name upadated')
   },[names])
    let data = "Home Component"
    return(
        <div>
            <h1>{data}</h1>
            {/* <h2>{names}</h2>
            <h2>{age}</h2>
            <button onClick={()=>{setAge(29)}}>Update Age</button>
            <button onClick={()=>{setNames("Kumar basant")}}>Update Name</button> */}
        </div>
    )
}
export default Home