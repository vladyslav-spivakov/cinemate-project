import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-multi-choice',
  templateUrl: './multi-choice.component.html',
  styleUrls: ['./multi-choice.component.scss']
})
export class MultiChoiceComponent {
  @Input() leftChoice : string = '';
  @Input() rightChoice : string = '';
  initialCheckedState : boolean = false;
  @Output() rightChosen : EventEmitter<boolean> = new EventEmitter();

  checkboxChange(event : any) {
    this.rightChosen.emit(event.target.checked);
  }

  ngOnInit() {
    this.rightChosen.emit(this.initialCheckedState);
  }
}
