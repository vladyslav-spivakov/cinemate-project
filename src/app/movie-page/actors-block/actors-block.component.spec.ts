import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsBlockComponent } from './actors-block.component';

describe('ActorsBlockComponent', () => {
  let component: ActorsBlockComponent;
  let fixture: ComponentFixture<ActorsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorsBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
