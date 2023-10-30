import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPopularVideos } from '../../utils/YoutubeAPI.js';

export default function Today() {
    const [videos, setVideos] = useState([]);

    // REACT_APP_API_KEY 환경 변수를 apiKey에 할당
    const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

    useEffect(() => {
        // API 키가 설정되지 않은 경우 에러 처리
        if (!apiKey) {
            console.error('YouTube API key가 설정되지 않았습니다.');
            return;
        }

        // API 요청 함수를 async/await를 이용해 개선
        const fetchData = async () => {
            try {
                const popularVideos = await fetchPopularVideos(apiKey);
                setVideos(popularVideos);
                console.log(videos[0].id);
            } catch (err) {
                console.error(err.message);
            }
        };

        fetchData();
    }, [apiKey, videos]);
    return (
        <section id='today'>
            <div className='today__inner'>
                <div className='today__thumb play__icon'>
                    <Link to='/today'>
                        <img
                            src={
                                videos.length > 0
                                    ? videos[0].snippet.thumbnails.medium.url
                                    : ''
                            }
                            alt={
                                videos.length > 0 ? videos[0].snippet.title : ''
                            }
                        />
                    </Link>
                </div>
                {/* //today__thumb */}
                <div className='today__text'>
                    <span className='today'>today!</span>
                    <h3 className='title'>
                        <Link
                            to={
                                videos.length > 0
                                    ? `/video/${videos[0].id}`
                                    : ''
                            }
                        >
                            {videos.length > 0 ? videos[0].snippet.title : ''}
                        </Link>
                    </h3>
                    <p className='desc'>
                        {videos.length > 0 ? videos[0].snippet.description : ''}
                    </p>
                    <div className='info'>
                        <span className='author'>
                            <Link
                                to={
                                    videos.length > 0
                                        ? `/channel/${videos[0].snippet.channelId}`
                                        : ''
                                }
                            >
                                {videos.length > 0
                                    ? videos[0].snippet.tags
                                          .slice(0, 3)
                                          .join(',  ')
                                    : ''}
                            </Link>
                        </span>

                        <span className='data'>
                            {' '}
                            {new Date(
                                videos.length > 0
                                    ? videos[0].snippet.publishedAt
                                    : ''
                            ).toDateString()}
                        </span>
                    </div>
                </div>
                {/* //today__text */}
            </div>
        </section>
    );
}
