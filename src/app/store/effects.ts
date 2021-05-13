import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../auth.service";
import {catchError, map, mergeMap, switchMap} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
  registrationAction,
  registrationFailureAction, registrationSuccessAction
} from "./auth.actions";
import {AuthResponse, User, Error} from "./interfaces";

@Injectable()

export class AuthEffects{
  constructor(private actions$: Actions, private auth: AuthService) {  }
  login$ = createEffect(()=> this.actions$.pipe(
      ofType(loginAction),
    switchMap((prop: User): Observable<any> => this.auth.logIn(prop)
      .pipe(
        map((accessToken:AuthResponse)=>loginSuccessAction(accessToken)),
        catchError((err: Error)=> of(loginFailureAction))
      )
    )
  ));

  register$ = createEffect(()=> this.actions$.pipe(
    ofType(registrationAction),
    switchMap((prop: User)=> this.auth.register(prop)
      .pipe(
        map((accessToken: AuthResponse)=>(registrationSuccessAction(accessToken))),
        catchError((err: Error)=>of(registrationFailureAction))
      ))
  ))
}
