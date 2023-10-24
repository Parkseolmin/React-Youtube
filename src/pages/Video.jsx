import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';
import { Link, useParams } from 'react-router-dom';

import { fetchFromAPI } from '../utils/RapidAPI';
import ReactPlayer from 'react-player';
import { CiChat1, CiStar, CiRead } from 'react-icons/ci';

function Video() {
    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet, statistics&id=${videoId}`)
            .then((data) => {
                console.log(data);
                setVideoDetail(data.items[0]);
            })
            .then((error) => {
                console.error(error);
            });
    }, [videoId]);

    const formatNumber = (number) => {
        const formatter = new Intl.NumberFormat('KR', {
            notation: 'compact',
            compactDisplay: 'short',
        });
        return formatter.format(number);
    };

    const { viewCount, likeCount, commentCount } =
        (videoDetail && videoDetail.statistics) || {};
    const formattedViewCount = formatNumber(viewCount);
    const formattedLikeCount = formatNumber(likeCount);
    const formattedCommentCount = formatNumber(commentCount);

    return (
        <Main
            title='유튜브 비디오 영상'
            description='유튜브 비디오 영상을 볼 수 있습니다.W'
        >
            <section id='videoViewPage'>
                {videoDetail && (
                    <div className='video__view'>
                        <div className='video__play'>
                            <ReactPlayer
                                playing={true}
                                controls={true}
                                url={`https://www.youtube.com/watch?v=${videoId}`}
                                width='100%'
                                height='100%'
                                style={{
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                }}
                            />
                        </div>
                        <div className='video__info'>
                            <h2 className='video__title'>
                                {videoDetail.snippet.title}
                            </h2>
                            <div className='video__channel'>
                                <div className='id'>
                                    <Link to={'/channel/'}>
                                        {videoDetail.snippet.channelTitle}
                                    </Link>
                                </div>
                                <div className='count'>
                                    <span className='view'>
                                        {' '}
                                        <CiRead /> {formattedViewCount}{' '}
                                    </span>{' '}
                                    <span className='like'>
                                        {' '}
                                        <CiStar /> {formattedLikeCount}{' '}
                                    </span>{' '}
                                    <span className='comment'>
                                        {' '}
                                        <CiChat1 /> {formattedCommentCount}{' '}
                                    </span>
                                </div>
                            </div>
                            <div className='video__desc'>
                                {videoDetail.snippet.description}
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </Main>
    );
}

export default Video;
