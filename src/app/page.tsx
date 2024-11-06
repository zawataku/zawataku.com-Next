"use client";
import React, { useState, useEffect } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next";

import Top from "@/components/top/top";
import Frame from "@/components/common/frame";
import Loading from '@/components/common/loading';

import { createGlobalStyle, styled } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  :root {
    --primary: #fef2f2;
    --primary-content: #FDF8F9;
    --secondary: #fca5a5;
    --accent: #D0727E;
    --text: #8B2021;
  }

  body {
    background-color: white;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const MainContainer = styled.main`
  animation: fade-in 1s ease-in-out;
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
    return (
      <>
        <GlobalStyle />
        <SpeedInsights />
        <MainContainer>
          <Loading />
        </MainContainer>
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <SpeedInsights />
      <MainContainer>
        <Frame />
        <Top />
      </MainContainer>
    </>
  );
}

export default Home;
