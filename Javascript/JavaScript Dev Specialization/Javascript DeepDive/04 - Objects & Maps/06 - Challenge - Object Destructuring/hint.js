const myObject = {
    firstProperty: "Some value",
    secondProperty: {
        nestedProperty: 'I an nested'
    }
}

// Destructuring syntax 
const { firstProperty } = myObject

// For nested properties - this is one way of doing it
const { nestedProperty } = myObject.secondProperty

// As a function argument
function someFunction({ firstProperty }) {
    // some code
}
someFunction(myObject)