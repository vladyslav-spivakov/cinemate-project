import { TestBed } from "@angular/core/testing";
import { BackendService } from "./backend.service";
import { MovieAPI } from "./tmdb-api3.service";


describe(`MovieAPIService`, () => {
    let underTest: MovieAPI;

    beforeEach(async () => {
        TestBed.configureTestingModule({
        });

        underTest = TestBed.inject(MovieAPI);
    });
    it('should create', () => {
        expect(underTest).toBeTruthy();
    })

    describe('movieDetails', () => {
        it('should return movieDetails api url', () => {
            const res = underTest.movieDetails(123123);
            expect(res).toBeTruthy();
            expect(res).toContain('123123');
        })
    });
    describe('upcomingMovies', () => {
        it('should return upcomingMovies api url', () => {
            expect(underTest.upcomingMovies()).toBeTruthy();
        })
    });
    describe('trendingMovies', () => {
        it('should return trendingMovies day and week api url', () => {
            expect(underTest.trendingDay()).toBeTruthy();
            expect(underTest.trendingWeek()).toBeTruthy();
        })
    });
    describe('genresList', () => {
        it('should return genresList api url', () => {
            expect(underTest.genresList()).toBeTruthy();
        })
    });

    describe('imgPath', () => {
        it('should return image api url if imgPath provided', () => {
            expect(underTest.getImgPath(400, 'imgPath123123')).toContain('imgPath123123');
        })
        it('should return local img if imgPath not provided to getImgPath function', () => {
            expect(underTest.getImgPath(400, '')).toContain('assets');
        })
    });

    describe('img400', () => {
        it('should return imgPath size 400', () => {
            expect(underTest.img400('img123')).toContain('400');
        })
    });
    describe('img200', () => {
        it('should return imgPath size 200', () => {
            expect(underTest.img200('img123')).toContain('200');
        })
    });
    describe('imgOriginal', () => {
        it('should return imgPath size original ', () => {
            expect(underTest.imgOriginal('img123')).toContain('original');
        })
    });

    describe('nowPlaying', () => {
        it('should return nowPlaying api url', () => {
            expect(underTest.nowPlaying()).toBeTruthy();
        })
    });
    describe('credits', () => {
        it('should return credits api url', () => {
            expect(underTest.credits(12)).toBeTruthy();
        })
    });
    describe('similar', () => {
        it('should return similar api url', () => {
            expect(underTest.similar(22)).toBeTruthy();
        })
    });
    describe('topRated', () => {
        it('should return topRated api url', () => {
            expect(underTest.topRated(11)).toBeTruthy();
        })
    });
    describe('search', () => {
        it('should return search api url', () => {
            expect(underTest.search('test')).toBeTruthy();
        })
    });
})

