import React from "react"
import './Tab.scss'

export default function Tab({ children }: { children: React.ReactNode }) {
    const childrenLength = React.Children.toArray(children)

    return (
        <div className="flex-1 w-screen min-h-screen border border-2 justify-self-center dot-gradient">
            <div className="hide-if-empty w-2/3 h-7/8 max-h-screen overflow-y-scroll justify-self-left z-1 bg-black m-10">{children}</div>
        </div>
    )
}