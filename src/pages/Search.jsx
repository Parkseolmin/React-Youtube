import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Main from '../components/section/Main';

import VideoSearch from '../components/videos/VideoSearch';
import { fetchFromAPI } from '../utils/RapidAPI';

function Search() {
    const { searchId } = useParams();
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(null);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setVideos([]);
        fetchVideos(searchId);
        setLoading(true);
    }, [searchId]);

    const fetchVideos = async (query, pageToken = '') => {
        try {
            const data = await fetchFromAPI(
                `search?part=snippet&q=${query}${
                    pageToken ? `&pageToken=${pageToken}` : ''
                }`
            );
            setNextPageToken(data.nextPageToken);
            setVideos((prevVideos) => [...prevVideos, ...data.items]);
            setLoading(false);
        } catch (error) {
            setError('데이터를 불러오는 중에 오류가 발생했습니다.');
            console.error(error);
            setLoading(false);
        }
    };

    const handleLoadMore = () => {
        if (nextPageToken) {
            fetchVideos(searchId, nextPageToken);
        }
    };

    const searchPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main title='유투브 검색' description='유튜브 검색 결과 페이지입니다.'>
            <section id='searchPage' className={searchPageClass}>
                <div className='video__inner search'>
                    {/* 에러 메시지 표시 */}
                    {error ? (
                        <div className='error-message'>{error}</div>
                    ) : (
                        <VideoSearch videos={videos} />
                    )}
                </div>
                <div className='video__more'>
                    {nextPageToken && (
                        <button onClick={handleLoadMore}>더보기</button>
                    )}
                </div>
            </section>
        </Main>
    );
}

export default Search;
