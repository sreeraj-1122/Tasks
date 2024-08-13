/*3.Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.*/ 

function removeKdigits(num, k) {
    let stack = [];
    
    for (let digit of num) {
        while (k > 0 && stack.length && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }
    
    while (k > 0) {
        stack.pop();
        k--;
    }
    
    let result = stack.join('').replace(/^0+/, '');
    
    return result === '' ? '0' : result;
}

console.log(removeKdigits("1432219", 3));
console.log(removeKdigits("10200", 1)); 
console.log(removeKdigits("10", 2)); 