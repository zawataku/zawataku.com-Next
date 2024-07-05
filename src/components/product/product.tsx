import React from "react";
import ProductCard from "./product_card";
import Header from "../common/header";
import styles from "@/styles/fade.module.css"

export default function Product() {
    return (
        <div className="bg-slate-50">
            <Header></Header>
            <div className={styles.fade}>
                <div className="mx-auto max-w-3xl px-6 pb-24 pt-32">
                    <h1 className="pb-3 text-center text-5xl font-semibold text-slate-900">Product</h1>
                    <p className="mb-10 md:mb-24 lg:mb-24 text-center text-lg text-slate-900">今までに作ったもの</p>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <ProductCard name="zawataku CSS Framework" description="自作汎用CSSフレームワーク" imgURL="/img/products/zawatakuCSS.webp" linkURL="https://github.com/zawataku/zawataku_framework"></ProductCard>
                        <ProductCard name="学マスロゴジェネレータ" description="学マスのロゴっぽい画像が作れるジェネレータ" imgURL="/img/products/gkms_logo_gen.webp" linkURL="https://gkms-logo-generator.vercel.app"></ProductCard>
                    </div>
                </div >
            </div>
        </div>
    )
}