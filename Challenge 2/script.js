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

    let leftFirst = fridge.leftDoor.firstShelf;
    let leftSecond = fridge.leftDoor.secondShelf;
    let leftThird = fridge.leftDoor.thirdShelf;

    let centerFirst = fridge.centerDoor.firstShelf;
    let centerSecond = fridge.centerDoor.secondShelf;
    let centerThird = fridge.centerDoor.thirdShelf;

    let rightFirst = fridge.rightDoor.firstShelf;
    let rightSecond = fridge.rightDoor.secondShelf;
    let rightThird = fridge.rightDoor.thirdShelf;
    //Check on left Door
    if (foodValue && foodName == leftFirst) {
      document.querySelector(
        ".foodLocation"
      ).textContent = `The ${foodName} is in the left side of the fridge on the first shelf`;
    } else if (foodValue && foodName == leftSecond) {
      document.querySelector(
        ".foodLocation"
      ).textContent = `The ${foodName} is in the left side of the fridge on the second shelf`;
    } else if (foodValue && foodName == leftThird) {
      document.querySelector(
        ".foodLocation"
      ).textContent = `The ${foodName} is in the left side of the fridge on the third shelf`;
    }
    //Check on center door
    else if (foodValue && foodName == centerFirst) {
      document.querySelector(
        ".foodLocation"
      ).textContent = `The ${foodName} is in the center side of the fridge on the first shelf`;
    } else if (foodValue && foodName == centerSecond) {
      document.querySelector(
        ".foodLocation"
      ).textContent = `The ${foodName} is in the center side of the fridge on the second shelf`;
    } else if (foodValue && foodName == centerThird) {
      document.querySelector(
        ".foodLocation"
      ).textContent = `The ${foodName} is in the center side of the fridge on the third shelf`;
    }

    //Check on right door
    else if (foodValue && foodName == rightFirst) {
      document.querySelector(
        ".foodLocation"
      ).textContent = `The ${foodName} is in the right side of the fridge on the first shelf`;
    } else if (foodValue && foodName == rightSecond) {
      document.querySelector(
        ".foodLocation"
      ).textContent = `The ${foodName} is in the right side of the fridge on the second shelf`;
    } else if (foodValue && foodName == rightThird) {
      document.querySelector(
        ".foodLocation"
      ).textContent = `The ${foodName} is in the right side of the fridge on the third shelf`;
    } else {
      document.querySelector(".foodLocation").textContent =
        "This item is not in your fridge ☹️";
    }

    //This code could probably be refactored, not very DRY but functional.
  };

  document.querySelector(".find").addEventListener("click", function () {
    findMyFood(document.querySelector(".food").value);
  });
});
