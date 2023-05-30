import { Component } from '@angular/core';
import { GloryService } from '../../services/glory.service';


@Component({
  selector: 'app-glory-message',
  templateUrl: './glory-message.component.html',
  styleUrls: ['./glory-message.component.scss']
})
export class GloryMessageComponent {
  public currentClass : string = "";
  public currentMessage : string = "Слава Україні!"
  public multiplier : number = 1;
  private hideTimeout : any = undefined;
  constructor(private gloryService:GloryService) {
    
  }

  getNewHideTimeout() {
    return setTimeout(()=>{
      this.currentClass = "";
      this.hideTimeout = undefined;
    }, 5000); 
  }

  private setShowClass() {
    this.multiplier += 1;
    if(this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = this.getNewHideTimeout();
      return;
    }
    this.multiplier = 1;
    this.currentClass = "show";
    this.hideTimeout = this.getNewHideTimeout();
  }

  ngOnInit() {
    this.gloryService.socket.subscribe((data:any)=>{
        this.setShowClass();
        this.currentMessage = data;
    })
  }
}
