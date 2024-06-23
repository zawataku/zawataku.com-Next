"use client";
import React from "react";

import { SpeedInsights } from "@vercel/speed-insights/next"

import Top from "@/components/top/top";

import styles from "../styles/styles.module.css"

export default function Home() {
  return (
    <div className={styles.body}>
      <SpeedInsights />
      <Top></Top>
    </div>
  );
}