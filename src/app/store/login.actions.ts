import {createAction, Action} from "@ngrx/store";

const page = '[Form Page]';

const login = createAction(`${page} Login`);

const loginSuccess = createAction(`${page} Login Success`);

const loginFailure = createAction(`${page} Login Failure`);

const registration = createAction(`${page} Registration `);

const registrationSuccess = createAction(`${page} Registration Success`);

const  registrationFailure = createAction(`${page} Registration Failure`);

export const  FormActions = {
  login,
  loginSuccess,
  loginFailure,
  registration,
  registrationSuccess,
  registrationFailure
};

