import { createAction, props } from '@ngrx/store';

const setElementStyle = createAction('[Style] SetElementStyle', props<any>());
const addNewElement = createAction('[Style] addNewElement', props<any>());

export const ElementStylesActions = {
  setElementStyle,
  addNewElement
};
