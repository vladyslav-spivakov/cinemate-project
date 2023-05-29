import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GloryToUkraineComponent } from './glory-to-ukraine.component';

describe('GloryToUkraineComponent', () => {
  let component: GloryToUkraineComponent;
  let fixture: ComponentFixture<GloryToUkraineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GloryToUkraineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GloryToUkraineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
