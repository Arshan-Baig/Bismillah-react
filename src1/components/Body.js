const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          { resList.map((restuarent)=>(<RestuarentCard key={restuarent.info.id} resData={restuarent}/>))}
          
         
        </div>
      </div>
    );
  };

  export default Body;