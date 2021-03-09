import React,{useState} from 'react';
import './App.css';
import Home from './Home';
import   AboutUs  from './AboutUs';
import   ContactUs  from './ContactUs';
import   Registration  from './Registration';
import   Users  from './Users';
import   CreateUser  from './CreateUser';
import {Link,Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import { Navbar,Nav } from 'react-bootstrap';
function App() {
  const [address,setAddress]=useState("NewYork")
  return (
    <div className="App">
      <Router>
     
  <Navbar bg="dark" variant="dark">
    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
      <Nav.Link href="#features"><Link to="/list">UserList</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to="/create">Create User</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to="/about">AboutUs</Link></Nav.Link>
      <Nav.Link href="#pricing"><Link to="/contact">ContactUs</Link></Nav.Link>
    </Nav>
  </Navbar>
  <switch>
    <Route path="/create"><CreateUser/></Route>
    <Route path="/list"> <Users/> </Route>
    <Route path="/about"> <AboutUs/></Route>
    <Route path="/contact"><ContactUs/></Route>
    <Route path="/"><Home/></Route>
  </switch>
       </Router>
    </div>
  );
}
export default App;

