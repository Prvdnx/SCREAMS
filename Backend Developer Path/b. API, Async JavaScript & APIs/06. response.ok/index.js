
try {
    const response = await fetch('https://apis.scrimba.com/dog.ceo/api/breeds/images/random')
    if (!response.ok){ // if the response is not ok, throw an error (e.g here, I am using a broken endpoint)
        throw new Error('There was a problem with the API')
    }
    const data = await response.json()
    console.log(data)
} catch (err) {
    console.log(err)
    // update the DOM to warn the user
    // access an alternative API
} finally {
    console.log('The operation completed.')
}
