import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';
import { useParams } from 'react-router-dom';
import VideoSearch from '../components/videos/VideoSearch';

function Search() {
    const { searchId } = useParams();
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
                    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=49&q=${searchId}&type=video&key=${apiKey}`
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
    }, [searchId, apiKey]);

    return (
        <Main title='유투브 검색' description='유튜브 검색 결과 페이지입니다.'>
            <section>
                <div className='video__inner search'>
                    {/* 에러 메시지 표시 */}
                    {error ? (
                        <div className='error-message'>{error}</div>
                    ) : (
                        <VideoSearch videos={videos} />
                    )}
                </div>
            </section>
        </Main>
    );
}

export default Search;
