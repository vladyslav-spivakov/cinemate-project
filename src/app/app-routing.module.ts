import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';
import { MainPageComponent } from './main-page/main-page/main-page.component';
import { MoviePageComponent } from './movie-page/movie-page/movie-page.component';
import { SearchPageComponent } from './search-page/search-page/search-page.component';
import { TopRatedPageComponent } from './top-rated-page/top-rated-page/top-rated-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'top-rated', component: TopRatedPageComponent },
  { path: 'movie', component: MoviePageComponent},
  { path: 'search', component: SearchPageComponent  },
  { path: '**', component: NotFoundPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
