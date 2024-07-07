// step 1: What is the name of the recipe?
const correctLogoTxt = document.querySelector(".logo-text");
console.log(correctLogoTxt);
//const titleStyle = window.getComputedStyle(correctLogoTxt);
//console.log(titleStyle.color);

// step 2:  What HTML tag is used to display the Recipe name?
// HTML tag <p></p>

// step 3. What is the font size of the paragraph tag with the class _"description"_.
 const description = document.querySelector(".description");
 const descStyle = window.getComputedStyle(description);
 console.log(descStyle.fontSize);
 
// step 4. What is the value of the `alt` atrribute on the image?
const imageContainer = document.querySelector(".image-container");
const imgList = imageContainer.children
const img = imgList[0];
console.log(img.getAttribute("alt")); 

// step 5. What is the dimensions and the url of the image?
const imgStyle = window.getComputedStyle(img);
const imgWidth = imgStyle.width;
const imgHeight = imgStyle.height;
const imgUrl = img.getAttribute("src");

var imgAttributes = {
    url: imgUrl,
    height: imgHeight,
    width: imgWidth
};

console.log(imgAttributes);

// step 6. How many ingredients has the paste?
const ingredientsListBottom = document.querySelector(".ingredients-list-bottom");
const bottomListChilder = ingredientsListBottom.children;
const ingredientsListCream = document.querySelector(".ingredients-list-paste");
const creamListChildren = ingredientsListCream.children;
const totalIngredients = bottomListChilder.length + creamListChildren.length;
console.log("total ingredients: " + totalIngredients);

// step 7. Which is the forth element in the list containing the ingredients for the paste?
console.log(creamListChildren[3].innerText); 


// step 8. Create an an array of objects from the instructions.
const instructions = document.querySelector(".instructions-list");
const instructionList = instructions.children;
const arrayIstruction = new Array();
var i = 0;
for (let instruction of instructionList){
    i++;
    const arrayElement = {
        order: i,
        text: instruction.innerText
    }
    arrayIstruction.push(arrayElement);
}

console.log(arrayIstruction);


