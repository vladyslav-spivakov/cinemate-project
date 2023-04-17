import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { SeparatorComponent } from './separator/separator.component';
import { FilmFieldComponent } from './film-field/film-field.component';
import { ActorsBlockComponent } from './actors-block/actors-block.component';
import { ActorComponent } from './actor/actor.component';
import { FilmGeneralComponent } from './film-general/film-general.component';
import { CoreModule } from '../core/core.module';
import { MainPageModule } from '../main-page/main-page.module';



@NgModule({
  declarations: [
    MoviePageComponent,
    SeparatorComponent,
    FilmFieldComponent,
    ActorsBlockComponent,
    ActorComponent,
    FilmGeneralComponent
  ],
  imports: [
    CommonModule, 
    CoreModule,
    MainPageModule
  ],
  exports: [
    MoviePageComponent
  ]
})
export class MoviePageModule { }
