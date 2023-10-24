// api.js

export async function fetchPopularVideos(apiKey) {
    try {
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=${apiKey}`
        );

        if (!response.ok) {
            throw new Error('API 요청에 실패했습니다.');
        }

        const result = await response.json();
        return result.items;
    } catch (err) {
        throw err;
    }
}
