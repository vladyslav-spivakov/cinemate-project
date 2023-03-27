const API_KEY = '5db067978842452cc609c16c6d1c7121';
const API_LANG = 'uk-UA';
export class MovieAPI {
    static movieDetails(movieId) {
        return `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=${API_LANG}&include_image_language=en,uk,null`;
    }

    static upcomingMovies() {
        return `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=${API_LANG}&region=UA`;
    }

    static trendingDay() {
        return `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=${API_LANG}`;
    }

    static trendingWeek() {
        return `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=${API_LANG}`;
    }

    static genresList() {
        return `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=${API_LANG}`;
    }

    static getImgPath(size, imgPath) {
        if (imgPath) return `https://image.tmdb.org/t/p/${size}/${imgPath}`;
        return '/img/poster.png';
    }

    static imgOriginal(imgPath) {
        return this.getImgPath('original', imgPath);
    }

    static img200(imgPath) {
        return this.getImgPath('w200', imgPath);
    }

    static img400(imgPath) {
        return this.getImgPath('w400', imgPath);
    }

    static nowPlaying() { return `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=${API_LANG}&region=UA`; }

    static credits(movieId) { return `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=${API_LANG}`; }

    static similar(movieId) {
        return `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}&language=${API_LANG}`;
    }

    static topRated(page) {
        return `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=${API_LANG}&page=${page || 1}`;
    }

    static search(query) {
        return `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${API_LANG}&query=${query}`;
    }
}

export const genres = {};

const apiFetch = async (URL) => {
    const request = await fetch(URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return request.json();
};

export const loadGenres = async () => {
    await apiFetch(MovieAPI.genresList()).then(
        (data) => {
            data.genres.forEach((genre) => {
                genres[genre.id] = genre.name;
            });
        },
    );
};

export const getFilm = async (movieId) => apiFetch(MovieAPI.movieDetails(movieId));

export const getTrendingMovies = async (trendingType) => {
    let endpoint;
    if (trendingType === 'day') endpoint = MovieAPI.trendingDay();
    else endpoint = MovieAPI.trendingWeek();

    return apiFetch(endpoint);
};

export const getUpcomingMovies = async (upcomingType) => {
    let endpoint;
    if (upcomingType === 'nowPlaying') endpoint = MovieAPI.nowPlaying();
    else endpoint = MovieAPI.upcomingMovies();

    return apiFetch(endpoint);
};

export const getCredits = async (movieId) => apiFetch(MovieAPI.credits(movieId));

export const getSimilar = async (movieId) => apiFetch(MovieAPI.similar(movieId));

export const getTopRated = async (page) => apiFetch(MovieAPI.topRated(page));

export const getSearchResults = async (query) => apiFetch(MovieAPI.search(query));
