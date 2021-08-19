import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthService } from '../../shared/services/auth.service';
import { User } from '../../shared/interfaces/interfaces';
import { StylesActions } from '../../store/styles.actions';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  formData: User;
  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private auth: AuthService, private store: Store, private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      check: new FormControl(false, [Validators.requiredTrue])
    });
  }

  onSubmit(): void {
    this.formData = this.form.value;
    console.log(this.formData.email);
    this.auth.register(this.formData).pipe(takeUntil(this.unsubscribeAll)).subscribe();
    this.store.dispatch(StylesActions.setAuthStatus({payload: true}));
    this.router.navigate(['/forms']);
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  routeToLogin() {
    this.router.navigate(['/login'])
  }
}
