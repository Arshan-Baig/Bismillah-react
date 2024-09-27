import { CDN_URL } from "../../utils/contants";


const RestuarentCard= (props) => {
    const { resData } = props;
  
    const { 
  
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
      id,
  
  
    } = resData?.info;
  
    return (
      <div className="res-card m-4 p-4 w-[250px] rounded-md shadow-md bg bg-green-100 hover:bg-green-200 hover:bg-fixed">
           <img
          className="res-logo1 rounded-lg shadow-md"
          alt="res-logo"
          src={CDN_URL +
            cloudinaryImageId
          }
        />
       
       
            <h3 className="font-bold py-2 text-lg">Name: {name}</h3>
            <h4>ID: {id}</h4>
            <h4>Name: {cuisines.join(", ")}</h4>
            <h4>Stars: {avgRating}</h4>
            <h4>costForTwo: {costForTwo}</h4>
            <h4>Delivery Time: {deliveryTime} minutes</h4>
       
  
  
  
      </div>
    );
  };

  export const NamedOpenRestuarent =(RestuarentCard)=>
  {
return(props)=>{

  return(
    <div>
      <label className="absolute m-2 p-2 bg-black text-white shadow-md rounded-md">Open Now</label>
    
    <RestuarentCard {...props}/>
    
    </div>



  );

}

    
  }

  export default RestuarentCard;