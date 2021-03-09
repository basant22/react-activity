import React,{Component,useState} from 'react'
function ContactUs()  {
    const [text1,setText1]=useState("")
    let data = "ContacUs Component"
    const testClick =()=>{
        console.warn("value of text =",text1)
    }
    const testOnchange =(e)=>{

        console.warn("text=",e.target.value)
         setText1(e.target.value)
    }
    return ( 
        <div>
            <h1>
                {data}
            </h1>
            <input type="text" onChange={testOnchange}/>
            <button onClick={testClick}>ClickMe</button>
        </div>
     )
}
export default ContactUs