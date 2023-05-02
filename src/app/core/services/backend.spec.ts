import { TestBed, inject } from '@angular/core/testing';
import { MovieAPI } from './tmdb-api3.service';
import { BackendService } from './backend.service';
import { Movie } from '../models/movie';

describe('BackendService', () => {
  let underTest: BackendService;
  let movieAPI: MovieAPI;
  let movies: Movie[] = [
    {
      genre_ids: [],
      genres: [],
      title: 'Title1',
      tagline: 'tag1',
      budget: 0,
      revenue: 0,
      production_companies: [],
      overview: 'over1',
      poster_path: 'path1',
      release_date: '',
      id: 100
    },
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendService, MovieAPI]
    });
    underTest = TestBed.inject(BackendService);
    movieAPI = TestBed.inject(MovieAPI);
  });

  it('should be created', () => {
    expect(underTest).toBeTruthy();
  });

  describe('getTrendingMovies', () => {
    it('should return a list of trending movies for the day', (done) => {
      const trendingType = 'day';
      const endpoint = movieAPI.trendingDay();
      const apiFetchSpy = spyOn(underTest, 'apiFetch').and.resolveTo({ results: movies });
      underTest.getTrendingMovies(trendingType).then((result: any) => {
        expect(apiFetchSpy).toHaveBeenCalledWith(endpoint);
        expect(result.results).toBe(movies);
        done();
      });
    });

    it('should return a list of trending movies for the week', (done) => {
      const trendingType = 'week';
      const endpoint = movieAPI.trendingWeek();
      const apiFetchSpy = spyOn(underTest, 'apiFetch').and.resolveTo({ results: movies });

      underTest.getTrendingMovies(trendingType).then((result: any) => {
        expect(apiFetchSpy).toHaveBeenCalledWith(endpoint);
        expect(result.results).toEqual(movies);
        done();
      });
    });
  });

  describe('getUpcomingMovies', () => {
    it('should return a list of now playing movies if type is nowPlaying', (done) => {
      const upcomingType = 'nowPlaying';
      const endpoint = movieAPI.nowPlaying();
      const apiFetchSpy = spyOn(underTest, 'apiFetch').and.resolveTo({ results: movies });
      underTest.getUpcomingMovies(upcomingType).then((result: any) => {
        expect(apiFetchSpy).toHaveBeenCalledWith(endpoint);
        expect(result.results).toBe(movies);
        done();
      });
    });

    it('should return a list of upcoming movies if type is else', (done) => {
      const upcomingType = 'upcoming';
      const endpoint = movieAPI.upcomingMovies();
      const apiFetchSpy = spyOn(underTest, 'apiFetch').and.resolveTo({ results: movies });
      underTest.getUpcomingMovies(upcomingType).then((result: any) => {
        expect(apiFetchSpy).toHaveBeenCalledWith(endpoint);
        expect(result.results).toBe(movies);
        done();
      });
    });
  });

  describe('getFilm', () => {
    it('should return the details of a movie', (done) => {
      const movieId = '12345';
      const endpoint = movieAPI.movieDetails(movieId);
      const apiFetchSpy = spyOn(underTest, 'apiFetch').and.resolveTo(movies[0]);

      underTest.getFilm(movieId).then((result: any) => {
        expect(apiFetchSpy).toHaveBeenCalledWith(endpoint);
        expect(result).toBe(movies[0]);
        done();
      });
    });
  });


  describe('getCredits', () => {
    it('should return the cast and the crew of a movie', (done) => {
      const credits = {
        cast: [
          {
            id: 100
          },
          { id: 200 }
        ],
        crew : [
          {
            id: 400
          },
          { id: 500 }
        ]
      }
      const movieId = '12345';
      const endpoint = movieAPI.credits(movieId);
      const apiFetchSpy = spyOn(underTest, 'apiFetch').and.resolveTo(credits);

      underTest.getCredits(movieId).then((result: any) => {
        expect(apiFetchSpy).toHaveBeenCalledWith(endpoint);
        expect(result).toEqual(credits);
        done();
      });
    });
  });

  describe('getSimilar', () => {
    it('should return the similar movies', (done) => {
      const movieId = '12345';
      const endpoint = movieAPI.similar(movieId);
      const apiFetchSpy = spyOn(underTest, 'apiFetch').and.resolveTo({results:movies});

      underTest.getSimilar(movieId).then((result: any) => {
        expect(apiFetchSpy).toHaveBeenCalledWith(endpoint);
        expect(result.results).toEqual(movies);
        done();
      });
    });
  });
  describe('getTopRated', () => {
    it('should return the top rated movies', (done) => {
      const endpoint = movieAPI.topRated(1);
      const apiFetchSpy = spyOn(underTest, 'apiFetch').and.resolveTo({results:movies});

      underTest.getTopRated(1).then((result: any) => {
        expect(apiFetchSpy).toHaveBeenCalledWith(endpoint);
        expect(result.results).toEqual(movies);
        done();
      });
    });
  });

  describe('getSearchResults', () => {
    it('should return the search results', (done) => {
      const query = "query-test";
      const endpoint = movieAPI.search(query);
      const apiFetchSpy = spyOn(underTest, 'apiFetch').and.resolveTo({results:movies});

      underTest.getSearchResults(query).then((result: any) => {
        expect(apiFetchSpy).toHaveBeenCalledWith(endpoint);
        expect(result.results).toEqual(movies);
        done();
      });
    });
  });
  // Add more tests for other methods as needed
});
