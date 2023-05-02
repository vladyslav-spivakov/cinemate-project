import { ComponentFixture, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from 'src/app/core/core.module';

import { MoviePageComponent } from './movie-page.component';

describe('MoviePageComponent', () => {
  let component: MoviePageComponent;
  let fixture: ComponentFixture<MoviePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [RouterTestingModule, CoreModule],
      declarations: [ MoviePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
