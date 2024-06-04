import { useContext } from "react";

import { StoreContext } from "../../context/StoreContext";

import "./foodDisplay.scss";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {})}
      </div>
    </div>
  );
};

export default FoodDisplay;
