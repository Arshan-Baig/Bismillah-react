import React from "react"

class UserClass extends React.Component {

   

    constructor(props){

        super(props)

        this.state={

            count1: 1,
           
        }

        console.log("child-constructor")

       
    }

async componentDidMount(){

    
    const data= await fetch("https://api.githup.com/users/Arshan-Baig");

    const json = await data.json();

    console.log(json)
}

render(){

    console.log("child-render")

    const {name,address}=this.props

    const {count1}=this.state

    return(

        

        <div className="UserClass">
        <h1>count1:{count1}</h1>

        <button onClick={()=>{
this.setState({

    count1:this.state.count1 + 1,
});

        }}>Increase Count</button>
     
        <h1>About</h1>
        <h2>Name:{name}</h2>
        <h2>address:{address}</h2>
        <h2>function base component</h2>
        
        
            </div>
    )
}

  

}

export default UserClass;