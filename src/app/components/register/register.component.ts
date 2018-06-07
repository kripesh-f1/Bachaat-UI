import {Component, OnInit} from '@angular/core';
import {User} from '../../shared-utils/models/user';
import {MessageService} from '../../shared-utils/services/message.service';
import {Router} from '@angular/router';
import {UserService} from '../../shared-utils/services/user-service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, public messageService: MessageService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit(value: User): void {
    this.userService.addUser(value).subscribe(success => {
      this.messageService.setMessage(success.message);
      this.router.navigate(['/login']);
    }, err => {
      this.messageService.setMessage(err.error.message);
    });
  }

  registerCancel(): void {
    this.messageService.setMessage('');
    this.router.navigate(['/login']);
  }
}
