import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  
  @Output() cancelRegister = new EventEmitter();

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  register() {
    console.log(this.model);
    this.auth.register(this.model).subscribe(() => {
      console.log('Registeration succesful');
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
