import {
    getTopRated, genres, loadGenres, MovieAPI,
} from './api.js';
import { newListElement } from './global.js';

let totalPages;
let currentPage = 1;

const fullpageList = document.getElementsByClassName('fullpage-list')[0];

const filmlistPageValue = document.getElementById('filmlist-page-value');
const prevPageButton = document.getElementsByClassName('filmlist-page-btn')[0];
const nextPageButton = document.getElementsByClassName('filmlist-page-btn')[1];
const pageLoader = document.getElementById('page-loader');
const topRatedBlock = document.getElementById('top-rated');

const showListFromData = (data) => {
    fullpageList.innerHTML = '';
    data.results.forEach((result) => {
        const elem = newListElement(result.title, result.release_date.split('-')[0], result.genre_ids.map((g) => genres[g]), MovieAPI.img400(result.poster_path), result.id);
        fullpageList.appendChild(elem);
    });
};

const showPage = async (page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return getTopRated(page).then((data) => {
        totalPages = Math.round(data.total_pages / 2);
        showListFromData(data);
        filmlistPageValue.value = page;
    });
};

const hideLoader = () => {
    pageLoader.style.display = 'none';
    topRatedBlock.style.display = 'initial';
    topRatedBlock.style.opacity = 1;
    pageLoader.style.opacity = 0;
};

document.addEventListener('DOMContentLoaded', async () => {
    await loadGenres();
    await showPage(currentPage);
    hideLoader();
});

nextPageButton.addEventListener('click', () => {
    if (currentPage !== totalPages - 1) {
        currentPage += 1;
        showPage(currentPage);
    }
});
prevPageButton.addEventListener('click', () => {
    if (currentPage !== 1) {
        currentPage -= 1;
        showPage(currentPage);
    }
});

filmlistPageValue.addEventListener('input', (e) => {
    e.target.value = e.target.value.replaceAll(/[^0-9]/g, '');
    if (e.target.value === '') e.target.value = currentPage;
    if (e.target.value !== currentPage) {
        if (e.target.value > totalPages) {
            e.target.value = totalPages - 1;
        } else {
            showPage(e.target.value);
        }
    }
});
