import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from 'src/app/core/core.module';
import { Movie } from 'src/app/core/models/movie';
import { BackendService } from 'src/app/core/services/backend.service';
import { TopRatedPageModule } from '../top-rated-page.module';

import { TopRatedPageComponent } from './top-rated-page.component';

describe('TopRatedPageComponent', () => {
  let component: TopRatedPageComponent;
  let fixture: ComponentFixture<TopRatedPageComponent>;
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
  const total_pages = 20;
  class MockBackendService {
    getTopRated(page : string | number) {
      return Promise.resolve({results:movies, total_pages:total_pages*2})
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreModule, TopRatedPageModule],
      declarations: [ TopRatedPageComponent ],
      providers: [{provide:BackendService, useClass:MockBackendService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRatedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change pages', () => {
    component.changePage(10);
    expect(component.currPage.value).toBe(10);
  })

  
  it('should set currPage value as amount of total pages if exceeded', () => {
    component.changePage(300);
    expect(component.currPage.value).toBe(total_pages);
  })

  it('should set currPage value as 1 if set negative', () => {
    component.changePage(-300);
    expect(component.currPage.value).toBe(1);
  }) 
});
