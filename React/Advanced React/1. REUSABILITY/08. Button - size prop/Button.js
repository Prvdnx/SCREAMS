import React from "react"

export default function Button({children, size, ...rest}) {
    /**
     * "button-small" if `size` is "sm"
     * "button-large" if `size` is "lg"
     */
    let sizeClass
    if (size === "sm") sizeClass = "button-small"
    if (size === "lg") sizeClass = "button-large"
    
    return (
        <button {...rest} className={sizeClass}>
            {children}
        </button>
    )
    
    // Alternative //
    // return (
    //     <button className={size=="sm"?'button-small':'button-large'} {...rest}>
    //         {children}
    //     </button>
    // )    
}