import { createAction, props } from '@ngrx/store';
import {AuthResponse, User, Error} from "./interfaces";

export const loginAction = createAction(
  '[Login Page] Login',
  props< User >()
);

export const loginSuccessAction = createAction(
  '[Login Page] Login Success',
  props< AuthResponse >()
);

export const loginFailureAction = createAction(
  '[Login Page] Login Failure',
  props< Error >()
);

export const registrationAction = createAction(
  '[Registration Page] Registration',
  props< User >()
);

export const registrationSuccessAction = createAction(
  '[Registration Page] Registration Success',
  props< AuthResponse >()
);

export const registrationFailureAction = createAction(
  '[Registration Page] Registration Failure',
  props< Error >()
);
