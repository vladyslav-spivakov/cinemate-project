import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainPageModule } from './main-page/main-page.module';
import { MoviePageModule } from './movie-page/movie-page.module';
import { SearchPageModule } from './search-page/search-page.module';
import { TopRatedPageModule } from './top-rated-page/top-rated-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MainPageModule,
    TopRatedPageModule,
    MoviePageModule,
    SearchPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
