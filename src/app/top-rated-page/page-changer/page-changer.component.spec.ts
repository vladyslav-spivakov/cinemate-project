import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChangerComponent } from './page-changer.component';

describe('PageChangerComponent', () => {
  let component: PageChangerComponent;
  let fixture: ComponentFixture<PageChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageChangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
