import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from 'src/app/core/core.module';
import { MainPageModule } from '../main-page.module';

import { MainPageComponent } from './main-page.component';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CoreModule, MainPageModule],
      declarations: [ MainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
