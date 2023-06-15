import React, { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Button } from "primereact/button";
import "./AdditemPage/AdditemPage.css";

import Wbread from "../assets/food/whitebread.jpg";
import Potatoe from "../assets/food/potatoes.jpg";
import Carrot from "../assets/food/carrot.jpg";
import Tomatoe from "../assets/food/tomatoe.jpg";
import Cabbage from "../assets/food/cabbage.jpg";
import Milk from "../assets/food/milk.jpg";
import Watermelon from "../assets/food/watermelon.jpg";
import Pear from "../assets/food/pear.jpg";
import Apple from "../assets/food/apple.jpg";

import Aubergine from "../assets/food/aubergine.jpg";
import Bagel from "../assets/food/bagel.jpg";
import Banana from "../assets/food/banana.jpg";
import Brocoli from "../assets/food/brocol.jpg";
import Bbread from "../assets/food/Brownbread.jpg";
import Grapes from "../assets/food/grapes (1).jpg";
import Lemon from "../assets/food/lemon.jpg";
import Lime from "../assets/food/lime.jpg";
import Cheese from "../assets/food/cheese.jpg";

import { Message } from "primereact/message";

/*
PLAN:
1. Create a page that will allow users to add items to their fridge, pantry or shopping lists
- This will be differentiated via a toggle button at the top of the page 
- The toggle button will have 3 options: Fridge, Pantry, Shopping List
2. Create a form that will allow users to add items to their fridge, pantry or shopping lists
-In the fridge and pantry, the form will allow the user to add the name of the item, the quantity, the expiry date, cost of item and it's associated image
-In the shopping list, the form will allow the user to add the name of the item, the quantity and it's associated image
3. Create a button that will allow users to submit the form
-All fields must be filled in before the user can submit the form
-Once the user submits the form, the item will be added to the fridge, pantry or shopping list
-For now, we will not be using a database to store the information, so the information will be stored in the local storage. E.g. as an array of objects.
*/

// Dummy data for the food images
const foodImages = [
  {
    className: "foodimage",
    src: Wbread,
    alt: "white-bread",
  },
  {
    className: "foodimage",
    src: Potatoe,
    alt: "potato",
  },
  {
    className: "foodimage",
    src: Carrot,
    alt: "carrot",
  },
  {
    className: "foodimage",
    src: Tomatoe,
    alt: "tomato",
  },
  {
    className: "foodimage",
    src: Cabbage,
    alt: "cabbage",
  },
  {
    className: "foodimage",
    src: Milk,
    alt: "milk",
  },
  {
    className: "foodimage",
    src: Watermelon,
    alt: "watermelon",
  },
  {
    className: "foodimage",
    src: Pear,
    alt: "pear",
  },
  {
    className: "foodimage",
    src: Apple,
    alt: "apple",
  },
  {
    className: "foodimage",
    src: Aubergine,
    alt: "aubergine",
  },
  {
    className: "foodimage",
    src: Bagel,
    alt: "bagel",
  },
  {
    className: "foodimage",
    src: Banana,
    alt: "banana",
  },
  {
    className: "foodimage",
    src: Brocoli,
    alt: "broccoli",
  },
  {
    className: "foodimage",
    src: Bbread,
    alt: "brown-bread",
  },
  {
    className: "foodimage",
    src: Grapes,
    alt: "grapes",
  },
  {
    className: "foodimage",
    src: Lemon,
    alt: "lemon",
  },
  {
    className: "foodimage",
    src: Lime,
    alt: "lime",
  },
  {
    className: "foodimage",
    src: Cheese,
    alt: "cheese",
  },
];

