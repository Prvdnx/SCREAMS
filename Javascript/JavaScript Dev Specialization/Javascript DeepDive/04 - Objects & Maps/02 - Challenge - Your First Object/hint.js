// Method properties are functions inside objects
const myObject = {
    firstProperty: "Some value",
    methodProperty() {
        console.log("I am a method property")
    }
}

// Object property shorthand is used when a name of some variables 
// matches the name of a property inside your object

const skyColour = 'Blue'

const sky = {
    skyColour, // used object property shorthand, instead of writing skyColour: skyColour
    clouds: false
}