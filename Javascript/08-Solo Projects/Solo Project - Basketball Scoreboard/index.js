
// const plus1Home = document.getElementById("plus1-home")
// const plus2Home = document.getElementById("plus2-home")
// const plus3Home = document.getElementById("plus3-home")
const homeBtn = document.getElementsByClassName("home-btn")
const homeScore = document.getElementById("home-score")
let hScore = 0

// const plus1Guest = document.getElementById("plus1-guest")
// const plus2Guest = document.getElementById("plus2-guest")
// const plus3Guest = document.getElementById("plus3-guest")
const guestBtn = document.getElementsByClassName("guest-btn")
const guestScore = document.getElementById("guest-score")
let gScore = 0

for (let btn of homeBtn) {
    btn.addEventListener("click", function() {
        render(btn, homeScore)
    })
}

for (let btn of guestBtn) {
    btn.addEventListener("click", function() {
        render(btn, guestScore)
    })
}

function render(btn, score) {
    let btnScore = Number(btn.innerText);
    if (score === homeScore) {
        hScore += btnScore
        if (hScore <= 99) {
            homeScore.innerText = hScore
        } else {
            hScore -= btnScore
            alert(`Cannot have maximun score above "99"`)
        }
    } else if (score === guestScore) {
        gScore += btnScore
        if (gScore <= 99) {
            guestScore.innerText = gScore
        } else {
            gScore -= btnScore
            alert(`Cannot have maximun score above "99"`)
        }
    }
}

for (let btn of homeBtn) {
    console.log(btn)
}

// const buttonText = plusOneButton.innerText;
// let btnScore = +btn.innerText;
