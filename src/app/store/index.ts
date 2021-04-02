import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromLoginPage from './reducers/login-page.reducer';


export interface AppState {

  [fromLoginPage.loginPageFeatureKey]: fromLoginPage.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromLoginPage.loginPageFeatureKey]: fromLoginPage.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
