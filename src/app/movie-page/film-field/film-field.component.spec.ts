import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmFieldComponent } from './film-field.component';

describe('FilmFieldComponent', () => {
  let component: FilmFieldComponent;
  let fixture: ComponentFixture<FilmFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
