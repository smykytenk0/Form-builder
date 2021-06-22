import { RouterModule, Routes } from "@angular/router";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { LoginFormComponent } from "./login-form/login-form.component";

const routes: Routes = [
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'login', component: LoginFormComponent },
];

@NgModule({
  declarations: [
    RegistrationFormComponent,
    LoginFormComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthModule { }
