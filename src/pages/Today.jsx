import React from 'react';
import Main from '../components/section/Main';

import { todayText } from '../data/today';
import { Link } from 'react-router-dom';

function Today() {
    return (
        <Main title='추천 영상' description='오늘의 추천 유튜브 영상입니다.'>
            <section id='todayPage'>
                <h2>✨오늘의 추천 영상입니다.</h2>

                {todayText.map((today, key) => (
                    <div className='today__inner'>
                        <div className='today__thumb play__icon'>
                            <Link to={todayText[0].page}>
                                <img
                                    src={todayText[0].img}
                                    alt={todayText[0].title}
                                />
                            </Link>
                        </div>
                        {/* //today__thumb */}
                        <div className='today__text'>
                            <span className='today'>today!</span>
                            <h3 className='title'>
                                <Link to={todayText[0].page}>
                                    {todayText[0].title}
                                </Link>
                            </h3>
                            <p className='desc'>{todayText[0].desc}</p>
                            <div className='info'>
                                <span className='author'>
                                    <Link
                                        to={`/channel/${todayText[0].channelId}`}
                                    >
                                        {todayText[0].author}
                                    </Link>
                                </span>
                                <span className='data'>
                                    {todayText[0].date}
                                </span>
                            </div>
                        </div>
                        {/* //today__text */}
                    </div>
                ))}
            </section>
        </Main>
    );
}

export default Today;
