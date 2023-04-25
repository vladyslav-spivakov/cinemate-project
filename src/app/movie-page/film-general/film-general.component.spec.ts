import { DebugElement, SimpleChange, SimpleChanges} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoreModule } from 'src/app/core/core.module';
import { Movie } from 'src/app/core/models/movie';
import { MovieAPI } from 'src/app/core/services/tmdb-api3.service';
import { MoviePageModule } from '../movie-page.module';


import { FilmGeneralComponent } from './film-general.component';

class MockMovieAPI {
  imgOriginal(poster_path : any) {
    return `original/${poster_path}`
  }
}

describe('FilmGeneralComponent', () => {
  let component: FilmGeneralComponent;
  let fixture: ComponentFixture<FilmGeneralComponent>;
  let de : DebugElement;
  let api : MockMovieAPI;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviePageModule],
      declarations: [ FilmGeneralComponent ],
      providers:[{provide:MovieAPI, useClass:MockMovieAPI}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmGeneralComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    api = new MockMovieAPI();
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should set data1`, () => {
    const movie : Movie = {
      poster_path: "path1",
      genre_ids: [],
      genres: [],
      title: '',
      tagline: '',
      budget: 0,
      revenue: 1e9,
      production_companies: [],
      overview: '',
      release_date: '',
      id: 0
    }

    const changes : SimpleChanges = {
      movie : new SimpleChange(null,movie,false)
    }
    component.movie = movie;
    component.ngOnChanges(changes);
    expect(component.posterPath).toBe(api.imgOriginal(movie.poster_path));
    expect(component.budget).toBe('');
    expect(component.revenue).toBe('1 млрд $');
  });

  it(`should convert money properly`, ()=> {
    const movie : Movie = {
      poster_path: "path1",
      genre_ids: [],
      genres: [],
      title: '',
      tagline: '',
      budget: 1e3,
      revenue: 1e6,
      production_companies: [],
      overview: '',
      release_date: '',
      id: 0
    }

    const changes : SimpleChanges = {
      movie : new SimpleChange(null,movie,false)
    }
    component.movie = movie;
    component.ngOnChanges(changes);
    expect(component.budget).toBe('1 тис $');
    expect(component.revenue).toBe('1 млн $');
    
  })

});
