import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from 'src/app/core/core.module';

import { SearchElementComponent } from './search-element.component';

describe('SearchElementComponent', () => {
  let component: SearchElementComponent;
  let fixture: ComponentFixture<SearchElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreModule, RouterTestingModule],
      declarations: [ SearchElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change subtitle on init', () => {
    component.movie = {
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
    };
    const value = 'bad-value';
    component.subtitle = value;
    component.ngOnInit();
    expect(component.subtitle).not.toBe(value);
  })

  it('should set imgLoading to false when handleImgLoading called', () => {
    component.imgLoading = true;
    component.handleImageLoading();
    expect(component.imgLoading).toBe(false);
  })
});
