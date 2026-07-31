/**
 * todo: Task 13-7A: Average of All Numbers
 *  * Problem Statement:
 *  * Write a function averageOfArray that takes an array of numbers and returns their average.
 *  * 
 */


// Input: an array of numbers
// Output: the average of all numbers
// Returns: a number
 
function averageOfArray(numbers) {
  let total = 0;

  let numberLength = numbers.length; 
  
  // TODO: loop through, sum the numbers, then divide by the count
   for( let number of numbers){

       total += number;
      
   }
 
  return total / numberLength;
}

console.log(averageOfArray([2, 4, 6])); // Expected: 4
console.log(averageOfArray([2,8, 4, 6])); // Expected: 4
