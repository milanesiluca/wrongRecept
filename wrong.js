//step 1. The logo text of the site has the wrong color. Change it to the correct one.
document.querySelector(".logo-text").style.color = "rgb(56, 66, 65)";

//step 2. The alignment of the elements inside the header element are wrong. Change it to the correct one
const elementHeader = document.getElementsByTagName("header");



//step 3. The header has a border at the bottom, but it has the wrong color. Change it do the correct one.
elementHeader[0].style.borderBottom = "1px solid lightgray";

//step 4. The recipe name is wrong, change it to the correct one.
const recipetName = document.querySelector("#recipe-name");
recipetName.innerText = "Frozen Cheescake";

//step 5. The clock icon beneath the recipe name has disappeared and been replaced by a text instead. This can be fixed by adding a class to that element.
const timerElement = document.querySelector(".time-container");
const timerElementChildren = timerElement.children;
const spamToClass = timerElementChildren[0];
spamToClass.classList.add("material-icons");

// step 6. The estimated time of the recipe is also incorrect. Change it to the correct time estimation
const wrongTime = document.querySelector(".time");
wrongTime.innerText = "60+ min";

// step 7. The src path to the image is wrong, or atleast it's showing the wrong image. Change it to the correct one. The available images can be found in the assets folder.
const imageContainer = document.querySelector(".image-container");
const wrongImage = imageContainer.children[0];
wrongImage.setAttribute("src", "assets/frozen-cheesecake-slice.jpg");

// step 8. The background color of the ingredients list container is wrong. Fix it.
const ingredientsContainer = document.querySelector(".ingredients-container");
ingredientsContainer.style.backgroundColor = "#F9F9F9";

// step 9. The ingredients are divided in to two parts, one for the bottom and one for the paste. In the list of the ingredients to the bottom, there is a text instead of two list items. Remove the text and add those two list items
const bottomIngredientList = document.querySelector(".ingredients-list-bottom");
bottomIngredientList.innerHTML = "";
const ingredientOne = document.createElement("li");
ingredientOne.innerText = "15st digistivetex";
bottomIngredientList.appendChild(ingredientOne);
const ingredientTwo = document.createElement("li");
ingredientTwo.innerText = "Lite smör";
bottomIngredientList.appendChild(ingredientTwo);


//step 10. The third ingredient in the list of ingredients to the paste is wrong. Change that specific ingredient to the correct one
const creamIngredientsList = document.querySelector(".ingredients-list-paste");
const wrongIngredient = creamIngredientsList.children[2];
const rightIngredient = document.createElement("li");
rightIngredient.innerText =  "3dl vispgrädde";
creamIngredientsList.replaceChild(rightIngredient, wrongIngredient);

//step 11. There is also a missing ingredient in the list of ingredients to the paste. Look and see what it is and add that one the the end of the list.
const lastCreamIngredient = "<li>400g naturell philadelphiaost</li>"
creamIngredientsList.insertAdjacentHTML("beforeend", lastCreamIngredient);

//step 12. The text "Instructions" to the left, beneath the image, has some shadow styling applied to it. Remove that styling.
const instructionTitleContainer = document.querySelector(".shadow");
instructionTitleContainer.classList.remove("shadow")

//step 13. Two list elements of the list of instructions are incorrect. Find them and change them to the correct ones.
const instructionListContainer = document.querySelector(".instructions-list");
const instructionList = instructionListContainer.children;

instructionList[1].innerText = "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke";
instructionList[8].innerText = "Ställ in i frysen över natten."





