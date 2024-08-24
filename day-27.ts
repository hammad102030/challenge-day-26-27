// Day 27

// ### Question 1: Count the Number of Divisors
// *Description:*
// Write a TypeScript function that takes a positive integer as input and returns the number of its divisors (factors). A divisor is a number that divides the input number without leaving a remainder.

// *Example:*
// typescript
// Input: 12
// Output: 6  // (1, 2, 3, 4, 6, 12)

// Input: 7
// Output: 2  // (1, 7)

function divisors_factors(num: number): number {

    let divisor = 0;

    for (let i = 1; i <= num; i++) {
        
        if(num % i === 0){
            divisor++;
        }
    }
    return divisor
}
console.log(divisors_factors(12))//Output: 6 (1, 2, 3, 4, 6, 12)
console.log(divisors_factors(7))// Output: 2  // (1, 7)

// *Hint:* Use a loop to check each number from 1 to the given number to see if it divides the number evenly.

// ---

// ### Question 2: Check if a Number is a Perfect Square
// *Description:*
// Write a TypeScript function that takes a positive integer as input and returns true if the number is a perfect square, otherwise return false. A perfect square is a number that is the square of an integer.

// *Example:*
// typescript
// Input: 16
// Output: true  // (4 * 4 = 16)

// Input: 20
// Output: false


// *Hint:* Use the square root function Math.sqrt() and check if the result is an integer.

function is_Perfect_Square(num: number): boolean {
    
    for (let i = 1; i * i <= num; i++) {

        if (i * i === num) {
            return true; 
        }
    }
    
    return false; 
};

console.log(is_Perfect_Square(16)); // Output: true  (4 * 4 = 16)
console.log(is_Perfect_Square(20)); // Output: false
