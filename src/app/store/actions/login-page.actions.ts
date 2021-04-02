import { createAction, props } from '@ngrx/store';
import {User} from "../../modules/resources/auth";

export const login = createAction(
  '[Login Modal Component] Login ',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth Effect] Login User Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth Effect] Login User Failure',
  props<{ error: any }>()
);

