import React from "react";
import Profile from "@/components/profile/profile";
import Footer from "@/components/common/footer";
import styles from "@/styles/styles.module.css"

export default function Profile_Page() {
    return (
        <div className={styles.body}>
            <div className="min-h-screen bg-slate-50">
                <Profile></Profile>
                <Footer></Footer>
            </div>
        </div>
    )
}