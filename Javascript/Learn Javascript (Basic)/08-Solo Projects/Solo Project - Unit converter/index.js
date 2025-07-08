/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")
const meterFeet = document.getElementById("meter-feet")
const litersGallons = document.getElementById("liters-gallons")
const kiloPounds = document.getElementById("kilo-pounds")



convertBtn.addEventListener("click", function() {
    const myInput = parseFloat(inputEl.value)
    if (myInput === "" || isNaN(myInput)) {
        alert("Please enter a valid number.")
        return
    }

    meterFeet.innerText = `${myInput} meters = ${(myInput * 3.2808).toFixed(3)} feet | ${myInput} feet = ${(myInput / 3.2808).toFixed(3)} meters`
    litersGallons.innerText = `${myInput} liters = ${(myInput * 0.2642).toFixed(3)} gallons | ${myInput} gallons = ${(myInput / 0.2642).toFixed(3)} liter`
    kiloPounds.innerText = `${myInput} kilos = ${(myInput * 2.2046).toFixed(3)} pounds | ${myInput} pounds = ${(myInput / 2.2046).toFixed(3)} kilos`
})



// convertBtn.addEventListener("click", function() {
//     const myInput = parseFloat(inputEl.value)
//     if (myInput === "" || isNaN(myInput)) {
//         alert("Please enter a valid number.")
//         return
//     }
//     meterAndFeet(myInput)
//     gallonsAndLiters(myInput)
//     poundsAndKilo(myInput)
// })

// function meterAndFeet(value) {
//     // const meterToFeet = parseFloat((value * 3.281).toFixed(3))
//     const meterToFeet = (value * 3.281).toFixed(3)
//     const feetToMeter = (value / 3.281).toFixed(3)
//     meterFeet.innerText = `${value} meters = ${meterToFeet} feet | ${value} feet = ${feetToMeter} meters`

// }

// function gallonsAndLiters(value) {
//     const litersToGallons = (value * 0.264).toFixed(3)
//     const gallonsToLiters =  (value / 0.264).toFixed(3)
//     litersGallons.innerText = `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liter`
// }

// function poundsAndKilo(value) {
//     const kiloToPounds = (value * 2.204).toFixed(3)
//     const poundsToKilo = (value / 2.204).toFixed(3)
//     kiloPounds.innerText = `${value} kilos = ${kiloToPounds} pounds | ${value} pounds = ${poundsToKilo} kilos`
// }
