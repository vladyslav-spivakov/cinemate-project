import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent {
  @Input() leftChoice : string = '';
  @Input() rightChoice : string = '';
  @Output() rightChosen : EventEmitter<boolean> = new EventEmitter();
  initialCheckedState : boolean = true;

  checkboxChange(event : any) {
    this.rightChosen.emit(event.target.checked);
    console.log(this.rightChosen);
  }

  ngOnInit() {
    this.rightChosen.emit(this.initialCheckedState);
  }
}
