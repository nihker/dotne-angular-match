
import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/User';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService, private alerify: AlertifyService) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers(){
    this.userService.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
      },
      error => {
        this.alerify.error(error);
      }
    )
  }

}
