//4.Write a function that takes an array of numbers and returns the sum of all elements without using the reduce method.


function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  
  // input:
  const numbers = [1, 2, 3, 4, 5];
  const sum = sumArray(numbers);
  console.log(sum); // Outputs: 15
  