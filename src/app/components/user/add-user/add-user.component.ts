import { Component, OnInit } from '@angular/core';
import { UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  onSubmit(value): void {
    const header = {'Content-Type': 'application/json'} ;
    this.userService.addUser(value, header).subscribe();
  }
}
