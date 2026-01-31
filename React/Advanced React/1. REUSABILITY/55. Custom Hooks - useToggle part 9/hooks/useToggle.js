import React from "react"
import useEffectOnUpdate from "./useEffectOnUpdate"

// Changed useToggle to accept a single parament (an object)
export default function useToggle({
    initialValue = false,
    onToggle = () => { }
}) {
    const [on, setOn] = React.useState(initialValue)

    function toggle() {
        setOn(prevOn => !prevOn)
    }
    
    useEffectOnUpdate(onToggle, [on])

    return [on, toggle]
}