import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { getAuthStatusSelector } from "./store/styles.reducer";
import { StylesActions } from "./store/styles.actions";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {catchError, map} from "rxjs/operators";
import * as jwtEncode from "jwt-encode"
import {AuthResponse, User} from "./store/interfaces";
import {Observable} from "rxjs";

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

  logout(){
    this.store.dispatch(StylesActions.setAuthStatus({payload: false}));
  }

  showAuthStatus(){
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
