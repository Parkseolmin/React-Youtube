import {
    CiBaseball,
    CiCoins1,
    CiBoxes,
    CiBullhorn,
    CiCoffeeCup,
    CiDumbbell,
    CiFries,
    CiMoneyBill,
} from 'react-icons/ci';

import {
    AiFillGithub,
    AiOutlineCodepen,
    AiFillYoutube,
    AiOutlineInstagram,
} from 'react-icons/ai';

export const headerMenus = [
    {
        title: '웹스토리보이',
        icon: <CiBaseball />,
        src: '/',
    },
    {
        title: '추천 영상',
        icon: <CiMoneyBill />,
        src: '/today',
    },
    {
        title: '추천 개발자',
        icon: <CiCoins1 />,
        src: '/developer',
    },
    {
        title: '웹디자인기능사',
        icon: <CiBoxes />,
        src: '/webd',
    },
    {
        title: '웹표준 사이트',
        icon: <CiBullhorn />,
        src: '/website',
    },
    {
        title: 'GSAP Parallax',
        icon: <CiCoffeeCup />,
        src: '/gsap',
    },
    {
        title: '포트폴리오 사이트',
        icon: <CiDumbbell />,
        src: '/port',
    },
    {
        title: '유튜브 클론 사이트',
        icon: <CiFries />,
        src: '/youtube',
    },
];

export const searchKeyword = [
    {
        title: '음악',
        src: '/search/music',
    },
    {
        title: 'Shorts',
        src: '/search/KR+shorts',
    },
    {
        title: '드라마',
        src: '/search/한국드라마',
    },
    {
        title: 'Movies',
        src: '/search/개봉영화',
    },
    {
        title: 'React',
        src: '/search/react',
    },
    {
        title: 'Vue',
        src: '/search/vue.js',
    },
    {
        title: 'Next.js',
        src: '/search/next',
    },
    {
        title: 'Node',
        src: '/search/node',
    },
    {
        title: 'SQL',
        src: '/search/sql',
    },
    {
        title: '여행',
        src: '/search/여행',
    },
    {
        title: 'Game',
        src: '/search/게임리뷰',
    },
];

export const snsLink = [
    {
        title: 'github',
        url: 'https://github.com/webstoryboy',
        icon: <AiFillGithub />,
    },
    {
        title: 'youtube',
        url: 'https://www.youtube.com/webstoryboy',
        icon: <AiFillYoutube />,
    },
    {
        title: 'codepen',
        url: 'https://codepen.io/webstoryboy',
        icon: <AiOutlineCodepen />,
    },
    {
        title: 'instagram',
        url: 'https://www.instagram.com/webstoryboy',
        icon: <AiOutlineInstagram />,
    },
];
