import React from 'react';
import styled, { keyframes } from 'styled-components';

const ping = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const LoadingDot = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background-color: var(--accent);
  animation: ${ping} 1s infinite;
`;

const CenterDot = styled(LoadingDot)`
  margin: 0 3rem;
`;

const Loading: React.FC = () => {
    return (
        <LoadingContainer>
            <LoadingDot />
            <CenterDot />
            <LoadingDot />
        </LoadingContainer>
    );
};

export default Loading;
