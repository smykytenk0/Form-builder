import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "../auth.service";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { loginAction } from "../store/auth.actions";
import { StylesActions } from "../store/styles.actions";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;

  constructor(private auth: AuthService, private store: Store, private router: Router) {
  }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  onSubmit() {
    this.store.dispatch(loginAction(this.form.value));
    this.store.dispatch(StylesActions.setAuthStatus({payload: true}));
    this.router.navigate(['/forms']);
  }
}
