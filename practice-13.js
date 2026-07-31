/**
 * todo: Task 13-8A: List an Object's Keys
 * * Write a function listKeys that takes an object and returns an array containing its property names (keys).
 */


// Input: an object
// Output: array of the object's keys
// Returns: an array
 
function listKeys(object) {
  let keys = [];
  // TODO: loop through the object and collect its keys
    for ( let key in object){
        keys.push(key)
    }
 
  return keys;
}
 
console.log(listKeys({ name: "Sam", age: 25, city: "Dhaka" }));
// Expected: ["name", "age", "city"]
