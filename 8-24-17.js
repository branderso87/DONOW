// When given an array of numbers return an altered array that doubles each number.

// Using a for loop
const num = [2,4,6]
function doubleInt(array) {
    let doubledArr = [ ]
    for(let i=0; i<array.length; i++) {
        let doubleNumber = array[i] * 2
        doubledArr.push(doubleNumber)
    }
    return doubledArr
}
console.log(doubleInt(num))

// Using forEach
// Remember forEach takes an array but returns nothing. So you have to push to a new array
const array = [2,4,6]
let newArr = []
array.forEach(num => {newArr.push(num * 2)})
console.log(newArr)

// Using higher order function .map and ES6 fat arrow
// Remember .map lives on an array so this code is not reusable
let array = [2,4,6]
let doubledArray = array.map(num => { return num * 2})
console.log(doubledArray)

