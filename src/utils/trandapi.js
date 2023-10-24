import axios from 'axios';

export const BASE_TRAND_URL =
    'https://youtube-search-and-download.p.rapidapi.com/trending';

const options = {
    params: {
        type: 'n',
        hl: 'ko',
        gl: 'KR',
    },
    headers: {
        'X-RapidAPI-Key': '9fa94a5187mshc7fcb07d47a5a35p16df44jsnf921a8e933ad',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    },
};

export const fetchFromTrandAPI = async (url) => {
    const { content } = await axios.get(`${BASE_TRAND_URL}/${url}`, options);
    return content;
};
