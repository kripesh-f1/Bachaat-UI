import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService, private http: HttpClient) { }

  ngOnInit() {
  }
  onSubmit(value): void {
    console.log(value);
    const header = {'Content-Type': 'application/json'} ;
    this.userService.addUser(value, header).subscribe();
  }
}
