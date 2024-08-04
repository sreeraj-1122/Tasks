// 2.Write an algorithm,flowchart and program  to check whether the given number is  prime .

function isPrime(n) {
    if (n <= 1) 
        return false; 
    if (n === 2) 
        return true; 
  
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
  
    return true; 
  }
  
  //Input

    let n=3; //3 is a prime number
    // let n=10; //10 is a prime number
  
  
  if (isPrime(n)) {
    console.log(`${n} is a Prime number.`);
  } else {
    console.log(`${n} is Not a Prime number.`);
  }

  // algorithm


// step 1: Start
// step 2: Input the number (n)
// step 3: If n <= 1, print "Not Prime" and exit
// step 4: For i from 2 to the square root of n (inclusive):
//              If n is divisible by i (n % i == 0), print "Not Prime" and exit
// step 5: If no divisors were found, print "Prime"
// step 6: Stop