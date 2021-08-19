import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { loginAction } from '../../store/auth.actions';
import { StylesActions } from '../../store/styles.actions';
import { getAuthStatusSelector } from '../../store/styles.reducer';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private auth: AuthService,
              private store: Store,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  onSubmit(): void {
    this.store.dispatch(loginAction(this.form.value));
    this.store.dispatch(StylesActions.setAuthStatus({payload: true}));
    this.store.select(getAuthStatusSelector).pipe(
      takeUntil(this.unsubscribeAll),
      filter(isAuth => !!isAuth)
    ).subscribe(() => this.router.navigate(['/forms']));
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  routeToRegister() {
    this.router.navigate(['/registration'])
  }
}
