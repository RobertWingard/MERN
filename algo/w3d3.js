/* 
findByIdAndUpdate(id, updateObject, arr)
Given an id, an object that has keys with corresponding updated values, and an array of objects
Find the object by "id" key that matches the given id value and then update that object's
keys with the provided new values.
Return the updated object, or null if no object was found

check 
someObj.hasOwnProperty("key")
Object.keys(someObj) // returns [an array of "keys"]
*/

const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false
    }
];
//create an array of keys in updatedVals
//loop through collection 
    // in the loop check for object with matching ids,
    // loop through array of keys
        // to see if that object has its own property 
        // if true change values
        // if false do nothing
// after finding matching then adjust keys, 
// return object that was adjusted.


function findByIdAndUpdate(id, updatedVals, collection) {
    const updatedkeys = Object.keys(updatedVals)
    // console.log(updatedkeys)
    for (let object of collection) {
        if (object.id === id) {
            for (let key of updatedkeys) {
                if (object.hasOwnProperty(key)) {
                    object[key] = updatedVals[key]
                }
            }
            return object
        }
    }
    return null

}

console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue" }, students));
console.log(findByIdAndUpdate(5, {}, students));