import { Component, Input } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { genreList } from '../../models/genreList';
import { MovieAPI } from '../../services/tmdb-api3.service';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss']
})
export class ListElementComponent {

  @Input() title : string = "";
  subtitle : string = "";
  @Input() genre_ids : number[] = [];
  genres : string[] = [];
  @Input() releaseDate : string = "";
  @Input() posterPath : string = "";
  @Input() id : number | string = 0;
  movieUrl : string = "";
  @Input() posterWidth : number = 170;
  @Input() styleType : string = '';

  constructor(private backend : BackendService, private api : MovieAPI) {}

  ngOnInit() {
    this.backend.genres.subscribe((data : genreList)=>{this.genres = this.genre_ids.map((el)=>data[el])});
    
    this.subtitle = `${this.releaseDate && `${this.releaseDate.split('-')[0]},`} ${this.genres.join(', ')}`;
    this.movieUrl = '/movie?id=' + this.id;
  }

  getPosterPath(imgPath : string) : string {
    return this.api.img400(imgPath);
  }
}
