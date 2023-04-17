import { genreList } from "./genreList";

export interface MovieList {
    page : number;
    total_pages : number;
    total_results : number;
    results : Movie[]
}

export interface Movie {
    genre_ids : number[];
    genres : any[];
    title : string;
    tagline : string;
    budget: number;
    revenue: number;
    production_companies : {name:string}[];
    overview : string;
    poster_path : string;
    release_date : string;
    id : number;
}