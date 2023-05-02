import { DebugElement } from '@angular/core';
import { ComponentFixture, discardPeriodicTasks, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Movie } from 'src/app/core/models/movie';
import { BackendService } from 'src/app/core/services/backend.service';
import { SearchPageModule } from '../search-page.module';

import { SearchPageComponent } from './search-page.component';
import { searchStatus } from './search-status';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;
  let backend : MockBackendService;
  let de : DebugElement;
  const movies : Movie[] = [
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
    getSearchResults(query : string) {
      if(query === 'no-results-query') return Promise.resolve({results : []})
      return Promise.resolve({results:movies});
    } 
  }

  beforeEach(async () => {
    backend = new MockBackendService();
    await TestBed.configureTestingModule({
      imports: [SearchPageModule],
      declarations: [ SearchPageComponent ],
      providers: [{provide : BackendService, useValue: backend}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change amount of dots every 500 ms', fakeAsync(() => {
    component.status=searchStatus.wait;
    component.dots = 1;
    fixture.detectChanges();
    component.ngOnInit();
    tick(500);
    expect(de.query(By.css('.no-results')).nativeElement.innerHTML).toContain('Пошук');
    expect(component.dots).toBe(2);
    tick(500);
    expect(component.dots).toBe(3);
    tick(500);
    expect(component.dots).toBe(1);
    discardPeriodicTasks();
  }));

  it('should set search status to wait on input', fakeAsync(() => {
    component.status = searchStatus.ok;
    component.handleInput('query-test');
    expect(component.status).toBe(searchStatus.wait);

    flush();
  }));

  it('should search only last input in a 600 ms', fakeAsync(() => {
    component.status = searchStatus.ok;
    const spy = spyOn(backend,'getSearchResults').and.callThrough();
    component.handleInput('query1-test');
    component.handleInput('no-test');
    component.handleInput('query2-test');
    tick(600);
    expect(spy).toHaveBeenCalledWith('query2-test');

    flush();
  }));

  it('should set status noQuery if no query provided', () => {
    component.status = searchStatus.ok;
    component.handleInput('');
    expect(component.status).toBe(searchStatus.noQuery); 
  });

  it('should set status noResults if no results found', fakeAsync(() => {
    component.status = searchStatus.ok;
    component.handleInput('no-results-query');
    tick(1000);
    expect(component.status).toBe(searchStatus.noResults); 
    flush();
  }));
});
