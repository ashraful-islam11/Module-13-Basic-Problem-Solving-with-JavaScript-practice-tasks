// todo:            practice no - 2. 

/**
 *todo:  Task 13-2B: Reverse a Number
 * Problem Statement:
 * Write a function reverseNumber that takes a positive whole number and returns it with its digits reversed. (Hint: convert the number to a string first.)
 * 
 * * Input: a number
 * * Output: the number with digits reversed
 * * Returns: a number

 */

function reverseNumber ( num){
//   condition check : 0 and 3.4 hole function run korbe na. 
    if( num > 0 && Number.isInteger(num)){

        let convertStr = num.toString();
        // console.log(convertStr);

        let convertArray = convertStr.split('');
        // console.log(convertArray);

        let reversed = convertArray.reverse();
        // console.log(reversed);

        let join = reversed.join('')
        // console.log(join);
        let convertNumber = Number(join);
        
        return convertNumber; 
    }
}

console.log(reverseNumber(4321));
console.log(reverseNumber(105));
console.log(reverseNumber(0));
console.log(reverseNumber(10.5));
console.log(reverseNumber(1051));
console.log(reverseNumber(100));

