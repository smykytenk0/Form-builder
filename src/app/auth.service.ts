import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { getAuthStatusSelector } from "./store/styles.reducer";
import { StylesActions } from "./store/styles.actions";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {User} from "./store/interfaces";

@Injectable({providedIn:'root'})
export class AuthService{
  authResult: any;
  constructor(private store: Store, private http: HttpClient) {
    this.store.pipe(select(getAuthStatusSelector)).subscribe(value => this.authResult = value);
  }

  getAuthData(){
    return this.http.get(`${environment.baseUrl}users`)
  }

  login( data:User ){
    console.log("i'm a server");
    console.log(data);
    this.store.dispatch(StylesActions.setAuthStatus({payload: true}));
    return this.getAuthData();
  }

  register( data ){
    console.log('register');
    console.log(data);
    this.store.dispatch(StylesActions.setAuthStatus({payload:true}));
    return this.http.post(`${environment.baseUrl}users`, data);
  }

  logout(){
    this.store.dispatch(StylesActions.setAuthStatus({payload: false}));
  }

  createToken(){

  }

}
