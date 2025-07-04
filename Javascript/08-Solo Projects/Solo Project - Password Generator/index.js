const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const genBtn = document.getElementById("generate-btn")
const passWords = document.getElementsByClassName("passwords")

genBtn.addEventListener("click", function() {
    for (let pass of passWords) {
        genPass(pass)
    }
})

for (let pass of passWords) {
    pass.addEventListener("click", function() {
        if (pass.innerText.length > 1) {
            navigator.clipboard.writeText(pass.innerText)
            console.log('Content copied to clipboard successfully!');
            alert('Copied successfully!');
        } else {
            console.log('Copy unsuccessfull OR Nothing to copy!');
        }
    })
}

function genPass(pass) {
    let myPass = ""
    for (let i = 0; i < 15; i++) {
        myPass += characters[Math.floor(Math.random() * characters.length)]
    }
    pass.innerText = myPass
}


// copyButton.addEventListener('click', () => {
//     navigator.clipboard.writeText(textToCopy.value)
////     navigator.clipboard.writeText(textToCopy.innerText)
//         .then(() => {
//             console.log('Copied successfully!');
//         })
//         .catch(err => {
//             console.error('Failed to copy content: ', err);
//         });
// });
