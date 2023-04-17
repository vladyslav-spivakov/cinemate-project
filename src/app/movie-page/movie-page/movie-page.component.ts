import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/core/models/movie';
import { BackendService } from 'src/app/core/services/backend.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent {
  movie : Movie = {} as Movie;
  loading : boolean = true;
  constructor(private route : ActivatedRoute, private router : Router, private backend : BackendService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params:any)=>{
        let consistId : boolean = 'id' in params;
        this.loading = true;
        if(consistId) {
          this.backend.getFilm(params.id).then(res=>{
            this.movie = res;
            this.loading = false;
          }
          )
        } else {
          this.router.navigate(['/not-found']);
        }
      }
    )
  }
}
