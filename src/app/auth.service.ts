import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { getAuthStatusSelector } from "./store/styles.reducer";
import { StylesActions } from "./store/styles.actions";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({providedIn:'root'})
export class AuthService{
  authResult: boolean;
  users = [];
  constructor(private store: Store, private http: HttpClient, private router: Router) {
    this.store.pipe(select(getAuthStatusSelector)).subscribe(value => this.authResult = value);
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

  register( data ){
    this.store.dispatch(StylesActions.setAuthStatus({payload:true}));
    return this.http.post(`${environment.baseUrl}users`, data);
  }

  logout(){
    this.store.dispatch(StylesActions.setAuthStatus({payload: false}));
  }

  createToken(){

  }

}
