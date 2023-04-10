import { Component, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie, MovieList } from 'src/app/core/models/movie';
import { BackendService } from 'src/app/core/services/backend.service';
import { of } from "rxjs";
@Component({
  selector: 'app-top-rated-page',
  templateUrl: './top-rated-page.component.html',
  styleUrls: ['./top-rated-page.component.scss']
})
export class TopRatedPageComponent {
  currPage : BehaviorSubject<number> = new BehaviorSubject<number>(1);
  totalPages : number = 200;

  topRatedList$ : Observable<Movie[]> = new Observable<Movie[]>();

  @Input() loading : boolean = true;

  constructor(private backend : BackendService) {
    this.currPage.subscribe((pageValue)=> {
      this.loading = true;
      this.backend.getTopRated(pageValue).then(
        (data : MovieList)=>{
          this.topRatedList$ = of (data.results);
          this.totalPages = Math.round(data.total_pages/2);
          this.loading = false;
        }
      )
    })
  }
  ngOnInit() {
    
  }

  changePage(pageValue : number) {
    if(pageValue >= this.totalPages) pageValue = this.totalPages;
    else if(pageValue <= 0) pageValue = 1;
    this.currPage.next(pageValue);
  }

}
