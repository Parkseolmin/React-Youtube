import React from 'react';
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

function Header() {
    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <a href='/'>
                    <em aria-hidden='true'></em>
                    <span>
                        webs
                        <br />
                        youtube
                    </span>
                </a>
            </h1>
            {/*  */}
            <nav className='header__menu'>
                <ul className='menu'>
                    <li className='active'>
                        <a href='/'>
                            <CiBaseball />
                            웹스토리보이
                        </a>
                    </li>
                    <li>
                        <a href='/today'>
                            <CiMoneyBill />
                            추천영상
                        </a>
                    </li>
                    <li>
                        <a href='/developer'>
                            <CiCoins1 />
                            추천 개발자
                        </a>
                    </li>
                    <li>
                        <a href='/webd'>
                            <CiBoxes />
                            웹디자인기능사
                        </a>
                    </li>
                    <li>
                        <a href='/website'>
                            <CiBullhorn />
                            웹표준 사이트
                        </a>
                    </li>
                    <li>
                        <a href='/gsap'>
                            <CiCoffeeCup />
                            GSAP Parallax
                        </a>
                    </li>
                    <li>
                        <a href='/port'>
                            <CiDumbbell />
                            포트폴리오 사이트
                        </a>
                    </li>
                    <li>
                        <a href='/youtube'>
                            <CiFries />
                            유튜브 클론 사이트
                        </a>
                    </li>
                </ul>
                {/*  */}
                <ul className='keyword'>
                    <li>
                        <a href='/search/webstoryboy'>webstoryboy</a>
                        <a href='/search/html'>html</a>
                        <a href='/search/css'>css</a>
                        <a href='/search/javascript'>javascript</a>
                        <a href='/search/react.js'>react.js</a>
                        <a href='/search/vue.js'>vue.js</a>
                        <a href='/search/next.js'>next.js</a>
                        <a href='/search/node.js'>node.js</a>
                        <a href='/search/sql'>sql</a>
                        <a href='/search/React Portfolio'>Portfolio</a>
                        <a href='/search/NewJeans'>music</a>
                    </li>
                </ul>
                {/*  */}
                <div className='header__sns'>
                    <ul>
                        <li>
                            <a
                                href='https://github.com/webstoryboy'
                                rel='noopener noreferrer'
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.youtube.com/webstoryboy'
                                rel='noopener noreferrer'
                            >
                                <AiFillYoutube />
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://codepen.io/webstoryboy'
                                rel='noopener noreferrer'
                            >
                                <AiOutlineCodepen />
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.instagram.com/webstoryboy'
                                rel='noopener noreferrer'
                            >
                                <AiOutlineInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
