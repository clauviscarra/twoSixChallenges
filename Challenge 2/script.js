"use strict";
let foodName;
let foodLocation;
const fridge = {
  leftDoor: {
    firstShelf: "cellery",
    secondShelf: "",
    thirdShelf: "strawberries",
  },
  centerDoor: {
    firstShelf: "beef",
    secondShelf: "salmon",
    thirdShelf: "",
  },
  rightDoor: {
    firstShelf: "milk",
    secondShelf: "cheese",
    thirdShelf: "",
  },
};

const foodInFridge = [
  "cellery",
  "strawberries",
  "beef",
  "salmon",
  "milk",
  "cheese",
];

document.addEventListener("DOMContentLoaded", () => {
  const findMyFood = function (food) {
    // foodName = document.querySelector(".food").value;
    foodName = food;

    let foodValue = foodInFridge.indexOf(foodName) > -1;

    if (foodValue) {
      document.querySelector(".foodLocation").textContent = "your food exists";
    } else {
      console.log("not found in fridge :(");
    }

    //1. If my food exists in the foodInFridge Array, initiate function

    //2. Check if in leftDoor, centerDoor or rightDoor

    //3. If food is not in the foodInFridge Array, send "Food item not in fridge" message

    console.log(fridge.leftDoor);
  };

  document.querySelector(".find").addEventListener("click", function () {
    findMyFood(document.querySelector(".food").value);
  });
});
