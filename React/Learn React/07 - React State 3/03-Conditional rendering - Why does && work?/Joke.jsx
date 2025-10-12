import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    
    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }
    
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>Show punchline</button>
            <hr />
        </div>
    )
}


// if (true && true) {
//     console.log("Everything was true!")
// }

// if (true && false) {
//     console.log("Everything was true!")
// }

// if (false && true) {
//     console.log("Everything was true!")
// }

// if (false && console.log("This code is running")) {
//     // console.log("Everything was true!")
// }

// if (console.log("This code is running") && false) {
//     // console.log("Everything was true!")
// }
