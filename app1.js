import React from "react";
import ReactDOM from "react-dom/client"


const heading = React.createElement("h1",{
    id: "heading",xyz:"abc"
},"Hello React");

const Title = () => (
<h1 id="heading">This is jsxheading with react</h1>
)

const elm = <spam>arshan</spam>

const x = 1000;

//const HeadingComponent1 = () => {
  //  return <h1>React Functional Component</h1>
//}

const HeadingComponent = () => (
    
    <div id="container">
{Title()}
<h1 className="heading">React Functional Component</h1>


    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />)