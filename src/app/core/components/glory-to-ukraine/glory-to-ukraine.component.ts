import { Component } from '@angular/core';
import { GloryService } from '../../services/glory.service';

@Component({
  selector: 'app-glory-to-ukraine',
  templateUrl: './glory-to-ukraine.component.html',
  styleUrls: ['./glory-to-ukraine.component.scss']
})
export class GloryToUkraineComponent {
  
  
  constructor(public gloryService : GloryService) {

  }

  handleClick() {
    this.gloryService.slavaUkraini('Слава Україні!');
  }

}
