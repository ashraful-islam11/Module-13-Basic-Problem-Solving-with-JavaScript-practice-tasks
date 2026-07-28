/**
 *  todo: Task 13-4B: Remove First and Last Character
 * Problem Statement:
 * Write a function removeFirstAndLast that takes a string and returns it with the first and last character removed.
*/ 


function removeFirstAndLast( str){
    let ourString = str;
    let slice = ourString.slice( 1 , -1);
    // console.log(slice);
    return slice;
}

console.log(removeFirstAndLast('hello'));
console.log(removeFirstAndLast('Bangladesh'));