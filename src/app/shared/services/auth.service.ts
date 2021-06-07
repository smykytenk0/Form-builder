import {Injectable, OnDestroy} from '@angular/core';
import { select, Store } from '@ngrx/store';
import {Observable, Subject, Subscription} from 'rxjs';
import * as jwtEncode from 'jwt-encode';
import { HttpClient } from '@angular/common/http';
import {catchError, map, takeUntil} from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { getAuthStatusSelector } from '../../store/styles.reducer';
import { AuthResponse, User } from '../interfaces/interfaces';
import { StylesActions } from '../../store/styles.actions';

@Injectable({providedIn:'root'})
export class AuthService implements OnDestroy{
  private unsubscribeAll: Subject<any> = new Subject<any>();
  authResult: boolean;
  subscription: Subscription;

  constructor(private store: Store,
              private http: HttpClient) {
     this.subscription = this.store.select(getAuthStatusSelector).pipe(takeUntil(this.unsubscribeAll))
       .subscribe(value => this.authResult = value);
  }

  register( registeredUser: User ): Observable<AuthResponse>{
    return this.http.post(`${environment.baseUrl}users`, registeredUser).pipe(
      map((user)=>{
          return this.createToken(user);
        },
        catchError(err=>err))
    )
  }

  logout(): void{
    this.store.dispatch(StylesActions.setAuthStatus({payload: false}));
  }

  showAuthStatus(): boolean{
    this.subscription = this.store.pipe(select(getAuthStatusSelector)).subscribe(value => this.authResult = value);
    return this.authResult;
  }

  logIn(newUser: User): Observable<AuthResponse>{
    return this.http.get(`${environment.baseUrl}users`).pipe(
      map( (user) =>{
        return this.createToken(user);
      },
        catchError(err=>err))
    )
  }

  createToken(obj): any{
    return jwtEncode(obj, "your-256-bit-secret");
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
