
const homeBtn = document.getElementsByClassName("home-btn")
const homeScore = document.getElementById("home-score")
let hScore = 0

const guestBtn = document.getElementsByClassName("guest-btn")
const guestScore = document.getElementById("guest-score")
let gScore = 0

const newGame = document.getElementById("new-game")
const win =  document.getElementById("win")

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

newGame.addEventListener("click", function() {
    gScore = 0; hScore = 0
    homeScore.innerText = hScore
    guestScore.innerText = gScore
    win.innerText = "Welcome!!"
})

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
    winning()
}

function winning() {
    if ( hScore > gScore ) {
        win.innerText = "🎉 Home is Winning!! 🥳"
    } else if ( hScore < gScore ) {
        win.innerText = "🎉 Guest is Winning!! 🥳"
    } else
        win.innerText = "It's a Draw 🎉"
}

// for (let btn of homeBtn) {
//     console.log(btn)
// }

// let btnScore = +btn.innerText;
