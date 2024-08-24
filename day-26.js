// Day 26
// ### Question 1: Reverse a Number
// Write a function reverseNumber(n: number): number that takes a positive integer n and returns the number with its digits reversed.
// Example:
// typescript
// reverseNumber(1234); // Output: 4321
// reverseNumber(567);  // Output: 765
function reverseNumber(n) {
    var reverse = 0;
    while (n > 0) {
        var last_Digit = n % 10;
        reverse = (reverse * 10) + last_Digit;
        n = Math.floor(n / 10);
    }
    return reverse;
}
console.log(reverseNumber(1234)); // Output: 4321
console.log(reverseNumber(567)); // Output: 765
// ### Question 2: Find the Average of Numbers in a String
// Write a function averageOfNumbersInString(str: string): number that extracts all numbers from a given string, calculates their average, and returns the result.
// Example:
// typescript
// averageOfNumbersInString('The numbers are 12, 15, and 20.'); // Output: 15.666...
// averageOfNumbersInString('No numbers here!'); // Output: NaN
function averageOfNumbersInString(str) {
    var sum = 0;
    var count = 0;
    var currentNumber = '';
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (char >= '0' && char <= '9') {
            currentNumber += char;
        }
        else {
            if (currentNumber !== '') {
                sum += parseInt(currentNumber);
                count++;
                currentNumber = '';
            }
        }
    }
    if (currentNumber !== '') {
        sum += parseInt(currentNumber);
        count++;
    }
    return count > 0 ? sum / count : NaN;
}
console.log(averageOfNumbersInString('The numbers are 12, 15, and 20.')); // Output: 15.666...
console.log(averageOfNumbersInString('No numbers here!')); // Output: NaN
