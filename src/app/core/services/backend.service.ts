import { Injectable } from "@angular/core";
import { MovieAPI } from "./tmdb-api3.service";
import { Observable, BehaviorSubject } from "rxjs";
import { genreList } from "../models/genreList";
@Injectable({
    providedIn: "root"
})
export class BackendService { 

    genres = new BehaviorSubject<genreList>({});
    
    constructor(private urls : MovieAPI) {
        this.loadGenres();
    }

    private async apiFetch(URL : string) {
        const request = await fetch(URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return request.json();
    };
    async getTrendingMovies(trendingType : string) {
        let endpoint : string;
        if (trendingType === 'day') endpoint = this.urls.trendingDay();
        else endpoint = this.urls.trendingWeek();
      
        return await this.apiFetch(endpoint);
    }   

    async loadGenres(){
        await this.apiFetch(this.urls.genresList()).then(
            (data) => {
                const genres : genreList = {};
                data.genres.forEach((genre : {id:number, name:string}) => {
                    genres[genre.id] = genre.name;
                });
                this.genres.next(genres);
            },
        );
    };
    



    async getFilm(movieId : string | number) {
        return this.apiFetch(this.urls.movieDetails(movieId));
    }
    
    
    
    async getUpcomingMovies(upcomingType : string) {
        let endpoint;
        if (upcomingType === 'nowPlaying') endpoint =  this.urls.nowPlaying();
        else endpoint =  this.urls.upcomingMovies();
    
        return this.apiFetch(endpoint);
    };
    
    async getCredits(movieId : string)  {
        this.apiFetch( this.urls.credits(movieId));
    }
    
    async getSimilar(movieId : string | number)  {
        return this.apiFetch( this.urls.similar(movieId));
    }
    
    async getTopRated(page : string | number)  {
        return this.apiFetch(this.urls.topRated(page));
    }
    
    async getSearchResults(query : string) {
        return this.apiFetch(this.urls.search(query));
    }
    
}