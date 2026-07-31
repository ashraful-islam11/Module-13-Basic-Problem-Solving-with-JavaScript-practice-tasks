/**
 *Task 13-8B: Get a Value or a Default
Problem Statement:
Write a function getValueOrDefault that takes an object, a key name, and a default value, and returns the object's value for that key if it exists, otherwise the default value.
Input
Output
person, key "age", default 0
25
person, key "grade", default "N/A"
"N/A"


Starter Snippet:
// Input: an object, a key (string), a default value
// Output: the value at that key, or the default
// Returns: any value
 */


function getValueOrDefault(obj, key, defaultValue) {
  // TODO: check if the key exists in the object
     let findKeys = Object.keys(obj);
    //  console.log(findKeys);
    
     if( findKeys.includes(key)){
         return obj[key];
     }
     else{
        return defaultValue;
     }
 
}
 
let person = { name: "Sam", age: 25 };
console.log(getValueOrDefault(person, "age", 0));        // Expected: 25
console.log(getValueOrDefault(person, "grade", "N/A"));  // Expected: "N/A"
