import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-film-field',
  templateUrl: './film-field.component.html',
  styleUrls: ['./film-field.component.scss']
})
export class FilmFieldComponent {
  @Input() values : string[] = [];
  @Input() cssId : string = '';
}
