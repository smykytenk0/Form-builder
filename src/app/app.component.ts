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
  title: "formbuilder";

}
