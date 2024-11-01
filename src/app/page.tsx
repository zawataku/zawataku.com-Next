"use client";
import React, { useState, useEffect } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import styles from "../styles/styles.module.css";

import Top from "@/components/top/top";
import Frame from "@/components/common/frame";
import Loading from '@/components/common/loading';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #F7E8EA;
    --primary-content: #FDF8F9;
    --secondary: #FFB6C0;
    --accent: #D0727E;
    --text: #8B2021;
  }
`;

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
    <>
      <GlobalStyle />
      <div className={styles.body}>
        <SpeedInsights />
        <main>
          <Frame />
          <Top />
        </main>
      </div>
    </>
  );
}

export default Home;
