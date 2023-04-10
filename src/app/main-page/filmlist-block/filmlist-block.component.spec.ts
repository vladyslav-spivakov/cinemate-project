import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmlistBlockComponent } from './filmlist-block.component';

describe('FilmlistBlockComponent', () => {
  let component: FilmlistBlockComponent;
  let fixture: ComponentFixture<FilmlistBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmlistBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmlistBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
