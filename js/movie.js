import {
    genres, getCredits, getFilm, getSimilar, loadGenres, MovieAPI,
} from './api.js';
import { stopLoader, newListElement, redirectMain } from './global.js';

const filmGenres = document.getElementsByClassName('film-genres')[0];
const actorsBlock = document.getElementsByClassName('actors')[0];
const similarList = document.getElementById('similar-list');
const similarTitleDiv = document.getElementById('similar-title-div');

const newGenreDiv = (genre) => {
    const filmGenreDiv = document.createElement('div');
    filmGenreDiv.innerHTML = `
        <p class="genre-name">${genre}</p>
  `;
    filmGenreDiv.classList.add('film-genre');
    return filmGenreDiv;
};

const setFilmGenres = (list) => {
    filmGenres.innerHTML = '';
    list.forEach((el) => {
        filmGenres.appendChild(newGenreDiv(el.name));
    });
};

const newFieldValue = (value) => {
    const fieldValue = document.createElement('p');
    fieldValue.classList.add('field-value');
    fieldValue.innerHTML = value;
    return fieldValue;
};

const newActorDiv = (actorName, characterName, imgPath) => {
    const actorDiv = document.createElement('div');
    actorDiv.classList.add('actor');
    actorDiv.innerHTML = `
    <img
    src="${MovieAPI.img400(imgPath)}"
    alt=""
    class="actor-profile"
    />
    <p class="actor-name">${actorName}</p>
    <p class="character-name">${characterName}</p>
    `;
    return actorDiv;
};

const showActors = async (id) => {
    await getCredits(id).then(
        (credits) => {
            if (credits.cast.length === 0) document.getElementsByClassName('actors-block')[0].style.display = 'none';
            else {
                credits.cast.slice(0, 6).forEach(
                    (actor) => {
                        const actorDiv = newActorDiv(
                            actor.name,
                            actor.character,
                            actor.profile_path,
                        );
                        actorsBlock.appendChild(actorDiv);
                    },
                );
            }
        },
    );
};

const showSimilar = async (id) => {
    await getSimilar(id).then(
        (data) => {
            if (data.results.length === 0) {
                similarTitleDiv.style.display = 'none';
            }
            data.results.forEach(
                (result) => {
                    const elem = newListElement(
                        result.title,
                        result.release_date.split('-')[0],
                        result.genre_ids.map((g) => genres[g]),
                        MovieAPI.img400(result.poster_path),
                        result.id,
                    );
                    similarList.appendChild(elem);
                },
            );
        },
    );
};

const clearFilmField = (elem) => {
    [...elem.getElementsByClassName('field-value')].forEach((el) => {
        elem.removeChild(el);
    });
};

const convertMoney = (money) => {
    if (money === 0) return '<span style="opacity:0.75;">Невідомо</span>';
    const round = (x) => Math.round((money / x) * 100) / 100;
    if (money >= 1e9) return `${round(1e9)} млрд $`;
    if (money >= 1e6) return `${round(1e6)} млн $`;
    if (money >= 1e3) return `${round(1e3)} тис $`;
    return `${money} $`;
};

const setGeneralInfo = async (id) => {
    await getFilm(id).then((data) => {
        document.getElementsByClassName('film-title')[0].innerHTML = data.title;
        document.getElementsByClassName('film-tagline')[0].innerHTML = data.tagline;

        const production = document.getElementById('production');
        clearFilmField(production);
        let productionCompanies;
        if (data.production_companies.length === 0) {
            productionCompanies = [{ name: '<span style="opacity:0.75;">Невідомо</span>' }];
        } else {
            productionCompanies = data.production_companies.slice(0, 3);
        }
        productionCompanies.forEach((com) => {
            production.appendChild(newFieldValue(com.name));
        });
        const budget = document.getElementById('budget');
        clearFilmField(budget);
        budget.appendChild(newFieldValue(convertMoney(data.budget)));

        const revenue = document.getElementById('revenue');
        clearFilmField(revenue);
        revenue.appendChild(newFieldValue(convertMoney(data.revenue)));

        const description = document.getElementById('description');
        if (data.overview === '') description.innerHTML = '<span style="opacity:0.75;">Немає опису</span>';
        else description.innerHTML = data.overview;

        const poster = document.getElementById('film-poster');
        poster.setAttribute('src', MovieAPI.img400(data.poster_path));

        setFilmGenres(data.genres);
    }).catch(() => { redirectMain(); });
};

document.addEventListener('DOMContentLoaded', async () => {
    document.body.classList.remove('preload');

    const urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.has('id')) redirectMain();
    const id = urlParams.get('id');
    await loadGenres();
    await setGeneralInfo(id);
    await showActors(id);
    await showSimilar(id);
    stopLoader();
});
