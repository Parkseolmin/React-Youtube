import React from 'react';
import Main from '../components/section/Main';
import Today from '../components/contents/Today';
import Developer from '../components/contents/Developer';
import Webd from '../components/contents/Webd';
import Website from '../components/contents/Website';
import Gsap from '../components/contents/Gsap';
import Portfolio from '../components/contents/Portfolio';
import Youtube from '../components/contents/Youtube';

function Home() {
    return (
        <Main
            title="설민's 유튜브"
            description="설민's 유튜브 사이트에 오신 것을 환영합니다."
        >
            <Today />
            <Developer />
            <Webd />
            <Website />
            <Gsap />
            <Portfolio />
            <Youtube />
        </Main>
    );
}

export default Home;
