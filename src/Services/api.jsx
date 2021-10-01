import axios from "axios";

// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

axios.defaults.baseURL = 'https://pixabay.com/api/';
const key = '&key=22617397-addb084a927a6e55ecd24a84b';
const REQUEST = '&image_type=photo&orientation=horizontal&per_page=12';

export const fetchGallery = async (inputSearch, page) => {
    const responce = await axios.get(`?q=${inputSearch}&page=${page}${key}${REQUEST}`)
    return responce.data
}