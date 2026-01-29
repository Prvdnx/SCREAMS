import React from "react"

export default function MenuDropdown({ children, open, toggle }) {

    return open ? (
        <div className="menu-dropdown">
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {toggle, open})
            })}
        </div>
    ) : null
}