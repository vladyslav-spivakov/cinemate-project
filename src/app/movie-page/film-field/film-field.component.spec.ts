import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FilmFieldComponent } from './film-field.component';

describe('FilmFieldComponent', () => {
  let component: FilmFieldComponent;
  let fixture: ComponentFixture<FilmFieldComponent>;
  let de : DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmFieldComponent);
    de = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set cssId as id of div element', ()=> {
    const testId = 'my-test-id-111';
    component.cssId = testId;
    fixture.detectChanges();
    expect(de.query(By.css('.film-field')).nativeElement.id).toBe(testId);
  }) 
  
  it('should render elements if values provided', () => {
    const values = ['test1','test2','test3'];
    component.values = values;
    fixture.detectChanges();

    let i = 0;
    for(let elem of de.queryAll(By.css('.field-value'))) {
      expect(elem.nativeElement.innerHTML).toContain(values[i++]);
    }
  })

  it('should render no elements if no values provided', () => {
    let values : any[] = [];
    component.values = values;
    fixture.detectChanges();

    let i = 0;
    for(let elem of de.queryAll(By.css('.field-value'))) {
      expect(elem.nativeElement.innerHTML).toContain('Невідомо');
    }

    values  = [''];
    component.values = values;
    fixture.detectChanges();

    i = 0;
    for(let elem of de.queryAll(By.css('.field-value'))) {
      expect(elem.nativeElement.innerHTML).toContain('Невідомо');
    }
  })
});
