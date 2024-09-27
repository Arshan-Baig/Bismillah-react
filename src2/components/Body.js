import RestuarentCard ,{NamedOpenRestuarent} from "./RestuarentCard";
import { useState ,useEffect} from "react";
import shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {

    const [listOfRestuarent ,setListOfReestuarent]=useState([]);
    const [listOfRestuarentfilterd ,setListOfReestuarentfilterd]=useState([]);

    const [searchText ,setSearchText] = useState("")

    const IsOpenRestuarent = NamedOpenRestuarent(RestuarentCard);

   //console.log("Body Render",listOfRestuarent)

    useEffect(() =>{

fechtData();

    },[]);

    const fechtData = async () => {

const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

);
const json = await data.json();

setListOfReestuarent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
setListOfReestuarentfilterd(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


const onlinestatus = useOnlineStatus();

if(onlinestatus===false)
  return( 
  <h1>you are offline</h1>
);

//console(listOfRestuarent)


    //conditional rendenring
   // if (listOfRestuarent.length === 0) {
    //    return 
    //  }


    return listOfRestuarentfilterd.length === 0 ?(

        <h1>PAGE IS LOADING WAIT FOR WHILE</h1>
    ) : (
        
      <div className="body">
        <div className="filter flex">

            <div className="Search m-4 p-4">
          <input type="text" className="border border-decoration-solid border-black rounded-md shadow-sm px-0.5 m-1" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
        
          }}/>  
      <button className="px-2 py-0.5 bg bg-gray-300 rounded-md"
      
      onClick={()=>{
 
   const  filteredResturents = listOfRestuarent.filter((res)=>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())

 );

 setListOfReestuarentfilterd(filteredResturents)

      }

      }>Search</button><br/>
            </div>
<div className="Search m -1 p-2 flex items-center focus:ring-blue-300">

<button className="filter-btn px-2 py-2 bg bg-gray-300 rounded-full shadow-md" 


onClick={()=>{

    filteredList = listOfRestuarent.filter(

        (res) => res.info.avgRating > 4.1
    );
    setListOfReestuarentfilterd(filteredList);
}}


>Top Rated Restaurant</button>



</div>
        </div>
        <div className="flex flex-wrap justify-evenly">
          { listOfRestuarentfilterd.map((restuarent)=>(
         <Link key={restuarent.info.id} 
         to = {"/Restuarents/" + restuarent.info.id}
         > 
          
         {
         
         restuarent.info.isOpen ? (
        <IsOpenRestuarent resData={restuarent}/>
         ):<RestuarentCard  resData={restuarent}/>

         } 

          
          
          
          
          </Link> 
         ))}
          
         
        </div>
      </div>
    );
  };
  

  export default Body;