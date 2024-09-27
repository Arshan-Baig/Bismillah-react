import { LOGO_URL } from "../../utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {

    const [btnNameReact ,setbtnNamereact]= useState("Login");

    const onlinestatus= useOnlineStatus();



    return (
      <div className="flex justify-between bg bg-white shadow-lg">
        <div className="w-56">
          <img
            className="logo"
            src={LOGO_URL}
            alt="Logo"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
        <li className="px-4 font-bold">OnlineStatus{onlinestatus ? "💚":"❤️"}</li>

            <li className="px-4  font-bold">

            <Link to= "/">Home</Link>
            </li>
            <li className="px-4 font-bold">
            <Link to= "/about">About Us</Link>

            </li>
            <li className="px-4 font-bold">

            <Link to= "/Contact">Contact Us</Link>

            </li>

            <li className="px-4 font-bold">

                 <Link to= "/Grocery">Grocery</Link>

               </li>

            
            <li className="px-4 font-bold">Cart</li>
            <button className="px-4 font-bold"  
            
            onClick={()=>{
                btnNameReact === "Login"? setbtnNamereact("Logout"):setbtnNamereact("Login")
              }}
            
            >

            {btnNameReact}

            </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;