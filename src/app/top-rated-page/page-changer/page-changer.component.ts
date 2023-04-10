import { Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-page-changer',
  templateUrl: './page-changer.component.html',
  styleUrls: ['./page-changer.component.scss']
})
export class PageChangerComponent {
  @Input() currPage : number = 1;

  changeTimeout : any = undefined;

  @Output() newPage = new EventEmitter<number>()

  emitNewPage(pageValue : number) {
  
    this.newPage.emit(pageValue);
  }

  handleLeftClick() {
    this.emitNewPage(this.currPage-1);
  }
  handleRightClick() {
    this.emitNewPage(this.currPage+1);
  }
  handleInput(event : any) {
    event.target.value = event.target.value.replaceAll(/[^0-9]*/g, '');
    event.target.value = event.target.value.replaceAll(/(0*)(([1-9][0-9]*)*)/g,'$2')
    if(event.target.value === '') event.target.value = '0';
    let pageValue : number = parseInt(event.target.value);
    if( pageValue === this.currPage) return;
    if(this.changeTimeout) clearTimeout(this.changeTimeout)
    this.changeTimeout = setTimeout(()=> {
      event.target.blur();
      this.emitNewPage(pageValue);
    }, 1000)
  }

  ngOnChanges(changes : SimpleChanges) {
    this.currPage = changes['currPage'].currentValue;
  }
}
