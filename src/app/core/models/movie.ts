export interface MovieList {
    page : number;
    total_pages : number;
    total_results : number;
    results : Movie[]
}

export interface Movie {
    genre_ids : number[];
    title : string;
    overview : string;
    poster_path : string;
    release_date : string;
    id : number;
}