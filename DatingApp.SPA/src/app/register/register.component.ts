import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  
  @Output() cancelRegister = new EventEmitter();

  constructor(private auth: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    console.log(this.model);
    this.auth.register(this.model).subscribe(() => {
      this.alertify.success('Registeration succesful');
    }, error => {
      this.alertify.error(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
    this.alertify.message('cancelled');
  }

}
