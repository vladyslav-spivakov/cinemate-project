import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmGeneralComponent } from './film-general.component';

describe('FilmGeneralComponent', () => {
  let component: FilmGeneralComponent;
  let fixture: ComponentFixture<FilmGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
