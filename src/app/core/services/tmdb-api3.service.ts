import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MovieAPI {

    private API_LANG : string = "uk-UA";
    private API_KEY : string = "5db067978842452cc609c16c6d1c7121";

    movieDetails(movieId : string | number) {
        return `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.API_KEY}&language=${this.API_LANG}&include_image_language=en,uk,null`;
    }

    upcomingMovies() {
        return `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.API_KEY}&language=${this.API_LANG}&region=UA`;
    }

    trendingDay() {
        return `https://api.themoviedb.org/3/trending/movie/day?api_key=${this.API_KEY}&language=${this.API_LANG}`;
    }

    trendingWeek() {
        return `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.API_KEY}&language=${this.API_LANG}`;
    }

    genresList() {
        return `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.API_KEY}&language=${this.API_LANG}`;
    }

    getImgPath(size : string | number, imgPath : string) {
        if (imgPath) return `https://image.tmdb.org/t/p/${size}/${imgPath}`;
        return './img/poster.png';
    }

    imgOriginal(imgPath : string) {
        return this.getImgPath('original', imgPath);
    }

    img200(imgPath : string) {
        return this.getImgPath('w200', imgPath);
    }

    img400(imgPath : string) {
        return this.getImgPath('w400', imgPath);
    }

    nowPlaying() { return `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.API_KEY}&language=${this.API_LANG}&region=UA`; }

    credits(movieId : string | number) { return `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${this.API_KEY}&language=${this.API_LANG}`; }

    similar(movieId : string | number) {
        return `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${this.API_KEY}&language=${this.API_LANG}`;
    }

    topRated(page : string | number) {
        return `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.API_KEY}&language=${this.API_LANG}&page=${page || 1}`;
    }

    search(query : string) {
        return `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=${this.API_LANG}&query=${query}`;
    }
}