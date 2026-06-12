import React from "react"
import './NavBar.scss'

export default function Tab({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex-1 w-screen border border-2 justify-self-center dot-gradient">
            <div className="w-2/3 h-7/8 overflow-y-scroll justify-self-center z-1 bg-black m-10">{children}</div>
        </div>
    )
}