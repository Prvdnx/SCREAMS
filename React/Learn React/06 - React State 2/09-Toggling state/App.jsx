import React from "react"

export default function App() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the button flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    const [isGoingOut, setIsGoingOut] = React.useState(false)
    
    function changeMind() {
        setIsGoingOut(prev => !prev)
    }

    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button 
                onClick={changeMind} 
                className="value"
                aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it.`}
            >{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}



// export default function App() {
    
//     const [isGoingOut, setIsGoingOut] = React.useState(false)

//     return (
//         <main>
//             <h1 className="title">Do I feel like going out tonight?</h1>
//             <button onClick={() => {setIsGoingOut(!isGoingOut)}} className="value">{isGoingOut ? "Yes" : "No"}</button>
//         </main>
//     )
// }



// export default function App() {
    
//     let [isGoingOut, changeBool] = React.useState(true)
    
//     const change = () => changeBool(isGoingOut ? false : true)

//     return (
//         <main>
//             <h1 className="title">Do I feel like going out tonight?</h1>
//             <button onClick={change} className="value">{isGoingOut ? "Yes" : "No"}</button>
//         </main>
//     )
// }
