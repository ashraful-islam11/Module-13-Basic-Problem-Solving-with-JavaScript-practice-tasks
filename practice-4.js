// todo:            Task 13-3B: Odd Numbers Up To N
/**
 * Problem Statement:
 * Write a function getOddNumbers that takes a number n and returns an array of all odd numbers from 1 to n (inclusive). */ 

function getOddNumbers (n){
    let odd = [];

    for( let i = 1 ; i <= n ;  i+= 2){
        //  console.log(i);
         odd.push(i);
    }

    return odd;
}

console.log(getOddNumbers(10));
console.log(getOddNumbers(20));