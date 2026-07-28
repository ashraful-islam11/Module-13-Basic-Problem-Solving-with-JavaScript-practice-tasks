// todo: Task 13-4A: Count Vowels
/**
 * Problem Statement:
 * Write a function countVowels that takes a string and returns how many vowels it contains. Assume the string only * contains lowercase letters, no spaces. */


function  countVowels ( str){
    let vowels = 'aeiou';
    let count = 0;

    for( let word = 0 ; word < str.length ; word++){
        // console.log(`${word} word number ===> ${str[word]}`);
        let loopStr= str[word];

        if( vowels.includes(loopStr)){
            // console.log('vowels');
            count++ 
        }
    }
    return count;
}

console.log(countVowels('javaScript'));
       
        
