import styled from 'styled-components';

import { CgTwitter } from "react-icons/cg";
import { FaGithub } from 'react-icons/fa';
import { SiQiita } from "react-icons/si";

const Body_Top = styled.div`
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding: 3rem;
    background-color: white;
    min-height: 100vh;
`;

const Top_Section = styled.section`
    margin-bottom: 3rem;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    row-gap: 1.75rem;
`;

const Title = styled.h1`
    font-weight: 700;
    font-size: 3rem;
    line-height: 2.5rem;
    color: var(--text);
`;

const Profile_img = styled.img`
    border: 4px solid var(--text);
    width: 6rem;
    height: 6rem;
    border-radius: 9999px;
`;

const Social_Area = styled.div`
    display: flex;
    gap: 2rem;
`;

const SocialIcon = styled.a`
    color: var(--text);
    font-size: 2.5rem;
    transition: color 0.3s;

    &:hover {
        color: var(--accent);
    }
`;

const Main_Section = styled.section`
    margin-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
`;

const SubTitle = styled.h2`
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 2.5rem;
    margin-bottom: 0.75rem;
    color: var(--text);
    border-left: 8px;
    border-style: solid;
    border-color: var(--accent);
    padding-left: 0.5rem;

`;

const Sentence = styled.p`
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 2rem;
    color: var(--text);
    white-space: pre-line;
    border-left: 8px;
    border-style: solid;
    border-color: transparent;
    padding-left: 0.5rem;
`;

export default function Top() {
    return (
        <>
            <Body_Top>
                <Top_Section>
                    <Title>ざわたく.com</Title>
                    <Profile_img src="/img/profile_icon.webp" alt="zawataku" />
                    <Social_Area>
                        <SocialIcon href="https://twitter.com/zawataku0819" target="_blank" aria-label="Twitter">
                            <CgTwitter />
                        </SocialIcon>
                        <SocialIcon href="https://github.com/zawataku" target="_blank" aria-label="GitHub">
                            <FaGithub />
                        </SocialIcon>
                        <SocialIcon href="https://qiita.com/zawataku0819" target="_blank" aria-label="GitHub">
                            <SiQiita />
                        </SocialIcon>
                    </Social_Area>
                </Top_Section>

                <Main_Section>
                    <SubTitle>自己紹介</SubTitle>
                    <Sentence>ざわたくです。石川県の大学生です。</Sentence>
                    <Sentence>さけるチーズとサラダチキンが大好きです。</Sentence>
                </Main_Section>

                <Main_Section>
                    <SubTitle>好きなもの</SubTitle>
                    <Sentence>さけるチーズ / サラダチキン / 古めの軽自動車</Sentence>
                </Main_Section>

                <Main_Section>
                    <SubTitle>趣味</SubTitle>
                    <Sentence>お絵描き / フィルムカメラ</Sentence>
                </Main_Section>

                <Main_Section>
                    <SubTitle>ちょっとわかる</SubTitle>
                    <Sentence>React / Next.js / Python</Sentence>
                </Main_Section>
            </Body_Top>
        </>
    );
}
