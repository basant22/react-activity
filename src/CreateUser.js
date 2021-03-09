import React, { Component,useState } from 'react';
import {Button,Table} from 'react-bootstrap';
const CreateUser = () => {
    const [name,SetName]=useState("")
    const [age,SetAge]=useState("")
    const [address,SetAddress]=useState("")
    const register =(e)=>{
        let data = {name,age,address}
       // SetName(e.target.value)
        console.warn("data=",data)
    //     console.warn("targetName=",e.target.name)
    //       switch (e.target.name) {
    //           case "username":
    //               SetName(e.target.value)
    //             //  console.warn("username=",e.target.value)
    //               break;
    //               case "age":
    //               SetAge(e.target.value)
    //              // console.warn("age=",e.target.value)
    //               break;
    //               case "address":
    //               SetAddress(e.target.value)
    //              // console.warn("address=",e.target.value)
    //               break;
    //           default:
    //               break;
    //       }
    }
    return ( <div>
        <h2>Create User</h2>
        <input type="text" name="username" value={name} onChange={(e)=>SetName(e.target.value)}/>
        <br/><br/>
        <input type="text" name="age" value={age} onChange={(e)=>SetAge(e.target.value)}/>
        <br/><br/>
        <input type="text" name="address" value={address} onChange={(e)=>SetAddress(e.target.value)}/>
        <br/><br/>
        <Button onClick={register} variant="secondary">Create User</Button>
    </div> );
}
export default CreateUser;