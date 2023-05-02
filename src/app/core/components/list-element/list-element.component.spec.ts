import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from '../../core.module';
import { BackendService } from '../../services/backend.service';
import { MovieAPI } from '../../services/tmdb-api3.service';

import { ListElementComponent } from './list-element.component';

describe('ListElementComponent', () => {
  let component: ListElementComponent;
  let fixture: ComponentFixture<ListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreModule],
      declarations: [ ListElementComponent ],
      providers:[BackendService, MovieAPI]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
