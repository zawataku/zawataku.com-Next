"use client"
import React from "react"
import Link from "next/link"

export default function Sidebar() {
    return (
        <div className="fixed inset-y-5 left-0 ml-8 w-[25vw] bg-primary-content text-[2vw] font-bold text-text shadow-lg">
            <nav className="flex flex-col content-around items-center gap-11">
                <div className="w-full">
                    <Link href="/" className="mx-auto block w-2/3 rounded-full duration-200 hover:bg-primary hover:text-accent">
                        <span>Top</span>
                    </Link>
                </div>
                <div className="w-full">
                    <Link href="/about" className="mx-auto block w-2/3 rounded-full hover:bg-primary">
                        <span>About</span>
                    </Link>
                </div>
                <div className="w-full">
                    <Link href="/works" className="mx-auto block w-2/3 rounded-full hover:bg-primary">
                        <span>Works</span>
                    </Link>
                </div>
            </nav>
        </div>
    )
}