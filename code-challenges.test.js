// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

/*
Boiler Plate
describe("areYouHungry", () => {
  it("returns eat food or keep coding based on input", () => {
    expect(areYouHungry("yes")).toEqual("eat food")
    expect(areYouHungry("no")).toEqual("keep coding")
  })
})
*/

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("nameCap", () => {
  it("returns an array with a sentence about each person with their name capitalized", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
  ]
    expect(nameCap(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// ReferenceError: nameCap is not defined

// b) Create the function that makes the test pass.
/*
Create a function named nameCap.
The function will have a parameter named array.
The argument that will pass through the parameter will be an array of objects.
Using the objects inside of the array, create a string for each object that includes the name and occupation.
Use a method to capitalize only the first letters of each word associated with the name key.
Combine the strings and separate each by a comma
Place the strings into an array
Return an array with a sentence and each first letter of their name is capitalized.
*/

const nameCap = (array) => {
  return array.map(obj => obj.name.split(' ').map(word => {return word.charAt(0).toUpperCase() + word.slice(1)}).join(' ') + " " + "is" + " " + obj.occupation + ".")
}
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// Expected output: [ 2, 0, -1, 0 ]
// Expected output: [ 2, 1, -1 ]

describe("remaindersArray", () => {
  it("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    expect(remaindersArray(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remaindersArray(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// ReferenceError: remaindersArray is not defined

// b) Create the function that makes the test pass.

/*
Create a function named remaindersArray
the function will have a parameter named array
the parameter will take in an argument of an array with mixed data types
filter through the array so that only numbers are left in the array
With only numbers inside of the array, divide those numbers and have a new array with only the remainders of the math operation
*/

const remaindersArray = (array) => {
  let num =  array.filter((value) => typeof value === 'number')
  return num.map((value) => value % 3)
}

/*
const remaindersArray = (array) => {
  return array.filter((value) => typeof value === 'number')
}
      Array [
    -   2,
    -   0,
    -   -1,
    +   23,
    +   45,
    +   -10,
        0,
      ]
confirming that I can filter out only the number data types inside of the array

const remaindersArray = (array) => {
  let num =  array.filter((value) => typeof value === 'number')
  return num.map((value) => value % 3)
}
Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
During the thought process, I considered using a for loop in order to access and iterate through the array to divide each number by 3. But another idea that came to mind is to just use the built in method of .map() since does the same thing as a for loop anyways. I tried using the .map() method just to experiment and as soon as I ran the test, it passed.  
*/

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

// Expected output: 99
// Expected output: 1125

describe("sumCubed", () => {
  it("returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]
    expect(sumCubed(cubeAndSum1)).toEqual(99)
    expect(sumCubed(cubeAndSum2)).toEqual(1125)
  })
})

// ReferenceError: sumCubed is not defined

// b) Create the function that makes the test pass.

/*
Create a function name sumCubed
The function will have a parameter named array
The argument that will be passed into the parameter is an array of numbers
Each number inside of the array has to be cubed
Once each number is cubed, add all the numbers together 
Return the sum as a number datatype
*/

const sumCubed = (array) => {
  return array.map((value) => value ** 3).reduce((a, b) => a + b, 0)
}

/*
const sumCubed = (array) => {
  return array.map((value) => value ** 3)
}
Confirmed that each number inside of the array can be cubed and still keep the same length of the array.
const sumCubed = (array) => {
  return array.map((value) => value ** 3).reduce((a, b) => a + b, 0)
}
Adding on the reduce method, we can add each number inside of the array to the current array value, and return the sum as a number datatype

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
*/