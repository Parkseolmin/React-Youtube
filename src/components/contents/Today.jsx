import React, { useEffect, useState } from 'react';
import { todayText } from '../../data/today.js';
import { Link } from 'react-router-dom';
import { fetchPopularVideos } from '../../utils/YoutubeAPI.js';

export default function Today() {
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(null);

    // REACT_APP_API_KEY 환경 변수를 apiKey에 할당
    const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

    useEffect(() => {
        // API 키가 설정되지 않은 경우 에러 처리
        if (!apiKey) {
            setError('YouTube API key가 설정되지 않았습니다.');
            return;
        }

        // API 요청 함수를 async/await를 이용해 개선
        const fetchData = async () => {
            try {
                const popularVideos = await fetchPopularVideos(apiKey);
                setVideos(popularVideos);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, [apiKey]);
    const firstItem = todayText[0];
    return (
        <section id='today'>
            <div className='today__inner'>
                <div className='today__thumb play__icon'>
                    <Link to='/today'>
                        <img
                            src={
                                videos.length > 0
                                    ? videos[0].snippet.thumbnails.medium.url
                                    : firstItem.img
                            }
                            alt={firstItem.title}
                        />
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
