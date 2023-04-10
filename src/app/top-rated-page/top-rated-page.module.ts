import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopRatedPageComponent } from './top-rated-page/top-rated-page.component';
import { PageChangerComponent } from './page-changer/page-changer.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    TopRatedPageComponent,
    PageChangerComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class TopRatedPageModule { }
