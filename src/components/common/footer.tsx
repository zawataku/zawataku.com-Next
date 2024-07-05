import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer footer-center sticky top-[100vh] bg-slate-500 p-10 text-base text-slate-50">
            <p><Link href="/cookie_policy" className="leading-3 hover:underline">クッキーポリシー</Link></p>
            <p>Copyright © 2024 ざわたく All rights reserved.</p>
        </footer>
    )
}