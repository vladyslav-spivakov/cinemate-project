import {
    getSearchResults, loadGenres, MovieAPI, genres,
} from './api.js';

const searchInput = document.getElementsByClassName('search-input')[0];
const searchResults = document.getElementsByClassName('search-results')[0];

document.addEventListener('DOMContentLoaded', () => {
    loadGenres();
    searchResults.innerHTML = '<span class="no-results">Немає результатів. Введіть назву у стрічку пошуку</span>';
    searchInput.value = '';
});

const newSearchElement = (movie) => {
    const listElement = document.createElement('a');
    listElement.setAttribute('href', `./movie.html?id=${movie.id}`);
    listElement.classList.add('list-element');
    listElement.innerHTML = `
            <div class="poster">
              <img
                src="${MovieAPI.img400(movie.poster_path)}"
              />
            </div>
            <div class="details">
              <p class="title">${movie.title}</p>
              <p class="subtitle">${(movie.release_date && movie.release_date.split('-')[0]) + (movie.genre_ids.length !== 0 ? ', ' : '')} ${movie.genre_ids.map((e) => genres[e]).join(', ')}</p>
              <p class="description">
              ${movie.overview}
              </p>
            </div>
          `;
    listElement.addEventListener('click', () => {
        searchInput.value = '';
    });
    return listElement;
};

const showSearchResults = async (query) => {
    await getSearchResults(query).then(
        (data) => {
            searchResults.innerHTML = '';

            if (data.results.length === 0) searchResults.innerHTML = `<span class="no-results">Немає результатів за "${query}"</span>`;
            data.results.forEach((movie) => {
                const elem = newSearchElement(movie);
                searchResults.appendChild(elem);
            });
        },
    );
};

searchInput.addEventListener('input', (e) => {
    if (e.target.value) {
        showSearchResults(e.target.value);
    } else {
        searchResults.innerHTML = '<span class="no-results">Немає результатів. Введіть назву у стрічку пошуку</span>';
    }
});
