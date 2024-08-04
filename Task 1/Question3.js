// 3.Write an algorithm,flowchart and program  to check whether the given number is armstrong or not.


function isArmstrongNumber(n) {
    // Convert the number to a string 
    const digits = n.toString().split('');
    const numberOfDigits = digits.length;
    let sum = 0;

    // Calculate the sum of the powers of each digit
    for (let digit of digits) {
        sum += Math.pow(parseInt(digit), numberOfDigits);
    }

    // Check if the sum is equal to the original number
    return sum === n;
}

//input

const n = 153; // is a amstrong number

if (isArmstrongNumber(n)) {
    console.log(`${n} is an Armstrong number.`);
} else {
    console.log(`${n} is not an Armstrong number.`);
}


//Algorithm

// Step 1: Start
// Step 2: Read the number(n)
// Step 3: Convert n to string to find the number of digits
// Step 4: Initialize sum to 0
// Step 5: For each digit in n:
//             Calculate the sum of the powers of each digit 
// Step 6: If sum equals n, print "Armstrong Number"
// Step 7: Else, print "Not an Armstrong Number"
// Step 8: End