import React from "react";
import Timeline from "@/components/timeline/timeline";
import Footer from "@/components/common/footer";
import styles from "@/styles/styles.module.css"

export default function History_Page() {
    return (
        <div className={styles.body}>
            <div className="min-h-screen bg-slate-50">
                <Timeline></Timeline>
                <Footer></Footer>
            </div>
        </div>
    )
}