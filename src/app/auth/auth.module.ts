import { RouterModule, Routes } from "@angular/router";
import { RegistrationFormComponent } from "./registration-form/registration-form.component";
import { NgModule } from "@angular/core";
import { LoginFormComponent } from "./login-form/login-form.component";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "../store/effects";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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
    EffectsModule.forRoot([AuthEffects]),
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthModule { }
