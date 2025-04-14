import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import Fooditems from "../Fooditems/Fooditems";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // If food_list is undefined or empty, we safely handle it
  if (!food_list || food_list.length === 0) {
    return (
      <div className="food-display" id="food-display">
        <h2>Top dishes near you</h2>
        <p>Loading food items...</p>
      </div>
    );
  }

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list
          .filter((item) => category === "All" || category === item.category)
          .map((item, index) => (
            <Fooditems
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;



