import { useState } from "react";
import About from "./About";

const User =(props)=>{

    const[count,setcount]=useState(1)

return(

    <div>
<h1>About</h1>
<h1>count:{count}</h1>
<button onClick={()=>{
setcount(prevCount =>prevCount + 1)
}}>Increase Count</button>
<h2>Name:{props.name}</h2>
<h2>function base component</h2>


    </div>

)

}


export default User;