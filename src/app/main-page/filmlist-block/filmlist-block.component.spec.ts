import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Movie } from 'src/app/core/models/movie';
import { BackendService } from 'src/app/core/services/backend.service';
import { MainPageModule } from '../main-page.module';

import { FilmlistBlockComponent } from './filmlist-block.component';

describe('FilmlistBlockComponent', () => {
  let component: FilmlistBlockComponent;
  let fixture: ComponentFixture<FilmlistBlockComponent>;
  let service : MockBackendService;
  const movies : Movie[]= [
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
    {
      genre_ids: [],
      genres: [],
      title: 'Title2',
      tagline: 'tag2',
      budget: 0,
      revenue: 0,
      production_companies: [],
      overview: 'over2',
      poster_path: 'path2',
      release_date: '',
      id: 200
    }
  ]

  class MockBackendService {
    trending : string = '';
    getTrendingMovies(type:string) {
      console.log(type);
      if(!(type in ['day', 'week'])) return Promise.reject();
      this.trending = type;
      return new Promise((resolve,reject)=>{
        resolve({results:movies})});
    }
    upcoming : string = '';
    getUpcomingMovies(type:string) {
      if(!(type in ['nowPlaying', 'upcoming'])) return Promise.reject();
      this.upcoming = type;
      return new Promise((resolve,reject)=>{
        resolve({results:movies})});
    }

    getSimilar(id : number | string) {
      return new Promise((resolve,reject)=>{
        resolve({results:movies})});
    }
  }

  
  beforeEach(async () => {
    service = new MockBackendService();
    await TestBed.configureTestingModule({
      declarations: [ FilmlistBlockComponent],
      imports: [MainPageModule],
      providers: [ {provide:BackendService, useValue: service}]
    })
    .compileComponents();
    spyOn(service,'getTrendingMovies');
    spyOn(service,'getUpcomingMovies');
    spyOn(service,'getSimilar');
    fixture = TestBed.createComponent(FilmlistBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change movieList when load called', fakeAsync(() => {
    const promise = new Promise((resolve,reject)=> {
      resolve({results:movies});
    })
    expectAsync(promise).toBeResolved();
    component.load(promise);
    component.movieList.subscribe(data=>{
      expect(data).toBe(movies);
    })
    tick(100);
    expect(component.loading).toBe(false);
  }));

  it('should load day/week movies if type is trending', () => {
    component.type = 'trending';
    fixture.detectChanges();
    component.updateList(true);
    expect(service.getTrendingMovies).toHaveBeenCalled();
    component.updateList(false);
    expect(service.getTrendingMovies).toHaveBeenCalled();
  });

  it('should load upcoming/nowPlaying movies if type is upcoming', () => {
    component.type = 'upcoming';
    fixture.detectChanges();
    component.updateList(true);
    expect(service.getUpcomingMovies).toHaveBeenCalled();
    component.updateList(false);
    expect(service.getUpcomingMovies).toHaveBeenCalled();
  });   

  it('should load similar movies on init if type is similar', () => {
    component.type = 'similar';
    fixture.detectChanges();
    component.ngOnInit();
    expect(service.getSimilar).toHaveBeenCalled();
  })


});
