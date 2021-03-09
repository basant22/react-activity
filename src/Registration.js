import React,{Component} from 'react'
function Registration(){
    let data = "Registration Component"
    return ( 
        <div>
            <h1>{data}</h1>
            <br/>
            <input type='text' name='FirstName'/>
            <br/> <br/>
            <input type='text' name='LastName'/>
            <br/><br/>
            <input type='text' name='MobileName'/>
            <br/>
        </div>
     )
}
export default Registration 