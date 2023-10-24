import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/RapidAPI';

import Main from '../components/section/Main';
import VideoSearch from '../components/videos/VideoSearch';

import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';

const Channel = () => {
    const { channelId } = useParams();
    const [channelDetail, setChannelDetail] = useState();
    const [channelVideo, setChannelVideo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPageToken, setNextPageToken] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const data = await fetchFromAPI(
                    `channels?part=snippet&id=${channelId}`
                );
                setChannelDetail(data.items[0]);

                const videosData = await fetchFromAPI(
                    `search?channelId=${channelId}&part=snippet%2Cid&order=date`
                );
                setChannelVideo(videosData?.items);
                setNextPageToken(videosData?.nextPageToken);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchResults();
    }, [channelId]);

    const loadMoreVideos = async () => {
        if (nextPageToken) {
            const videosData = await fetchFromAPI(
                `search?channelId=${channelId}&part=snippet%2Cid&order=date&pageToken=${nextPageToken}`
            );
            setChannelVideo((prevVideos) => [
                ...prevVideos,
                ...videosData.items,
            ]);
            setNextPageToken(videosData?.nextPageToken);
        }
    };

    const formatNumber = (number) => {
        const formatter = new Intl.NumberFormat('KR', {
            notation: 'compact',
            compactDisplay: 'short',
        });
        return formatter.format(number);
    };

    const { subscriberCount, videoCount, viewCount } =
        (channelDetail && channelDetail.statistics) || {};

    const formattedViewCount = formatNumber(subscriberCount);
    const formattedLikeCount = formatNumber(videoCount);
    const formattedCommentCount = formatNumber(viewCount);

    const channelPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main title='유튜브 채널' description='유튜브 채널페이지입니다.'>
            <section id='channel' className={channelPageClass}>
                {channelDetail && (
                    <div className='channel__inner'>
                        <div
                            className='channel__header'
                            style={{
                                backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})`,
                            }}
                        >
                            <div className='circle'>
                                <img
                                    src={
                                        channelDetail.snippet.thumbnails.high
                                            .url
                                    }
                                    alt={channelDetail.snippet.title}
                                />
                            </div>
                        </div>
                        <div className='channel__info'>
                            <h3 className='title'>
                                {channelDetail.snippet.title}
                            </h3>
                            <p className='desc'>
                                {channelDetail.snippet.description}
                            </p>
                            <div className='info'>
                                <span>
                                    <BsPeople />
                                    구독 : {formattedViewCount}
                                </span>
                                <span>
                                    <AiOutlineHeart />
                                    좋아요 : {formattedLikeCount}
                                </span>
                                <span>
                                    <AiOutlineComment />
                                    댓글 : {formattedCommentCount}
                                </span>
                            </div>
                        </div>
                        <div className='channel__video video__inner search'>
                            <VideoSearch videos={channelVideo} />
                        </div>
                        <div className='channel__more'>
                            {nextPageToken && (
                                <button onClick={loadMoreVideos}>
                                    더 보기
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </section>
        </Main>
    );
};

export default Channel;
