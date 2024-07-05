import React from "react";
import Link from "next/link";
import Header from "../common/header";
import styles from "@/styles/fade.module.css"

export default function Profile() {
    return (
        <div className="bg-slate-50">
            <Header></Header>
            <div className={styles.fade}>
                <div className="mx-auto max-w-3xl px-6 pb-24 pt-32">
                    <h1 className="pb-3 text-center text-5xl font-semibold text-slate-900">Profile</h1>
                    <p className="mb-12 text-center text-lg text-slate-900">自己紹介</p>
                    <img className="mx-auto size-32 rounded-full ring ring-slate-300" src="/img/profile/profile_picture.webp" alt="Profile picture"></img>
                    <h2 className="mt-3 text-center text-3xl font-semibold text-slate-900">ざわたく</h2>
                    <div className="mt-8 flex justify-center">
                        <Link href={'https://twitter.com/zawataku_Tech'}>
                            <img src="/img/profile/X_logo.svg" alt="Xのロゴ" className="mr-6 size-12 transition-transform duration-200 ease-in-out hover:scale-150" />
                        </Link>
                        <Link href={'https://github.com/zawataku'}>
                            <img src="/img/profile/GitHub_logo.svg" alt="GitHubのロゴ" className="ml-6 size-12 transition-transform duration-200 ease-in-out hover:scale-150" />
                        </Link>
                    </div>
                    <div className="mx-3 mt-5 border-t-2 border-slate-200 text-center">
                        <p className="mt-5 text-slate-600">石川県の大学生です</p>
                        <p className="mt-1 text-slate-600">中学生の頃プログラミングに興味を持ち，なんやかんやで今に至ります</p>
                        <p className="mt-1 text-slate-600">さけるチーズとサラダチキンが好きです</p>
                    </div>
                </div>
            </div>
        </div>
    );
}