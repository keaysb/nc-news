import axios from "axios"

export function getArticles () {
    return axios
    .get(`https://nc-news-1ldz.onrender.com/api/articles`)
    .then((res) => {
        return res.data
    });
}