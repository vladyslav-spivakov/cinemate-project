import { Component, Input, SimpleChanges } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Movie } from 'src/app/core/models/movie';
import { BackendService } from 'src/app/core/services/backend.service';

@Component({
  selector: 'app-filmlist-block',
  templateUrl: './filmlist-block.component.html',
  styleUrls: ['./filmlist-block.component.scss']
})
export class FilmlistBlockComponent {
  @Input() type : string = '';
  @Input() id : number = 0;
  loading : boolean = true;
  movieList : Observable<Movie[]> = new Observable<Movie[]>();

  constructor(private backend : BackendService) {}

  load(promise : Promise<any>) {
    promise?.then(
      (data) => {
        this.movieList = of([...data.results]);
        this.loading = false; 
      }
    ).catch((error)=> {

    })
  }

  updateList(event : any) {
    this.loading=true;
    if (this.type === 'trending') {
      if(event) {
        this.load(this.backend.getTrendingMovies('day'));
      } else {
        this.load(this.backend.getTrendingMovies('week'));
      }
    } else if (this.type === 'upcoming') {
      if(event) {
        this.load(this.backend.getUpcomingMovies('nowPlaying'));
      } else {
        this.load(this.backend.getUpcomingMovies('upcoming'));
      }
    } 
  }

  ngOnInit() {
    if(this.type === 'similar') {
      this.load(this.backend.getSimilar(this.id));
    }
  }

}
