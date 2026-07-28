/* 
 todo: Task 13-5A: Check for a Palindrome
 * Problem Statement:
 * Write a function isPalindrome that takes a string and returns true if it reads the same forwards and backwards, otherwise false. Assume lowercase, no spaces.
*/

function isPalindrome( str){
    let stringLength = str.length ;
    let strEmpty = '';

    for( let i = stringLength -1; i >= 0 ; i--){
         
         strEmpty += str[i] ;
         console.log(strEmpty);
         
    }
    if( str === strEmpty){
        return true;
    }
    else{
        return false;
    }

   
}

console.log(isPalindrome('madam'));