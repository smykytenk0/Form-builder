import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import { LoginFormComponent } from './login-form/login-form.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [AppComponent, LoginFormComponent, UsersComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
