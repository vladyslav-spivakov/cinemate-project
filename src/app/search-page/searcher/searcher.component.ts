import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent {
  @Output() onInput : EventEmitter<string> = new EventEmitter();
  
  handleInput(event : any) {
    this.onInput.emit(event.target.value);
  }
}
