const name="Artin";
const age=14;
const isLearning=true;

if (isLearning) {
    console.log("I am Learning Full-Stack Development!")
}else {
    console.log(" I am not Learning right now")
}

if (age === 14) {
    console.log("I am 14 years old")    
}else {
    console.log("My age is different")
}

if (age >= 13 && isLearning) {
    console.log("I am ready to become a Developer!")
}

function introduce(name, goal){
    console.log(`Hi, my name is ${name} and I want to become a ${goal}!`)
}

function multiply(a, b) {
    return a*b
}

const result=multiply(5, 4);
console.log(result)

introduce("Artin", "Full-Stack Developer")

const skills=["HTML","CSS","JavaScript"];

console.log(skills)

console.log(name,age,isLearning);
