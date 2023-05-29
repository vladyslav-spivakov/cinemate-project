import { Injectable } from "@angular/core";
import { webSocket } from "rxjs/webSocket";

@Injectable({
    providedIn: "root"
})
export class GloryService { 
  socket : any;
  public cooldown = false;

  constructor() {
    this.newConnection();
  }

  private newConnection() {
    this.socket = webSocket("ws://localhost:5000");
  }


  sendMessage(message : any) {
    if(!this.cooldown) { 
      this.cooldown = true;
      setTimeout(()=>{
        this.cooldown = false;
      },4000)
      if(!this.socket || this.socket.closed) {
        this.newConnection
      }
      if(this.socket && !this.socket.closed) this.socket.next(message);
    }
  }

  
  ngOnDestroy() {
    this.socket.complete();
  }
}