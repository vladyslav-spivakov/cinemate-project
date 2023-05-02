import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ToggleSwitchComponent } from './toggle-switch.component';

describe('ToggleSwitchComponent', () => {
  let component: ToggleSwitchComponent;
  let fixture: ComponentFixture<ToggleSwitchComponent>;
  let de : DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleSwitchComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit state onInit', ()=> {
    const checkbox = de.query(By.css('#toggle-switch-checkbox')).nativeElement;
    component.rightChosen.subscribe((data)=>{
      expect(data).toBe(checkbox.checked);
    })
    component.ngOnInit();
  })

  it('should emit state onChange', ()=> {
    const checkbox = de.query(By.css('#toggle-switch-checkbox')).nativeElement;
    component.rightChosen.subscribe((data)=>{
      expect(data).toBe(checkbox.checked);
    })
    checkbox.click();
  })

  it('should set input choices', () => {
    const leftChoice = 'choice1';
    component.leftChoice = leftChoice;
    const rightChoice = 'choice2';
    component.rightChoice = rightChoice;
    fixture.detectChanges();
    expect(de.query(By.css('.left')).nativeElement.innerHTML).toBe(leftChoice);
    expect(de.query(By.css('.right')).nativeElement.innerHTML).toBe(rightChoice);
  })
});
