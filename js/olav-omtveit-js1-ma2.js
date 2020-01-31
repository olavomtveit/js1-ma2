//Question 1
//----------
const myFunctionExpression = function () {
    console.log("Olav");
}
myFunctionExpression();

//Question 2
//----------
document.querySelector(".btn").addEventListener("click", callAfterButtonClick);

function callAfterButtonClick() {
    console.log("I was clicked!")
}

//Question 3
//----------
document.querySelector("#firstName").addEventListener("keydown", callAfterTextInput);

function callAfterTextInput() {
    console.log("value: ", event.target.value);
}

//Question 4
//----------

/* const onHover = document.querySelector("button"); */
const onHover = document.querySelectorAll("button")[1];
onHover.addEventListener("mouseover", callOnHover);

function callOnHover() {
    onHover.classList.add("hover");
    console.log("hovering");
}

//Question 5
//----------
const onHoverRemove = document.querySelector("[data-animal=dog]");
onHoverRemove.addEventListener("mouseout", callOnHoverRemove);

function callOnHoverRemove(){
    onHoverRemove.classList.remove("hover");
    console.log("removed");
}

//Question 6
//----------

const animalTypes = document.querySelectorAll("li");

for (let i = 0; i < animalTypes.length; i++){
    animalTypes[i].addEventListener("mouseover", animalOnHover);
}

function animalOnHover(liHover){
    console.log(liHover.target.dataset.animal);
}

//Question 7
//----------
const animal = "";

switch(animal){
    case "cat": 
        console.log("Meow");
        break;

    case "cow":
        console.log("Moo");
        break;

    case "bird":
        console.log("Tweet");
        break;

    default:
        console.log("Harrumph");
}

//Question 8
//----------
const sheep = ["Malcolm", "Anders", "Marie"];

for (let i = 0; i < sheep.length; i++) {
    console.log(sheep[i]);
}

sheep.forEach(function (sheeps) {
    console.log(sheeps);
});

//Question 9
//----------
let counter = 1;
const intervalID = setInterval(logTime, 500);

function logTime(){
    console.log("hello");
    if (counter >= 6){
        clearInterval(intervalID);
    }
    counter++;
}

//Question 10
//-----------
const timeOut = document.querySelector("div");

function updateTimedText() {
    timeOut.innerHTML = "Text updated"
}
setTimeout(updateTimedText, 2000);