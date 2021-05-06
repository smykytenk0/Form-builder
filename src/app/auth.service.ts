import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { getAuthStatusSelector } from "./store/styles.reducer";
import { StylesActions } from "./store/styles.actions";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn:'root'})
export class AuthService{
  authResult: any;
  constructor(private store: Store, private http: HttpClient) {
    this.store.pipe(select(getAuthStatusSelector)).subscribe(value => this.authResult = value);
  }

  login(){
    this.store.dispatch(StylesActions.setAuthStatus({payload:true}));
    this.authResult = true;
    console.log(this.authResult)
  }

  logout(){
    this.store.dispatch(StylesActions.setAuthStatus({payload: false}));
    console.log(this.authResult)

  }

}
