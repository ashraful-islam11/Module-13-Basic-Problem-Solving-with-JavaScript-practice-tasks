/**
 * todo: Task 13-5B: Find the Shortest Word in a Sentence
 * * Matches lesson: 13-5 (String problems — split + loops)
 * * Problem Statement:
 * * Write a function findShortestWord that takes a sentence and returns the shortest word in it.

 */

function    findShortestWord(sentence){
    let words = sentence.split(' ');
    // console.log(words);
    let shortest = words[0];

    for( let i = 1; i < words.length ; i++){
        
        if( shortest.length > words[i].length){
            shortest = words[i]
        }
    }
    
    return shortest;
}

console.log(findShortestWord('javaScript is a fun language'));