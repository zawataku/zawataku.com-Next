"use client";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from "@/components/common/header";
import Right from "@/components/common/right";
import Left from "@/components/common/left";
import Footer from "@/components/common/footer";
import styles from "../styles/styles.module.css"

export default function Home() {
  return (
    <div className={styles.body}>
      <SpeedInsights />
      <div className="min-h-screen bg-primary-content">
        <Header></Header>
        <Right></Right>
        <Left></Left>
        <Footer></Footer>
      </div>
    </div>
  );
}