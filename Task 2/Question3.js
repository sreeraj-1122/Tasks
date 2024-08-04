// 3.Write a function to check if a given string is a palindrome without using built-in functions.

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    
    return true;
  }
  
  // input:
  const string = "malayalam";  //malayalam is a palindrome string
  const result = isPalindrome(string); 
  if (result) {
    console.log(`${string} is a palindrome string`);
  }else{
    console.log(`${string} is not a palindrome string`);
  }
  