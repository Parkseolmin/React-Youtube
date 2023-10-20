import React from 'react';
import { todayText } from '../../data/today.js';
import { Link } from 'react-router-dom';

export default function Today() {
    const firstItem = todayText[0];
    return (
        <section id='today'>
            <div className='today__inner'>
                <div className='today__thumb play__icon'>
                    <Link to={firstItem.page}>
                        <img src={firstItem.img} alt={firstItem.title} />
                    </Link>
                </div>
                {/* //today__thumb */}
                <div className='today__text'>
                    <span className='today'>today!</span>
                    <h3 className='title'>
                        <Link to={firstItem.page}>{firstItem.title}</Link>
                    </h3>
                    <p className='desc'>{firstItem.desc}</p>
                    <div className='info'>
                        <span className='author'>
                            <Link to={`/channel/${firstItem.channelId}`}>
                                {firstItem.author}
                            </Link>
                        </span>
                        <span className='data'>{firstItem.date}</span>
                    </div>
                </div>
                {/* //today__text */}
            </div>
        </section>
    );
}
