
import React, {useEffect} from 'react'

class AboutUs extends React.Component{
constructor(){
    super();
    console.warn("constructor");
    this.state = {
        fName:'Kumar',
        lName:'Basant'
    }
}
componentDidMount(){
    //console.warn("didMount");
    console.warn('props=',this.props.address)
}
componentDidUpdate(){
    console.warn("didUpdate");
    console.warn('props=',this.props.address)
   
}

render(){
    const updateFirstName = () => {
        this.setState({fName:'xyz'})
    } 
    return(
        <div>
         <h1>{this.state.fName}</h1>
         <h1>{this.state.lName}</h1>
         <h1>{this.props.address}</h1>
         {/* <button onClick={updateFirstName}>Update</button> */}
        </div>
    )
}
}
export default AboutUs;