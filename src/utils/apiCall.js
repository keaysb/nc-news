import axios from "axios";

export function apiCall() {
    return axios.create({
        baseURL: 'https://nc-news-1ldz.onrender.com/api/',
    });
}
