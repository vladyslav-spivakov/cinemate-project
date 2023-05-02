import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MultiChoiceComponent } from './multi-choice.component';

describe('MultiChoiceComponent', () => {
  let component: MultiChoiceComponent;
  let fixture: ComponentFixture<MultiChoiceComponent>;
  let de : DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiChoiceComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit state onInit', ()=> {
    const checkbox = de.query(By.css('#upcoming-choice')).nativeElement;
    component.rightChosen.subscribe((data)=>{
      expect(data).toBe(checkbox.checked);
    })
    component.ngOnInit();
  })

  it('should emit state onChange', ()=> {
    const checkbox = de.query(By.css('#upcoming-choice')).nativeElement;
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
    expect(de.query(By.css('.choice-1')).nativeElement.innerHTML).toBe(leftChoice);
    expect(de.query(By.css('.choice-2')).nativeElement.innerHTML).toBe(rightChoice);
  })
});
