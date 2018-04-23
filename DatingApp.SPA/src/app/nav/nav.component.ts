import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from "./../_services/auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private auth: AuthService, private alertify: AlertifyService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.auth.login(this.model).subscribe(
      data => {
        this.alertify.success("logged in successfully");
      },
      error => {
        this.alertify.error(error);
      },
      () => {
        this.router.navigate(['/members']);
      }
    );
  }

  logout(){
    this.auth.userToken = null;
    localStorage.removeItem('token');
    this.alertify.message('logged out')
    this.router.navigate(['/home']);
  }

  loggedIn(){
    return this.auth.loggedIn();
  }
}
