import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as jwtEncode from 'jwt-encode';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { getAuthStatusSelector } from '../../store/styles.reducer';
import { AuthResponse, User } from '../interfaces/interfaces';
import { StylesActions } from '../../store/styles.actions';

@Injectable({providedIn:'root'})
export class AuthService{
  authResult: boolean;
  constructor(private store: Store, private http: HttpClient) {
    this.store.pipe(select(getAuthStatusSelector)).subscribe(value => this.authResult = value);
  }

  register( registeredUser: User ): Observable<AuthResponse>{
    return this.http.post(`${environment.baseUrl}users`, registeredUser).pipe(
      map((user)=>{
          return this.createToken(user)
        },
        catchError(err=>err))
    )
  }

  logout(): void{
    this.store.dispatch(StylesActions.setAuthStatus({payload: false}));
  }

  showAuthStatus(): boolean{
    this.store.pipe(select(getAuthStatusSelector)).subscribe(value => this.authResult = value);
    return this.authResult;
  }

  logIn(newUser: User): Observable<AuthResponse>{
    console.log(newUser);
    return this.http.get(`${environment.baseUrl}users`).pipe(
      map( (user) =>{
        return this.createToken(user);
      },
        catchError(err=>err))
    )
  }

  createToken(obj){
    return jwtEncode(obj, "your-256-bit-secret")
  }
}
