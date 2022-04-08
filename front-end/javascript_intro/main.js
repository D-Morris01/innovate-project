//single line comment

/*
Multi -line
comment
*/

console.log("hello world");  

//! DATA TYPES

let datatype = "this is a string"; //string data type

dataType = 1234; // Integer data type

dataType = 12.34; // float data type

dataType = true; // boolean data type

//! VARIABLES

var myfirstName = "Davenna"; // 'var' is used for legacy code

const mySurname = "Morris"; // 'const' cannot be updated

let myJob = 'Unemployed';

myJob = "Full Stack Developer"; // 'let' can be udated

console.log(myJob);

//! IF STATEMENTS

IF (myJob === "Full Stack Developer") {
    console.log("Davenna works as a freelancer");
} else if (myJob === "Unemployed") {
    console.log ("Davenna works as a Stay at Home Mum")
} else{
    console.log ("Davenna has a new job");
}

if (myFirtName === "Jordan" && mySurname === "Darlington") {
    console.log ("His name is 'Jordan Darlington'");
} else {
    console.log("Idont know his name");
}

if (myJob === "full Stack Developer" || myJob === "Unemployed"){
    console.log("Davenna accomplish");
} else {
    console.log("Davenna doesn't accomplish");
}

//! FUNCTIONS

function myFunction(){
    console.log("This is a JavaScript function");
}
myFunction()

//! STRING INTERPOLATION

console.log(`Her name is ${myFirtName} ${mySurname}.`)

//! ARRAAYS

let innovateInstructors = ["Jordan", "Katy"];

console.log(innovateInstructors);
console.log(innovateInstructors[1]);

//! LOOPS

let text ="";

for (let i=0; 1 < 5; 1++) {
    text += "the number is"+ 1 + " ";
} console.log(text);


let i = 1;

while (1 < 5){
    text += "the number is" + 1;
    i++;
} console.log(text);

//! SWITCH STATEMENTS

let fruit = "apple"
switch (fruit) {
    case "grapes":
        console.log ("grapes");
        break;
    case "orange":
        console.log("orange");
        break;
    case "apple":
        console.log("apple!");
        break; 
    default:
        console.log("I don't like that fruit.")
    }

//! ARROW FUNCTIONS

hello = () => {
    console.log("Hello World");
}
hello()