/* 
   Filename: ComplexProgram.js
   
   Description: This complex program calculates the sum of prime numbers in a given range. It uses various advanced algorithms and functions to optimize the process. The program also includes detailed comments for better understanding.
*/

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  
  // Check if divisible by any number from 2 to square root of num
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Function to calculate the sum of prime numbers in a given range
function sumOfPrimesInRange(start, end) {
  let sum = 0;

  // Loop through each number in the range
  for (let i = start; i <= end; i++) {
    // Check if the number is prime
    if (isPrime(i)) {
      sum += i; // Add prime number to the sum
    }
  }
  
  return sum;
}

// Main program
function main() {
  const rangeStart = 1;
  const rangeEnd = 1000;
  
  // Calculate the sum of prime numbers within the range
  const sum = sumOfPrimesInRange(rangeStart, rangeEnd);
  
  // Output the result
  console.log(`The sum of prime numbers from ${rangeStart} to ${rangeEnd} is ${sum}.`);
}

// Execute the main program
main();