// 1.Write a function that returns the length of a given string without
// using the length property.

function getStringLength(str) {
    let count = 0;
    while (str[count] !== undefined) {
      count++;
    }
    return count;
  }
  
  // input:
  const String = "Hello world";
  const length = getStringLength(String);
  console.log(length); // Outputs: 11
  