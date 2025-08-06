function checkUsername(userName) {
    if (userName) {
        console.log(userName)
    } else {
        console.log('I execute')
        throw new Error('No username provided')
        console.log('I do not execute')
    }
}

checkUsername()


//// CONSTRUCTORS ////
// String()
// Number()
// Array()
// Object()
// Boolean()

// e.g
const person = new Object()
// const person = {}   // This is a better option though
person.name = 'Tom'
console.log(person)
