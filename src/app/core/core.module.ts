import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MainBlockComponent } from './components/main-block/main-block.component';
import { HorizontalListComponent } from './components/horizontal-list/horizontal-list.component';
import { ListElementComponent } from './components/list-element/list-element.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { FilmlistTitleComponent } from './components/filmlist-title/filmlist-title.component';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MainBlockComponent,
    HorizontalListComponent,
    ListElementComponent,
    NotFoundPageComponent,
    FilmlistTitleComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent, 
    MainBlockComponent,
    HorizontalListComponent,
    FilmlistTitleComponent,
    ListElementComponent,
    LoaderComponent
  ]
})
export class CoreModule { }
