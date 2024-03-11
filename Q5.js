function checkDivisibilityBy3(number) {
    switch(number % 3) {
        case 0:
            console.log("Number is Divisible b 3");
            break;
            default:
                console.log("Number is Not divisible by 3");
    }
}
const inputNumber = 16;
checkDivisibilityBy3(inputNumber)