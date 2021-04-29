import {User} from "./interfaces";
import {createReducer, on} from "@ngrx/store";
import {FormActions} from "./login.actions";

const initialState: User[] = [];

export const formReducer = createReducer(
  initialState,
  on(FormActions.login, ()=>initialState),
  on(FormActions.loginSuccess, ()=>initialState),
  on(FormActions.loginFailure, ()=>initialState),
  on(FormActions.registration, ()=>initialState),
  on(FormActions.registrationSuccess, ()=> initialState),
  on(FormActions.registrationFailure, ()=>initialState)
);
