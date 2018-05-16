import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/User';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService, 
    private alerify: AlertifyService,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.data.subscribe(data => {
      this.user = data['user'];
    });
  }
  
}
