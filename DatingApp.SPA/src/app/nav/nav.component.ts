import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from "./../_services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private auth: AuthService, private alertify: AlertifyService) {}

  ngOnInit() {}

  login() {
    this.auth.login(this.model).subscribe(
      data => {
        this.alertify.success("logged in successfully");
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  logout(){
    this.auth.userToken = null;
    localStorage.removeItem('token');
    this.alertify.message('logged out')
  }

  loggedIn(){
    return this.auth.loggedIn();
  }
}
