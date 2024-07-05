"use client";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Top from "@/components/top/top";
import styles from "../styles/styles.module.css"
import styles_2 from "@/styles/fade.module.css"

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles_2.fade}>
        <SpeedInsights />
        <Top></Top>
      </div>
    </div>
  );
}