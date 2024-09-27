import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";



class About extends React.Component{

constructor(props){

super(props);

this.state

console.log("parent-constructor")


}

async componentDidMount(){






    

}



render(){

    console.log("parent-render")
    return (
        <div className="about-container">
        
<User name={"Arshan Baig"}/>
<UserClass name={"Arshan Baig (class)"} address={"Mumbai"}/>
        
        </div>
    );

}

}





export default About;
