import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../app.component";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<User> = new EventEmitter<User>();

  email='';
  password='';

  constructor() { }

  ngOnInit(): void {
  }

  onAddUser(){
    if(this.email.trim() && this.password.trim()){
      const user: User = {
        email: this.email,
        password: this.password
      };

      this.onAdd.emit(user);

      this.password = this.email ="";
    }
  }

}
