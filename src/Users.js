import React,{Component,useState,useEffect,Fragment} from 'react';
import {Button,Table} from 'react-bootstrap';
const Users = () => {
    
    // {name: 'Basant',age:'30',address:'Noida'},
    //     {name:'Hemant',age:'27',address:'Noida'},
    //     {name:'Saurabh',age:'39',address:'Noida'},
    //     {name:'Gaurav',age:'10',address:'Noida'},
    //     {name:'Sudhanshu',age:'8',address:'Noida'},
    //     {name:'Vikash',age:'25',address:'Noida'}, 
    const [user,setUser]=useState([])
useEffect(()=>{
    fetch("https://reqres.in/api/users?page=2").then((data)=>{
        data.json().then((response)=>{
            console.warn("response=",response.data)
            setUser(response.data)
        })
    })
    console.warn("response=",user)
},[])
    return ( 
        <Fragment>
            <h1>User listing is here</h1>
            {/* {
                user.length ===6?
         user.map((item,i)=>
<div key={i}>{item.name},{item.Age},{item.address}</div>
                ):<div>No user found</div>
            } */}
            <>
  {/* <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button> */}
  <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Email</th>
      <th>FirstName</th>
      <th>LastName</th>
    </tr>
  </thead>
  <tbody>
      {
         user.map((item,i)=>
         <tr key={i}>
      <td>{i+1}</td>
      <td>{item.email}</td>
      <td>{item.first_name}</td>
      <td>{item.last_name}</td>
    </tr>
         ) 
      }
  </tbody>
</Table>
</>
</Fragment>
     );
}
 
export default Users;