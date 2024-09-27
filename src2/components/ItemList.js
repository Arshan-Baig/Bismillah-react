import { CDN_URL } from "../../utils/contants";

const ItemList = ({ Items }) => {

    

  return (
    <div>
      {Items &&
        Items.length > 0 &&
        Items.map((item) => (
          <div
            key={item.card.info.id}
            className="m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card.info.name} </span>
                <span>
                  - ₹{" "}
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>

              <p className="font-normal text-xs text-black-500 opacity-50">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-3/12 p-4 rounded-lg items-center">
              
           <div className="absolute">   

           <button className="p-2 mx-14 my-31 bg-black text-white shadow-lg rounded-lg"> Add + </button>

           </div>


              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full rounded-lg shadow-sm"
              ></img>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ItemList;
