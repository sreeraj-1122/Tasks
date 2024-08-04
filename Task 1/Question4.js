// 4.program to print the sum of digits

function sumOfDigits(n) {
    // Convert the number to a string 
    const digits = n.toString().split('');
    let sum = 0;
    for (let digit of digits) {
        sum += parseInt(digit);
    }
    return sum;
}
//input

const n = 123456

const result = sumOfDigits(n);
console.log(`The sum of the digits of ${n} is ${result}.`);
