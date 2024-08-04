// 5.Program to swap two numbers without using the third variable

function swapNumbers(a, b) {
    console.log(`Before Swap: a = ${a}, b = ${b}`);

    a = a + b; 
    b = a - b; 
    a = a - b; 

    console.log(`After Swap: a = ${a}, b = ${b}`);
}

// Input
let x = 5;
let y = 10;
swapNumbers(x, y);
