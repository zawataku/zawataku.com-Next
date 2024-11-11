"use client"
import styled from 'styled-components';

const Not_found_img = styled.img`
    width: 100%;
`

const Not_found_Body_Top = styled.div`
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding-left: 2rem;
    padding-right: 2rem;
    background-color: white;
`;

const Not_Found_Top_Section = styled.section`
    margin-bottom: 3rem;
    text-align: center;
    align-items: center;
`;

const Not_found_Copyright = styled.p`
    font-size: 1rem;
    @media screen and (max-width: 425px){
        font-size: 0.875rem;   
    }
`;

const Not_found_Title = styled.h1`
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 4rem;
    font-weight: bold;
    @media screen and (max-width: 425px){
        font-size: 3rem;   
    }
`

const Not_found_Text = styled.p`
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    @media screen and (max-width: 425px){
        font-size: 0.875rem;   
    }
`;

const Not_found_Link = styled.a`
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-weight: bold;
    color: #0000ee;

    &.visited{
        color: #0000ee;
    }
`;

export default function Custom404() {
    return (
        <Not_found_Body_Top>
            <Not_Found_Top_Section>
                <Not_found_img src="/img/404.webp" alt="ページが見つかりませんでした" />
                <Not_found_Copyright>Illustration by 2個 (@chohjaharaSA)</Not_found_Copyright>
                <Not_found_Title>404 Not Found</Not_found_Title>
                <Not_found_Text>お探しのページは一時的にアクセスができない状況にあるか，移動もしくは削除された可能性があります．</Not_found_Text>
                <Not_found_Link href='/'>トップに戻る</Not_found_Link>
            </Not_Found_Top_Section>
        </Not_found_Body_Top>
    );
}
