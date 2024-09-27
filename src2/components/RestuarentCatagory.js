
import { useState } from "react";
import ItemList from "./ItemList";

const RestuarentCatagory = ({ data }) => {
  //console.log(data);

 const [ showItems,setShowItems] =useState(false);

  const handleClick = () =>{
   
    setShowItems((prevShowItems) => !prevShowItems);
    

  }

    // 
//
  
  return (

    <div>
    <div className="w-6/12 mx-auto my-3 bg-green-50 shadow-lg  font-bold rounded-lg">
    <div className="flex justify-between cursor-pointer" onClick={handleClick}>
      <span className="">{data?.title} ({data.itemCards.length})</span>
      <span className="">⬇️</span>
    </div>
    { showItems && <ItemList Items={data.itemCards}/>}
      </div>
      </div>

  );
};

export default RestuarentCatagory;
