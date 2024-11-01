import styled from 'styled-components';
import { CgTwitter } from "react-icons/cg";
import { FaGithub } from 'react-icons/fa';
import { SiQiita } from "react-icons/si";

const Body_Top = styled.div`
    max-width: 56rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    background-color: white;
    min-height: 100vh;
`;

const Top_Section = styled.section`
    margin-bottom: 2rem;
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
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
`;

const SubTitle = styled.h2`
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 2.5rem;
    margin-bottom: 0.5rem;
    color: var(--text);
`;

const Sentence = styled.p`
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 2.5rem;
    color: var(--text);
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
                    <Sentence>石川県の大学生です</Sentence>
                </Main_Section>
            </Body_Top>
        </>
    );
}
