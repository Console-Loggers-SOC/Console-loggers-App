import React from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import Wbread from "../assets/food/whitebread.jpg";
import Potatoe from "../assets/food/potatoes.jpg";
import Carrot from "../assets/food/carrot.jpg";
import Tomatoe from "../assets/food/tomatoe.jpg";
import Cabbage from "../assets/food/cabbage.jpg";
import Milk from "../assets/food/milk.jpg";
import Watermelon from "../assets/food/watermelon.jpg";
import Pear from "../assets/food/pear.jpg";
import Apple from "../assets/food/apple.jpg";

// import Aubergine from "../assets/food/aubergine.jpg";
// import Bagel from "../assets/food/bagel.jpg";
// import Banana from "../assets/food/banana.jpg";
// import Brocoli from "../assets/food/brocol.jpg";
// import Bbread from "../assets/food/Brownbread.jpg";
// import Grapes from "../assets/food/grapes (1).jpg";
// import Lemon from "../assets/food/lemon.jpg";
// import Lime from "../assets/food/lime.jpg";
// import Cheese from "../assets/food/cheese.jpg";
function Additem() {
  return (
    <div className="foodContainer">
      <div className="foodItemContainer">
        <img className="foodimage" src={Wbread} />
        <img className="foodimage" src={Potatoe} />
        <img className="foodimage" src={Carrot} />
        <img className="foodimage" src={Tomatoe} />
        <img className="foodimage" src={Cabbage} />
        <img className="foodimage" src={Milk} />
        <img className="foodimage" src={Watermelon} />
        <img className="foodimage" src={Pear} />
        <img className="foodimage" src={Apple} />
        {/* <img className="foodimage" src={Aubergine} />
          <img className="foodimage" src={Bagel} />
          <img className="foodimage" src={Banana} />
          <img className="foodimage" src={Brocoli} />
          <img className="foodimage" src={Bbread} />
          <img className="foodimage" src={Grapes} />
          <img className="foodimage" src={Lemon} />
          <img className="foodimage" src={Lime} />
          <img className="foodimage" src={Cheese} /> */}

        {/* <h1>the from element</h1> */}
      </div>
    </div>
  );
}

export default Additem;
