import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/core/models/movie';
import { BackendService } from 'src/app/core/services/backend.service';
import { MovieAPI } from 'src/app/core/services/tmdb-api3.service';

@Component({
  selector: 'app-search-element',
  templateUrl: './search-element.component.html',
  styleUrls: ['./search-element.component.scss']
})
export class SearchElementComponent {
  @Input() movie : Movie = {} as Movie;
  subtitle : string = "";
  imgLoading : boolean = true;
  
  handleImageLoading() {
    this.imgLoading = false;
  }

  constructor (private backend : BackendService, public api : MovieAPI) {}

  ngOnInit() {
    this.imgLoading = true;
    this.backend.genres.subscribe((genres)=>{
      this.subtitle = `${(this.movie.release_date && this.movie.release_date.split('-')[0])}${(this.movie.genre_ids.length !== 0 ?
        ', ' : '')}${this.movie.genre_ids.map((e) => genres[e]).join(', ')}`;
    })
  }
}
