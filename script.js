const user = {
    name: "Artin",
    age: 14,
    goal: "Full-Stack Developer",
    isLearning: true,
    skills: ["HTML", "CSS", "JavaScript"]
};

// Object
console.log(user.goal);
console.log(user.skills);

// Conditions
if (user.isLearning) {
    console.log("I am learning Full-Stack Development!");
} else {
    console.log("I am not learning right now");
}

if (user.age === 14) {
    console.log("I am 14 years old");
} else {
    console.log("My age is different");
}

if (user.age >= 13 && user.isLearning) {
    console.log("I am ready to become a Developer!");
}

// Function
function introduce(name, goal) {
    console.log(`Hi, my name is ${name} and I want to become a ${goal}!`);
}

introduce(user.name, user.goal);

// Function + return
function multiply(a, b) {
    return a * b;
}

const result = multiply(5, 4);
console.log(result);

// Array
console.log(user.skills.length);

user.skills.push("Python");

console.log(user.skills.length);
console.log(user.skills);

// forEach
user.skills.forEach(function(skill) {
    console.log(`My skill is ${skill}`);
});

// DOM
const title = document.getElementById("title");
const button = document.getElementById("myButton");

// Change text
title.textContent = "I am becoming a Full-Stack Developer!";

//
let isStyled = false;

// Button click
button.addEventListener("click", function() {
    title.style.fontFamily = "Arial";
    title.style.color = "lime"
});
