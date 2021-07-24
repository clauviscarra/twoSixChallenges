"use strict";
let foodName;
const fridge = {
  leftDoor: {
    firstShelf: "cellery",
    secondShelf: "",
    thirdShelf: "strawberries",
  },
  centerDoor: {
    firstShelf: "beef",
    secondShelf: "salmon",
    centerDoorBottom: "",
  },
  rightDoor: {
    firstShelf: "milk",
    secondShelf: "cheese",
    thirdShelf: "",
  },
};

const foodInFridge = [cellery, strawberries, beef, salmon, milk, cheese];

const findMyFood = function (food) {
  foodName = document.querySelector(".food").value;

  //1. If my food exists in the foodInFridge Array, initiate function
  //2. Check if in leftDoor, centerDoor or rightDoor
  //3. If food is not in the foodInFridge Array, send "Food item not in fridge" message

  console.log(fridge.leftDoor.firstShelf);
};

findMyFood();
