import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthEffects } from '../store/effects';


const routes: Routes = [
  {path: 'registration', component: RegistrationFormComponent},
  {path: 'login', component: LoginFormComponent},
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
export class AuthModule {
}