function Additem() {
  // This state will store the search term
  const [searchTerm, setsearchTerm] = useState("");
  // This state will store the selected food name
  const [selectedFoodName, setSelectedFoodName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);

  // This state will store the chosen list from the button choice of either fridge, pantry or shopping 
  const [chosenList, setChosenList] = useState("pantry");

  // This function capitalises the first letter of each word in the search term
  const capitalizeWords = (input) => {
    return input
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };

  // This function handles the change in the search term
  const handleChange = (event) => {
    // This edits the search term to capitalises the first letter of each word in the search term
    const editedSearchTerm = capitalizeWords(event.target.value);
    console.log(editedSearchTerm);
    setsearchTerm(editedSearchTerm);
  };

  // This filters the food images based on the search term
  // It removes all special characters and spaces from the search term and the alt text of the images
  const filteredImages = foodImages.filter((image) =>
    image.alt
      .replace(/[^a-zA-Z]/g, "")
      .toLowerCase()
      .includes(searchTerm.replace(/[^a-zA-Z]/g, "").toLowerCase())
  );

  // This function handles the click of the food image
  const handleImageClick = (event) => {
    event.preventDefault();
    // This sets the selected image to the image that was clicked
    setSelectedImage(event.target.src);
    setSelectedFoodName(
      capitalizeWords(event.target.alt.replace(/[^a-zA-Z]/g, " ").toLowerCase())
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);

    if (selectedImage === null) {
      setError("Please select an image");
      return;
    }

    let foodItemArray = JSON.parse(localStorage.getItem("foodItemArray"));

    // Check if the foodItemArray exists in local storage and if it doesn't, create it
    if (!foodItemArray) {
      foodItemArray = [];
    }

    // This will add the form values to the foodItemArray and store it in local storage and clear the form
    const foodItem = {
      name: selectedFoodName,
      image: selectedImage,
      quantity: event.target["item-quantity"].value,
      expiryDate: event.target["item-expiry"].value,
      cost: event.target["item-cost"].value,
    };

    foodItemArray.push(foodItem);
    // This will store the foodItemArray in local storage
    localStorage.setItem("foodItemArray", JSON.stringify(foodItemArray));
    event.target.reset();
    setSelectedImage(null);
    console.log(foodItemArray);
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();

    // Ensure month and day are in two-digit format
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }

    return `${year}-${month}-${day}`;
  };

 

  /* PLAN
  1. Create onClick when clicking the 3 buttons
     - Shopping button will not show the expiry date and cost then store it into a shoppingArray
     - Fridge and Pantry will show the expiry date then store it into a fridgeArray and pantryArray 
  
  2. Create a function that will store the form values into an array
      - Create an array for each button
      - Create a function that will store the form values into an array
      - Create a function that will store the array into local storage
   */


  return (
    <div className="add-item-container">
      <div className="add-item-form-container">
            <h1 className="page-title">Add Item</h1>
        <form className="add-item-form" onSubmit={handleSubmit}>
          <div className="button-list-container">
            <Button id="pantry-button" label="Pantry" />
            <Button id="fridge-button" label="Fridge" />
            <Button id="shopping-button" label="Shopping"/>
          </div>
          <div className="add-item-form-input">
            <label htmlFor="item-name"></label>
            <input
              onChange={handleChange}
              type="text"
              id="item-name"
              name="item-name"
              placeholder="Search for an item"
              required
            />
          </div>
          <div className="foodContainer">
            <div className="foodItemContainer add-item-form-input">
              {filteredImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  // This adds the selected class to the image that was clicked
                  // This will allow us to style the selected image differently
                  className={`foodimage ${
                    selectedImage === image.src ? "selected" : ""
                  }`}
                  onClick={handleImageClick}
                />
              ))}
            </div>
          </div>

          {error && <Message severity="error" text={error} />}

          <div className="add-item-form-input">
            <label htmlFor="item-quantity">Quantity</label>
            <input
              type="number"
              id="item-quantity"
              name="item-quantity"
              min="1"
              required
            />
          </div>
        
          <div className="add-item-form-input">
            <label htmlFor="item-expiry">Expiry Date</label>
            <input
              type="date"
              id="item-expiry"
              name="item-expiry"
              min={getCurrentDate()}
              required
            />
          </div>
          <div className="add-item-form-input">
            <label htmlFor="item-cost">Cost (£)</label>
            <input
              type="number"
              step="0.01"
              min="0"
              id="item-cost"
              name="item-cost"
              required
            />
          </div>

          <div className="add-item-form-input">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              value={SubmitEvent}
            >
              Add Item
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Additem;

/* 
import React, { useState } from 'react';

const MyComponent = () => {
  const [formVisible, setFormVisible] = useState(true);

  const handleShoppingClick = (event) => {
    event.preventDefault();
    setFormVisible(false);
  };

  return (
    <div>
      {formVisible && (
        <form className="hide-form">
          
          </form>
          )}
          <button onClick={handleShoppingClick}>Hide Form</button>
        </div>
      );
    };
    
    export default MyComponent;
    */
