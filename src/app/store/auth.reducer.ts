import { createReducer, on } from "@ngrx/store";
import {
  loginFailureAction,
  loginSuccessAction,
  registrationFailureAction,
  registrationSuccessAction
} from "./auth.actions";
import { Response } from "./interfaces";

const initialState: Response = {
  token: null,
  error: null,
  isAuth: false,
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccessAction, (state, prop) => ({
    ...state,
    token: prop,
    error: null,
    isAuth: true
  })),
  on(loginFailureAction, (state, prop)=>({
    ...state,
    token: null,
    error: prop,
    isAuth: false
  })),
  on(registrationSuccessAction, (state, prop)=>({
    ...state,
    token: prop,
    error: null,
    isAuth: true,
  })),
  on(registrationFailureAction, (state, prop)=>({
    ...state,
    token: null,
    error: prop,
    isAuth: true,
  }))
);


