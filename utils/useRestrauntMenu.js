import { useEffect, useState } from "react"
import { Menu_API } from "./contants";



const useRestrauntMenu = (resid)=>{

    const [resInfo,setInfo] =useState(null);


    useEffect(()=>{

        fetchData();
    },[]);

    const fetchData = async ()=>{
const data = await fetch(Menu_API+resid);
const json = await data.json();
setInfo(json)



    };
    console.log(resInfo)

    return resInfo;

};

export default useRestrauntMenu;




