'use client'
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { gsap } from "gsap";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

        if (!isMenuOpen) {
            gsap.to(".mobile-menu", {
                x: 0,
                duration: 0.5,
                ease: "power3.inOut",
            });
        } else {
            gsap.to(".mobile-menu", {
                x: "100%",
                duration: 0.5,
                ease: "power3.inOut",
            });
        }
    };

    const pathName = usePathname();
    const linkClass = (path) => `mx-8 ${pathName === path || (path === '/blog' && pathName.startsWith('/blog/posts')) ? 'text-sky-600' : 'duration-300 ease-in-out hover:text-sky-600'}`;


    return (
        <div className="bg-slate-50">
            <div className="fixed z-50 flex h-24 w-full items-center justify-between border-b-4 border-slate-300 bg-slate-50 p-3 text-slate-900 md:justify-center md:px-12 md:py-6 lg:justify-center lg:px-12 lg:py-6">
                <div className="hidden md:flex lg:flex">
                    <Link href="/" className={linkClass("/")}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="32" height="32" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 5.75v7.5h8.5v-7.5m-10.5 1.5L8 1.75l6.25 5.5" /></svg>
                        <p className="text-base">Home</p>
                    </Link>
                    <Link href="/profile" className={linkClass("/profile")}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="32" height="32" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><circle cx="8" cy="6" r="3.25" /><path d="M2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5" /></g></svg>
                        <p className="text-base">Profile</p>
                    </Link>
                    <Link href="/history" className={linkClass("/history")}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="32" height="32" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M5.75 1.75h4.5v3.5h-4.5z" /><path d="M5.25 2.75h-2.5v11.5h10.5V2.75h-2.5" /></g></svg>
                        <p className="text-base">History</p>
                    </Link>
                    <Link href="/product" className={linkClass("/product")}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="32" height="32" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M2.75 7.75v-6h5.5l5 5v7.5M1.75 10.8h3v3.5h-3z" /><path d="M7.25 14.2h3m-3-3.5h1.5v3m-1-11.45v5h5.05" /></g></svg>
                        <p className="text-base">Product</p>
                    </Link>
                    <Link href="/blog" className={linkClass("/blog")}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="32" height="32" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.25 11.25L1.75 8l3.5-3.25m5.5 6.5L14.25 8l-3.5-3.25" /></svg>
                        <p className="text-base">Blog</p>
                    </Link>
                </div>

                <div className="flex w-full items-center justify-between md:hidden lg:hidden">
                    <Link href="/" className="block pl-3 text-3xl md:hidden lg:hidden">ざわたくの部屋</Link>
                    <button onClick={toggleMenu} className="order-last focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`size-10 transition-transform duration-300 ${isMenuOpen ? "" : ""}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`fixed left-0 top-0 size-full ${isMenuOpen ? "z-30 bg-white/30 backdrop-blur-xl transition-all duration-300" : "hidden transition-all duration-300"}`}></div>
            <div className={`mobile-menu fixed right-0 top-0 z-40 h-full w-56 translate-x-full overflow-hidden border-l-4 border-slate-300 bg-slate-50 text-slate-900 md:hidden lg:hidden`}>
                <div className="flex size-full flex-col overflow-hidden p-6 pt-32 ">
                    <Link href="/" className="my-5 text-2xl">Home</Link>
                    <Link href="/profile" className="my-5 text-2xl">Profile</Link>
                    <Link href="/history" className="my-5 text-2xl">History</Link>
                    <Link href="/product" className="my-5 text-2xl">Product</Link>
                    <Link href="/blog" className="my-5 text-2xl">Blog</Link>
                </div>
            </div>
        </div>
    );
}
