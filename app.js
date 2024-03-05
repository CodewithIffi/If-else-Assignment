// question No: 01

function checkDivisibilityBy3(number) {
    if (number % 3 === 0) {
        console.log("The number is divisible by 3.");
    } else {
        console.log("The number is not divisible by 3.");
    }
}
let inputNumber = prompt("Enter a number:");
inputNumber = parseInt(inputNumber);

if (isNaN(inputNumber)) {
    console.log("Invalid input. Please enter a valid integer.");
} else {
    checkDivisibilityBy3(inputNumber);
}



































// let age = 20;

// if (age > 20) {
//     console.log("Old enough");
// } else {
//     console.log("Too young");
// }