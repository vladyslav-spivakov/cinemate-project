import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filmlist-title',
  templateUrl: './filmlist-title.component.html',
  styleUrls: ['./filmlist-title.component.scss']
})
export class FilmlistTitleComponent {
  @Input() titleText : any = '';
}
