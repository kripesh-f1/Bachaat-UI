import {Component, OnInit} from '@angular/core';
import {User} from '../../shared-utils/models/user';
import {MessageService} from '../../shared-utils/services/message.service';
import {Router} from '@angular/router';
import {UserService} from '../../shared-utils/services/user-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(public userService: UserService, public messageService: MessageService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit(value: User): void {
    this.userService.validateUser(value).subscribe(success => {
      this.messageService.setMessage(success.message);
      this.router.navigate(
        ['dashboard']
      )
      console.log(success.message);
    }, err => {
      this.messageService.setMessage(err.error.message);
      console.log(err.error.message);
    });
  }

  userRegister(): void {
    this.messageService.setMessage('');
    this.router.navigate(['/register']);
  }
}
