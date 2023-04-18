import { Component, Input, SimpleChanges } from '@angular/core';
import { genreList } from 'src/app/core/models/genreList';
import { Movie } from 'src/app/core/models/movie';
import { BackendService } from 'src/app/core/services/backend.service';
import { MovieAPI } from 'src/app/core/services/tmdb-api3.service';

@Component({
  selector: 'app-film-general',
  templateUrl: './film-general.component.html',
  styleUrls: ['./film-general.component.scss']
})
export class FilmGeneralComponent {
  @Input() movie : Movie = {} as Movie ;
  productionCompanies: string[] = [];
  budget : string = '';
  revenue : string = '';
  description : string = '';
  posterPath : string = '';
  genreList : string[] = [];

  constructor(private api : MovieAPI) {}

  private convertMoney(money : number){
    if (money === 0) return '';
    const round = (x : number) => Math.round((money / x) * 100) / 100;
    if (money >= 1e9) return `${round(1e9)} млрд $`;
    if (money >= 1e6) return `${round(1e6)} млн $`;
    if (money >= 1e3) return `${round(1e3)} тис $`;
    return `${money} $`;
};


  ngOnChanges(changes : SimpleChanges) {
    if('movie' in changes ) {
      if(this.movie) {
        console.log(this.movie);
      this.productionCompanies = this.movie.production_companies.map(el=>el.name);
      this.budget = this.convertMoney(this.movie.budget);
      this.revenue = this.convertMoney(this.movie.revenue);
      this.description = this.movie.overview;
      this.posterPath = this.api.imgOriginal(this.movie.poster_path);
      this.genreList = this.movie.genres.map(el=>el.name);
      }
    }
  }
}
