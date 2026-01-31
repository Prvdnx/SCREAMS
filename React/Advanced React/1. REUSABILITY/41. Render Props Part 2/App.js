import React from "react"
import Decision from "./Decision"

function App() {
    return (
        <div>
            <Decision sayName={(goingOut) => {
                console.log(goingOut ? "I AM going out" : "I'm staying in")
            }} />
        </div>
    )
}

export default App