// 3. Write a JavaScript function that returns the Fibonacci sequence up to a
// given number of terms.

function fibonacciSequence(terms) {
    if (terms <= 0) return [];
    if (terms === 1) return [0];
    if (terms === 2) return [0, 1];

    const sequence = [0, 1];

    for (let i = 2; i < terms; i++) {
        const nextTerm = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextTerm);
    }

    return sequence;
}

// input
console.log(fibonacciSequence(5));  // [0, 1, 1, 2, 3]
console.log(fibonacciSequence(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacciSequence(1));  // [0]
console.log(fibonacciSequence(0));  // []
