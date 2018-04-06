import { AuthService } from "./../_services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private auth: AuthService) {}

  ngOnInit() {}

  login() {
    this.auth.login(this.model).subscribe(
      data => {
        console.log("logged in successfully");
      },
      error => {
        console.log("faild to login");
      }
    );
  }

  logout(){
    this.auth.userToken = null;
    localStorage.removeItem('token');
    console.log('logged out')
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token;
  }
}
