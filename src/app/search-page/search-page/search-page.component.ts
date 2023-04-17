import { Component, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from 'src/app/core/models/movie';
import { BackendService } from 'src/app/core/services/backend.service';
import { searchStatus } from './search-status';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  

  searchTimeout : any = undefined;
  query : string = "";
  status : searchStatus = searchStatus.noQuery;
  searchResults : BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  searchResults$ : Observable<Movie[]> = this.searchResults.asObservable();
  @ViewChild('statusWaitSpan') waitSpan : any = {}; 
  dots : number = 1;
  
  constructor( private backend : BackendService) {}

  ngOnInit() {
    setInterval(()=>{
      if(this.waitSpan){
        const dots = new Array<string>(this.dots).fill(".").join("");
        this.waitSpan.nativeElement.innerHTML = `Пошук${dots}`;
        this.dots+=1;
        if(this.dots > 3) this.dots = 1;
      }
    }, 500);
  }

  handleInput(query : string) : void {
    this.searchResults.next([]);
    if(this.status != searchStatus.wait) {
      this.dots = 1;
      this.status = searchStatus.wait;
    }

    if(this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    if(query) {
      this.searchTimeout = setTimeout(()=>this.search(query), 600); 
    } else {
      this.status = searchStatus.noQuery;
    }
  }
  search(query : string) : void {
    this.backend.getSearchResults(query).then((data)=>{
      if(data.results.length === 0) {
        this.status = searchStatus.noResults;
      } else {
        this.status = searchStatus.ok;
      }
      this.query = query;
      this.searchResults.next(data.results);
    })
  }
}
