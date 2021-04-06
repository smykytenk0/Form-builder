import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppComponent, User} from "../app.component";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<User> = new EventEmitter<User>();


  email = '';
  password = '';
  isUserLogged: boolean;
  users: User[]=[
    {email:"123poin@gmail.com", password:"12345678", id: 1},
    {email:"456point@gmail.com", password:"12312312", id:2}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddUser() {
    console.log(this.users);
    if (this.email.trim() && this.password.trim()) {
      const user: User = {
        email: this.email,
        password: this.password,
      };

      this.onAdd.emit(user);

      this.password = this.email = "";
    }
  }

  login() {
    console.log(this.users);
    if (this.email.trim() && this.password.trim()) {
      const user: User = {
        email: this.email,
        password: this.password,
      };
      for(let i = 0; i<10; i++) {
        if (this.users[i].email == this.email && this.users[i].password == this.password) {
          this.isUserLogged = true;
          break;
        }
        else {
          this.email = this.password = "";
          continue;
        }
      }
      this.email = this.password = "";
    }
  }

  logout(){
    this.isUserLogged = !this.isUserLogged;
  }

}
