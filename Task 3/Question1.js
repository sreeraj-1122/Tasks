// 1. Write a function to check whether a given number is a palindrome or
// not. [Do not convert number to string]

function isPalindrome(number) {
  if (number < 0) return false;

  let reversedNum = 0;
  let originalNum = number;

  while (number > 0) {
      let remainder = number % 10;
      reversedNum = reversedNum * 10 + remainder;
      number = Math.floor(number / 10);
  }

  return originalNum === reversedNum;
}

// input
console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false
console.log(isPalindrome(1221)); // true
console.log(isPalindrome(-121)); // false
