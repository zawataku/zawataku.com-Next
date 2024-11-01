import styled from 'styled-components';

const TopFrame = styled.div`
  position: fixed;
  top: 0;
  z-index: 50;
  height: 2rem;
  width: 100%;
  background-color: var(--secondary);
`;

const RightFrame = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 50;
  height: 100vh;
  width: 2rem;
  background-color: var(--secondary);
`;

const LeftFrame = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  height: 100vh;
  width: 2rem;
  background-color: var(--secondary);
`;

const BottomFrame = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 50;
  height: 2rem;
  width: 100%;
  background-color: var(--secondary);
`;

export default function Frame() {
    return (
        <>
            <TopFrame />
            <RightFrame />
            <LeftFrame />
            <BottomFrame />
        </>
    );
}
