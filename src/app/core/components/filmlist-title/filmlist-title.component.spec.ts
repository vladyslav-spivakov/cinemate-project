import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmlistTitleComponent } from './filmlist-title.component';

describe('FilmlistTitleComponent', () => {
  let component: FilmlistTitleComponent;
  let fixture: ComponentFixture<FilmlistTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmlistTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmlistTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
