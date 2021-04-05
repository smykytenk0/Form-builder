import { Component } from '@angular/core';

export interface User {
  email: string
  password: string
  id?: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users: User[]=[
    {email:"123poin@gmail.com", password:"12345678", id: 1},
    {email:"456point@gmail.com", password:"12312312", id:2}
  ];

  updateUsers(user: User) {
    this.users.unshift(user)
  }
}


