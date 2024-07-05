import React from "react";
import Blog from "@/components/blog/blog";
import Footer from "@/components/common/footer";
import styles from "@/styles/styles.module.css"

export default function Skill_Page() {
    return (
        <div className={styles.body}>
            <div className="min-h-screen bg-slate-50">
                <Blog></Blog>
                <Footer></Footer>
            </div>
        </div>
    )
}