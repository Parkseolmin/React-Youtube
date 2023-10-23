import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';
import { Link } from 'react-router-dom';

function Today() {
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
                const response = await fetch(
                    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=${apiKey}`
                );

                if (!response.ok) {
                    throw new Error('API 요청에 실패했습니다.');
                }

                const result = await response.json();
                setVideos(result.items);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, [apiKey]);

    return (
        <Main title='추천 영상' description='오늘의 추천 유튜브 영상입니다.'>
            <section id='todayPage'>
                <h2>✨오늘의 추천 영상입니다.</h2>

                {/* 에러 메시지 표시 */}
                {error ? (
                    <div className='error-message'>{error}</div>
                ) : (
                    videos.map((video, key) => (
                        <div className='today__inner' key={key}>
                            <div className='today__thumb play__icon'>
                                <Link to={`/video/${video.id}`}>
                                    <img
                                        src={
                                            video.snippet.thumbnails.medium.url
                                        }
                                        alt={video.snippet.title}
                                    />
                                </Link>
                            </div>
                            <div className='today__text'>
                                <span className='today'>today!</span>
                                <h3 className='title'>
                                    <Link to={`/video/${video.id}`}>
                                        {video.snippet.title}
                                    </Link>
                                </h3>
                                <p className='desc'>
                                    {video.snippet.description}
                                </p>
                                <div className='info'>
                                    <span className='author'>
                                        <Link
                                            to={`/channel/${video.snippet.channelId}`}
                                        >
                                            {video.snippet.channelTitle}
                                        </Link>
                                    </span>
                                    <span className='data'>
                                        {video.snippet.publishedAt}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </section>
        </Main>
    );
}

export default Today;
