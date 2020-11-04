import { Component } from '@angular/core';
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
  constructor(private messagingService: MessagingService) { }
ngOnInit() {
  this.messagingService.requestPermission()
  this.messagingService.receiveMessage()
  this.message = this.messagingService.currentMessage
  this.token=this.messagingService.token;
 }
}