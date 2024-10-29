"use client";
import React, { useState, useEffect } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import styles from "../styles/styles.module.css"

import Top from "@/components/top/top";
import Frame from "@/components/common/frame";
import Sidebar from "@/components/common/sidebar";
import Loading from '@/components/common/loading';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleComplete = () => setIsLoading(false);

    if (document.readyState === 'complete') {
      handleComplete();
    } else {
      window.addEventListener('load', handleComplete);
      return () => window.removeEventListener('load', handleComplete);
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className={styles.body}>
      <SpeedInsights />
      <main className="min-h-screen bg-primary">
        <Frame></Frame>
        <Sidebar></Sidebar>
        <Top></Top>
      </main>
    </div>
  );
}

export default Home;