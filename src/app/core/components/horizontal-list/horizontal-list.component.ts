import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie';
import { BackendService } from '../../services/backend.service';
import { MovieAPI } from '../../services/tmdb-api3.service';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.scss']
})
export class HorizontalListComponent {
  @Input() movieList : Observable<Movie[]> = new Observable<Movie[]>();
  @Input() loading : boolean = false;
}
