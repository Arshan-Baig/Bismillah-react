import React, { lazy ,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestuarentMenu from "./components/RestuarentMenu";
//import Grocery from "./components/Grocery";


const Grocery = lazy(() => import("./components/Grocery"));




function AppLayout() {
  return (
    <div className="app">
      <Header />
     <Outlet/>
      
      {/* Add Footer component here if needed */}
    </div>
  );
}

const appRouter = createBrowserRouter([
{
  path:"/",
  element:<AppLayout/>,
  children:[

    {

      path:"/",
      element:<Body/>,
    
    },

    {

      path:"/about",
      element:<About/>,
    
    },
    
    {
    
      path:"/contact",
      element:<Contact/>,
    
    },
    
    {
    
      path:"/grocery",
      element:<Suspense fallback={<h1>Page is Loading</h1>}><Grocery/></Suspense>,
    
    },

    {
    
      path:"/Restuarents/:resid",
      element:<RestuarentMenu/>,
    
    },

  ],

  errorElement:<Error/>,
},







]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

