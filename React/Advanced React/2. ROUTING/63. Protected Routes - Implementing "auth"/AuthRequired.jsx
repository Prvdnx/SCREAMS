import React from "react"
import { Outlet } from "react-router-dom"

export default function AuthRequired() {
    // Check the authenticated status of the user
    const authenticated = true
    // If they're NOT authenticated
        // send the user to the login page
        
    if (authenticated) {
        return <Outlet />
    }
}