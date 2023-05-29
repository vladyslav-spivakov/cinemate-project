import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GloryMessageComponent } from './glory-message.component';

describe('GloryMessageComponent', () => {
  let component: GloryMessageComponent;
  let fixture: ComponentFixture<GloryMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GloryMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GloryMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
