
const homeBtn = document.getElementsByClassName("home-btn")
const homeScore = document.getElementById("home-score")
let hScore = 0

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

// let btnScore = +btn.innerText;
