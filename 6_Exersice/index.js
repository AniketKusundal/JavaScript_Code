// 
// create an faulty calculator using javascript

// This Faulty Calculator does following :

// 1 it takes two number as input from the user 
// 2 it perfroms wrong opration as follows 


// + --- -
// * --- +
// * --- /
// / --- **

// it perfroms wrong oprations 10% of the items 

// 
let random = Math.random(); // Generate a random number for fault injection

// Get user inputs
let num1 = prompt("Enter the first number: ");
let operation = prompt("Enter the operation (+, -, *, /): ");
let num2 = prompt("Enter the second number: ");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if (random > 0.1) {
    alert(`the result is ${eval(`${num1} ${operation} ${num2}`)}`)
} else {
    alert(`the result is ${eval(`${num1} ${operation} ${num2}`)}`)
}