import {User} from "./interfaces";
import { createReducer, on } from "@ngrx/store";
import { AuthActions } from "./auth.actions";

const initialState: User[] = [];

export const formReducer = createReducer(
  initialState,
  on(AuthActions.login, ()=>initialState),
  on(AuthActions.loginSuccess, ()=>initialState),
  on(AuthActions.loginFailure, ()=>initialState),
  on(AuthActions.registration, ()=>initialState),
  on(AuthActions.registrationSuccess, ()=> initialState),
  on(AuthActions.registrationFailure, ()=>initialState)
);
