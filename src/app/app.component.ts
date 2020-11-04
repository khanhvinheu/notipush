import { Component } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { MessagingService } from 'service/messaging.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'push-notification';
  message;
  token;
  constructor(private messagingService: MessagingService,private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.requestToken.subscribe(data=>{
      this.token=data
    })
   }
ngOnInit() {
  this.messagingService.requestPermission()
  this.messagingService.receiveMessage()
  this.message = this.messagingService.currentMessage   
  
}
}