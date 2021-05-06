import {createAction} from "@ngrx/store";

const page = '[Form Page]';

const login = createAction(`${page} Login`);

const loginSuccess = createAction(`${page} Login Success`);

const loginFailure = createAction(`${page} Login Failure`);

const registration = createAction(`${page} Registration `);

const registrationSuccess = createAction(`${page} Registration Success`);

const  registrationFailure = createAction(`${page} Registration Failure`);

export const  AuthActions = {
  login,
  loginSuccess,
  loginFailure,
  registration,
  registrationSuccess,
  registrationFailure
};

