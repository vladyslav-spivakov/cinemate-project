import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Actor } from 'src/app/core/models/actor';
import { BackendService } from 'src/app/core/services/backend.service';

@Component({
  selector: 'app-actors-block',
  templateUrl: './actors-block.component.html',
  styleUrls: ['./actors-block.component.scss']
})
export class ActorsBlockComponent {
  @Input() id : number = 0;
  cast : Observable<Actor[]> = new Observable();
  loading : boolean = true;

  constructor(private backend : BackendService, private router : Router) {
    this.router.events.subscribe(()=>{
      this.loading = true;
    })
  }


  ngOnChanges(changes : SimpleChanges) {
  
    if('id' in changes && !changes['id'].firstChange) {
      this.backend.getCredits(changes['id'].currentValue).then(
        (res:{cast:Actor[]})=>{
          this.cast = of(res.cast.splice(0,6));
          this.loading=false;

        }
      )
    }
  }
}
