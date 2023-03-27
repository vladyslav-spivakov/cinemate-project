import {
    loadGenres, getTrendingMovies, getUpcomingMovies, genres, MovieAPI,
} from './api.js';
import { stopLoader, newListElement } from './global.js';

const upcomingChoice = document.getElementById('upcoming-choice');
const trending = document.getElementById('trending');
const trendingCheckbox = trending.getElementsByTagName('input')[0];
const trendingList = trending.getElementsByClassName('horizontal-list')[0];
const upcomingList = document
    .getElementById('upcoming')
    .getElementsByClassName('horizontal-list')[0];

const showTrending = async (trendingType) => {
    await getTrendingMovies(trendingType).then(
        (data) => {
            trendingList.scrollTo({ left: 0, behavior: 'smooth' });
            trendingList.innerHTML = '';
            data.results.forEach((e) => {
                const listElement = newListElement(e.title, e.release_date.split('-')[0], e.genre_ids.map((el) => genres[el]), MovieAPI.img400(e.poster_path), e.id);
                trendingList.appendChild(listElement);
            });
        },
    );
};

const showUpcoming = async (upcomingType) => {
    await getUpcomingMovies(upcomingType).then(
        (data) => {
            upcomingList.scrollTo({ left: 0, behavior: 'smooth' });
            upcomingList.innerHTML = '';
            data.results.forEach((e) => {
                const listElement = newListElement(e.title, e.release_date.split('-')[0], e.genre_ids.map((el) => genres[el]), MovieAPI.img200(e.poster_path), e.id);
                upcomingList.appendChild(listElement);
            });
        },
    );
};

document.addEventListener('DOMContentLoaded', async () => {
    await loadGenres();
    await showTrending(trendingCheckbox.checked ? 'day' : 'week');
    await showUpcoming(upcomingChoice.checked ? 'nowPlaying' : 'upcoming');
    stopLoader();
});
trendingCheckbox.addEventListener('change', async (e) => {
    const trendingType = e.target.checked ? 'day' : 'week';
    showTrending(trendingType);
});

upcomingChoice.addEventListener('change', async (e) => {
    const upcomingType = e.target.checked ? 'nowPlaying' : 'upcoming';
    showUpcoming(upcomingType);
});
