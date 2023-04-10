import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmlistBlockComponent } from './filmlist-block/filmlist-block.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ToggleSwitchComponent } from './toggle-switch/toggle-switch.component';
import { CoreModule } from '../core/core.module';
import { MultiChoiceComponent } from './multi-choice/multi-choice.component';




@NgModule({
  declarations: [
    FilmlistBlockComponent,
    MainPageComponent,
    ToggleSwitchComponent,
    MultiChoiceComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
