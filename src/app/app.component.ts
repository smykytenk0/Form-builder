import { Component } from '@angular/core';

export interface IUser {
  email: string
  password: string
  id?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: "formbuilder";
}
