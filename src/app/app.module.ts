import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainPageModule } from './main-page/main-page.module';
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
    TopRatedPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
