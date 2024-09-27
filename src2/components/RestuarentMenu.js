import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Menu_API } from "../../utils/contants";
import useRestrauntMenu from "../../utils/useRestrauntMenu";
import RestuarentCatagory from "./RestuarentCatagory";
import { data } from "autoprefixer";


const RestuarentMenu = () => {
  

    const {resid} =useParams();


const resInfo =useRestrauntMenu(resid);



    const { name, city, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info || {};

    const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

    const itemCards1 = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards


    

    const categories= resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
        <div className="text-center">
            <h1 className="font-bold my-4 text-2xl">{name}</h1>
        
            <p className="font-bold text-lg">{cuisines?.join(", ")} - {costForTwoMessage}</p>

            {
  // Ensure categories is not undefined before mapping
  categories && categories.length > 0 && categories.map((category, index) => (
    // Adding a unique key prop for each RestuarentCatagory component
    <RestuarentCatagory key={category?.card?.card?.id || index} data={category?.card?.card} />
  ))
}

                 
                           
            
        </div>
    );
};

export default RestuarentMenu;