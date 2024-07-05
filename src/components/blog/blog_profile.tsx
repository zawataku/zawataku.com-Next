import React from "react";
import Link from "next/link";

export default function Blog_Profile() {
    return (
        <div className="col-span-1 p-4 mx-3 my-5 bg-white border-2 border-slate-300 rounded-lg">
            <img className="mx-auto my-4 size-28 rounded-full ring ring-slate-300" src="/img/profile/profile_picture.webp" alt="Profile picture"></img>
            <h2 className="mt-3 text-center text-3xl font-semibold text-slate-900">ざわたく</h2>
            <div className="mt-8 flex justify-center">
                <Link href={'https://twitter.com/zawataku_Tech'}>
                    <img src="/img/profile/X_logo.svg" alt="Xのロゴ" className="mr-6 size-8 transition-transform duration-200 ease-in-out hover:scale-150" />
                </Link>
                <Link href={'https://github.com/zawataku'}>
                    <img src="/img/profile/GitHub_logo.svg" alt="GitHubのロゴ" className="ml-6 size-8 transition-transform duration-200 ease-in-out hover:scale-150" />
                </Link>
            </div>
            <div className="mx-3 mt-5 border-t-2 border-slate-200 text-center">
                <p className="mt-5 text-slate-600">石川県の大学生</p>
                <p className="mt-1 text-slate-600">さけるチーズとサラダチキンが好き</p>
            </div>
        </div>
    )
}