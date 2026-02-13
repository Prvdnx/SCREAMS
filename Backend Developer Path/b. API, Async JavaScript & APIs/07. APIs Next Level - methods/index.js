
// methods GET, POST, PUT, DELETE, PATCH

try {
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'}) // GET is the default method
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {method: 'POST'}) // it usually takes a second argument
    if (!response.ok) {
        throw new Error('There was a problem with the API')
    }
    const data = await response.json()
    console.log(data)
} catch(err) {
    console.log(err)
}
