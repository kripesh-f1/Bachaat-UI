import {Component} from '@angular/core';
import {MessageService} from './shared-utils/services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public messageService: MessageService) {
  }
}
