
const heading = React.createElement("h1",{
    id: "heading",xyz:"abc"
},"Hello React");


const nested = React.createElement(
    "div",
    {id:"parent"},

[React.createElement(
    "div",
    {id:"child1"},
    
[React.createElement("h1",{},"I m an h1 tag"),React.createElement("h2",{},"I m an h2 tag")]
),
React.createElement(
    "div",
    {id:"child2"},
    
[React.createElement("h1",{},"I m an h1 tag"),React.createElement("h2",{},"I m an h2 tag")]
)]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(nested);


// *
// * <div id="parent">
//<div id="child">
//<h1><h1/>
//</div>

//</div>


// *
// *
// *
// *

