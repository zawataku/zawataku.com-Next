import React from "react";
import Link from "next/link";

export default function Top() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <div className="mx-auto hidden max-w-5xl md:block lg:block">
                <div className="py-20">
                    <img className="mx-auto size-64 rounded-full ring ring-slate-300" src="/img/profile/profile_picture.webp" alt="Profile picture"></img>
                    <h1 className="mx-auto my-5 text-center text-5xl">ざわたくの部屋</h1>
                </div>

                <div className="flex w-full justify-center bg-slate-50 px-32 py-6 text-slate-900">
                    <Link href="/profile" className="mx-10 duration-300 ease-in-out hover:text-sky-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="48" height="48" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><circle cx="8" cy="6" r="3.25" /><path d="M2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5" /></g></svg>
                        <p className="text-2xl">Profile</p>
                    </Link>
                    <Link href="/history" className="mx-10 duration-300 ease-in-out hover:text-sky-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="48" height="48" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M5.75 1.75h4.5v3.5h-4.5z" /><path d="M5.25 2.75h-2.5v11.5h10.5V2.75h-2.5" /></g></svg>
                        <p className="text-2xl">History</p>
                    </Link>
                    <Link href="/product" className="mx-10 duration-300 ease-in-out hover:text-sky-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="48" height="48" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M2.75 7.75v-6h5.5l5 5v7.5M1.75 10.8h3v3.5h-3z" /><path d="M7.25 14.2h3m-3-3.5h1.5v3m-1-11.45v5h5.05" /></g></svg>
                        <p className="text-2xl">Product</p>
                    </Link>
                    <Link href="/skill" className="mx-10 duration-300 ease-in-out hover:text-sky-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="48" height="48" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.25 11.25L1.75 8l3.5-3.25m5.5 6.5L14.25 8l-3.5-3.25" /></svg>
                        <p className="text-2xl">Skill</p>
                    </Link>
                </div>
            </div>

            <div className="mx-auto max-w-sm md:hidden lg:hidden">
                <div className="pb-14 pt-20">
                    <img className="mx-auto size-52 rounded-full ring ring-slate-300" src="/img/profile/profile_picture.webp" alt="Profile picture"></img>
                    <h1 className="mx-auto my-5 text-center text-4xl">ざわたくの部屋</h1>
                </div>

                <div className="grid w-full grid-cols-2 justify-center gap-x-4 gap-y-12 bg-slate-50 px-8 py-6 text-slate-900">
                    <Link href="/profile" className="mx-auto duration-300 ease-in-out hover:text-sky-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="40" height="40" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><circle cx="8" cy="6" r="3.25" /><path d="M2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5" /></g></svg>
                        <p className="text-2xl">Profile</p>
                    </Link>
                    <Link href="/history" className="mx-auto duration-300 ease-in-out hover:text-sky-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="40" height="40" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M5.75 1.75h4.5v3.5h-4.5z" /><path d="M5.25 2.75h-2.5v11.5h10.5V2.75h-2.5" /></g></svg>
                        <p className="text-2xl">History</p>
                    </Link>
                    <Link href="/product" className="mx-auto duration-300 ease-in-out hover:text-sky-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="40" height="40" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M2.75 7.75v-6h5.5l5 5v7.5M1.75 10.8h3v3.5h-3z" /><path d="M7.25 14.2h3m-3-3.5h1.5v3m-1-11.45v5h5.05" /></g></svg>
                        <p className="text-2xl">Product</p>
                    </Link>
                    <Link href="/skill" className="mx-auto duration-300 ease-in-out hover:text-sky-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="40" height="40" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.25 11.25L1.75 8l3.5-3.25m5.5 6.5L14.25 8l-3.5-3.25" /></svg>
                        <p className="text-2xl">Skill</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}