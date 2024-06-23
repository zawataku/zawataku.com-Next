import React from "react";
import TimeCard from "./timeline_card";
import Header_History from "../common/header_history";

export default function Timeline() {
    return (
        <div className="bg-slate-50">
            <Header_History></Header_History>
                <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-32">
                    <h1 className="pb-3 text-center text-5xl font-semibold text-slate-900">History</h1>
                    <p className=" mb-24 text-center text-lg text-slate-900">これまでの軌跡</p>
                    <div className="flex flex-col justify-center divide-y divide-slate-200">
                        <div className="mx-auto w-full max-w-3xl">
                            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:ml-[8.75rem] md:before:translate-x-0">
                                <TimeCard date="2018-08" title="Raspberry Piで温度計" body="中学の自由研究でRaspberry Pi 3 Model Bを使った室内温度計製作に挑戦．制御に使用した言語はPython．" imgURL=""></TimeCard>
                                <TimeCard date="2020-07" title="部活ホームページ制作" body="高校時代に所属していた部活のホームページをHTMLとCSSで制作．最終的にはローカル環境で動かしたものを展示．" imgURL=""></TimeCard>
                                <TimeCard date="2021-06" title="BASICで疑似対話ゲーム" body="文化祭展示用の疑似的な対話が楽しめるゲーム．使用言語はSmileBASIC．" imgURL="/img/timeline/IMG_3178.webp"></TimeCard>
                                <TimeCard date="2023-04" title="旧ホームページ開設" body="ポートフォリオ兼ミニブログとしてホームページを開設．" imgURL="/img/timeline/IMG_4321.webp"></TimeCard>
                                <TimeCard date="2023-10" title="Chrome拡張機能開発" body="大学のポータルサイトの使い勝手を良くするための拡張機能開発に没頭．" imgURL=""></TimeCard>
                                <TimeCard date="2024-01" title="Next.jsで簡易掲示板アプリ制作" body="ログイン機能のあるネット掲示板っぽいもをの制作（未デプロイ）．Next.js初挑戦！" imgURL="/img/timeline/IMG_3377.webp"></TimeCard>
                                <TimeCard date="2024-05" title="ホームページリニューアル" body="Next.jsとReact，Tailwind CSSでホームページをリニューアル！" imgURL="/img/timeline/New_Webpage.webp"></TimeCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}