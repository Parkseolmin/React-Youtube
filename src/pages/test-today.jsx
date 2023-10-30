// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Main from '../components/section/Main';

// import VideoSearch from '../components/videos/VideoSearch';

// const Search = () => {
//     /**
//      * 1. URL에서 검색어 가져오기
//      * 2. 가져온 검색어를 변수에 저장
//      * 3. fetch()를 이용해 검색어를 쿼리에 넣어 요청
//      * 4. 결과를 받아옴
//      * 5. 보여주기
//      * 6. 새로운 검색어가 있을 시 1~5번 재 실행
//      */
//     /**
//      * 1. useParams 훅을 이용해 url에서 검색어를 가져와 저장
//      * 2. useEffect 훅을 만들어 검색어가 변경될 경우, 실행이 되도록 선언
//      * 3. useEffect 훅 안에 fetch함수를 통해 저장한 검색어를 쿼리안에 넣어 요청
//      * 4. 받아온 정보를 json형태로 변환
//      * 5. 받아온 정보를 useState훅으로 선언한 변수에 저장
//      * 6. useEffect의 의존성 배열에 useParams훅으로 선언한 변수를 넣어 바뀔 때마다 재실행
//      */
//     const { searchWords } = useParams();
//     const [videos, setVideos] = useState([]);

//     useEffect(() => {
//         fetch(
//             `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchWords}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
//         )
//             .then((response) => response.json())
//             .then((results) => {
//                 console.log(results);
//                 setVideos(results.items);
//             })
//             .catch((err) => {
//                 console.error(err);
//             });
//     }, [searchWords]);

//     return (
//         <Main title='유투브 검색' description='유튜브 검색 결과 페이지입니다.'>
//             <section id='searchPage'>
//                 <div className='video__inner search'>
//                     <VideoSearch videos={videos} />
//                 </div>
//             </section>
//         </Main>
//     );
// };

// export default Search;
