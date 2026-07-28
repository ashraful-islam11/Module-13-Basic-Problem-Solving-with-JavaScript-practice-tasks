// todo:        Practice task- 3.
/**
 * todo: Task 13-3A: Product of Digits
 * Problem Statement:
 * Write a function productOfDigits that takes a positive whole number and returns the product of its individual digits.
 * 
 * * Input: a number
 * Output: product of its digits
 * Returns: a number
 
 */

function productOfDigits (num){
    if( num > 0 && Number.isInteger(num)){
        
        let convertStr = num.toString();
        // console.log(convertStr);

        let convertStrArray = convertStr.split('');
        // console.log(convertStrArray);

        let multiply = 1;
         for( let i = 0; i < convertStrArray.length; i++){
            //   console.log(convertStrArray[i]);
              let convertNum = Number(convertStrArray[i]);
            //   console.log(convertNum);

              multiply = multiply * convertNum;
            //   console.log(multiply);
         }
         return multiply;
    }
}

console.log(productOfDigits(123));
console.log(productOfDigits(2020));