// export default function App() {
//     /**
//      * Challenge: Replace the if/else below with a ternary
//      * to determine the text that should display on the page
//      */

//     const isGoingOut = true

//     let answer  // 👈 Use ternary here

//     if(isGoingOut === true) {
//         answer = "Yes"
//     } else {
//         answer = "No"
//     }
    
//     // Remove the code below 👇 once your ternary is done //
//     let answer = isGoingOut === true ? "Yes" : "No"
//     const answer = isGoingOut ? "Yes" : "No"

//     return (
//         <main>
//             <h1 className="title">Do I feel like going out tonight?</h1>
//             <button className="value">{answer}</button>
//         </main>
//     )
// }


export default function App() {
    /**
     * Challenge: move our ternary directly inside of the JSX
     * so the "Yes" and "No" are determined inside the <h1>
     * 
     * Hint: you will no longer need the `answer` variable
     */

    const isGoingOut = true
    
    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value">{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}
