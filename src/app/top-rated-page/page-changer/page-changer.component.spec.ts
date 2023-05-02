import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PageChangerComponent } from './page-changer.component';

describe('PageChangerComponent', () => {
  let component: PageChangerComponent;
  let fixture: ComponentFixture<PageChangerComponent>;
  let de : DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageChangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageChangerComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit new pages', () => {
    component.newPage.subscribe(data=>{
      expect(data).toBe(20);
    })
    component.emitNewPage(20);
  })

  it('should change pages on change input of page changer input element', fakeAsync(() => {
    const inp = de.query(By.css('#filmlist-page-value'));
    expect(inp.nativeElement.value).toBe(''+component.currPage);
    inp.nativeElement.value = 120;
    component.newPage.subscribe(data=>{
      expect(data).toBe(120);
    })
    inp.nativeElement.dispatchEvent(new Event('input'));
    expect(component.changeTimeout).toBeTruthy();
    tick(1000);
  }))

  it('should emit only one value in a second and it must be a last one', fakeAsync(() => {
    const inp = de.query(By.css('#filmlist-page-value'));
    expect(inp.nativeElement.value).toBe(''+component.currPage);
    inp.nativeElement.value = 120;
    component.newPage.subscribe(data=>{
      expect(data).toBe(140);
    })
    inp.nativeElement.dispatchEvent(new Event('input'));
    inp.nativeElement.value = 130;
    inp.nativeElement.dispatchEvent(new Event('input')); 
    inp.nativeElement.value = 140;
    inp.nativeElement.dispatchEvent(new Event('input'));
    tick(1000);
  }))

  it('should not emit values if input doesn\'t change', fakeAsync(() => {
    const inp = de.query(By.css('#filmlist-page-value'));
    inp.nativeElement.dispatchEvent(new Event('input'));
    tick(1000);
    spyOn(component,'emitNewPage');
    expect(component.emitNewPage).not.toHaveBeenCalled();
  }))

  it('should change to 1 if no value provided to input', fakeAsync(() => {
    const inp = de.query(By.css('#filmlist-page-value'));
    component.currPage = 100;
    component.newPage.subscribe((data)=> {
      expect(data).toBe(1);
    })
    inp.nativeElement.value = '';
    inp.nativeElement.dispatchEvent(new Event('input'));
    tick(1000);
    
  }))
});
