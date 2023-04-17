import { Component, Input } from '@angular/core';
import { Actor } from 'src/app/core/models/actor';
import { MovieAPI } from 'src/app/core/services/tmdb-api3.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent {
  @Input() actor : Actor = {} as Actor;

  constructor(public api : MovieAPI) {

  }
}
