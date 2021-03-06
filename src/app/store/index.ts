import { ActionReducerMap } from '@ngrx/store';

import { ElementStyles } from "../shared/interfaces/interfaces";
import { ElementsStyleReducer } from "./styles.reducer";


export interface State {
  defaultElementStyles: ElementStyles
}

export const reducers: ActionReducerMap<State> = {
  defaultElementStyles: ElementsStyleReducer
};

