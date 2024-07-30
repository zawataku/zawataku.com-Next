import React from "react";
import Header from "../common/header";
import styles from "@/styles/fade.module.css"

import HistoryCard_Start from "./desktop/history_card_start";
import HistoryCard_Start_Noimg from "./desktop/history_card_start_noimg";
import HistoryCard_Start_Finish from "./desktop/history_card_start_finish";
import HistoryCard_End from "./desktop/history_card_end";
import HistoryCard_End_Noimg from "./desktop/history_card_end_noimg";
import HistoryCard_End_Finish from "./desktop/history_card_end_finish";
import HistoryBadge_Middle from "./history_badge_middle";

import HistoryCard_Mobile from "./mobile/history_card_mobile";
import HistoryCard_Noimg_Mobile from "./mobile/history_card_noimg_mobile";
import HistoryCard_Finish_Mobile from "./mobile/history_card_finish_mobile";

export default function History() {
    return (
        <div className="bg-slate-50">
            <Header></Header>
            <div className={styles.fade}>
                <div className="py-32 px-6">
                    <h1 className="pb-3 text-center text-5xl font-semibold text-slate-900">History</h1>
                    <p className="mb-10 text-center text-lg text-slate-900">これまでの軌跡</p>
                    <ul className="timeline timeline-snap-icon mx-auto max-w-4xl timeline-vertical ">
                        <li>
                            <div className="timeline-middle">
                                <div className="flex items-center bg-slate-900 text-slate-50 rounded-full size-20">
                                    <p className="mx-auto text-2xl">2018</p>
                                </div>
                            </div>
                            <hr />
                        </li>
                        <HistoryCard_End_Noimg title="Raspberry Pi 温度計" body="自由研究でRaspberry Pi 3 Model Bを使った室内温度計製作に挑戦．制御に使用した言語はPython．"></HistoryCard_End_Noimg>
                        <HistoryCard_Noimg_Mobile title="Raspberry Pi 温度計" body="自由研究でRaspberry Pi 3 Model Bを使った室内温度計製作に挑戦．制御に使用した言語はPython．"></HistoryCard_Noimg_Mobile>

                        <HistoryBadge_Middle date="2021"></HistoryBadge_Middle>
                        <HistoryCard_Start title="擬似対話ゲーム" body="疑似的な対話が楽しめるゲーム．開発言語はSmileBASIC．" imgURL="/img/history/IMG_3178.webp"></HistoryCard_Start>
                        <HistoryCard_Mobile title="擬似対話ゲーム" body="疑似的な対話が楽しめるゲーム．開発言語はSmileBASIC．" imgURL="/img/history/IMG_3178.webp"></HistoryCard_Mobile>

                        <HistoryBadge_Middle date="2023"></HistoryBadge_Middle>
                        <HistoryCard_End title="旧ホームページ開設" body="ポートフォリオ兼ミニブログとしてホームページを開設．開発言語はHTML・CSS．" imgURL="/img/history/IMG_4321.webp"></HistoryCard_End>
                        <HistoryCard_Mobile title="旧ホームページ開設" body="ポートフォリオ兼ミニブログとしてホームページを開設．開発言語はHTML・CSS．" imgURL="/img/history/IMG_4321.webp"></HistoryCard_Mobile>
                        <HistoryCard_Start_Noimg title="Chrome拡張機能開発" body="大学のポータルサイトの使い勝手を良くするための拡張機能を複数開発．"></HistoryCard_Start_Noimg>
                        <HistoryCard_Noimg_Mobile title="Chrome拡張機能開発" body="大学のポータルサイトの使い勝手を良くするための拡張機能を複数開発．"></HistoryCard_Noimg_Mobile>

                        <HistoryBadge_Middle date="2024"></HistoryBadge_Middle>
                        <HistoryCard_End title="簡易掲示板アプリ" body="Next.jsに初挑戦．ログイン機能のあるネット掲示板っぽいもをの制作．" imgURL="/img/history/IMG_3377.webp"></HistoryCard_End>
                        <HistoryCard_Mobile title="簡易掲示板アプリ" body="Next.jsに初挑戦．ログイン機能のあるネット掲示板っぽいもをの制作．" imgURL="/img/history/IMG_3377.webp"></HistoryCard_Mobile>
                        <HistoryCard_Start_Finish title="ホームページリニューアル" body="Next.js・React・Tailwind CSSでホームページをリニューアル！" imgURL="/img/history/New_Webpage.webp"></HistoryCard_Start_Finish>
                        <HistoryCard_Finish_Mobile title="ホームページリニューアル" body="Next.js・React・Tailwind CSSでホームページをリニューアル！" imgURL="/img/history/New_Webpage.webp"></HistoryCard_Finish_Mobile>
                    </ul>
                </div>
            </div>
        </div>
    )
}