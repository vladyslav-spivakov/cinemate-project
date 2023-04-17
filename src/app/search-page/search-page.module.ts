import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearcherComponent } from './searcher/searcher.component';
import { SearchElementComponent } from './search-element/search-element.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SearchPageComponent,
    SearcherComponent,
    SearchElementComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule
  ]
})
export class SearchPageModule { }
