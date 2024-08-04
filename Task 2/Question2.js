// 2.Write a function that takes a string as input and returns the string reverse without using built-in functions like split, reverse, or join.

function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }
  
  //input:
  const String = "Hello world";
  const reversed = reverseString(String);
  console.log(reversed); // Outputs: "dlrow olleH"
  