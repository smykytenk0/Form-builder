import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { getAuthStatusSelector } from "./store/styles.reducer";
import { StylesActions } from "./store/styles.actions";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {catchError, map} from "rxjs/operators";
import {Router} from "@angular/router";
import * as jwtEncode from "jwt-encode"
import {AuthResponse, User} from "./store/interfaces";
import {Observable} from "rxjs";

@Injectable({providedIn:'root'})
export class AuthService{
  authResult: boolean;
  users = [];
  constructor(private store: Store, private http: HttpClient, private router: Router) {
    this.store.pipe(select(getAuthStatusSelector)).subscribe(value => this.authResult = value);
  }

  getUsers(){
    return this.http.get(`${environment.baseUrl}users`)
  }
  //TODO: `refactor all the login function code between lines`
  //----------------------------------------------
  login( data ){
    return this.http.get(`${environment.baseUrl}users`).pipe(
      map(item=>{
        this.users.push(item);
        for(let user of this.users[0]){
          if(user.email == data.email && user.password == data.password){
            this.authResult = true;
            break
          }
        }
        if(this.authResult){
          this.store.dispatch(StylesActions.setAuthStatus({payload: this.authResult}));
          this.router.navigate(["/forms"])
        }
        else{
          alert("Your password is incorrect! Try again!")
        }
      })
    );
  }
  //----------------------------------------------



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

  createAllUserTokens(){
    return this.http.get(`${environment.baseUrl}users`).pipe(
      map(user =>  {
        console.log(this.createToken(user));
        return this.createToken(user)
      })
    )
  }

  logIn(newUser: User): Observable<AuthResponse>{
    console.log(newUser);
    return this.http.get(`${environment.baseUrl}users`).pipe(
      map( (user) =>{
        console.log(user);
        return this.createToken(user);
      },
        catchError(err=>err))
    )
  }

  createToken(obj){
    return jwtEncode(obj, "your-256-bit-secret")
  }
}
