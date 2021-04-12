import { ActionReducerMap} from '@ngrx/store';
import {ElementStyles} from "./interfaces";
import {ElementsStyleReducer} from "./element-styles.reducer";


export interface State {
  defaultElementStyles: ElementStyles
}

export const reducers: ActionReducerMap<State> = {
  defaultElementStyles: ElementsStyleReducer
};

